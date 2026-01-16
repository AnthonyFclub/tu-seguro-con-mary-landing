import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { createClient } from '@supabase/supabase-js';

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

// Initialize Supabase with SERVICE ROLE key (bypasses RLS)
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const supabase = createClient(supabaseUrl, supabaseServiceKey);

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, phone, email, product, question } = body;

        // Validate required fields
        if (!name || !phone || !product) {
            return NextResponse.json(
                { error: 'Nombre, teléfono y producto son requeridos' },
                { status: 400 }
            );
        }

        console.log('📝 Form data received:', { name, phone, email, product, question });

        // 1. Save to Supabase
        console.log('💾 Attempting to save to Supabase...');
        const { data: leadData, error: supabaseError } = await supabase
            .from('leads')
            .insert([
                {
                    name,
                    phone,
                    email: email || null,
                    product,
                    question: question || null,
                }
            ])
            .select()
            .single();

        if (supabaseError) {
            console.error('❌ Supabase error:', supabaseError);
            console.error('Error details:', JSON.stringify(supabaseError, null, 2));
            return NextResponse.json(
                { error: 'Error al guardar la información', details: supabaseError.message },
                { status: 500 }
            );
        }

        console.log('✅ Lead saved successfully:', leadData);

        // 2. Prepare email content
        const productLabels: Record<string, string> = {
            medicare: 'Medicare',
            health: 'Seguro de Salud / ACA',
            life: 'Seguro de Vida',
            annuities: 'Anualidades',
            retirement: 'Planificación de Retiro',
            funeral: 'Gastos Finales / Planes Funerarios',
            disability: 'Seguro de Discapacidad',
            other: 'Otro'
        };

        const productLabel = productLabels[product] || product;
        const formattedDate = new Date().toLocaleString('es-MX', {
            dateStyle: 'long',
            timeStyle: 'short',
            timeZone: 'America/Los_Angeles'
        });

        const emailHtml = `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h2 style="color: #1e40af; border-bottom: 3px solid #d97706; padding-bottom: 10px;">
                    🚀 Nueva Consulta desde Tu Seguro con Mary
                </h2>
                
                <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
                    <p style="margin: 10px 0;"><strong>👤 Nombre:</strong> ${name}</p>
                    <p style="margin: 10px 0;"><strong>📞 Teléfono:</strong> ${phone}</p>
                    <p style="margin: 10px 0;"><strong>📧 Email:</strong> ${email || 'No proporcionado'}</p>
                    <p style="margin: 10px 0;"><strong>📋 Producto de Interés:</strong> ${productLabel}</p>
                    <p style="margin: 10px 0;"><strong>❓ Pregunta:</strong> ${question || 'Sin preguntas específicas'}</p>
                </div>
                
                <p style="color: #6b7280; font-size: 14px; border-top: 1px solid #d1d5db; padding-top: 10px;">
                    Recibido el: ${formattedDate}
                </p>
            </div>
        `;

        // 3. Send emails to both Mary and Marco
        console.log('📧 Attempting to send emails...');
        const fromEmail = process.env.RESEND_FROM_EMAIL || 'Tu Seguro con Mary <onboarding@resend.dev>';

        try {
            const emailResult = await resend.emails.send({
                from: fromEmail,
                to: ['anthony@frutero.club'],
                subject: `🚀 Nueva Consulta - ${name}`,
                html: emailHtml,
            });

            if (emailResult.error) {
                console.error('❌ Resend API returned an error:', emailResult.error);
                // If it's the 403 sandbox error, log a helpful message
                if (emailResult.error.name === 'validation_error' && emailResult.error.message.includes('own email address')) {
                    console.warn('⚠️ SANDBOX LIMIT: To send to external emails, you MUST verify your domain at resend.com/domains');
                }
            } else {
                console.log('✅ Email sent successfully:', emailResult.data);
            }
        } catch (emailError) {
            console.error('❌ Unexpected email error:', emailError);
        }

        return NextResponse.json({
            success: true,
            message: 'Información enviada correctamente',
            leadId: leadData.id
        });

    } catch (error) {
        console.error('Unexpected error:', error);
        return NextResponse.json(
            { error: 'Error inesperado. Por favor intenta de nuevo.' },
            { status: 500 }
        );
    }
}
