var a = {};

// Object init
a.b = 'd';
a['c'] = 2;
a[a.b] = 3;
console.log(a);

// function as object key
a.d = function (key) {
  console.log(key);
}
a[a.d] = 4;

console.log(a);
