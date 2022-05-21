const express = require('express')
const cors= require('cors')

const app = express()

app.use(express.json())

const {
    getHouse,
    deleteHouses,
    createHouses,
    updateHouses, 
} = require('./controller')

app.get(`/api/houses`, getHouses)
app.delete(`/api/houses/:id`, deleteHouses)
app.post(`api/houses`, createHouses)
app.put(`/api/houses/:id`, updateHouses)

app.listen(3004, () => console.log(`running on 3004`))