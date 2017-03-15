'use strict';

/*

Refactor the following functions. Use higher-order functions rather than for-loops.

Choose from the following higher-order functions: map, filter, reduce, every, some

Run the command 'mocha' to test. Tests check for expected output and absence of for-loops.

*/

module.exports = {

  sum: (arr, base) => {
    let sum = base;
    for (var i = 0; i < arr.length; i++){
      sum += arr[i];
    }
    return sum;
  },

sum: (arr, base) => {
    return arr.reduce(function(acc, base) {
  return acc + base;
}, base);

},

someObjsContainProp: (arr, prop) => {
return arr.some((array)=>{
if(array.hasOwnProperty(prop))
return true;
});
},
    // for(var i = 0; i < arr.length; i++){
    //   if(arr[i].hasOwnProperty(prop)){
    //     return true;
    //   }
    // }
    // return false;

  //
  convertNameArrayToObject: (arr) => {
    let nameObj = [];
    for(var i = 0; i < arr.length; i++){
      let obj = {};
      obj.first = arr[i][0];
      obj.last = arr[i][1];
      nameObj.push(obj);
    }
    return nameObj;
  },
convertNameArrayToObject: (arr) => {
return arr.map(obj => {
let nameObj= {};
nameObj.first = obj[0];
nameObj.last = obj[1];
return nameObj;
});
},

  objContainsProp: (arr, prop) => {
    for (var i = 0; i < arr.length; i++){
      if(!arr[i].hasOwnProperty(prop)){
        return false;
      }
    }
    return true;
  },
  objContainsProp: (arr, prop) => {
return arr.every((array)=>{
if(array.hasOwnProperty(prop))
return true;
});
},
  //
  stringMatch: (arr, str) => {
    let matches = [];
    for(var i = 0; i < arr.length; i++){
      if (arr[i].includes(str)){
        matches.push(arr[i]);
      }
    }
    return matches;
  },
  stringMatch: (arr, str) => {
return arr.filter(i => {
return (i.match(str));
  });
}
};
