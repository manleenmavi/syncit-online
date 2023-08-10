// Retutn the countdown time in milliseconds, calculate milliseconds from current time to next tenth second

const getCountdownTime = async () => {
  // Fetch current time from API
  const response = await fetch(
    "https://worldtimeapi.org/api/timezone/America/Edmonton");
  const data = await response.json();

  // console.log(data.datetime);

  const currentTime = new Date(data.datetime);
  // console.log(currentTime);

  // Calculate the time to next tenth second
  // Get the current seconds and milliseconds
  const currentSeconds = currentTime.getSeconds();
  const currentMilliseconds = currentTime.getMilliseconds();

  // Calculate the time remaining until the upcoming 10th second
  const timeUntilNextTenthSecond =
    (10 - (currentSeconds % 10)) * 1000 - currentMilliseconds;

  return timeUntilNextTenthSecond;
};

export default getCountdownTime;
