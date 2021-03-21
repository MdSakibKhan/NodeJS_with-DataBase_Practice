var mongodb =require('mongodb').MongoClient;

var url = "mongodb://sakibdb:ErfPGIlg9SIZMUKX@sakibcluster-shard-00-00.vcdcb.mongodb.net:27017,sakibcluster-shard-00-01.vcdcb.mongodb.net:27017,sakibcluster-shard-00-02.vcdcb.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-pomb6m-shard-0&authSource=admin&retryWrites=true&w=majority"

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
        DeleteData(MyMongoClient)
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