function go(n) {
  // n here is defined!
  console.log(n); // { a: [1, 2, 3] }

  for (var n of n.a) {
    //          ^ ReferenceError
    console.log(n);
  }
}

go({ a: [1, 2, 3] });
