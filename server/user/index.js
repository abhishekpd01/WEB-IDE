const express = require('express')

const app = express()

app.get('/', (req, res) => res.json({ msg : 'This message is from from my virtual server.' }))

app.listen(8000, () => console.log('Server is up and running on port 8000'))