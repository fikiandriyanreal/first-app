const express = require('express')
const routerMahasiswa = require('./mahasiswa')
const app = express()
const port = 5000

app.use(routerMahasiswa)
app.listen(port, ()=>{
    console.log('server berjalan pada port' + port)
})