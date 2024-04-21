import express from 'express'
import { dbConnection } from './dbConnection.js'
const app = express()
const port = 3000

dbConnection()
app.use(express.json())

app.get('/', (req, res) => res.send('Hello World!'))


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))