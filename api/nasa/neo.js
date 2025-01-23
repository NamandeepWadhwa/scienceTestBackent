const dotenv = require("dotenv");
const { ideahub } = require("googleapis/build/src/apis/ideahub");
dotenv.config();

module.exports = async (req, res) => {
  const apiKey = process.env.NASAAPI;
  const today=new Date();
  console.log(today);
  const sevenDaysAgo=new Date();
  sevenDaysAgo.setDate(today.getDate()-7);
  //format the dates
  const formatDate=(date)=>date.toISOString().split("T")[0];
  const startDate=formatDate(sevenDaysAgo);
  const endDate=formatDate(today);
  //setting the api
 const apiUrl = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=${apiKey}`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      return res
        .status(response.status)
        .json({ message: "Error fetching data from NASA API" });
    }

    const data = await response.json();
    const nearEarthObjects=data.near_earth_objects;
    
const allObjects = Object.entries(nearEarthObjects).map(([date, objects]) => {
  return {
    date,
    objects: objects.map((obj) => ({
      id: obj.id,
      name: obj.name,
      isHazardous: obj.is_potentially_hazardous_asteroid,
      diameter: obj.estimated_diameter.kilometers, // Fix: Accessed correctly
    })),
  };
});

    

    return res.status(200).json( allObjects);
  } catch (err) {
    console.error(err); // Log the error for debugging
    return res.status(500).json({ message: "Internal server error" });
  }
};
