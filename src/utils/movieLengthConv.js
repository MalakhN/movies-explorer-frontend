export function movieLengthConv(mins) {
  const hours = Math.floor(mins / 60);
  const minutes = mins % 60;

  if (mins < 60) {
    return `${mins} минут`
  } else if (minutes > 0) {
    return `${hours}ч ${minutes}м`;
  } else if (hours = 1) {
    return `${hours} час`;
  } else if (hours != 1 && hours <= 4) {
    return `${hours} часа`;
  } else {
    return `${hours} часов`;
  }
}
