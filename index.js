const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const bodyparser = require("body-parser");

const itemsRoute = require('./routes/item.route');
const usersRoute = require('./routes/user.route');
const ordersRoute = require('./routes/order.route');

require('dotenv').config();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyparser.json());

app.use('/v1', itemsRoute, usersRoute, ordersRoute);

app.listen(port, () => {
    if(process.env.ENV == 'DEV') {
        console.log('This is development server');
    } else if(process.env.ENV == 'PROD') {
        console.log('This is production server');
    } else {
        console.log(`ENV couldn't be read`);
    }
    console.log(`Bingleshop app is running on port ${port}`)
})

