const { getTimestamp, getLongTime } = require('./src/index.js');

console.log("Testing getTimestamp:");
console.log(getTimestamp());

console.log("\nTesting getLongTime (default):");
console.log(getLongTime());

console.log("\nTesting getLongTime (en-US):");
console.log(getLongTime('en-US'));

console.log("\nTesting getLongTime (specific date):");
const specificDate = new Date('2023-12-25T12:00:00Z');
console.log(getLongTime('es-ES', specificDate));

console.log("\nTesting getLongTime (custom options):");
console.log(getLongTime('es-ES', new Date(), { timeZoneName: 'long' }));

console.log("\nTesting Error Handling:");
try {
  getLongTime('es-ES', 'invalid-date');
} catch (e) {
  console.log("Caught expected error:", e.message);
}
