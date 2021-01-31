require('dotenv').config();
const express = require('express');
const secure = require('ssl-express-www');
const mongoose = require('mongoose');
const cors = require('cors');

const PORT = process.env.PORT || 8080;

const app = express();

app.use(secure);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use(cors());

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/htxtacosDB', {
	useNewUrlParser: true,
	useFindAndModify: false,
	useUnifiedTopology: true,
});

app.use(require('./routes/api.js'));

if (process.env.NODE_ENV === 'production') {
	console.log(process.env.REACT_APP_GOOGLE_API_KEY);
	app.use(express.static('client/build'));
}

app.listen(PORT, () => {
	console.log(`App running on port ${PORT}!`);
});
