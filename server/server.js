const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const postsRouter = require('./routes/routes');

app.use(cors())
dotenv.config()
app.use(express.json())

mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO)
    .then(() => console.log('Connected to Db'))
    .catch(console.error)


app.use('/api', postsRouter);

app.listen(4000, () => console.log('server work on 4000'))