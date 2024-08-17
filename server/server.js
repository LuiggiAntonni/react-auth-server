const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const bodyParser = require('body-parser');
const connectDB = require("./config/db");
const authRoutes = require('./routes/auth');
const authMiddleWare = require('./middleware/authMiddleware')

dotenv.config({ path: path.resolve(__dirname, "../config/.env") });

const app = express();
const port = process.env.PORT;

connectDB();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Routes

app.use('/api/auth', authRoutes);


//In case of error
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}: http://localhost:${port}`);
});
