function unique(array1, array2) {
  let result = [];
  result = array1.concat(array2);
  for (var i = 0; i < result.length; i++) {
    for (var j = i + 1; j < result.length; j++) {
      if (result[i] === result[j]) {
        result.splice(j, 1);
      }
    }
  }
  for (i = 0; i < result.length; i++) {
    let exist1 = false;
    let exist2 = false;
    j = 0;
    while (exist1 === false && j < array1.length) {
      if (array1[j] === result[i]) {
        exist1 = true;
      }
      j++;
    }
    j = 0;
    while (exist2 === false && j < array2.length) {
      if (array2[j] === result[i]) {
        exist2 = true;
      }
      j++;
    }
    if (exist1 === true && exist2 === true) {
      result.splice(i, 1);
    }
  }
}
