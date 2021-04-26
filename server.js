const express = require('express');
const mongoose = require('mongoose');
const app = express();
const ejs = require('ejs');
app.set('view engine', 'ejs');

const mytablesSchema = {
    q1: String,
    q2: String,
    q3: String,
    q4: String,
    q5: String,
    q6: String,
    q7: String,
    date:Date
}

const Mytable = mongoose.model('Mytable', mytablesSchema);

app.get('/', (req, res) => {
    Mytable.find({}, function(err, mytables) {
        res.render('index', {
            mytablesList: mytables
        })
    })
})


const DATABASE_ACCESS = 'mongodb+srv://pathikdas45:Pathikdas!3@cluster0.vncrn.mongodb.net/mytable?retryWrites=true&w=majority';
const PORT = process.env.PORT|| 4000;

mongoose.connect(DATABASE_ACCESS, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: ${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));