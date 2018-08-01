import rp from 'request-promise';

export const fetchLocations = (location = '', details = '') => {
  let options = {
    uri: 'https://api.foursquare.com/v2/venues/search',
    qs: {
      client_id: 'EB21AQPB15UWVJGR1434HC1NPYEJ1A2OLNGLNX1LHMK34FDU',
      client_secret: '51JZ3EZFENM30OLJTJVDE4MI5BUZF41LRH3GL5Y2H1ZFZMR2',
      v: 20180323,
      near: location,
      limit: 30,
      intent: 'browse',
    },
    json: true // Automatically parses the JSON string in the response
  };

  if (details.length > 0) {
    options.qs.query = details; //add additional query parameter
  }

  return rp(options)
    .then((response) => response)
    .catch((err) => err);
};
