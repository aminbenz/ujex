function convertMilliseconds(milliseconds) {
  // Convert milliseconds to seconds
  var seconds = milliseconds / 1000;

  // Calculate the number of minutes
  var minutes = Math.floor(seconds / 60);

  // Calculate the number of remaining seconds
  var remainderSeconds = Math.round(seconds % 60);

  // Return the result as a string in the format "X minutes and Y seconds"
  return `${minutes}m`;
}

export default convertMilliseconds;
