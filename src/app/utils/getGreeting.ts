import dayjs from 'dayjs'

function getGreeting(): string {
  const hour = dayjs().hour()
  if (hour >= 4 && hour <= 11) {
    return 'Good morning!'
  }
  if (hour >= 11 && hour <= 17) {
    return 'Good afternoon!'
  }
  return 'Good evening!'
}

export { getGreeting }