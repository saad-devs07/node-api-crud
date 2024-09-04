const dbConfig = require('./config');
const sql = require('mssql');

async function getData(){
    try{
        let pool = await sql.connect(dbConfig);
        let getData = await pool.request().query('SELECT * FROM users');
        return getData.recordsets;
    }
    catch(error){
        console.log("Error occured while getting data: " + error);
    }
}

async function getDatabyId(Id){
    try{
        let pool = await sql.connect(dbConfig);
        let getDatabyId = await pool.request().input('input_parameter', sql.Int, Id).query('SELECT * FROM users WHERE Id = @input_parameter');
        return getDatabyId.recordsets;
    }
    catch(error){
        console.log("Error occured while getting data by Id: " + error);
    }
}

async function insertData(user){
    try{
        let pool = await sql.connect(dbConfig);
        let insertData = await pool.request()
        .input('FirstName', sql.VarChar, user.FirstName)
        .input('LastName', sql.VarChar, user.LastName)
        .input('Email', sql.VarChar, user.Email)
        .input('Password', sql.VarChar, user.Password)
        .input('CPassword', sql.VarChar, user.CPassword)
        .execute('insert_users');
        return insertData.recordsets;
    }
    catch(error){
        console.log("Error occured while inserting data: " + error);
    }
}

module.exports = {
    getData : getData,
    getDatabyId :getDatabyId,
    insertData : insertData
}
