const express = require('express');
const mongoose = require('mongoose');
const data = require('./data.js');
const dbmodel = require('./dbModel.js');
const Videos = require('./dbModel.js');

const app = express();
app.get('/', (req, res) => res.send('apirunning'));
const PORT = process.env.PORT || 9000;
app.use(express.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    next();

});
const connection_url = 'mongodb+srv://admin:admin@cluster0.pmcbw.mongodb.net/cliktik?retryWrites=true&w=majority';

mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,

});
// api endppoints : 

app.get('/', (req, res) => res.status(200).send('hello_world'));
app.get('/md/posts', (req, res) => res.status(200).send(data));
app.get('/md1/posts', (req, res) => {
    Videos.find((err, data) => {
        if (err) {
            res.status(500).send(err);
        }
        else {
            res.status(200).send(data);
        }
        return res;
    });
});
app.post('/md1/posts', (req, res) => {

    const dbVideos = req.body;
    Videos.create(dbVideos, (err, data) => {
        if (err) {
            res.status(500).send(err);
        }
        else {
            res.status(201).send(data);
        }
    });

});
// listen 


app.listen(PORT, () => console.log(`Server started on 

${PORT}`));


