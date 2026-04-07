const mongoose = require('mongoose');
const initData = require('./data.js');
const Listing = require('../models/listing.js');

main()
.then(()=>{
    console.log("connection successful");
})
.catch((err) => {
    console.log(err);
});

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/wanderlust');
}
const initDB = async () => {
    let listings = await Listing.find({ geometry: { $exists: false } });
    for (let listing of listings) {
        let url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(listing.location)}&format=json&limit=1`;
        let res = await fetch(url, {
            headers: { "User-Agent": "wanderlust-app" }
        });

        let data = await res.json();
        if (data.length > 0) {
            listing.geometry = {
            type: "Point",
            coordinates: [data[0].lon, data[0].lat]
            };
            await listing.save();
            console.log("Updated:", listing.location);
        } else {
            console.log("Location not found:", listing.location);
        }
    }
    await Listing.deleteMany({});
    // const ownerId = new mongoose.Types.ObjectId("69a95e864fd5befa382d9e34");
    initData.data = initData.data.map((obj) => ({ ...obj, owner: "69a95e864fd5befa382d9e34"}));
    await Listing.insertMany(initData.data);
    console.log("Data initialized");
}
initDB();