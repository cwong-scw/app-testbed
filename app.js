const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/foo/:id', (req, res) => {
    // #1 serious
    eval('console.log("something", ' + req.params.id + ')');
    // #2 super serious
    eval('console.log("something else", ' + req.params.id + ')');
    // #3 super super serious
    eval(`console.log("something else", ${req.params.id})`);
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
