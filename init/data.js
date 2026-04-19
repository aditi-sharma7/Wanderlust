const listings = [
  // ─────────────────────────────────────────────
  // TRENDING (6)
  // ─────────────────────────────────────────────
  {
    title: "The Glass Loft – Tokyo Skyline Suite",
    description:
      "Float above the city in this stunning glass-walled loft with panoramic views of Tokyo's glittering skyline. Designed by an award-winning interior studio, every corner is Instagram-worthy. Wake up to sunrise over the metropolis and unwind in a soaking tub framed by floor-to-ceiling windows. A curated mini-bar, smart home controls, and a rooftop terrace complete this ultra-modern hideaway.",
    price: 18500,
    location: "Tokyo",
    country: "Japan",
    category: "Trending",
    geometry: { type: "Point", coordinates: [139.6917, 35.6895] },
    images: [
      { url: "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800", filename: "tokyo_loft_1" },
      { url: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=800", filename: "tokyo_loft_3" },
      { url: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800", filename: "tokyo_loft_4" },
      { url: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800", filename: "tokyo_loft_5" }
    ],
    reviews: [],
    owner: null
  },
  {
    title: "Casa Azul – Santorini Cliffside Villa",
    description:
      "Perched on the iconic white-and-blue cliffs of Oia, this viral villa has been featured in over 50,000 travel posts. The infinity pool appears to merge seamlessly with the Aegean Sea below. Interiors blend Cycladic minimalism with plush modern furnishings, hand-sourced locally. Complimentary sunset cocktails and a personal concierge make every stay feel effortlessly luxurious.",
    price: 24000,
    location: "Santorini",
    country: "Greece",
    category: "Trending",
    geometry: { type: "Point", coordinates: [25.4615, 36.4618] },
    images: [
      { url: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800", filename: "santorini_villa_1" },
      { url: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800", filename: "santorini_villa_2" },
      // { url: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800", filename: "santorini_villa_3" },
      { url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?w=800", filename: "santorini_villa_4" },
      // { url: "https://images.unsplash.com/photo-1504615755583-2916b52192a3?w=800", filename: "santorini_villa_5" }
    ],
    reviews: [],
    owner: null
  },
  {
    title: "Neon Nest – Bali Rice Terrace Retreat",
    description:
      "A trending boho-chic retreat nestled between Ubud's emerald rice terraces and tropical jungle. The open-sided bamboo villa brings the outdoors in with a private plunge pool and hammock deck overlooking the valley. Mornings start with a private yoga session and a farm-to-table breakfast. Evenings glow with lantern light and sounds of the jungle — pure magic.",
    price: 9500,
    location: "Ubud",
    country: "Indonesia",
    category: "Trending",
    geometry: { type: "Point", coordinates: [115.2624, -8.5069] },
    images: [
      { url: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800", filename: "bali_terrace_1" },
      { url: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=800", filename: "bali_terrace_2" },
      // { url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800", filename: "bali_terrace_3" },
      // { url: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800", filename: "bali_terrace_4" },
      { url: "https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=800", filename: "bali_terrace_5" }
    ],
    reviews: [],
    owner: null
  },
  {
    title: "The Warehouse Studio – Brooklyn Industrial Chic",
    description:
      "Once a 1920s printing factory, this converted Brooklyn warehouse is now the city's most talked-about loft stay. Exposed brick, 18-foot ceilings, and salvaged industrial furniture create a raw aesthetic that photographers and designers flock to. The chef's kitchen, vinyl record collection, and rooftop hot tub seal the deal. Walking distance to the best coffee shops in New York.",
    price: 14500,
    location: "New York",
    country: "United States",
    category: "Trending",
    geometry: { type: "Point", coordinates: [-73.9442, 40.6782] },
    images: [
      { url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800", filename: "brooklyn_loft_1" },
      { url: "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=800", filename: "brooklyn_loft_2" },
      // { url: "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=800", filename: "brooklyn_loft_3" },
      { url: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800", filename: "brooklyn_loft_4" },
      // { url: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800", filename: "brooklyn_loft_5" }
    ],
    reviews: [],
    owner: null
  },
  {
    title: "Treehouse Social – Cape Town Canopy Suite",
    description:
      "Suspended among ancient milkwood trees on the Cape Peninsula, this viral treehouse has amassed millions of social media impressions for good reason. A spiral staircase leads to an open-air deck with sweeping Atlantic Ocean views. The interiors mix driftwood textures with contemporary South African art. Breakfast is delivered via a charming basket pulley — sheer whimsy meets luxury.",
    price: 12000,
    location: "Cape Town",
    country: "South Africa",
    category: "Trending",
    geometry: { type: "Point", coordinates: [18.4241, -33.9249] },
    images: [
      { url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?w=800", filename: "capetown_tree_1" },
      { url: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800", filename: "capetown_tree_2" },
      { url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800", filename: "capetown_tree_3" },
      { url: "https://images.unsplash.com/photo-1599619351208-3e6c839d6828?w=800", filename: "capetown_tree_4" },
      { url: "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800", filename: "capetown_tree_5" }
    ],
    reviews: [],
    owner: null
  },
  {
    title: "Desert Rose – Marrakech Riad Hideout",
    description:
      "Hidden behind an unassuming medina doorway lies this jaw-dropping riad with a central courtyard pool and hand-painted Zellige tilework that has gone viral on travel platforms worldwide. Each room is a colour-drenched masterpiece of Moroccan craftsmanship. Rooftop dinners under the stars with traditional Moroccan cuisine are available on request. An unforgettable sensory immersion.",
    price: 8500,
    location: "Marrakech",
    country: "Morocco",
    category: "Trending",
    geometry: { type: "Point", coordinates: [-7.9811, 31.6295] },
    images: [
      { url: "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=800", filename: "marrakech_riad_1" },
      { url: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800", filename: "marrakech_riad_2" },
      { url: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800", filename: "marrakech_riad_3" },
      { url: "https://images.unsplash.com/photo-1531971589569-0d9370cbe1e5?w=800", filename: "marrakech_riad_4" },
      { url: "https://images.unsplash.com/photo-1553444836-bc6c8d340d56?w=800", filename: "marrakech_riad_5" }
    ],
    reviews: [],
    owner: null
  },

  // ─────────────────────────────────────────────
  // ROOMS (6)
  // ─────────────────────────────────────────────
  {
    title: "The Velvet Chamber – Paris Boutique Room",
    description:
      "Tucked inside a Haussmann-era building in Le Marais, this intimate boutique room oozes Parisian romance. Deep velvet furnishings, gilded mirrors, and hand-stenciled ceilings create an atmosphere of refined decadence. A clawfoot tub sits beneath an arched skylight. Step outside and you're moments from the city's finest galleries, patisseries, and wine bars.",
    price: 11000,
    location: "Paris",
    country: "France",
    category: "Rooms",
    geometry: { type: "Point", coordinates: [2.3522, 48.8566] },
    images: [
      { url: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800", filename: "paris_room_1" },
      { url: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800", filename: "paris_room_2" },
      { url: "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800", filename: "paris_room_3" },
      // { url: "https://images.unsplash.com/photo-1504275107627-0c2ba7a43dba?w=800", filename: "paris_room_4" },
      // { url: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800", filename: "paris_room_5" }
    ],
    reviews: [],
    owner: null
  },
  {
    title: "Sakura Suite – Kyoto Machiya Guestroom",
    description:
      "Experience the quiet elegance of a traditional Kyoto machiya townhouse in this meticulously restored guestroom. Tatami mats, shoji screens, and a sunken kotatsu table invite you to slow down and savour. A private engawa porch overlooks a small moss garden. The host prepares a Japanese breakfast each morning — grilled fish, rice, miso, and pickled vegetables.",
    price: 7500,
    location: "Kyoto",
    country: "Japan",
    category: "Rooms",
    geometry: { type: "Point", coordinates: [135.7681, 35.0116] },
    images: [
      // { url: "https://images.unsplash.com/photo-1545579133-99bb5ad189be?w=800", filename: "kyoto_room_1" },
      { url: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800", filename: "kyoto_room_2" },
      { url: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800", filename: "kyoto_room_3" },
      { url: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800", filename: "kyoto_room_4" },
      // { url: "https://images.unsplash.com/photo-1576402187878-974f70c890a5?w=800", filename: "kyoto_room_5" }
    ],
    reviews: [],
    owner: null
  },
  {
    title: "Cobblestone Corner – Prague Old Town Studio",
    description:
      "A charming studio room perched above the cobblestoned lanes of Prague's Old Town, with a window seat that perfectly frames the Baroque spires below. Whitewashed walls, antique maps, and a reading nook stacked with books create a cosy scholarly atmosphere. The building dates to 1743 and has been thoughtfully modernised. The iconic Astronomical Clock is a two-minute stroll away.",
    price: 5500,
    location: "Prague",
    country: "Czech Republic",
    category: "Rooms",
    geometry: { type: "Point", coordinates: [14.4378, 50.0755] },
    images: [
      { url: "https://images.unsplash.com/photo-1505693314120-0d443867891c?w=800", filename: "prague_room_1" },
      // { url: "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=800", filename: "prague_room_2" },
      // { url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800", filename: "prague_room_3" },
      { url: "https://images.unsplash.com/photo-1556020685-ae41abfc9365?w=800", filename: "prague_room_4" },
      { url: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800", filename: "prague_room_5" }
    ],
    reviews: [],
    owner: null
  },
  {
    title: "The Blue Door – Lisbon Alfama Guestroom",
    description:
      "A sunlit room inside a 19th-century azulejo-tiled townhouse in Lisbon's historic Alfama neighbourhood. The hand-painted blue ceramic tiles, arched windows, and wrought-iron balcony overlooking the Tagus River evoke a timeless Portuguese romance. Guests receive a welcome basket of local wines, pastéis de nata, and olive oil. Fado music drifts up from a nearby tasca each evening.",
    price: 6200,
    location: "Lisbon",
    country: "Portugal",
    category: "Rooms",
    geometry: { type: "Point", coordinates: [-9.1393, 38.7223] },
    images: [
      // { url: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800", filename: "lisbon_room_1" },
      { url: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800", filename: "lisbon_room_2" },
      { url: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800", filename: "lisbon_room_3" },
      { url: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800", filename: "lisbon_room_4" },
      // { url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb3?w=800", filename: "lisbon_room_5" }
    ],
    reviews: [],
    owner: null
  },
  {
    title: "Haveli Heritage Room – Jaipur Pink City",
    description:
      "Step into royalty at this exquisitely restored room within a 200-year-old haveli in the heart of Jaipur's Pink City. Jharokha windows, hand-block-printed textiles, and ornate jali screens create an atmosphere of regal splendour. The rooftop terrace offers unobstructed views of Nahargarh Fort at sunset. A traditional Rajasthani thali breakfast is served each morning in the inner courtyard.",
    price: 4800,
    location: "Jaipur",
    country: "India",
    category: "Rooms",
    geometry: { type: "Point", coordinates: [75.7873, 26.9124] },
    images: [
      { url: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800", filename: "jaipur_room_1" },
      // { url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800", filename: "jaipur_room_2" },
      { url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800", filename: "jaipur_room_3" },
      // { url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800", filename: "jaipur_room_4" },
      { url: "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800", filename: "jaipur_room_5" }
    ],
    reviews: [],
    owner: null
  },
  {
    title: "Canal View Kamer – Amsterdam Boutique Room",
    description:
      "A beautifully appointed room on the top floor of a 17th-century merchant's house along Amsterdam's UNESCO-listed Prinsengracht canal. The slanted ceilings, exposed beams, and original wide-plank floors have been kept intact, paired with crisp Scandinavian linens and a curated art collection. Watch bicycles and canal boats drift by from your private window seat while sipping locally roasted coffee.",
    price: 9800,
    location: "Amsterdam",
    country: "Netherlands",
    category: "Rooms",
    geometry: { type: "Point", coordinates: [4.9041, 52.3676] },
    images: [
      // { url: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800", filename: "amsterdam_room_1" },
      { url: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=800", filename: "amsterdam_room_2" },
      { url: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=800", filename: "amsterdam_room_3" },
      { url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800", filename: "amsterdam_room_4" },
      { url: "https://images.unsplash.com/photo-1595526051245-4506e0005bd0?w=800", filename: "amsterdam_room_5" }
    ],
    reviews: [],
    owner: null
  },

  // ─────────────────────────────────────────────
  // ICONIC (6)
  // ─────────────────────────────────────────────
  {
    title: "Eiffel Shadows Penthouse – Paris",
    description:
      "A once-in-a-lifetime penthouse offering an unobstructed view of the Eiffel Tower from every room. Designed by a Parisian architect with museum-quality furniture and original artwork, this apartment defines iconic living. Watch the tower's nightly light show from your Juliet balcony with a glass of Champagne in hand. Thoughtfully curated and supremely comfortable for a truly bucket-list stay.",
    price: 25000,
    location: "Paris",
    country: "France",
    category: "Iconic",
    geometry: { type: "Point", coordinates: [2.2945, 48.8584] },
    images: [
      { url: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800", filename: "paris_iconic_1" },
      { url: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=800", filename: "paris_iconic_2" },
      { url: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800", filename: "paris_iconic_3" },
      { url: "https://images.unsplash.com/photo-1520939817895-060bdaf4fe1b?w=800", filename: "paris_iconic_4" },
      // { url: "https://images.unsplash.com/photo-1543349689-9a4d426bee8e?w=800", filename: "paris_iconic_5" }
    ],
    reviews: [],
    owner: null
  },
  {
    title: "Colosseum Terrace – Rome Heritage Suite",
    description:
      "A breathtaking heritage suite in a palazzetto steps from the Roman Colosseum with sweeping views of the ancient monument from the private terrace. Frescoed ceilings, marble floors, and antique Roman artefacts (all legally certified) furnish the rooms. The host, a seventh-generation Roman, offers private evening tours of the Forum. History surrounds you here — quite literally.",
    price: 20000,
    location: "Rome",
    country: "Italy",
    category: "Iconic",
    geometry: { type: "Point", coordinates: [12.4922, 41.8902] },
    images: [
      { url: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800", filename: "rome_iconic_1" },
      { url: "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=800", filename: "rome_iconic_2" },
      { url: "https://images.unsplash.com/photo-1529260830199-42c24126f198?w=800", filename: "rome_iconic_3" },
      // { url: "https://images.unsplash.com/photo-1575548086099-e0efb1b1d575?w=800", filename: "rome_iconic_4" },
      { url: "https://images.unsplash.com/photo-1531572753322-ad063cecc140?w=800", filename: "rome_iconic_5" }
    ],
    reviews: [],
    owner: null
  },
  {
    title: "Taj Viewpoint Villa – Agra",
    description:
      "Wake up to the world's most recognisable monument from your private villa terrace just 900 metres from the Taj Mahal. This Mughal-inspired property features arched corridors, water channels, and hand-inlaid marble floors that echo the grandeur of the monument itself. Watch the Taj change colour through sunrise, afternoon, and dusk from the rooftop chai lounge. An irreplaceable experience.",
    price: 16000,
    location: "Agra",
    country: "India",
    category: "Iconic",
    geometry: { type: "Point", coordinates: [78.0421, 27.1751] },
    images: [
      { url: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800", filename: "agra_iconic_1" },
      { url: "https://images.unsplash.com/photo-1587135941948-670b381f08ce?w=800", filename: "agra_iconic_2" },
      { url: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800", filename: "agra_iconic_3" },
      { url: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800", filename: "agra_iconic_4" },
      { url: "https://images.unsplash.com/photo-1585468274952-66591eb14165?w=800", filename: "agra_iconic_5" }
    ],
    reviews: [],
    owner: null
  },
  {
    title: "Acropolis View Apartment – Athens",
    description:
      "A beautifully renovated neoclassical apartment in Athens' Koukaki neighbourhood with a rooftop plunge pool facing the illuminated Acropolis. The interior celebrates Greek heritage through terrazzo floors, olive wood furniture, and white Cycladic plaster walls. Mornings begin with Greek yogurt and thyme honey on the terrace as the city stirs below. A stunning base for exploring ancient Athens.",
    price: 13500,
    location: "Athens",
    country: "Greece",
    category: "Iconic",
    geometry: { type: "Point", coordinates: [23.7275, 37.9755] },
    images: [
      { url: "https://images.unsplash.com/photo-1555993539-1732b0258235?w=800", filename: "athens_iconic_1" },
      { url: "https://images.unsplash.com/photo-1561051454-3c1c77c7b38a?w=800", filename: "athens_iconic_2" },
      { url: "https://images.unsplash.com/photo-1548438294-1ad5d5f4f063?w=800", filename: "athens_iconic_3" },
      { url: "https://images.unsplash.com/photo-1555993539-1732b0258235?w=800", filename: "athens_iconic_4" },
      { url: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800", filename: "athens_iconic_5" }
    ],
    reviews: [],
    owner: null
  },
  {
    title: "Opera House Harbour Suite – Sydney",
    description:
      "An extraordinary harbour-side suite with arguably the finest view of the Sydney Opera House available to private guests. Floor-to-ceiling windows frame the iconic shells against a constantly changing harbour canvas — ferries, sailboats, and golden light. The apartment is styled in a refined Australian palette of sandstone, eucalyptus green, and deep ocean blue. Truly world-class.",
    price: 22000,
    location: "Sydney",
    country: "Australia",
    category: "Iconic",
    geometry: { type: "Point", coordinates: [151.2153, -33.8568] },
    images: [
      { url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800", filename: "sydney_iconic_1" },
      { url: "https://images.unsplash.com/photo-1524293581917-878a6d017c71?w=800", filename: "sydney_iconic_2" },
      { url: "https://images.unsplash.com/photo-1533130061792-64b345e4a833?w=800", filename: "sydney_iconic_3" },
      { url: "https://images.unsplash.com/photo-1612365779979-3c1f2bce5a2b?w=800", filename: "sydney_iconic_4" },
      { url: "https://images.unsplash.com/photo-1572382489163-a4fa2d4ac918?w=800", filename: "sydney_iconic_5" }
    ],
    reviews: [],
    owner: null
  },
  {
    title: "Machu Picchu Cloud Lodge – Aguas Calientes",
    description:
      "A cloud-kissed mountain lodge at the gateway to Machu Picchu, offering terraced gardens, hot spring pools, and misty Andean valley views that will leave you speechless. The stone-and-timber construction honours Inca architectural traditions. Your host arranges sunrise entry permits to the citadel for a private pre-crowd experience. After your visit, unwind with a Pisco sour beside the fire.",
    price: 17000,
    location: "Aguas Calientes",
    country: "Peru",
    category: "Iconic",
    geometry: { type: "Point", coordinates: [-72.5269, -13.1631] },
    images: [
      { url: "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=800", filename: "peru_iconic_1" },
      { url: "https://images.unsplash.com/photo-1580502304784-8985b7eb7260?w=800", filename: "peru_iconic_2" },
      { url: "https://images.unsplash.com/photo-1529569222029-a7ec7b4d1c8a?w=800", filename: "peru_iconic_3" },
      { url: "https://images.unsplash.com/photo-1484910292437-025e5d13ce87?w=800", filename: "peru_iconic_4" },
      { url: "https://images.unsplash.com/photo-1575223970966-76ae61ee7838?w=800", filename: "peru_iconic_5" }
    ],
    reviews: [],
    owner: null
  },

  // ─────────────────────────────────────────────
  // MOUNTAINS (6)
  // ─────────────────────────────────────────────
  {
    title: "Alpine Ember Cabin – Zermatt",
    description:
      "A hand-hewn Swiss chalet perched at 2,100 metres with direct views of the Matterhorn from every window. The interior celebrates alpine craftsmanship — carved pine, hand-stitched woolens, and a roaring stone fireplace. Ski-in/ski-out access to the Zermatt runs makes it a winter dream. In summer, wildflower meadows and glacier hikes await right at your doorstep.",
    price: 21000,
    location: "Zermatt",
    country: "Switzerland",
    category: "Mountains",
    geometry: { type: "Point", coordinates: [7.7491, 46.0207] },
    images: [
      { url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800", filename: "zermatt_cabin_1" },
      { url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800", filename: "zermatt_cabin_2" },
      { url: "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?w=800", filename: "zermatt_cabin_3" },
      { url: "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=800", filename: "zermatt_cabin_4" },
      { url: "https://images.unsplash.com/photo-1418985991508-e47386d96a71?w=800", filename: "zermatt_cabin_5" }
    ],
    reviews: [],
    owner: null
  },
  {
    title: "Himalayan Nest – Manali Pine Retreat",
    description:
      "Nestled within an ancient deodar pine forest at 2,050 metres above sea level, this cedar-wood retreat overlooks the Beas River valley and snow-dusted Himalayan peaks. The interiors are warm with Kullu shawl cushions, local pottery, and a bukhari wood-burning stove. Guided treks to Solang Valley and Rohtang Pass can be arranged. A soulful escape from the plains.",
    price: 6800,
    location: "Manali",
    country: "India",
    category: "Mountains",
    geometry: { type: "Point", coordinates: [77.1892, 32.2432] },
    images: [
      { url: "https://images.unsplash.com/photo-1566837945700-30057527ade0?w=800", filename: "manali_cabin_1" },
      { url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800", filename: "manali_cabin_2" },
      { url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800", filename: "manali_cabin_3" },
      { url: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800", filename: "manali_cabin_4" },
      { url: "https://images.unsplash.com/photo-1482192505345-5852310b3c67?w=800", filename: "manali_cabin_5" }
    ],
    reviews: [],
    owner: null
  },
  {
    title: "Dolomite Perch – Cortina d'Ampezzo Chalet",
    description:
      "A stunning stone-and-timber chalet on the edge of an Italian Alpine meadow, framed by the impossibly dramatic spires of the Dolomites. The private hot tub faces a panorama that takes your breath away at every hour. Inside, Tyrolean antiques sit alongside top-of-the-range ski equipment and a wine cellar stocked with Alto Adige bottles. Pure mountain theatre.",
    price: 19000,
    location: "Cortina d'Ampezzo",
    country: "Italy",
    category: "Mountains",
    geometry: { type: "Point", coordinates: [12.1357, 46.5401] },
    images: [
      { url: "https://images.unsplash.com/photo-1491555103944-7c647fd857e6?w=800", filename: "dolomite_chalet_1" },
      { url: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=800", filename: "dolomite_chalet_2" },
      { url: "https://images.unsplash.com/photo-1418985991508-e47386d96a71?w=800", filename: "dolomite_chalet_3" },
      { url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800", filename: "dolomite_chalet_4" },
      { url: "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?w=800", filename: "dolomite_chalet_5" }
    ],
    reviews: [],
    owner: null
  },
  {
    title: "Tetons Timber House – Jackson Hole",
    description:
      "A classic Wyoming mountain house at the foot of the Grand Tetons, surrounded by aspen groves that turn gold in autumn. The great room features a 20-foot stone chimney, handmade elk-antler chandeliers, and leather Chesterfield sofas. Elk and bison often graze at dusk just outside the windows. Yellowstone is 90 minutes away; world-class skiing is on the doorstep.",
    price: 16500,
    location: "Jackson Hole",
    country: "United States",
    category: "Mountains",
    geometry: { type: "Point", coordinates: [-110.7624, 43.4799] },
    images: [
      { url: "https://images.unsplash.com/photo-1449452198679-05c7fd30f416?w=800", filename: "tetons_cabin_1" },
      { url: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800", filename: "tetons_cabin_2" },
      { url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800", filename: "tetons_cabin_3" },
      { url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800", filename: "tetons_cabin_4" },
      { url: "https://images.unsplash.com/photo-1471958680802-1345a694ba6d?w=800", filename: "tetons_cabin_5" }
    ],
    reviews: [],
    owner: null
  },
  {
    title: "Fjord Nook – Flåm Mountain Cottage",
    description:
      "A compact yet beautifully designed Norwegian mountain cottage clinging to a hillside above the Aurlandsfjord, with views stretching down to the glassy water below. The interiors are classically Scandinavian — pale birch, sheepskin throws, and candles. The world-famous Flåm Railway departs from the village. On clear nights, the Northern Lights shimmer above the snowfields.",
    price: 12500,
    location: "Flåm",
    country: "Norway",
    category: "Mountains",
    geometry: { type: "Point", coordinates: [7.1155, 60.8634] },
    images: [
      { url: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800", filename: "flam_cottage_1" },
      { url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800", filename: "flam_cottage_2" },
      { url: "https://images.unsplash.com/photo-1480497490787-505ec076689f?w=800", filename: "flam_cottage_3" },
      { url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800", filename: "flam_cottage_4" },
      { url: "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=800", filename: "flam_cottage_5" }
    ],
    reviews: [],
    owner: null
  },
  {
    title: "Atlas Summit Lodge – Toubkal Foothills",
    description:
      "A rustic-luxury Berber lodge in the High Atlas foothills, perched at 1,800 metres with panoramic views toward the summit of Jebel Toubkal, North Africa's highest peak. Mud-brick walls, cedar woodwork, and Beni Ourain rugs keep the nights warm. Your host serves traditional tagine and harira on a terrace facing the mountains. A rare blend of adventure and comfort.",
    price: 5800,
    location: "Imlil",
    country: "Morocco",
    category: "Mountains",
    geometry: { type: "Point", coordinates: [-7.9167, 31.1333] },
    images: [
      { url: "https://images.unsplash.com/photo-1533130061792-64b345e4a833?w=800", filename: "atlas_lodge_1" },
      { url: "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=800", filename: "atlas_lodge_2" },
      { url: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800", filename: "atlas_lodge_3" },
      { url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800", filename: "atlas_lodge_4" },
      { url: "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=800", filename: "atlas_lodge_5" }
    ],
    reviews: [],
    owner: null
  },

  // ─────────────────────────────────────────────
  // CASTLES (6)
  // ─────────────────────────────────────────────
  {
    title: "Château des Rêves – Loire Valley Suite",
    description:
      "Spend the night inside a genuine 15th-century Loire Valley château with a drawbridge, a moat of still water, and turreted towers rising above the vineyards. Your suite features a four-poster canopy bed, tapestried walls, and a period fireplace. The château's award-winning Chenin Blanc is uncorked for you each evening at sunset. A fairytale made entirely real.",
    price: 23000,
    location: "Amboise",
    country: "France",
    category: "Castles",
    geometry: { type: "Point", coordinates: [0.9842, 47.4133] },
    images: [
      { url: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=800", filename: "loire_castle_1" },
      { url: "https://images.unsplash.com/photo-1570939274717-7eda259b50ed?w=800", filename: "loire_castle_2" },
      { url: "https://images.unsplash.com/photo-1548348383-e2b36e0d9741?w=800", filename: "loire_castle_3" },
      { url: "https://images.unsplash.com/photo-1530653333484-d4d18c0c1fb0?w=800", filename: "loire_castle_4" },
      { url: "https://images.unsplash.com/photo-1533154683836-84ea7a0bc310?w=800", filename: "loire_castle_5" }
    ],
    reviews: [],
    owner: null
  },
  {
    title: "Clan MacLeod Keep – Isle of Skye",
    description:
      "A centuries-old Scottish tower house on the Isle of Skye, perched above sea cliffs with views of the Outer Hebrides on clear days. Stone spiral staircases, great hall dining, and roaring peat fires create an atmosphere of highland romance. The hosts, descendants of the original clan, share stories over a dram of local single malt. A deeply atmospheric and unique stay.",
    price: 18000,
    location: "Isle of Skye",
    country: "United Kingdom",
    category: "Castles",
    geometry: { type: "Point", coordinates: [-6.2013, 57.2736] },
    images: [
      { url: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800", filename: "skye_castle_1" },
      { url: "https://images.unsplash.com/photo-1570939274717-7eda259b50ed?w=800", filename: "skye_castle_2" },
      { url: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=800", filename: "skye_castle_3" },
      { url: "https://images.unsplash.com/photo-1530653333484-d4d18c0c1fb0?w=800", filename: "skye_castle_4" },
      { url: "https://images.unsplash.com/photo-1546530236-f2a0a8f27c4f?w=800", filename: "skye_castle_5" }
    ],
    reviews: [],
    owner: null
  },
  {
    title: "Belvedere Palazzo – Tuscany Hilltop Fortress",
    description:
      "A Renaissance hilltop fortress turned exclusive villa in the Chianti wine country, commanding 360-degree views of Tuscan hills dotted with cypress and olive trees. The grand salons, frescoed ceilings, and a billiard room with original Renaissance panelling transport you to a bygone era of Italian nobility. A heated outdoor pool and private sommelier complete this extraordinary estate.",
    price: 24500,
    location: "Siena",
    country: "Italy",
    category: "Castles",
    geometry: { type: "Point", coordinates: [11.3307, 43.3188] },
    images: [
      { url: "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=800", filename: "tuscany_castle_1" },
      { url: "https://images.unsplash.com/photo-1552832230-c0197dd975cb?w=800", filename: "tuscany_castle_2" },
      { url: "https://images.unsplash.com/photo-1548348383-e2b36e0d9741?w=800", filename: "tuscany_castle_3" },
      { url: "https://images.unsplash.com/photo-1533154683836-84ea7a0bc310?w=800", filename: "tuscany_castle_4" },
      { url: "https://images.unsplash.com/photo-1570939274717-7eda259b50ed?w=800", filename: "tuscany_castle_5" }
    ],
    reviews: [],
    owner: null
  },
  {
    title: "Schloss Riviera – Rhine River Fortress",
    description:
      "A medieval German Schloss dramatically positioned on a cliff above the Rhine, with vineyard terraces cascading down to the river below. The Great Hall features vaulted stone ceilings, a 16th-century tiled stove, and a long banquet table where private dinners are hosted each evening. Rhine river cruises, wine cellar tours, and falconry experiences are available to guests.",
    price: 20500,
    location: "Bacharach",
    country: "Germany",
    category: "Castles",
    geometry: { type: "Point", coordinates: [7.7699, 50.0591] },
    images: [
      { url: "https://images.unsplash.com/photo-1546530236-f2a0a8f27c4f?w=800", filename: "rhine_castle_1" },
      { url: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=800", filename: "rhine_castle_2" },
      { url: "https://images.unsplash.com/photo-1530653333484-d4d18c0c1fb0?w=800", filename: "rhine_castle_3" },
      { url: "https://images.unsplash.com/photo-1570939274717-7eda259b50ed?w=800", filename: "rhine_castle_4" },
      { url: "https://images.unsplash.com/photo-1533154683836-84ea7a0bc310?w=800", filename: "rhine_castle_5" }
    ],
    reviews: [],
    owner: null
  },
  {
    title: "Maharaja's Garh – Rajasthan Fort Stay",
    description:
      "Sleep within the ramparts of a 16th-century hilltop fort in the Aravalli hills, now an ultra-exclusive heritage stay managed by the royal family. Chandeliers, miniature paintings, and hand-carved sandstone jharokhas adorn the suites. Guests dine under the stars on the fort ramparts with folk musicians performing live. A golden sunrise over the surrounding desert is yours every morning.",
    price: 15500,
    location: "Jodhpur",
    country: "India",
    category: "Castles",
    geometry: { type: "Point", coordinates: [73.0243, 26.2389] },
    images: [
      { url: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800", filename: "jodhpur_fort_1" },
      { url: "https://images.unsplash.com/photo-1557261534-a588b9c1b9c7?w=800", filename: "jodhpur_fort_2" },
      { url: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800", filename: "jodhpur_fort_3" },
      { url: "https://images.unsplash.com/photo-1570939274717-7eda259b50ed?w=800", filename: "jodhpur_fort_4" },
      { url: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=800", filename: "jodhpur_fort_5" }
    ],
    reviews: [],
    owner: null
  },
  {
    title: "Castillo del Mar – Andalusian Clifftop Parador",
    description:
      "A dramatic Moorish citadel converted into a parador on the Costa de la Luz, where the Atlantic and Mediterranean seas converge on the horizon below. Arched doorways, azulejo tile fountains, and bougainvillea-draped courtyards fill the property with authentic Andalusian character. Evenings are spent on the battlement terrace with fino sherry and tapas. History, drama, and beauty combined.",
    price: 14000,
    location: "Tarifa",
    country: "Spain",
    category: "Castles",
    geometry: { type: "Point", coordinates: [-5.6069, 36.0137] },
    images: [
      { url: "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=800", filename: "tarifa_castle_1" },
      { url: "https://images.unsplash.com/photo-1533154683836-84ea7a0bc310?w=800", filename: "tarifa_castle_2" },
      { url: "https://images.unsplash.com/photo-1530653333484-d4d18c0c1fb0?w=800", filename: "tarifa_castle_3" },
      { url: "https://images.unsplash.com/photo-1548348383-e2b36e0d9741?w=800", filename: "tarifa_castle_4" },
      { url: "https://images.unsplash.com/photo-1570939274717-7eda259b50ed?w=800", filename: "tarifa_castle_5" }
    ],
    reviews: [],
    owner: null
  },

  // ─────────────────────────────────────────────
  // CAMPING (6)
  // ─────────────────────────────────────────────
  {
    title: "Redwood Ember Camp – California Forest",
    description:
      "A glamorous canvas tent retreat nestled between 2,000-year-old coastal redwoods in northern California. Your elevated platform tent features a king-sized bed, Persian rug, wood-burning stove, and a clawfoot bathtub on the private deck. Nightly bonfire gatherings with s'mores and acoustic guitar are hosted by the camp team. Sunrise through the ancient redwoods is simply indescribable.",
    price: 11500,
    location: "Eureka",
    country: "United States",
    category: "Camping",
    geometry: { type: "Point", coordinates: [-124.1637, 40.8021] },
    images: [
      { url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800", filename: "redwood_camp_1" },
      { url: "https://images.unsplash.com/photo-1537225228614-56cc3556d7ed?w=800", filename: "redwood_camp_2" },
      { url: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=800", filename: "redwood_camp_3" },
      { url: "https://images.unsplash.com/photo-1471115853179-bb1d604434e0?w=800", filename: "redwood_camp_4" },
      { url: "https://images.unsplash.com/photo-1563299796-17596ed6b017?w=800", filename: "redwood_camp_5" }
    ],
    reviews: [],
    owner: null
  },
  {
    title: "Sahara Star Camp – Merzouga Desert",
    description:
      "A luxury Bedouin-style tented camp deep in the Sahara at Erg Chebbi, where towering orange dunes roll to the horizon in every direction. Arrive by camelback at sunset, dine on slow-cooked mechoui under an ocean of stars, and sleep in an en-suite desert tent on a pillow-top mattress. Dawn brings a private dune climb and fresh-brewed mint tea. Pure magic.",
    price: 8500,
    location: "Merzouga",
    country: "Morocco",
    category: "Camping",
    geometry: { type: "Point", coordinates: [-4.0167, 31.1000] },
    images: [
      { url: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800", filename: "sahara_camp_1" },
      { url: "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=800", filename: "sahara_camp_2" },
      { url: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=800", filename: "sahara_camp_3" },
      { url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800", filename: "sahara_camp_4" },
      { url: "https://images.unsplash.com/photo-1563299796-17596ed6b017?w=800", filename: "sahara_camp_5" }
    ],
    reviews: [],
    owner: null
  },
  {
    title: "Patagonia Wild Camp – Torres del Paine",
    description:
      "An expedition-grade glamping experience in Chile's Torres del Paine National Park, set against the otherworldly granite towers and emerald lakes of Patagonia. Your insulated dome tent features thermal sleeping bags, hot water bottles, and private toilet facilities. Guided treks to Mirador Las Torres are led by certified mountain guides. An adventure stay with genuine wilderness immersion.",
    price: 14500,
    location: "Torres del Paine",
    country: "Chile",
    category: "Camping",
    geometry: { type: "Point", coordinates: [-72.9255, -50.9423] },
    images: [
      { url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800", filename: "patagonia_camp_1" },
      { url: "https://images.unsplash.com/photo-1537225228614-56cc3556d7ed?w=800", filename: "patagonia_camp_2" },
      { url: "https://images.unsplash.com/photo-1471115853179-bb1d604434e0?w=800", filename: "patagonia_camp_3" },
      { url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800", filename: "patagonia_camp_4" },
      { url: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=800", filename: "patagonia_camp_5" }
    ],
    reviews: [],
    owner: null
  },
  {
    title: "Spiti Valley Canvas Lodge – Himalayan Camping",
    description:
      "A high-altitude wilderness camp at 3,800 metres in the cold desert landscape of Spiti Valley, with crystal-clear skies that reveal the Milky Way in jaw-dropping detail. The insulated canvas lodge features a wood-stove, warm blankets, and solar-powered fairy lights. Astro-photography sessions, monastery visits, and snowfield walks are part of every package. A rare find in one of India's most remote regions.",
    price: 5200,
    location: "Kaza",
    country: "India",
    category: "Camping",
    geometry: { type: "Point", coordinates: [78.0714, 32.2275] },
    images: [
      { url: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800", filename: "spiti_camp_1" },
      { url: "https://images.unsplash.com/photo-1471115853179-bb1d604434e0?w=800", filename: "spiti_camp_2" },
      { url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800", filename: "spiti_camp_3" },
      { url: "https://images.unsplash.com/photo-1537225228614-56cc3556d7ed?w=800", filename: "spiti_camp_4" },
      { url: "https://images.unsplash.com/photo-1563299796-17596ed6b017?w=800", filename: "spiti_camp_5" }
    ],
    reviews: [],
    owner: null
  },
  {
    title: "Serengeti Plains Camp – Tanzania",
    description:
      "A classic East African tented camp positioned on a private conservancy adjoining the Serengeti, where the Great Migration passes within metres of your tent. Bush walks, game drives, and sundowners on the kopje are led by expert Maasai guides. The open-sided mess tent serves extraordinary meals under the African sky. Fall asleep to lions calling in the far distance.",
    price: 19500,
    location: "Serengeti",
    country: "Tanzania",
    category: "Camping",
    geometry: { type: "Point", coordinates: [34.8333, -2.3333] },
    images: [
      { url: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=800", filename: "serengeti_camp_1" },
      { url: "https://images.unsplash.com/photo-1475113548492-35c0fba7a0bb?w=800", filename: "serengeti_camp_2" },
      { url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800", filename: "serengeti_camp_3" },
      { url: "https://images.unsplash.com/photo-1537225228614-56cc3556d7ed?w=800", filename: "serengeti_camp_4" },
      { url: "https://images.unsplash.com/photo-1471115853179-bb1d604434e0?w=800", filename: "serengeti_camp_5" }
    ],
    reviews: [],
    owner: null
  },
  {
    title: "Blue Mountains Escarpment Camp – NSW",
    description:
      "A boutique wilderness camp on the sandstone escarpment above the Jamison Valley in the Blue Mountains of New South Wales, with sweeping canyon views and eucalyptus-scented air. The camp features premium Safari-style tents with raised timber platforms and private decks. Guided abseiling, canyon walks, and night-sky sessions are offered daily. The Three Sisters rock formation glows at sunset right before you.",
    price: 9200,
    location: "Katoomba",
    country: "Australia",
    category: "Camping",
    geometry: { type: "Point", coordinates: [150.3144, -33.7128] },
    images: [
      { url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800", filename: "bluemtn_camp_1" },
      { url: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=800", filename: "bluemtn_camp_2" },
      { url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800", filename: "bluemtn_camp_3" },
      { url: "https://images.unsplash.com/photo-1563299796-17596ed6b017?w=800", filename: "bluemtn_camp_4" },
      { url: "https://images.unsplash.com/photo-1537225228614-56cc3556d7ed?w=800", filename: "bluemtn_camp_5" }
    ],
    reviews: [],
    owner: null
  },

  // ─────────────────────────────────────────────
  // FARMS (6)
  // ─────────────────────────────────────────────
  {
    title: "Tuscan Harvest Farm – Chianti Estate",
    description:
      "A working organic olive and wine estate in the heart of Chianti, where you can harvest grapes in autumn, press olive oil in winter, or simply laze among sunflowers in summer. The stone farmhouse has been in the same family for six generations and radiates genuine Italian rural character. Dinners use produce straight from the farm; breakfasts feature honey from the estate's own hives.",
    price: 10500,
    location: "Greve in Chianti",
    country: "Italy",
    category: "Farms",
    geometry: { type: "Point", coordinates: [11.3131, 43.5847] },
    images: [
      { url: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800", filename: "tuscany_farm_1" },
      { url: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800", filename: "tuscany_farm_2" },
      { url: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800", filename: "tuscany_farm_3" },
      { url: "https://images.unsplash.com/photo-1444858291040-58f756a3bdd6?w=800", filename: "tuscany_farm_4" },
      { url: "https://images.unsplash.com/photo-1500076656116-558758c991c1?w=800", filename: "tuscany_farm_5" }
    ],
    reviews: [],
    owner: null
  },
  {
    title: "Munnar Tea Bungalow – Kerala Highlands",
    description:
      "A lovingly restored colonial planter's bungalow set in the midst of Munnar's undulating tea estates at 1,600 metres. Verandahs wrapped in bougainvillea, rattan furniture, and period-correct fittings transport you to a golden era of hill-station life. Morning tea is picked from the estate's own bushes and brewed on your verandah. Spice garden walks and ayurvedic massages are available.",
    price: 7200,
    location: "Munnar",
    country: "India",
    category: "Farms",
    geometry: { type: "Point", coordinates: [77.0595, 10.0889] },
    images: [
      { url: "https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=800", filename: "munnar_farm_1" },
      { url: "https://images.unsplash.com/photo-1455156218388-5e61b526818b?w=800", filename: "munnar_farm_2" },
      { url: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800", filename: "munnar_farm_3" },
      { url: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800", filename: "munnar_farm_4" },
      { url: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800", filename: "munnar_farm_5" }
    ],
    reviews: [],
    owner: null
  },
  {
    title: "Provence Lavender Farm – Valensole Cottage",
    description:
      "A sun-baked stone cottage in the heart of Provence's Valensole plateau, surrounded by endless rows of lavender that fill the air with intoxicating scent each June and July. The interiors celebrate Provençal style — terracotta floors, dried herb bundles, and hand-painted faience pottery. Cycle through lavender fields, visit a local distillery, and pick your own bouquet to take home.",
    price: 9000,
    location: "Valensole",
    country: "France",
    category: "Farms",
    geometry: { type: "Point", coordinates: [5.9819, 43.8354] },
    images: [
      { url: "https://images.unsplash.com/photo-1499002238440-d264edd596ec?w=800", filename: "provence_farm_1" },
      { url: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800", filename: "provence_farm_2" },
      { url: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800", filename: "provence_farm_3" },
      { url: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800", filename: "provence_farm_4" },
      { url: "https://images.unsplash.com/photo-1444858291040-58f756a3bdd6?w=800", filename: "provence_farm_5" }
    ],
    reviews: [],
    owner: null
  },
  {
    title: "Hokkaido Dairy Escape – Furano Valley Farm",
    description:
      "A working dairy and flower farm in the lush Furano Valley of Hokkaido, Japan's agricultural heartland. In summer, rolling fields of lavender, poppies, and sunflowers create a patchwork of colour; in winter, deep powder covers the entire valley. The farmhouse is warm with local cedar, handmade quilts, and views of the rolling fields. Fresh milk, cheese, and soft-serve ice cream are made on-site daily.",
    price: 8800,
    location: "Furano",
    country: "Japan",
    category: "Farms",
    geometry: { type: "Point", coordinates: [142.3833, 43.3500] },
    images: [
      { url: "https://images.unsplash.com/photo-1471115853179-bb1d604434e0?w=800", filename: "hokkaido_farm_1" },
      { url: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800", filename: "hokkaido_farm_2" },
      { url: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800", filename: "hokkaido_farm_3" },
      { url: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800", filename: "hokkaido_farm_4" },
      { url: "https://images.unsplash.com/photo-1444858291040-58f756a3bdd6?w=800", filename: "hokkaido_farm_5" }
    ],
    reviews: [],
    owner: null
  },
  {
    title: "Karoo Sheep Stoop – Swartberg Farm Stay",
    description:
      "A vast working merino sheep farm in the Karoo's Big Sky country, set against the dramatic backdrop of the Swartberg mountain range. The restored Cape Dutch farmhouse features wide stoeps, whitewashed walls, and hand-embroidered linens. Sunsets here are legendary — the Karoo sky turns sixteen shades of orange and pink over an almost surreal landscape. Stargazing under a dark-sky reserve seals the deal.",
    price: 5500,
    location: "Prince Albert",
    country: "South Africa",
    category: "Farms",
    geometry: { type: "Point", coordinates: [22.0286, -33.2218] },
    images: [
      { url: "https://images.unsplash.com/photo-1500076656116-558758c991c1?w=800", filename: "karoo_farm_1" },
      { url: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800", filename: "karoo_farm_2" },
      { url: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800", filename: "karoo_farm_3" },
      { url: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800", filename: "karoo_farm_4" },
      { url: "https://images.unsplash.com/photo-1444858291040-58f756a3bdd6?w=800", filename: "karoo_farm_5" }
    ],
    reviews: [],
    owner: null
  },
  {
    title: "Willamette Vineyard Cottage – Oregon Wine Country",
    description:
      "A charming craftsman cottage tucked between rows of Pinot Noir vines in Oregon's Willamette Valley. Wake to deer grazing among the vines and end each day on your private deck with a glass of the estate's own barrel-aged wine. The kitchenette is stocked with artisan local produce. The cottage is a short drive from Dundee's acclaimed wine tasting rooms, farm-to-fork restaurants, and scenic cycling trails.",
    price: 12500,
    location: "Dundee",
    country: "United States",
    category: "Farms",
    geometry: { type: "Point", coordinates: [-123.0137, 45.2773] },
    images: [
      { url: "https://images.unsplash.com/photo-1452195100486-9cc805987862?w=800", filename: "oregon_farm_1" },
      { url: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800", filename: "oregon_farm_2" },
      { url: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800", filename: "oregon_farm_3" },
      { url: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800", filename: "oregon_farm_4" },
      { url: "https://images.unsplash.com/photo-1500076656116-558758c991c1?w=800", filename: "oregon_farm_5" }
    ],
    reviews: [],
    owner: null
  },

  // ─────────────────────────────────────────────
  // ARCTIC (6)
  // ─────────────────────────────────────────────
  {
    title: "Aurora Igloo – Saariselkä, Finnish Lapland",
    description:
      "A temperature-controlled glass igloo in the remote Finnish wilderness, designed specifically for watching the Northern Lights from the warmth of your king-sized bed. The thermal glass dome stays frost-free even at -30°C, providing a crystal-clear view of the auroras dancing overhead. Wake to a snow-white landscape of frozen pines; huskies wait outside to take you on a morning sled ride.",
    price: 22000,
    location: "Saariselkä",
    country: "Finland",
    category: "Arctic",
    geometry: { type: "Point", coordinates: [26.9726, 68.4260] },
    images: [
      { url: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800", filename: "finland_igloo_1" },
      { url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800", filename: "finland_igloo_2" },
      { url: "https://images.unsplash.com/photo-1491555103944-7c647fd857e6?w=800", filename: "finland_igloo_3" },
      { url: "https://images.unsplash.com/photo-1418985991508-e47386d96a71?w=800", filename: "finland_igloo_4" },
      { url: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800", filename: "finland_igloo_5" }
    ],
    reviews: [],
    owner: null
  },
  {
    title: "Polar Bear Lodge – Churchill, Manitoba",
    description:
      "The world's only lodge positioned directly on the migration route of wild polar bears along Hudson Bay. The lodge sits on elevated permafrost with floor-to-ceiling windows facing the tundra, and the resident naturalists lead twice-daily Tundra Buggy excursions. Beluga whales are visible in summer; auroras and polar bears dominate winter. A truly once-in-a-lifetime wilderness experience.",
    price: 24500,
    location: "Churchill",
    country: "Canada",
    category: "Arctic",
    geometry: { type: "Point", coordinates: [-94.1650, 58.7683] },
    images: [
      { url: "https://images.unsplash.com/photo-1477601263568-180e2c6d046e?w=800", filename: "churchill_lodge_1" },
      { url: "https://images.unsplash.com/photo-1491555103944-7c647fd857e6?w=800", filename: "churchill_lodge_2" },
      { url: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800", filename: "churchill_lodge_3" },
      { url: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800", filename: "churchill_lodge_4" },
      { url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800", filename: "churchill_lodge_5" }
    ],
    reviews: [],
    owner: null
  },
  {
    title: "Icefjord Suite – Ilulissat, Greenland",
    description:
      "A dramatic cliffside suite in Ilulissat, Greenland, positioned directly above the UNESCO-listed Icefjord where colossal icebergs calve from the Sermeq Kujalleq glacier and drift silently past your window. The minimalist interior of raw timber and stone keeps the focus entirely on the staggering natural theatre outside. Helicopter tours over the ice sheet and dogsled expeditions can be arranged.",
    price: 23500,
    location: "Ilulissat",
    country: "Greenland",
    category: "Arctic",
    geometry: { type: "Point", coordinates: [-51.0979, 69.2198] },
    images: [
      { url: "https://images.unsplash.com/photo-1480497490787-505ec076689f?w=800", filename: "greenland_suite_1" },
      { url: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800", filename: "greenland_suite_2" },
      { url: "https://images.unsplash.com/photo-1491555103944-7c647fd857e6?w=800", filename: "greenland_suite_3" },
      { url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800", filename: "greenland_suite_4" },
      { url: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800", filename: "greenland_suite_5" }
    ],
    reviews: [],
    owner: null
  },
  {
    title: "Sami Lavvu – Tromsø Arctic Wilderness",
    description:
      "An authentic Sami-designed lavvu (traditional tent) on a pristine snowfield outside Tromsø, heated to perfect comfort while the Arctic wilderness surrounds you. Sleep under reindeer hides and hand-woven woollen blankets as the aurora borealis paints the sky overhead. The Sami hosts share stories, joik songs, and traditional smoked reindeer meals by firelight. A cultural immersion as much as a stay.",
    price: 16000,
    location: "Tromsø",
    country: "Norway",
    category: "Arctic",
    geometry: { type: "Point", coordinates: [18.9553, 69.6492] },
    images: [
      { url: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=800", filename: "tromso_lavvu_1" },
      { url: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800", filename: "tromso_lavvu_2" },
      { url: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800", filename: "tromso_lavvu_3" },
      { url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800", filename: "tromso_lavvu_4" },
      { url: "https://images.unsplash.com/photo-1491555103944-7c647fd857e6?w=800", filename: "tromso_lavvu_5" }
    ],
    reviews: [],
    owner: null
  },
  {
    title: "Svalbard Snowfield Cabin – Longyearbyen",
    description:
      "The northernmost travel stay on Wanderlust — a heated expedition cabin at 78°N on the Svalbard archipelago, accessible by snowmobile across a frozen landscape of glaciers and mountains. Polar nights give way to auroras; the midnight sun blazes in summer. Guided polar bear safety walks, ice caving, and snowmobile glacier tours are the order of each day. As remote as it gets.",
    price: 25000,
    location: "Longyearbyen",
    country: "Norway",
    category: "Arctic",
    geometry: { type: "Point", coordinates: [15.6517, 78.2232] },
    images: [
      { url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800", filename: "svalbard_cabin_1" },
      { url: "https://images.unsplash.com/photo-1480497490787-505ec076689f?w=800", filename: "svalbard_cabin_2" },
      { url: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800", filename: "svalbard_cabin_3" },
      { url: "https://images.unsplash.com/photo-1491555103944-7c647fd857e6?w=800", filename: "svalbard_cabin_4" },
      { url: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800", filename: "svalbard_cabin_5" }
    ],
    reviews: [],
    owner: null
  },
  {
    title: "Ice Hotel Room – Jukkasjärvi, Sweden",
    description:
      "An extraordinary hand-sculpted room inside the world-famous ICEHOTEL in Jukkasjärvi, where every wall, ceiling, and piece of furniture is carved from the ice of the Torne River. Sleep in a -5°C art suite on reindeer skin and a specially designed Arctic sleeping bag. The adjacent warm chalets provide hot showers and a sauna. A new design is created by artists each winter — no two stays are ever the same.",
    price: 20000,
    location: "Jukkasjärvi",
    country: "Sweden",
    category: "Arctic",
    geometry: { type: "Point", coordinates: [20.6062, 67.8558] },
    images: [
      { url: "https://images.unsplash.com/photo-1581726690015-c9861fa5057f?w=800", filename: "icehotel_1" },
      { url: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800", filename: "icehotel_2" },
      { url: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800", filename: "icehotel_3" },
      { url: "https://images.unsplash.com/photo-1480497490787-505ec076689f?w=800", filename: "icehotel_4" },
      { url: "https://images.unsplash.com/photo-1491555103944-7c647fd857e6?w=800", filename: "icehotel_5" }
    ],
    reviews: [],
    owner: null
  },

  // ─────────────────────────────────────────────
  // DOMES (6)
  // ─────────────────────────────────────────────
  {
    title: "Cosmos Dome – Atacama Desert, Chile",
    description:
      "A luxury geodesic dome nestled in the driest desert on Earth, where the absence of light pollution creates the finest stargazing conditions in the world. The transparent upper hemisphere opens to reveal the Milky Way in resolution you've never seen. Inside, Danish minimalist interiors, a temperature-controlled climate system, and a telescope await. An astronomer's paradise with a five-star bed.",
    price: 18000,
    location: "San Pedro de Atacama",
    country: "Chile",
    category: "Domes",
    geometry: { type: "Point", coordinates: [-67.9922, -22.9087] },
    images: [
      { url: "https://images.unsplash.com/photo-1449452198679-05c7fd30f416?w=800", filename: "atacama_dome_1" },
      { url: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800", filename: "atacama_dome_2" },
      { url: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800", filename: "atacama_dome_3" },
      { url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800", filename: "atacama_dome_4" },
      { url: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800", filename: "atacama_dome_5" }
    ],
    reviews: [],
    owner: null
  },
  {
    title: "Forest Bubble Suite – Dordogne, France",
    description:
      "A translucent spherical dome suspended in the treetops of a Périgord oak forest, offering an immersive 270-degree forest experience day and night. The interior is a masterclass in thoughtful design — curved walls of near-invisible polycarbonate, a petal-shaped bed, and a freestanding copper bath. Owls and deer are your evening neighbours. Breakfast arrives in a wicker basket hung on your door at sunrise.",
    price: 14500,
    location: "Sarlat-la-Canéda",
    country: "France",
    category: "Domes",
    geometry: { type: "Point", coordinates: [1.2157, 44.8896] },
    images: [
      { url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?w=800", filename: "dordogne_dome_1" },
      { url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800", filename: "dordogne_dome_2" },
      { url: "https://images.unsplash.com/photo-1449452198679-05c7fd30f416?w=800", filename: "dordogne_dome_3" },
      { url: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800", filename: "dordogne_dome_4" },
      { url: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800", filename: "dordogne_dome_5" }
    ],
    reviews: [],
    owner: null
  },
  {
    title: "Vineyard Dome – Yarra Valley, Australia",
    description:
      "A sleek architectural dome positioned at the edge of a Yarra Valley vineyard, with panoramic views across rolling vine rows and the Great Dividing Range beyond. Full-length curved glass walls dissolve the boundary between inside and outside. A complimentary tasting of the estate's wines is delivered on arrival, alongside an artisan cheese board. Melbourne is just 90 minutes away, making this a perfect weekend escape.",
    price: 13000,
    location: "Healesville",
    country: "Australia",
    category: "Domes",
    geometry: { type: "Point", coordinates: [145.5118, -37.6563] },
    images: [
      { url: "https://images.unsplash.com/photo-1452195100486-9cc805987862?w=800", filename: "yarra_dome_1" },
      { url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800", filename: "yarra_dome_2" },
      { url: "https://images.unsplash.com/photo-1449452198679-05c7fd30f416?w=800", filename: "yarra_dome_3" },
      { url: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800", filename: "yarra_dome_4" },
      { url: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800", filename: "yarra_dome_5" }
    ],
    reviews: [],
    owner: null
  },
  {
    title: "Lakeshore Crystal Dome – Interlaken",
    description:
      "A futuristic crystal dome perched at the edge of Lake Thun in the Swiss Alps, with the Eiger, Mönch, and Jungfrau framed directly above your bed through the panoramic glass ceiling. The design is spare and precise — a floating platform bed, mood-lit heated floors, and a rainfall shower facing the mountains. Open the dome hatch on warm nights for direct open-air sleeping under the stars.",
    price: 23000,
    location: "Interlaken",
    country: "Switzerland",
    category: "Domes",
    geometry: { type: "Point", coordinates: [7.8632, 46.6863] },
    images: [
      { url: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800", filename: "interlaken_dome_1" },
      { url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800", filename: "interlaken_dome_2" },
      { url: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800", filename: "interlaken_dome_3" },
      { url: "https://images.unsplash.com/photo-1449452198679-05c7fd30f416?w=800", filename: "interlaken_dome_4" },
      { url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?w=800", filename: "interlaken_dome_5" }
    ],
    reviews: [],
    owner: null
  },
  {
    title: "Kalahari Sky Dome – Tswalu, South Africa",
    description:
      "A private stargazing dome deep inside the Tswalu Kalahari Reserve, the largest private game reserve in South Africa. By day, cheetah, pangolin, and desert-adapted rhino wander past your dome; by night, an astronomer arrives to guide you through the Southern Hemisphere's spectacular night sky. The dome's retractable roof and heated floor ensure maximum comfort under the infinite African sky.",
    price: 21500,
    location: "Tswalu",
    country: "South Africa",
    category: "Domes",
    geometry: { type: "Point", coordinates: [22.3717, -27.1033] },
    images: [
      { url: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800", filename: "kalahari_dome_1" },
      { url: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800", filename: "kalahari_dome_2" },
      { url: "https://images.unsplash.com/photo-1449452198679-05c7fd30f416?w=800", filename: "kalahari_dome_3" },
      { url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800", filename: "kalahari_dome_4" },
      { url: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800", filename: "kalahari_dome_5" }
    ],
    reviews: [],
    owner: null
  },
  {
    title: "Zen Sphere – Okayama Bamboo Grove",
    description:
      "A Japanese-designed transparent sphere suspended above a private bamboo grove in Okayama Prefecture, combining cutting-edge architecture with the ancient Japanese philosophy of living in harmony with nature. The circular interior features a futon on a circular platform, a bamboo-screen wet room, and no television — only the sound of wind through the bamboo and birdsong. A deeply restorative escape.",
    price: 11000,
    location: "Okayama",
    country: "Japan",
    category: "Domes",
    geometry: { type: "Point", coordinates: [133.9350, 34.6551] },
    images: [
      { url: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800", filename: "okayama_dome_1" },
      { url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?w=800", filename: "okayama_dome_2" },
      { url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800", filename: "okayama_dome_3" },
      { url: "https://images.unsplash.com/photo-1449452198679-05c7fd30f416?w=800", filename: "okayama_dome_4" },
      { url: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800", filename: "okayama_dome_5" }
    ],
    reviews: [],
    owner: null
  },

  // ─────────────────────────────────────────────
  // BOATS (6)
  // ─────────────────────────────────────────────
  {
    title: "Dal Lake Shikara Houseboat – Srinagar",
    description:
      "A hand-carved cedar houseboat moored on the legendary Dal Lake in Kashmir, with a private sun deck from which snow-capped Himalayan peaks are reflected in the still water at dawn. Interiors feature ornate Kashmiri walnut woodwork, hand-knotted silk rugs, and copper samovars filled with noon chai. Your shikara man ferries you to the floating vegetable market each morning. Pure Kashmiri grace.",
    price: 7800,
    location: "Srinagar",
    country: "India",
    category: "Boats",
    geometry: { type: "Point", coordinates: [74.7973, 34.0837] },
    images: [
      { url: "https://images.unsplash.com/photo-1566552881560-0be862a7c445?w=800", filename: "srinagar_houseboat_1" },
      { url: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800", filename: "srinagar_houseboat_2" },
      { url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800", filename: "srinagar_houseboat_3" },
      { url: "https://images.unsplash.com/photo-1518479427703-f8e58e4be79d?w=800", filename: "srinagar_houseboat_4" },
      { url: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800", filename: "srinagar_houseboat_5" }
    ],
    reviews: [],
    owner: null
  },
  {
    title: "Gulet Escapes – Aegean Blue Cruise Yacht",
    description:
      "A classic Turkish gulet moored in Göcek's turquoise bays, available as a private crewed charter for 2–8 guests. Each morning your captain anchors in a new secluded cove unreachable by land. Swim from the boat's ladder into crystal-clear Aegean water, then return to fresh mezes prepared by the on-board chef. Sunsets over the Greek islands from the bow deck are entirely cinematic.",
    price: 20000,
    location: "Göcek",
    country: "Turkey",
    category: "Boats",
    geometry: { type: "Point", coordinates: [28.9395, 36.7486] },
    images: [
      { url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800", filename: "aegean_gulet_1" },
      { url: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800", filename: "aegean_gulet_2" },
      { url: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800", filename: "aegean_gulet_3" },
      { url: "https://images.unsplash.com/photo-1518479427703-f8e58e4be79d?w=800", filename: "aegean_gulet_4" },
      { url: "https://images.unsplash.com/photo-1566552881560-0be862a7c445?w=800", filename: "aegean_gulet_5" }
    ],
    reviews: [],
    owner: null
  },
  {
    title: "Backwater Kettuvallam – Alleppey, Kerala",
    description:
      "A traditional rice barge (kettuvallam) converted into a floating boutique hotel drifting through the serene Kerala backwaters. Coconut palms, paddy fields, and village life drift past as you lounge on the sun deck with a tender coconut in hand. Your on-board chef prepares authentic Kerala meals — fish curry, appam, and fresh catch from the backwaters. An unhurried, deeply enchanting experience.",
    price: 9500,
    location: "Alleppey",
    country: "India",
    category: "Boats",
    geometry: { type: "Point", coordinates: [76.3388, 9.4981] },
    images: [
      { url: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800", filename: "kerala_boat_1" },
      { url: "https://images.unsplash.com/photo-1566552881560-0be862a7c445?w=800", filename: "kerala_boat_2" },
      { url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800", filename: "kerala_boat_3" },
      { url: "https://images.unsplash.com/photo-1518479427703-f8e58e4be79d?w=800", filename: "kerala_boat_4" },
      { url: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800", filename: "kerala_boat_5" }
    ],
    reviews: [],
    owner: null
  },
  {
    title: "Canal Barge Loft – Bruges Waterway Suite",
    description:
      "A beautifully converted Belgian canal barge moored in the heart of medieval Bruges, offering an intimate floating retreat in Europe's most romantic small city. The barge features a galley kitchen, a living room panelled in reclaimed elm, and a bedroom with portholes framing the city's iconic spires reflected in the water below. Cobblestones, chocolate shops, and the Groeningemuseum are steps away.",
    price: 12500,
    location: "Bruges",
    country: "Belgium",
    category: "Boats",
    geometry: { type: "Point", coordinates: [3.2247, 51.2093] },
    images: [
      { url: "https://images.unsplash.com/photo-1518479427703-f8e58e4be79d?w=800", filename: "bruges_barge_1" },
      { url: "https://images.unsplash.com/photo-1566552881560-0be862a7c445?w=800", filename: "bruges_barge_2" },
      { url: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800", filename: "bruges_barge_3" },
      { url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800", filename: "bruges_barge_4" },
      { url: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800", filename: "bruges_barge_5" }
    ],
    reviews: [],
    owner: null
  },
  {
    title: "Fjord Sailor – Bergen Heritage Vessel",
    description:
      "A lovingly restored 1930s Norwegian wooden sailing vessel moored in Bergen's historic Bryggen harbour, available as a private liveaboard stay. The compact but beautifully fitted cabin features teak joinery, brass fittings, and a cosy saloon warmed by a cast-iron stove. Day sails through the Hardangerfjord can be arranged with the skipper. The Bergen fish market is your front door.",
    price: 15500,
    location: "Bergen",
    country: "Norway",
    category: "Boats",
    geometry: { type: "Point", coordinates: [5.3221, 60.3913] },
    images: [
      { url: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800", filename: "bergen_boat_1" },
      { url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800", filename: "bergen_boat_2" },
      { url: "https://images.unsplash.com/photo-1566552881560-0be862a7c445?w=800", filename: "bergen_boat_3" },
      { url: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800", filename: "bergen_boat_4" },
      { url: "https://images.unsplash.com/photo-1518479427703-f8e58e4be79d?w=800", filename: "bergen_boat_5" }
    ],
    reviews: [],
    owner: null
  },
  {
    title: "Amazon Flotel – Manaus, Brazil",
    description:
      "A floating eco-lodge anchored in a remote tributary of the Amazon River, four hours by boat from Manaus. The flotel moves to different anchorages each night, giving guests a new stretch of pristine rainforest to wake up to. Pink river dolphins surface beside the deck at dawn; caiman spotting happens by torchlight after dinner. An extraordinary, low-impact immersion into the world's greatest river system.",
    price: 17500,
    location: "Manaus",
    country: "Brazil",
    category: "Boats",
    geometry: { type: "Point", coordinates: [-60.0212, -3.1190] },
    images: [
      { url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800", filename: "amazon_flotel_1" },
      { url: "https://images.unsplash.com/photo-1566552881560-0be862a7c445?w=800", filename: "amazon_flotel_2" },
      { url: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800", filename: "amazon_flotel_3" },
      { url: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800", filename: "amazon_flotel_4" },
      { url: "https://images.unsplash.com/photo-1518479427703-f8e58e4be79d?w=800", filename: "amazon_flotel_5" }
    ],
    reviews: [],
    owner: null
  }
];

module.exports = listings;