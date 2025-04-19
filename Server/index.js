const dotenv = require("dotenv");
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.use(cors({
  origin: ['http://localhost:5173', 'https://manpreetx-production.up.railway.app'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true // if using cookies or auth
}));
app.get("/", (req, res) => {
  res.send("Server is live!");
});

app.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;

  // Setup transporter (Gmail example)
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,         // your Gmail
      pass: process.env.EMAIL_PASS,      // app password (not your actual Gmail password)
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: `New message from ${name}`,
    text: `Email: ${email}\n\nMessage:\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to send message" });
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on ${process.env.PORT}`);
});
