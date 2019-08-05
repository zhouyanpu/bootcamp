function setDifference(arr1, arr2) {
  var arr3 = [];
  arr1.forEach(ele => {
    if (arr2.indexOf(ele) === -1 && arr3.indexOf(ele) === -1) {
      arr3.push(ele);
    }
  });
  return arr3;
}

module.exports = setDifference;
