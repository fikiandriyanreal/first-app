const express = require("express");
const routerMahasiswa = express.Router()

routerMahasiswa.route('/mahasiswa')
    .get( (req,res)=>{
        res.send('semua data mahasiswa')
    })

    .post( (req,res)=>{
        res.send('Data Mahasiswa Sukses Tersimpan')
    })

routerMahasiswa.route('/mahasiswa/:nim')
    .put( (req,res)=>{
        res.send('Data Mahasiswa dengan nim' + req.params.nim + 'Berhasil di Update')
    })

    .delete( (req,res)=>{
        res.send('Data Mahasiswa dengan nim' + req.params.nim + 'Berhasil di Hapus')
    })
    .get( (req,res)=>
{
    res.send('Mahasiswa dengan Nim: ' + req.params.nim)
})

routerMahasiswa.get('/mahasiswa/:nama/:alamat', (req,res)=>{
    const nama = req.params.nama
    const alamat = req.params.alamat
    res.send('Mahasiswa nama : ' + nama + 'alamat :' + alamat)
})
    module.exports=routerMahasiswa