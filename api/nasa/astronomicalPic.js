const dotenv = require("dotenv");
dotenv.config();

module.exports = async (req, res) => {
  try {
    console.log("here");
   
    const apiKey = process.env.NASAAPI;
    const baseApi = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;
  
   
   

    // Fetch data from the NASA API
    const response = await fetch(baseApi);
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
