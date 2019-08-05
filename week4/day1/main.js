const inter = require("./setIntersection");
const dif = require("./setDifference");

set1 = ["dogs", "cats", "red", "bananas", "code", "movies"];
set2 = ["blue", "horses", "dogs", "code", "rain"];

console.log(set1);
console.log(set2);
console.log("Intersections are:", inter(set1, set2));
console.log("Differences are:", dif(set1, set2));
