var mysql = require('mysql');

var config = {
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'school'
}
var con = mysql.createConnection(config)

con.connect((error)=>{
    if (error) { console.log("Connection Error"); }
    else{
        console.log("Connection Successful")
        InsertData(con);
    }
});

InsertData = (con) => {
    let SQLQuery = "INSERT INTO `students`(`id`, `name`, `dept`, `cgpa`) VALUES ('17101192','Md. Rakib Khan','CSE','3.46') ";
    con.query(SQLQuery, (error)=>{
        if (error) { console.log("Error"); }
        else{ console.log("Successful") }
    })
}