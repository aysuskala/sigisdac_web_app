import { mailOptions, transporter } from "../../utils/nodemailer";

const handler = async (req, res) => {
    if(req.method === "POST") {
        const data = req.body;
        if(!data.name || !data.email || !data.subject || !data.message) {
            return res.status(400).json({ message: "Bad request" });
        }
        console.log(data)
        try {        
            await transporter.sendMail({
                ...mailOptions,
                subject: data.subject,
                html:`<h2>Message from SIGISDAC Website Contact page.</h2>
                <p><strong>Name: </strong> ${data.name}</p>
                <p><strong>Reply to this email: </strong> ${data.email}</p>
                <p><strong>Message: </strong><br> <h3>${data.message}</h3></p>`,
            });
            return res.status(200).json({ success: true });

        } catch (error) {
            console.log(error);
            return res.status(400).json({ message: error.message });
        }
    }

    res.status(400).json({ message: 'Bad Request' });
};

export default handler;