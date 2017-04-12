
function calculateStringLength(arg1, arg2, arg3){
  var sum = 0;

  if(arg1 !== '' && arg1 !== null && arg1 !== 0 && arg1 !== NaN && arg1 !== false){
    sum += arg1.length;
  }

  if(arg2 !== null){
    sum += arg2.length;
  }

  if(arg3 !== undefined){
    sum += arg3.length;
  }

  return sum;
}

function smartlyCalculateStringLength(fName, mName, lName){
  var arg1 = fName || '';
  var arg2 = mName || '';
  var arg3 = lName || '';

  return arg1.length + arg2.length + arg3.length;
}

var fName = false;
var lName = 'Doe';
var mName = 'A.';

var dumbCal = calculateStringLength(fName, mName, lName);
var smartCal = smartlyCalculateStringLength(fName, mName, lName);

console.log(dumbCal);
console.log(smartCal);
