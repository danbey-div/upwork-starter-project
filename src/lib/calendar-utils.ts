export function getStartWeekDayOfMonth(date: Date) {
  // get the first weekday of this month - by default Sunday is 0. We need to convert into Monday based calculation
  return (new Date(date.getFullYear(), date.getMonth(), 1).getDay() + 6) % 7
}

export function getMaxDays(year: number, month: number) {
  // get the total number of days for specific month
  return new Date(year, month, 0).getDate()
}

export function isToday(year: number, month: number, date: number) {
  // needed to show elipsis
  const today = new Date()
  return (
    year == today.getFullYear() &&
    month == today.getMonth() &&
    date == today.getDate()
  )
}
