let Database = require("./Database");

class Coursetopics {
    id = 0;
    courseid = "";
    topicname = "";
    description = "";
    srno = "";

    db = new Database.Database();
    query = "";

    constructor() {
        this.id = 0;
        this.courseid = 0;
        this.topicname = "";
        this.description = "";
        this.srno = 0;
    }

    save = () => {
        if (this.id == 0) {
            this.query = "INSERT INTO coursetopics(courseid,topicname, description, srno) ";
            this.query += "VALUES('" + this.courseid + "','" + this.topicname + "', '" + this.description + "', '" + this.srno + "')";
        }
        else {
            this.query = "UPDATE coursetopic SET topicname = '" + this.topicname + "', ";
            this.query += "description = '" + this.descritption + "',  WHERE id = " + this.id;

        }
        return new Promise((resolve, reject) => {
            this.db.query(this.query, (err, result) => {
                if (err) {
                    return reject(err);
                }
                else {
                    return resolve(result);
                }
            })
        });
    }

    
    gettopic = ()=>{
        this.query = "SELECT * FROM coursetopics WHERE id = " + this.id;
        return new Promise((resolve, reject)=>{
            this.db.query(this.query, (err, result)=>{
                if(err)
                {
                    return reject(err);
                }
                else{
                    return resolve(result);
                }
            })
        });
    }

    listtopic = ()=>{
        this.query = "SELECT * FROM coursetopics WHERE courseid =" +this.courseid ;
        return new Promise((resolve, reject)=>{
            this.db.query(this.query, (err, result)=>{
                if(err)
                {
                    return reject(err);
                }
                else{
                    return resolve(result);
                }
            })
        });
    }

    deletetopic = ()=>{
        this.query = "DELETE FROM coursetopics WHERE id = " + this.id;
        return new Promise((resolve, reject)=>{
            this.db.query(this.query, (err, result)=>{
                if(err)
                {
                    return reject(err);
                }
                else{
                    return resolve(result);
                }
            })
        });
    }
    
    listsrno = ()=>{
        this.query = "SELECT * FROM coursetopics WHERE courseid =" +this.courseid +" "+ "ORDER BY srno "  ;
        return new Promise((resolve, reject)=>{
            this.db.query(this.query, (err, result)=>{
                if(err)
                {
                    return reject(err);
                }
                else{
                    return resolve(result);
                }
            })
        });
    }

    updatesrno = ()=>{
        this.query = "UPDATE coursetopics SET srno =" +this.srno +" "+"WHERE ID="+ this.id+" "+"AND courseid= "+this.courseid  ;
        return new Promise((resolve, reject)=>{
            this.db.query(this.query, (err, result)=>{
                if(err)
                {
                    return reject(err);
                }
                else{
                    return resolve(result);
                }
            })
        });
    }

}

module.exports = {
    Coursetopics: Coursetopics
}