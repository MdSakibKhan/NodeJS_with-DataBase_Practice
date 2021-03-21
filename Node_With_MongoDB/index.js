var mongodb =require('mongodb').MongoClient;

var url = ""

var config = {
    useUnifiedTopology: true
}

mongodb.connect(url, config, (error,MyMongoClient)=>{
    if (error) {
        console.log("Connection Failed")
    }
    else{
        console.log("Connection Successful")
        //insertData(MyMongoClient)
        //DeleteData(MyMongoClient)
        findWithoutCondition(MyMongoClient)
    }
})


const insertData = (MongoClient) => {
    var mydatabase = MongoClient.db('university');
    var mycollection = mydatabase.collection('students');

    var mydata = {
        name : 'Rakib',
        id : '17101194',
        cgpa : '3.29'
    }

   
    mycollection.insertOne(mydata, (error) => {
        if (error) {
            console.log("Data Insert failed")
        }
        else {
            console.log("Data Inserted")
        }
    })


}

const DeleteData = (MongoClient) => {

    var mydatabase = MongoClient.db('university');
    var mycollection = mydatabase.collection('students');

    var deleteFile = { id : '17101191'}

    mycollection.deleteOne(deleteFile, (error)=>{
        if (error) {
            console.log("Delete Failed");
        }
        else{
            console.log("Data Delete Completed");
        };
    })
    
}


const DeleteMany = (MongoClient) => {

    var mydatabase = MongoClient.db('university');
    var mycollection = mydatabase.collection('students');

    mycollection.deleteMany((error, ResultObject)=>{
        if (error) {
            console.log("Delete Failed");
        }
        else{
            console.log("Data Delete Completed = " + ResultObject.result.n + " Items Delted.");
        };
    })
    
}

const findWithoutCondition = (MongoClient) => {
    var mydatabase = MongoClient.db('university');
    var mycollection = mydatabase.collection('students');
    var FindObj = {}
    mycollection.findOne(FindObj, (error, results)=>{
        console.log(results)
    })
}