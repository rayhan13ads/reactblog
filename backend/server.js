const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');

require('dotenv').config()

// routes
const blogRoute = require('./routes/blogRoute');

//app
const app = express();

//db
mongoose.connect(
process.env.DATABASE
, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify:false
}).then(()=> console.log("Database connected"));


//middlewars
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());

//cors
if (process.env.NODE_ENV === 'development') {
    app.use(cors({origin:`${process.env.CLIENT_URL}`}));
}

//route middlewars
app.use('/api',blogRoute);


// port
 const port = process.env.PORT || 8000

 app.listen(port, () => {
     console.log(`Server started on ${port}`);
 });