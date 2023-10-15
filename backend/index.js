require("dotenv").config();
const OpenAI =require("openai");
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

app.post('/api/ask',async (req, res) => {
  const { question } = req.body;

  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    dangerouslyAllowBrowser: true 
  });
  const result=await openai.chat.completions
    .create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: question }],
      max_tokens: 2048,
      temperature: 1,
    });

    res.json({ message: result.choices[0].message.content });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
