/* eslint-disable no-undef */
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
console.log("EMAIL_USER:", process.env.EMAIL_USER);
console.log("EMAIL_PASS:", process.env.EMAIL_PASS ? "Loaded" : "Not Loaded");

// Nodemailer Transporter
const transporter = nodemailer.createTransport({
	host: "smtp.gmail.com",
	port: 465, // Instead of 587
	secure: true, // Use `true` for port 465
	auth: {
		user: process.env.EMAIL_USER,
		pass: process.env.EMAIL_PASS,
	},
});

// API to Send Email
app.post("/send-email", async (req, res) => {
	const { name, email, phone, description } = req.body;
	console.log(req.body);
	if (!name || !email) {
		return res.status(400).json({ message: "Name and email are required" });
	}

	const mailOptions = {
		from: process.env.EMAIL_USER,
		to: process.env.EMAIL_USER_TO,
		subject: "New Contact Form Submission",
		text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${description}`,
	};

	try {
		await transporter.sendMail(mailOptions);
		res.status(200).json({ message: "Email sent successfully!" });
	} catch (error) {
		console.error("Error sending email:", error);
		res.status(500).json({ message: "Error sending email", error });
	}
});

app.listen(PORT, () => {
	console.log(`✅ Server running on http://localhost:${PORT}`);
});
