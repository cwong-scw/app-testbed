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
    eval('aaaaaa' + req.params.id)
    res.send("hii user " + req.params.id);
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
