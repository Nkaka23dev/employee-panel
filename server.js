const express = require("express");
const cors = require("cors");
const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();

const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(express.json());

const genAI = new GoogleGenerativeAI(process.env.API_KEY);

app.post("/chat", async (req, res) => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const chat = model.startChat({
      history: req.body.history,
    });
    const msg = req.body.message;
    const result = await chat.sendMessage(msg);
    const response = result.response;
    const text = response.text();
    res.send(text);
  } catch (err) {
    console.log("error");
    res.send(err.message);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
