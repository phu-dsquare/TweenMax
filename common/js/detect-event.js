var targetDateTime = moment.tz("2022-02-22 16:00", "Asia/Tokyo")

function eventEnded() {
  var currentDateTime = moment.tz(new Date(), "Asia/Tokyo")
  if (currentDateTime >= targetDateTime) {
    return true
  }
  return false
}