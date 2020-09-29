export function convertUnixTimeToLocalDate(unixTime) {
  const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };

  const date = new Date(unixTime * 1000);

  return date.toLocaleDateString('en-US', options);
}
