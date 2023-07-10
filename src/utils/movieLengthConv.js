export function movieLengthConv(mins) {
  let hours = Math.floor(mins / 60);
  let minutes = mins % 60;

  if (mins < 60 === 1) {
    return `${mins} минута`
  } else if (mins < 60 != 1 <= 4) {
    return `${mins} минуты`
  } else if (mins < 60 != 1 > 4) {
    return `${mins} минут`
  } else if (minutes > 0 && hours != 1 > 4) {
    return `${hours} ч ${minutes} мин`;
  } else if (hours = 1) {
    return `${hours} час`;
  } else if (hours != 1 <= 4) {
    return `${hours} часа`;
  } else {
    return `${hours} часов`;
  }
}
