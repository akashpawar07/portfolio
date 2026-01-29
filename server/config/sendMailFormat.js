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

// email HTML body
export const sendContactConfirmationEmailHTMLBody = (senderName, senderEmail, senderMessage, logoPath) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>New Portfolio Message</title>
        <style>
            /* ============================================
               BASE STYLES
               ============================================ */
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }

            body {
                margin: 0 !important;
                padding: 0 !important;
                width: 100% !important;
                background-color: #f5f5f5;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
            }
            
            table {
                border-collapse: collapse;
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
            }

            img {
                border: 0;
                display: block;
                outline: none;
                text-decoration: none;
            }

            /* ============================================
               WRAPPER & CONTAINER STYLES
               ============================================ */
            .email-wrapper {
                width: 100%;
                background-color: #f5f5f5;
                padding: 24px 16px;
            }

            .email-container {
                max-width: 600px;
                width: 100%;
                background-color: #ffffff;
                border-radius: 8px;
                box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
                overflow: hidden;
                margin: 0 auto;
            }

            /* ============================================
               HEADER SECTION STYLES
               ============================================ */
            .header-section {
                background-color: #1e3a8a;
                padding: 48px 32px;
                text-align: center;
            }

            .logo-container {
                margin-bottom: 24px;
            }

            .logo {
                width: 64px;
                height: 64px;
                margin: 0 auto;
            }

            .header-title {
                margin: 0;
                font-size: 26px;
                font-weight: 600;
                color: #ffffff;
                letter-spacing: -0.3px;
            }

            .header-subtitle {
                margin: 10px 0 0 0;
                font-size: 15px;
                color: rgba(255, 255, 255, 0.8);
                font-weight: 400;
            }

            /* ============================================
               CONTENT SECTION STYLES
               ============================================ */
            .content-section {
                padding: 48px 32px;
            }

            .greeting-section {
                padding-bottom: 32px;
            }

            .greeting-title {
                margin: 0 0 12px 0;
                font-size: 18px;
                font-weight: 600;
                color: #1a1a1a;
            }

            .greeting-text {
                margin: 0;
                font-size: 16px;
                line-height: 1.6;
                color: #4a5568;
            }

            /* ============================================
               CONTACT DETAILS BOX STYLES
               ============================================ */
            .details-box {
                background-color: #fafafa;
                border: 1px solid #e5e7eb;
                border-radius: 6px;
                padding: 28px;
            }

            .detail-item {
                padding-bottom: 20px;
            }

            .detail-label {
                margin: 0 0 6px 0;
                font-size: 13px;
                font-weight: 600;
                color: #6b7280;
                text-transform: uppercase;
                letter-spacing: 0.5px;
            }

            .detail-value {
                margin: 0;
                font-size: 17px;
                font-weight: 500;
                color: #1f2937;
            }

            .detail-link {
                font-size: 17px;
                color: #1e40af;
                text-decoration: none;
                font-weight: 500;
                word-break: break-all;
            }

            /* ============================================
               DIVIDER STYLES
               ============================================ */
            .divider-section {
                padding-bottom: 24px;
            }

            .divider {
                height: 1px;
                background-color: #d1d5db;
            }

            /* ============================================
               MESSAGE BOX STYLES
               ============================================ */
            .message-section {
                padding-bottom: 0;
            }

            .message-box {
                background-color: #ffffff;
                padding: 20px;
                border-radius: 6px;
                border: 1px solid #e5e7eb;
            }

            .message-text {
                margin: 0;
                font-size: 16px;
                line-height: 1.7;
                color: #374151;
                white-space: pre-wrap;
            }

            /* ============================================
               BUTTON SECTION STYLES
               ============================================ */
            .button-section {
                padding-top: 36px;
                text-align: center;
            }

            .button-wrapper {
                background-color: #1e3a8a;
                border-radius: 6px;
                display: inline-block;
            }

            .button-link {
                display: inline-block;
                color: #ffffff;
                text-decoration: none;
                padding: 14px 36px;
                font-size: 16px;
                font-weight: 500;
            }

            /* ============================================
               FOOTER NOTE STYLES
               ============================================ */
            .footer-note-section {
                padding-top: 28px;
            }

            .footer-note {
                margin: 0;
                font-size: 14px;
                line-height: 1.6;
                color: #6b7280;
                text-align: center;
            }

            /* ============================================
               FOOTER SECTION STYLES
               ============================================ */
            .footer-section {
                background-color: #f9fafb;
                padding: 32px;
                border-top: 1px solid #e5e7eb;
            }

            .footer-copyright {
                margin: 0 0 6px 0;
                font-size: 14px;
                color: #6b7280;
                line-height: 1.5;
                text-align: center;
            }

            .footer-disclaimer {
                margin: 0;
                font-size: 13px;
                color: #9ca3af;
                text-align: center;
            }

            /* ============================================
               MOBILE RESPONSIVE STYLES
               Media Query for screens 600px and below
               ============================================ */
            @media only screen and (max-width: 600px) {
                /* Body and Wrapper Adjustments */
                body {
                    width: 100% !important;
                    min-width: 100% !important;
                }
                
                .email-wrapper {
                    padding: 0 !important;
                }
                
                .email-container {
                    width: 100% !important;
                    max-width: 100% !important;
                    border-radius: 0 !important;
                    box-shadow: none !important;
                }
                
                /* Header Section Mobile */
                .header-section {
                    padding: 32px 16px !important;
                }

                .header-title {
                    font-size: 22px !important;
                }

                .header-subtitle {
                    font-size: 14px !important;
                }
                
                /* Content Section Mobile */
                .content-section {
                    padding: 24px 16px !important;
                }

                .greeting-section {
                    padding-bottom: 20px !important;
                }

                .greeting-title {
                    font-size: 16px !important;
                }

                .greeting-text {
                    font-size: 15px !important;
                }
                
                /* Details Box Mobile */
                .details-box {
                    padding: 16px !important;
                }

                .detail-item {
                    padding-bottom: 16px !important;
                }

                .detail-label {
                    font-size: 12px !important;
                }

                .detail-value {
                    font-size: 15px !important;
                }

                .detail-link {
                    font-size: 15px !important;
                }

                /* Message Box Mobile */
                .message-box {
                    padding: 14px !important;
                }

                .message-text {
                    font-size: 15px !important;
                }
                
                /* Button Mobile */
                .button-section {
                    padding-top: 24px !important;
                }

                .button-link {
                    padding: 12px 24px !important;
                    font-size: 15px !important;
                }

                /* Footer Note Mobile */
                .footer-note-section {
                    padding-top: 20px !important;
                }

                .footer-note {
                    font-size: 13px !important;
                }
                
                /* Footer Section Mobile */
                .footer-section {
                    padding: 20px 16px !important;
                }

                .footer-copyright {
                    font-size: 13px !important;
                }

                .footer-disclaimer {
                    font-size: 12px !important;
                }
            }
        </style>
    </head>
    <body>
        
        <!-- ============================================
             EMAIL WRAPPER - Outer container with background
             ============================================ -->
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
            <tr>
                <td class="email-wrapper">
                    
                    <!-- ============================================
                         MAIN EMAIL CONTAINER - White card container
                         ============================================ -->
                    <table role="presentation" class="email-container" width="600" cellspacing="0" cellpadding="0" border="0">
                        
                        <!-- ============================================
                             HEADER SECTION - Logo and title
                             ============================================ -->
                        <tr>
                            <td class="header-section">
                                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                                    <tr>
                                        <td>
                                            <!-- Logo -->
                                            <div class="logo-container">
                                                <img src="${logoPath}" alt="Portfolio Logo" class="logo" />
                                            </div>
                                            
                                            <!-- Title -->
                                            <h1 class="header-title">New Contact Message</h1>
                                            
                                            <!-- Subtitle -->
                                            <p class="header-subtitle">Portfolio Contact Form</p>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        
                        <!-- ============================================
                             CONTENT SECTION - Main email content
                             ============================================ -->
                        <tr>
                            <td class="content-section">
                                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                                    
                                    <!-- Greeting -->
                                    <tr>
                                        <td class="greeting-section">
                                            <p class="greeting-title">Hello Akash,</p>
                                            <p class="greeting-text">
                                                You have received a new message from your portfolio contact form.
                                            </p>
                                        </td>
                                    </tr>
                                    
                                    <!-- ============================================
                                         CONTACT DETAILS BOX - Sender information
                                         ============================================ -->
                                    <tr>
                                        <td>
                                            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                                                <tr>
                                                    <td class="details-box">
                                                        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                                                            
                                                            <!-- Sender Name -->
                                                            <tr>
                                                                <td class="detail-item">
                                                                    <p class="detail-label">Sender Name</p>
                                                                    <p class="detail-value">${senderName}</p>
                                                                </td>
                                                            </tr>
                                                            
                                                            <!-- Email Address -->
                                                            <tr>
                                                                <td class="detail-item">
                                                                    <p class="detail-label">Email Address</p>
                                                                    <p class="detail-value">
                                                                        <a href="mailto:${senderEmail}" class="detail-link">
                                                                            ${senderEmail}
                                                                        </a>
                                                                    </p>
                                                                </td>
                                                            </tr>
                                                            
                                                            <!-- Divider -->
                                                            <tr>
                                                                <td class="divider-section">
                                                                    <div class="divider"></div>
                                                                </td>
                                                            </tr>
                                                            
                                                            <!-- Message -->
                                                            <tr>
                                                                <td class="message-section">
                                                                    <p class="detail-label">Message</p>
                                                                    <div class="message-box">
                                                                        <p class="message-text">${senderMessage}</p>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                    
                                    <!-- ============================================
                                         ACTION BUTTON - Reply button
                                         ============================================ -->
                                    <tr>
                                        <td class="button-section">
                                            <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                                                <tr>
                                                    <td class="button-wrapper">
                                                        <a href="mailto:${senderEmail}" class="button-link">
                                                            Reply to Message
                                                        </a>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                    
                                    <!-- ============================================
                                         FOOTER NOTE - Help text
                                         ============================================ -->
                                    <tr>
                                        <td class="footer-note-section">
                                            <p class="footer-note">
                                                You can reply directly by clicking the button above or by responding to this email.
                                            </p>
                                        </td>
                                    </tr>
                                    
                                </table>
                            </td>
                        </tr>
                        
                        <!-- ============================================
                             FOOTER SECTION - Copyright and disclaimer
                             ============================================ -->
                        <tr>
                            <td class="footer-section">
                                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                                    <tr>
                                        <td>
                                            <p class="footer-copyright">
                                                © ${new Date().getFullYear()} Akash's Portfolio
                                            </p>
                                            <p class="footer-disclaimer">
                                                This is an automated notification from your portfolio contact form
                                            </p>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        
                    </table>
                    <!-- End Main Email Container -->
                    
                </td>
            </tr>
        </table>
        
    </body>
    </html>
    `;
}; 

// send contact email
export const sendContactEmail = async (senderName, senderEmail, senderMessage) => {
    const transporter = createTransporter();
    console.log(`name: ${senderName}, email: ${senderEmail}, message: ${senderMessage}- in mail transpot`)

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
