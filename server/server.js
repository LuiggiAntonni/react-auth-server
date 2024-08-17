const express = require('express')
const path = require('path');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config({ path: path.resolve(__dirname, '../config/.env') });

const app = express()
const port = process.env.PORT;

connectDB();

app.use(express.json())
app.use(express.urlencoded({ extended: true }));



//In case of error
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });


app.listen(port, () => {
    console.log(`Server running on port ${port}: http://localhost:${port}`);
})
