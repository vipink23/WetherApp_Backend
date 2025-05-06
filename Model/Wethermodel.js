import mongoose from "mongoose";

const Schema = mongoose.Schema;

const WeatherSchema = new Schema({
    country: {
        type: String,
        required: true
    },
    latitude:{
        type: String,
        required: true  
    },
    longitude:{
        type: String,
        required: true  
    },
    weather: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    }
});

const WeatherModel = mongoose.model('weather', WeatherSchema);
export default WeatherModel;
