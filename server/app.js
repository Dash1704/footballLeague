// import modules
const express = require('express');
const app = express();
const cors = require('cors');

//middleware
app.use(cors());
app.use(express.json());

//listener
app.listen(5000, () => {
  console.log("server has started on port 5000")
});










// const mongoose = require('mongoose');
//const morgan = require('morgan');
// const dotenv = require('dotenv').config();
// const { errorHandler } = require('./middlewares/errorMiddleware')

// // app
// const app = express();



// //db
// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true, 
// })
// .then(() => console.log('MongoDB CONNECTED'))
// .catch(err => console.log('MongoDB CONNECTION ERROR', err));

// //models
// //require('./models/test')


// // middleware
// app.use(express.json())
// app.use(express.urlencoded({ extended: false }))
// app.use(errorHandler)
// //app.use(morgan('dev'));
// //app.use(cors({ origin: true, credentials: true}));

// // routes
// app.use('/test', require('./routes/test'))
// app.use('/leagues', require('./routes/leagues'))

// //port
// const port = process.env.PORT || 8080;

// //listener
// const server = app.listen(port, () => console.log(`server is running on port ${port}`))