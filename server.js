let express = require('express')
let app = express()
let user = {
    userName: 'hcy',
    sex: 'male',
    location: 'ottawa',
    wantTodo: {

    }
}

// respond with "hello world" when a GET request is made to the homepage
app.post('/login', (req, res) => {
    res.end({
        pass: true,
        user
    })
})

app.listen(3000)