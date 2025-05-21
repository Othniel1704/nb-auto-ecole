import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// IMPORTANT: This is a placeholder for email sending.
// You need to implement the actual email sending logic using a library like Nodemailer
// and your email credentials (e.g., Gmail with an app password).
// Store your sensitive credentials securely in .env.local and do not commit them to Git.

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, courseInterest, message } = body;

    const recipientEmail = process.env.CONTACT_FORM_RECEIVER_EMAIL;
    const senderEmail = process.env.SENDER_EMAIL; // This should be a "From" address you control

    if (!recipientEmail || !senderEmail) {
      console.error('Recipient or sender email not configured in .env');
      return NextResponse.json({ message: 'Server configuration error.' }, { status: 500 });
    }
    

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: senderEmail,
        pass: process.env.EMAIL_APP_PASSWORD,
      },
    });
    
    const mailOptions = {
      from: `"${name}" <${senderEmail}>`,
      replyTo: email,
      to: recipientEmail,
      subject: `Nouveau message de contact de ${name} (NB Auto École)`,
      html: `
        <p><strong>Nom:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Téléphone:</strong> ${phone}</p>` : ''}
        ${courseInterest ? `<p><strong>Formation souhaitée:</strong> ${courseInterest}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };
    
    await transporter.sendMail(mailOptions);
    
    // Simulate email sending for now
    console.log('Simulating email sending...');
    console.log('To:', recipientEmail);
    console.log('From:', senderEmail);
    console.log('Reply-To:', email);
    console.log('Subject:', `Nouveau message de contact de ${name} (NB Auto École)`);
    console.log('Body:', { name, email, phone, courseInterest, message });
    await new Promise(resolve => setTimeout(resolve, 1000));
    // ------------ End of TODO section ------------

    return NextResponse.json({ message: 'Message envoyé avec succès ! Nous vous répondrons bientôt.' }, { status: 200 });
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json({ message: 'Erreur lors de l\'envoi du message.', error: (error as Error).message }, { status: 500 });
  }
}
