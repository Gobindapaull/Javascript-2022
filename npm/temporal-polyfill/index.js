import "temporal-polyfill/global"

const d = Temporal.Now.instant().toString()
const ms = Temporal.Now.instant().epochMilliseconds
const tz = Temporal.Now.timeZoneId()
const localTime = Temporal.Now.zonedDateTimeISO().toString()

console.log(d)
console.log(ms)
console.log(tz)
console.log(localTime)
