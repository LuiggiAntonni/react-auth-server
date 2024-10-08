const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const authRoutes = require("./routes/auth");
const cors = require("cors");
const meRoutes = require("./routes/me");

dotenv.config({ path: path.resolve(__dirname, "../config/.env") });

const app = express();
const port = process.env.PORT;

connectDB();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const corsOptions = {
  origin: process.env.FRONT_PORT, //frontend url
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true, //cookies
};

app.use(cors(corsOptions));

app.get('/', (req, res, next) => {
  res.send(`Hello, You Are Inside The Backend Server, Check And Access The Backend Port`)
})

//Routes
app.use("/api/auth", authRoutes);
app.use("/api/me", meRoutes);

//In case of error
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}: http://localhost:${port}`);
});
