/* Checks if specific venue is currently selected */
export const isCurrentLocation = (currentVenue, venue) => currentVenue.id === venue.id;

/* Calculates average longitude and latitude for selected venues */
export const calculateAverageCoordinates = (venues) => {
  const length = venues.length || 1; //zero would crash this app, thus 1 if no records
  return venues
    .map(venue => [venue.location.lng, venue.location.lat])
    .reduce((acc, [lng, lat]) => {
      acc[0] += lng;
      acc[1] += lat;
      return acc;
    }, [0, 0])
    .map(sum => sum / length);
};

/* Returns venues that match current filter */
export const filterLocations = (venues, filter) => {
  return venues.filter(venue => {
    return venue.name.toLowerCase().includes(filter.toLowerCase()) || //check name
      (venue.location.address && venue.location.address.toLowerCase().includes(filter.toLowerCase())); //check address and check if it even exists
  });
};