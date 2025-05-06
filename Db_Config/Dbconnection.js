import mongoose from "mongoose"
const conntectDb = async()=>{
    try {
        await mongoose.connect("mongodb://localhost:27017/WetherApp");
        console.log('connected Successfully');
        
    } catch (error) {
        console.log(error);
        
    }
}

export default conntectDb