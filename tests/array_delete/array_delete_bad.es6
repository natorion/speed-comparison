function fn() {
  let foo = new Map();
  foo.set("first", "1");
  foo.set("second", "2");
  foo.set("third", "3");
  foo.delete("second");

  let buffer = new Array(10000);

  for (let i = 0; i < 10000; i++) {
      buffer.push(foo["third"]); //interestingly foo.get("third") is slower than even the array
  }

  return buffer.length;
}
assertEqual(fn(), 20000);

test(function() {
  fn();
});
