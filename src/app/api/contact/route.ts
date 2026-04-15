import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, sector, message } = data;

    // Validate data
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Required fields are missing' },
        { status: 400 }
      );
    }

    // Configure Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_PORT === '465', // true for 465, false for 587
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
      tls: {
        // This is often required for shared hosting where the SSL certificate 
        // host (e.g., *.web-hosting.com) doesn't exactly match the mail host.
        rejectUnauthorized: false
      }
    });

    // Email options
    const mailOptions = {
      from: `"${name}" <${process.env.SMTP_USER}>`, // Recommended: Always send from your certified user
      replyTo: email, // Allow reply directly to the user
      to: process.env.SMTP_USER, // Sending to the office
      subject: `New Inquiry: ${sector} - from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nSector: ${sector}\nMessage: ${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee;">
          <h2 style="color: #0c1c3c; border-bottom: 2px solid #00adef; padding-bottom: 10px;">New Contact Inquiry</h2>
          <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
          <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
          <p style="margin: 10px 0;"><strong>Sector of Inquiry:</strong> ${sector}</p>
          <div style="margin-top: 20px; padding: 15px; background-color: #f9f9f9; border-left: 4px solid #00adef;">
            <p style="margin: 0;"><strong>Message:</strong></p>
            <p style="margin-top: 10px; line-height: 1.6;">${message}</p>
          </div>
          <p style="margin-top: 30px; font-size: 12px; color: #888;">This inquiry was sent from the Davric Group contact form.</p>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Return success response
    return NextResponse.json(
      { message: 'Your inquiry has been sent successfully. Our team will reach out to you shortly.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json(
      { error: 'Failed to process your request. Please try again later.' },
      { status: 500 }
    );
  }
}
