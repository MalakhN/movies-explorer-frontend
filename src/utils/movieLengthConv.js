export function movieLengthConv(mins) {
  let hours = Math.floor(mins / 60);
  let minutes = mins % 60;

  if (mins < 60) {
    return `${mins} минут`
  } else if (minutes > 0 && hours === 1) {
    return `${hours} час ${minutes} минут`;
  } else if (minutes > 0 && hours != 1 && hours <= 4) {
    return `${hours} часа ${minutes} минут`;
  } else if (minutes > 0 && hours != 1 && hours > 4) {
    return `${hours} часов ${minutes} минут`;
  } else if (hours = 1) {
    return `${hours} час`;
  } else if (hours != 1 && hours <= 4) {
    return `${hours} часа`;
  } else {
    return `${hours} часов`;
  }
}
