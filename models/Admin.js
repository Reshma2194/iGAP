const { rejects } = require("assert");
let Database =require("./Database");

class Admin
{
    email = "";
    password = "";

    query = "";
    db = new Database.Database();

    constructor(){
        this.email= "";
        this.password = "";
    }

    login = ()=>{
        this.query = "SELECT * FROM admins WHERE email = '" + this.email + "' AND password = '" + this.password + "'";
        return new Promise((resolve, reject)=>{
            this.db.query(this.query, (err, result)=>{
                if(err)
                    return reject(err);
                else
                    return resolve(result);
            });        
        });
    }
}

module.exports={
    Admin:Admin
}