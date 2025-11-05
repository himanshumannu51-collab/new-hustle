import React, { useState } from "react";

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now we just simulate submission
    console.log({ email, message });
    setSuccess(true);
    setEmail(""); setMessage("");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4 p-4 border rounded shadow">
      {success && <p className="text-green-500">Message sent successfully!</p>}
      <input type="email" placeholder="Your Email" value={email} onChange={e => setEmail(e.target.value)} className="w-full p-2 border rounded" required />
      <textarea placeholder="Your Message" value={message} onChange={e => setMessage(e.target.value)} className="w-full p-2 border rounded" required />
      <button type="submit" className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">Send</button>
    </form>
  );
};

export default ContactForm;

