let express = require("express");
let Admin = require("./models/Admin");
let app = express();

app.use(express.json());

app.get("/", (req, res)=>
{
    res.send("Welcome to iGAP Education APIs");
});

app.post("/login", (req, res)=>{
    let data = req.body.data;
    let admin = new Admin.Admin();
    admin.email = data.email;
    admin.password = data.password;
    admin.login().then(
        resolve=>{
            res.send(resolve);
        },
        reject=>{
            res.send(reject);
        }
    );
});

app.listen(8081, ()=>{
    console.log("App running on http://localhost:8081/");
});