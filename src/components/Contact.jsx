/* eslint-disable no-unused-vars */
import { useState } from "react";
import { HiOutlineMail } from "react-icons/hi";
import Heads from "./Heads";

const Contact = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		description: "",
	});

	const [errors, setErrors] = useState({});
	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState("");

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
		setErrors({ ...errors, [e.target.name]: "" });
	};

	const validateForm = () => {
		let newErrors = {};

		// Trim values to prevent leading/trailing spaces
		const trimmedName = formData.name.trim();
		const trimmedEmail = formData.email.trim();

		if (!trimmedName) newErrors.name = "Name is required";

		// Improved Email Validation
		const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
		const disposableDomains = ["yopmail.com", "tempmail.com", "mailinator.com", "guerrillamail.com"];

		if (!trimmedEmail) {
			newErrors.email = "Email is required";
		} else if (!emailRegex.test(trimmedEmail)) {
			newErrors.email = "Invalid email format";
		} else {
			const emailDomain = trimmedEmail.split("@")[1];
			if (disposableDomains.includes(emailDomain)) {
				newErrors.email = "Disposable email addresses are not allowed";
			}
		}

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setSuccess("");

		if (!validateForm()) return;

		setLoading(true);

		try {
			const formData = new FormData(e.target);

			const response = await fetch("https://formsubmit.co/ajax/aakashportfolio03@gmail.com", {
				method: "POST",
				body: formData,
				headers: {
					Accept: "application/json", // Prevents redirect response
				},
				redirect: "manual", // Prevents automatic redirection
			});

			if (response.ok) {
				setSuccess("Your message has been sent successfully!");
				setFormData({ name: "", email: "", phone: "", description: "" });
			} else {
				const result = await response.json();
				throw new Error(result.message || "Failed to send message");
			}
		} catch (error) {
			alert("Error sending email. Please try again!");
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="px-2">
			<Heads logo={<HiOutlineMail size={30} />} title={"CONTACT"} />
			<div className="max-w-lg mx-auto p-6 bg-[#1a1a1a] rounded-2xl shadow-xl my-6" id="contact-form">
				<form onSubmit={handleSubmit} className="space-y-6 mt-4">
					<input type="hidden" name="_captcha" value="false" />
					<input type="hidden" name="_next" value="https://yourwebsite.com/thank-you" />

					<div>
						<label className="block text-gray-300 font-medium mb-1">Name*</label>
						<input
							type="text"
							name="name"
							value={formData.name}
							onChange={handleChange}
							className="w-full p-3 border rounded-lg bg-gray-800 text-white"
							placeholder="Enter your name"
							required
						/>
						{errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
					</div>

					<div>
						<label className="block text-gray-300 font-medium mb-1">Email*</label>
						<input
							type="email"
							name="email"
							value={formData.email}
							onChange={handleChange}
							className="w-full p-3 border rounded-lg bg-gray-800 text-white"
							placeholder="Enter your email"
							required
						/>
						{errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
					</div>

					<div>
						<label className="block text-gray-300 font-medium mb-1">Phone</label>
						<input
							type="tel"
							name="phone"
							value={formData.phone}
							onChange={handleChange}
							className="w-full p-3 border rounded-lg bg-gray-800 text-white"
							placeholder="Enter your phone number"
						/>
					</div>

					<div>
						<label className="block text-gray-300 font-medium mb-1">Description</label>
						<textarea
							name="description"
							value={formData.description}
							onChange={handleChange}
							className="w-full p-3 border rounded-lg bg-gray-800 text-white h-28 resize-none"
							placeholder="Enter your message..."
							required
						></textarea>
					</div>

					<button
						type="submit"
						className="w-full bg-[#47e5c3] text-black font-semibold py-3 rounded-lg hover:bg-[#3ac3a5] transition duration-300 cursor-pointer"
						disabled={loading}
					>
						{loading ? "Sending..." : "Submit"}
					</button>

					{success && <p className="text-green-500 text-sm mt-2 text-center">{success}</p>}
				</form>
			</div>
		</div>
	);
};

export default Contact;
