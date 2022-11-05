import mongoose from "mongoose";

const connection = async (username,password) => {
    const URL = `mongodb+srv://${username}:${password}@flight-search.ejnqcyw.mongodb.net/flight-db`;
    try{
       await mongoose.connect(URL,{ useUnifiedTopology: true, useNewUrlParser: true} )
       console.log("MongoDB Connected Successfully...")
    }catch(error){
        console.log("Error while comnecting with the database", error)
    }
}

export default connection;

