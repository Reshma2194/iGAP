let Database = require("./Database");
class Course{
    id = 0;
    name = "";
    imgpath = "";
    description = "";

    db = new Database.Database();
    query = "";

    constructor(){
        this.id = 0;
        this.name = "";
        this.imgpath = "";
        this.description = "";
    }

    save = ()=>{
        if(this.id == 0)
        {
            this.query = "INSERT INTO courses(name, description, imgpath) ";
            this.query += "VALUES('" + this.name + "', '" + this.description + "', '" + this.imgpath + "')";
        }
        else{
            this.query = "UPDATE courses SET name = '" + this.name + "', ";
            this.query += "imgpath = '" + this.imgpath + "', ";
            this.query += "description = '" + this.description + "' WHERE id = " + this.id;
        }
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

    delete = ()=>{
        this.query = "DELETE FROM courses WHERE id = " + this.id;
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
    
    list = ()=>{
        this.query = "SELECT * FROM courses";
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

    get = ()=>{
        this.query = "SELECT * FROM courses WHERE id = " + this.id;
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
    Course:Course
}