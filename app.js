const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/foo/:id', (req, res) => {
    // #1
    eval('console.log("something", ' + req.params.id + ')');
    // #2
    eval('console.log("something else", ' + req.params.id + ')');
    // #3
    eval(`console.log("something else", ${req.params.id})`);
    // #4
    eval(`console.log("and another one ${req.params.id}")`);
    // #5
    eval(`console.log("yet another one ${req.params.id}")`);
    // #6
    eval(`console.log("blah blahhhzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz ${req.params.id}")`);
    res.send(`Hello ${req.params.id} and ${req.params.name}`);
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
