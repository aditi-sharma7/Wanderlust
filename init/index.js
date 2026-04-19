const mongoose = require('mongoose');
const initData = require('./data.js');
const Listing = require('../models/listing.js');
const User = require("../models/user.js");

require("dotenv").config({ path: "../.env" });
const dbUrl = process.env.ATLASDB_URL;
main()
.then(() => {
    console.log("connection successful");
})
.catch((err) => {
    console.log(err);
});

async function main() {
    await mongoose.connect(dbUrl);
}

const initDB = async () => {
    await Listing.deleteMany({});

    const listing = initData.map((obj) => ({
        ...obj,
        owner: "69b2ca91a413ba0fd369a8e9"
    }));

    // await Listing.insertMany(listing);
    console.log("Data initialized successfully!");
};

initDB();