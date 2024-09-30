import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "Please fill in all required fields" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST, // Replace with your SMTP server host
      port: parseInt(process.env.EMAIL_PORT || "587"), // Replace with your SMTP server port
      // secure: process.env.EMAIL_SECURE === 'true', // Adjust based on your SMTP server configuration
      auth: {
        user: process.env.EMAIL_USER, // Replace with your email address
        pass: process.env.EMAIL_PASSWORD, // Replace with your email password
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "nordin0aznag@hotmail.fr", // Replace with your recipient email
      subject: `Contact Form Submission from ${name}`,
      text: `
          Name: ${name}
          Email: ${email}
          Message: ${message}
        `,
    };

    await transporter.sendMail(mailOptions);
    console.log(process.env.EMAIL_USER)

    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}
