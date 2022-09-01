const mapOptions = {
  center: [59.968364, 30.317477],
  zoom: 50,
  zoomControl: false,
  attributionControl: false
}

const map = new L.map('map', mapOptions);

const osmLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="copyright">Openstreetmap</a>'
}).addTo(map);

const iconOptions = {
  iconUrl: 'img/marker/marker-icon.png',
  iconRetinaUrl: 'img/marker/marker-icon@2x.png',
  iconSize: [38, 50]
}

const customIcon = L.icon(iconOptions);

const markerOptions = {
  draggable: true,
  icon: customIcon
}

const marker = L.marker([59.968364, 30.317477], markerOptions);

const initLeaflet = () => {
  marker.addTo(map);
};

export { initLeaflet };
