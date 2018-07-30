/* Checks if specific venue is currently selected */
export const isCurrentLocation = (currentVenue, venue) => currentVenue.id === venue.id;

/* Calculates average longitude and latitude for selected venues */
export const calculateAverageCoordinates = (venues) => {
  const length = venues.length;
  return venues
    .map(venue => [venue.location.lng, venue.location.lat])
    .reduce((acc, [lng, lat]) => {
      acc[0] += lng;
      acc[1] += lat;
      return acc;
    }, [0, 0])
    .map(sum => sum / length);
};