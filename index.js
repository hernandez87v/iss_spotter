const { fetchMyIP } = require('./iss');
const { fetchCoordsByIP } = require('./iss');

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }

  console.log('It worked! Returned IP:', ip);
});
// 172.218.146.214

fetchCoordsByIP('162.245.144.188', (error, coords) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }

  console.log('It worked! Returned Coords:', coords);
});
//{ latitude: '49.26200', longitude: '-123.09230' }
