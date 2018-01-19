const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

app.get('/', (req, res) => {
  let user = {
    id: 123
  }
  res.json(user)
  res.end()
})

app.listen(3001, () => console.log('Example app listening on port 3000!'))
