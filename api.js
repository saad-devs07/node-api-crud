const user = require('./users');
const dboperation = require('./dboperations');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const router = express.Router();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', router);

var port = process.env.PORT || 8090;
app.listen(port);
console.log("Server is listening at PORT: " + port);

router.use((request, response, next) => {
    console.log('MIDDLEWARE');
    next();
})

router.route('/users').get((request, response) => {
    dboperation.getData().then(result => {
        response.json(result);
    })
})

router.route('/users/:Id').get((request, response) => {
    dboperation.getDatabyId(request.params.Id).then(result => {
        response.json(result);
    })
})

router.route('/users/addData').post((request, response) => {
    let data = {...request.body};
    dboperation.insertData(data).then(result => {
        response.status(200).json("Data Inserted Successfully" + result);
    })
})
