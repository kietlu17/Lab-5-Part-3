require('dotenv').config();
const express = require('express');
const path = require('path');

const morgan = require('morgan');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');


const connectDB = require('./database/database');

const supplierRoutes = require('./routes/supplierRoutes');
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');



const session = require('./config/sesion');
const app = express();
const PORT = process.env.PORT;


// connect DB
connectDB(process.env.MONGODB_URI);



// middleware

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());

app.use(session);


//view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));



// routes
app.use('/users', userRoutes);
app.get('/', (req, res) => res.redirect('/suppliers'));
app.use('/suppliers', supplierRoutes);
app.use('/products', productRoutes);


// 404
app.use((req, res) => res.status(404).send('Not Found'));


app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));