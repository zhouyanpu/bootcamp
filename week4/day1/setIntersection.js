var arr1 = [1, 2, 3, 3, 3, 4, 5];
var arr2 = [2, 3, 3, 4, 4];

function setIntersection(arr1, arr2) {
  var arr3 = [];
  arr1.forEach(ele => {
    for (var i = 0; i < arr2.length; i++) {
      if (ele === arr2[i] && arr3.indexOf(ele) === -1) {
        arr3.push(ele);
      }
    }
  });
  return arr3;
}

module.exports = setIntersection;
