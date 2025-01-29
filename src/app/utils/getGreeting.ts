import dayjs from 'dayjs'

function getGreeting(): string {
  // const hour = dayjs().hour()
  // if (hour >= 4 && hour <= 11) {
  //   return 'Good morning!'
  // }
  // if (hour >= 11 && hour <= 17) {
  //   return 'Good afternoon!'
  // }
  // return 'Good evening!'
  const fullDateTime = dayjs().format('YYYY-MM-DD HH:mm:ss');
  return fullDateTime
}

export { getGreeting }