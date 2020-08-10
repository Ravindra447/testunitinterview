const express = require('express')
const app = express()
const port = 9002;

app.get('/', async(req, res) => {

    res.send(await input(5))
})
app.get('/:num', async(req, res) => {
    console.log(req.params.num)
    res.send(await input(req.params.num))
})

function input(num) {
    let convertedArray = []
    for (var i = 1; i <= num; i++) {
        convertedArray.push(i);
    }
    return convertedArray.join();
}
app.listen(port, () => console.log(`Example app listening on port:` + port));