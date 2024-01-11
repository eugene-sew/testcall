const express = require("express");

const app = express();
const port = 3000;

// Middleware to parse incoming JSON requests
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server works");
});

app.post("/payment/callback", (req, res) => {
  console.log("Payment Gateway Callback:", req.body);

  res.status(200).json({ success: true });
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
