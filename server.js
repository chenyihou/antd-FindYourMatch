let express = require('express')
let app = express()
let user = {
    userName: 'hcy',
    sex: 'male',
    location: 'ottawa',
    wantTodo: [{
        todo: 'pingpong',
        id: 1
    }, {
        todo: 'code',
        id: 2
    }, {
        todo: 'study',
        id: 3
    }],
    contact: '123-45678',
    pass: true
}

// respond with "hello world" when a GET request is made to the homepage
app.post('/login', (req, res) => {
    console.log(req)
    res.end(JSON.stringify({
        user
    }))
})

app.listen(3000)