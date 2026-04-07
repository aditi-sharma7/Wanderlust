const map = L.map('map').setView([coordinates[1], coordinates[0]], 13);


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);
const faIcon = L.divIcon({
  html: '<i class="fa-solid fa-location-dot" style="color:red;font-size:30px;"></i>',
  iconSize: [0, 0],
  iconAnchor: [20, 40]
});

L.marker([coordinates[1], coordinates[0]], { icon: faIcon })
  .addTo(map)
  .bindPopup(`<h4>${listingTitle}</h4><p>Exact location will be provided after booking</p>`,{ offset: [0, -30]})
  .openPopup();
