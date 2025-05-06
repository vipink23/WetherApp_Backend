import WeatherModel from "../Model/Wethermodel.js";

const AddWeather = async (req, res) => {
  try {
    const { country, weather, date } = req.body;

    console.log(req.body);

    if (!country || !weather || !date) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const existingWeather = await WeatherModel.findOne({ country, date });
    if (existingWeather) {
      return res.status(400).json({ error: 'Weather data for this country and date already exists.' });
    }else{
        const savedWeather = await WeatherModel.create(req.body);
        res.status(200).json({ message: "Added Successfully", data: savedWeather });
    }


  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const GetAllWethers = async (req, res)=>{
    try {
        const wethers = await WeatherModel.find({});
        res.status(200).json(wethers)
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
}

const FilterByDate = async (req, res) => {
    try {
      const { fromDate, toDate } = req.query;
  
      // Log the values to make sure they are passed correctly
      console.log('fromDate:', fromDate, 'toDate:', toDate);
  
      if (!fromDate || !toDate) {
        return res.status(400).json({ message: "Both fromDate and toDate are required." });
      }
  
      const startDate = new Date(fromDate);
      const endDate = new Date(toDate);
  
      if (isNaN(startDate) || isNaN(endDate)) {
        return res.status(400).json({ message: "Invalid date format." });
      }
  
      const data = await WeatherModel.find();
  
      const filteredData = data.filter((item) => {
        const itemDate = new Date(item.date);
        return itemDate >= startDate && itemDate <= endDate;
      });
  
      return res.status(200).json(filteredData);
    } catch (error) {
      console.error("Error in Getbydatelimit:", error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  };
  
  

export default { AddWeather , GetAllWethers , FilterByDate };
