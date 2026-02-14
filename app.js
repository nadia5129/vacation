import express from 'express';

//create app
const app = express();

//set port
const PORT = 3001;

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));

//create temp array to store requests
const requests = [];

//home route
app.get('/', (req,res) => {
    res.sendFile(`${import.meta.dirname}/views/home.html`);
});

//confirmation route
app.get('/confirmation', (req,res) => {
    res.sendFile(`${import.meta.dirname}/views/confirmation.html`);
});

app.post('/submit-request', (req,res) => {
    const request ={
        destination: req.body.destination,
        travels: req.body.travels,
    };

    requests.push(request);

    res.redirect('/confirmation');
});

//start server
app.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}`);
});