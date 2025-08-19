import express from 'express'
import {initializeGlobal} from "./initialize/initialize-global.js"

initializeGlobal()

const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Up and running 👍')
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`)
})