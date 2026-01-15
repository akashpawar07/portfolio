import nodemailer from "nodemailer";

export const createTransporter = () => {
    // Basic validation to ensure environment variables exist
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
        throw new Error("Email credentials are missing in environment variables.");
    }

    return nodemailer.createTransport({
        host: process.env.EMAIL_HOST || "smtp.gmail.com",
        port: parseInt(process.env.EMAIL_PORT || "465"),
        secure: true,
        pool: true, // Use pooling for better performance
        connectionTimeout: 10000, // 10 seconds timeout
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });
};


// contact HTMLBody
export const sendContactConfirmationEmailHTMLBody = (senderName, senderEmail, senderMessage) => {
    return `
    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 10px; overflow: hidden;">
        <div style="background-color: #2563eb; color: #ffffff; padding: 20px; text-align: center;">
            <h1 style="margin: 0; font-size: 24px;">New Portfolio Message</h1>
        </div>
        <div style="padding: 30px;">
            <p style="font-size: 16px;">Hey Akash❤️</p>
            <p style="font-size: 16px;">You have received a new message from your portfolio contact form.</p>
            
            <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <p style="margin: 0 0 10px 0;"><strong>Name:</strong> ${senderName}</p>
                <p style="margin: 0 0 10px 0;"><strong>Email:</strong> <a href="mailto:${senderEmail}" style="color: #2563eb;">${senderEmail}</a></p>
                <p style="margin: 0;"><strong>Message:</strong></p>
                <p style="white-space: pre-wrap; color: #555; font-style: italic;">"${senderMessage}"</p>
            </div>

            <p style="font-size: 14px; color: #666;">You can reply directly to this email to contact the sender.</p>
        </div>
        <div style="background-color: #f3f4f6; padding: 15px; text-align: center; font-size: 12px; color: #999;">
            © ${new Date().getFullYear()} Your Portfolio | Automated Notification
        </div>
    </div>
    `;
};

// send contact email
export const sendContactEmail = async (senderName, senderEmail, senderMessage) => {
    const transporter = createTransporter();
    console.log(`name${senderName}, email${senderEmail}, message${senderMessage}- in mail transpot`)

    try {
        // Verify connection configuration
        await transporter.verify();
        console.log("Server is ready to take our messages");

        const mailOptions = {
            from: `"${senderName} via Portfolio" <${process.env.EMAIL_USER}>`,
            replyTo: senderEmail,
            to: process.env.MY_PERSONAL_EMAIL,
            subject: `New Message from ${senderName}`,
            html: sendContactConfirmationEmailHTMLBody(senderName, senderEmail, senderMessage)
        };

        const info = await transporter.sendMail(mailOptions);
        console.log("Email sent: %s", info.messageId);
        return info;
    } catch (error) {
        console.error("Email sending failed logic:", error);
        throw error;
    }
};
