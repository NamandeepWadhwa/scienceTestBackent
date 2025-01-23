const dotenv = require("dotenv");
dotenv.config();

module.exports = async (req, res) => {
  try {
   
    const apiKey = process.env.NASAAPI;
    const baseApi = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;
  
   
    const { count, startDate, endDate, date } = req.body;

    let apiUrl;

    // Handle `count` parameter
    if (count) {
      apiUrl = `${baseApi}&count=${count}`;
    }
    // Handle `startDate` and `endDate` parameters
    else if (startDate && endDate) {
      apiUrl = `${baseApi}&start_date=${startDate}&end_date=${endDate}`;
    }
    // Handle `date` parameter
    else if (date) {
      apiUrl = `${baseApi}&date=${date}`;
    }
    // Default: No parameters, just fetch the APOD for today
    else {
      apiUrl = baseApi;
    }
    

    // Fetch data from the NASA API
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`NASA API error: ${response.statusText}`);
    }
    const data = await response.json();

    return res.status(200).json( data );
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal server error" });
  }
};
