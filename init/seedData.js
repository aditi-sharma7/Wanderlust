const mongoose = require("mongoose");
const Listing = require("../models/listing.js");
const User = require("../models/user.js");
const Review = require("../models/review.js");

require("dotenv").config({ path: "../.env" });
const dbUrl = process.env.ATLASDB_URL;
const listings = [

/* ================= TRENDING ================= */
{
title: "Santorini White Cave Villa with Infinity View",
description: "Elegant whitewashed cave villa overlooking the caldera with seamless indoor-outdoor living and a private infinity plunge pool.",
images: [
{ url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e", filename: "trend1_1" },
{ url: "https://images.unsplash.com/photo-1493558103817-58b2924bce98", filename: "trend1_2" },
{ url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511", filename: "trend1_3" },
{ url: "https://images.unsplash.com/photo-1472220625704-91e1462799b2", filename: "trend1_4" },
{ url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85", filename: "trend1_5" },
],
price: 8500,
location: "Oia",
country: "Greece",
category: "Trending",
geometry: { type: "Point", coordinates: [25.3753, 36.4613] },
},

{
title: "Maldives Overwater Luxury Lagoon Villa",
description: "Private villa above crystal-clear lagoon with glass floors and direct ocean access.",
images: [
{ url: "https://images.unsplash.com/photo-1501117716987-c8e1ecb210d4", filename: "trend2_1" },
{ url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb", filename: "trend2_2" },
{ url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470", filename: "trend2_3" },
{ url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee", filename: "trend2_4" },
{ url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e", filename: "trend2_5" },
],
price: 12000,
location: "Male Atoll",
country: "Maldives",
category: "Trending",
geometry: { type: "Point", coordinates: [73.2207, 3.2028] },
},

/* ================= ROOMS ================= */
{
title: "Modern Minimal Bedroom in Tokyo",
description: "Clean and minimal Japanese-style room with soft lighting and wooden aesthetics.",
images: [
{ url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511", filename: "room1_1" },
{ url: "https://images.unsplash.com/photo-1493809842364-78817add7ffb", filename: "room1_2" },
{ url: "https://images.unsplash.com/photo-1484154218962-a197022b5858", filename: "room1_3" },
{ url: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae", filename: "room1_4" },
{ url: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5", filename: "room1_5" },
],
price: 4200,
location: "Tokyo",
country: "Japan",
category: "Rooms",
geometry: { type: "Point", coordinates: [139.6917, 35.6895] },
},

{
title: "Cozy Scandinavian Bedroom in Stockholm",
description: "Warm Nordic interiors with neutral tones and large windows.",
images: [
{ url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85", filename: "room2_1" },
{ url: "https://images.unsplash.com/photo-1493809842364-78817add7ffb", filename: "room2_2" },
{ url: "https://images.unsplash.com/photo-1484154218962-a197022b5858", filename: "room2_3" },
{ url: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae", filename: "room2_4" },
{ url: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5", filename: "room2_5" },
],
price: 5000,
location: "Stockholm",
country: "Sweden",
category: "Rooms",
geometry: { type: "Point", coordinates: [18.0686, 59.3293] },
},

/* ================= ICONIC ================= */
{
title: "Luxury Apartment with Eiffel Tower View",
description: "Classic Parisian apartment with balcony overlooking Eiffel Tower.",
images: [
{ url: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34", filename: "icon1_1" },
{ url: "https://images.unsplash.com/photo-1491553895911-0055eca6402d", filename: "icon1_2" },
{ url: "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba", filename: "icon1_3" },
{ url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee", filename: "icon1_4" },
{ url: "https://images.unsplash.com/photo-1472220625704-91e1462799b2", filename: "icon1_5" },
],
price: 9000,
location: "Paris",
country: "France",
category: "Iconic",
geometry: { type: "Point", coordinates: [2.2945, 48.8584] },
},

/* ================= MOUNTAINS ================= */
{
title: "Snowy Alpine Chalet in Switzerland",
description: "Wooden chalet with breathtaking mountain and snow views.",
images: [
{ url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470", filename: "mount1_1" },
{ url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee", filename: "mount1_2" },
{ url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb", filename: "mount1_3" },
{ url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e", filename: "mount1_4" },
{ url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470", filename: "mount1_5" },
],
price: 6500,
location: "Zermatt",
country: "Switzerland",
category: "Mountains",
geometry: { type: "Point", coordinates: [7.7491, 46.0207] },
},

/* ================= CASTLES ================= */
{
title: "Historic Stone Castle in Scotland Highlands",
description: "Luxury castle stay surrounded by green valleys and lakes.",
images: [
{ url: "https://images.unsplash.com/photo-1566073771259-6a8506099945", filename: "castle1_1" },
{ url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb", filename: "castle1_2" },
{ url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4", filename: "castle1_3" },
{ url: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae", filename: "castle1_4" },
{ url: "https://images.unsplash.com/photo-1493809842364-78817add7ffb", filename: "castle1_5" },
],
price: 15000,
location: "Inverness",
country: "Scotland",
category: "Castles",
geometry: { type: "Point", coordinates: [-4.2247, 57.4778] },
},

/* ================= CAMPING ================= */
{
title: "Luxury Forest Camping Dome",
description: "Stay surrounded by nature in a cozy transparent dome.",
images: [
{ url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee", filename: "camp1_1" },
{ url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470", filename: "camp1_2" },
{ url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e", filename: "camp1_3" },
{ url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb", filename: "camp1_4" },
{ url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e", filename: "camp1_5" },
],
price: 3500,
location: "Colorado",
country: "USA",
category: "Camping",
geometry: { type: "Point", coordinates: [-105.7821, 39.5501] },
},

/* ================= FARMS ================= */
{
title: "Lavender Farm Stay in Provence",
description: "Relax in purple lavender fields with rustic farmhouse living.",
images: [
{ url: "https://images.unsplash.com/photo-1500382017468-9049fed747ef", filename: "farm1_1" },
{ url: "https://images.unsplash.com/photo-1500382017468-9049fed747ef", filename: "farm1_2" },
{ url: "https://images.unsplash.com/photo-1500382017468-9049fed747ef", filename: "farm1_3" },
{ url: "https://images.unsplash.com/photo-1500382017468-9049fed747ef", filename: "farm1_4" },
{ url: "https://images.unsplash.com/photo-1500382017468-9049fed747ef", filename: "farm1_5" },
],
price: 8000,
location: "Provence",
country: "France",
category: "Farms",
geometry: { type: "Point", coordinates: [5.2001, 43.9119] },
},

/* ================= ARCTIC ================= */
{
title: "Glass Igloo Northern Lights Cabin",
description: "Watch aurora from your bed in a heated glass igloo.",
images: [
{ url: "https://images.unsplash.com/photo-1483347756197-71ef80e95f73", filename: "arctic1_1" },
{ url: "https://images.unsplash.com/photo-1516912481808-3406841bd33c", filename: "arctic1_2" },
{ url: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7", filename: "arctic1_3" },
{ url: "https://images.unsplash.com/photo-1483347756197-71ef80e95f73", filename: "arctic1_4" },
{ url: "https://images.unsplash.com/photo-1516912481808-3406841bd33c", filename: "arctic1_5" },
],
price: 11000,
location: "Lapland",
country: "Finland",
category: "Arctic",
geometry: { type: "Point", coordinates: [27.4073, 68.4247] },
},

/* ================= DOMES ================= */
{
title: "Desert Stargazing Dome in Atacama",
description: "Experience crystal clear night skies in luxury dome.",
images: [
{ url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64", filename: "dome1_1" },
{ url: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a", filename: "dome1_2" },
{ url: "https://images.unsplash.com/photo-1504608524841-42584120d693", filename: "dome1_3" },
{ url: "https://images.unsplash.com/photo-1518818608552-195ed130cdf4", filename: "dome1_4" },
{ url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64", filename: "dome1_5" },
],
price: 6000,
location: "Atacama",
country: "Chile",
category: "Domes",
geometry: { type: "Point", coordinates: [-68.1997, -22.9087] },
},

/* ================= BOATS ================= */
{
title: "Luxury Yacht Stay in Raja Ampat",
description: "Private yacht experience with crystal waters and marine life.",
images: [
{ url: "https://images.unsplash.com/photo-1548574505-5e239809ee19", filename: "boat1_1" },
{ url: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a", filename: "boat1_2" },
{ url: "https://images.unsplash.com/photo-1544551763-46a013bb70d5", filename: "boat1_3" },
{ url: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0", filename: "boat1_4" },
{ url: "https://images.unsplash.com/photo-1520116468816-95b69f847357", filename: "boat1_5" },
],
price: 14000,
location: "Raja Ampat",
country: "Indonesia",
category: "Boats",
geometry: { type: "Point", coordinates: [130.5, 0.5] },
}

];



// const reviewsData = [
//   { rating: 5, comment: "Absolutely magical. Every detail was perfect — the host was incredibly welcoming and the location exceeded all our expectations. Already planning our return trip." },
//   { rating: 5, comment: "One of the best travel experiences of our lives. The views were even more stunning than the photos, and waking up here every morning felt like a dream." },
//   { rating: 4, comment: "Stunning property and a wonderful host. The space was immaculate and the local recommendations made our stay truly special. Docking one star only because check-in was slightly tricky to find." },
//   { rating: 5, comment: "We've stayed in many beautiful places around the world but this stands apart. The atmosphere, the design, the attention to detail — all exceptional." },
//   { rating: 4, comment: "Gorgeous setting and very comfortable. The host went out of their way to make us feel at home. Would highly recommend to anyone visiting this area." },
//   { rating: 5, comment: "Perfect in every sense. The location is incredible, the interior is beautifully styled, and the breakfast was the best we had on our entire trip." },
//   { rating: 3, comment: "Beautiful location and a comfortable stay. A few minor maintenance issues but nothing that spoiled the experience overall. Would still recommend." },
//   { rating: 5, comment: "Truly special and unlike anywhere we've stayed before. The host is incredibly knowledgeable about the area and gave us tips we'd never have found in any guidebook." },
// ];

async function seedDB() {
  await mongoose.connect(dbUrl);
  console.log("Connected to MongoDB");

  await Listing.deleteMany({});
  await Review.deleteMany({});
  console.log("Cleared existing listings and reviews");

  let owner = await User.findOne({ username: "wanderlt_admin" });
  if (!owner) {
    owner = new User({ email: "amin@wanderlust.com", username: "wanderlt_admin" });
    await User.register(owner, "admin34");
    console.log("Created seed user: wanderlt_admin / admin34");
  }

  for (let i = 0; i < listings.length; i++) {
    const listingData = { ...listings[i], owner: owner._id };
    // const createdReviews = [];
    // const numReviews = 2 + (i % 2);
    // for (let j = 0; j < numReviews; j++) {
    //   const r = reviewsData[(i + j) % reviewsData.length];
    //   const review = new Review({ ...r, author: owner._id });
    //   await review.save();
    //   createdReviews.push(review._id);
    // }
    // listingData.reviews = createdReviews;
    const listing = new Listing(listingData);
    await listing.save();
    console.log(`[${listing.category}] ${listing.title} — ${listing.images.length} images`);
  }

  console.log(`\nDone! Seeded ${listings.length} listings across 10 categories.`);
  await mongoose.disconnect();
}

seedDB().catch((err) => {
  console.error("Seeding failed:", err);
  process.exit(1);
});