import { useState } from "react";
function Contact({ showContact, setShowContact }) {
  const handleClose = () => setShowContact(false);
 const [Name, setName] = useState("");
 const [Email, setEmail] = useState("");
 const [Message, setMessage] = useState("");

 const submit = async () => {
    const response = await fetch("http://localhost:3000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: Name,
        email: Email,
        message: Message,
      }),
    });
    if (response.ok) {
      alert("Message sent successfully!");
      setName("");
      setEmail("");
      setMessage("");
    } else {
      alert("Failed to send message. Please try again.");
    }
 }

  return (
    <div
      className={`absolute top-0 left-0 z-20 w-screen h-screen bg ${
        showContact ? "flex" : "hidden"
      } justify-center items-center`}
    >
      <div className="rounded-2xl border border-[#585858] bg-black text-[#E1E1E1] p-7 flex flex-col gap-4 w-1/3">
        <div className="w-full flex justify-between items-center">
          <h1 className="text-white font-bold text-2xl">Contact Me</h1>
          <div
            className="flex justify-center items-center text-2xl cursor-pointer"
            onClick={handleClose}
          >
            <ion-icon name="close-outline"></ion-icon>
          </div>
        </div>
        <input
          type="text"
          placeholder="Name"
          className="rounded-xl border border-[#585858] p-2 px-4"
          onChange={(e) => setName(e.target.value)}
          value={Name}
        />
        <input
          type="email"
          placeholder="Email"
          className="rounded-xl border border-[#585858] p-2 px-4"
          onChange={(e) => setEmail(e.target.value)}
          value={Email}
        />
        <textarea
          rows="6"
          placeholder="Message"
          className="rounded-xl border border-[#585858] p-2 px-4"
          onChange={(e) => setMessage(e.target.value)}
          value={Message}
        />
        <button onClick={submit} className="bg-white text-black p-2 rounded-xl cursor-pointer">
          Send Message
        </button>
      </div>
    </div>
  );
}

export default Contact;
