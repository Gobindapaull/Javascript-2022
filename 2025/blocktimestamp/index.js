const blocktimestamp = 1741891505;
const date = new Date(blocktimestamp * 1000);
console.log(date.toUTCString()); // UTC Format
console.log(date.toLocaleString()); // Local time format
