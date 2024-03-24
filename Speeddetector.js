//So in this test we are going to put
function detectSpeed(speed) {
  const speedLimit = 70;
  let points = Math.floor((speed - speedLimit) / 5);

  if (speed <= speedLimit) {
    return "Ok";
  } else if (points > 0) {
    return `${points} points`;
  } else if (points >= 12) {
    return "Lisence Suspended";
  }
}
console.log(detectSpeed(75));
