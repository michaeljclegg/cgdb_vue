function foo(x) {
  if (typeof x !== "number") {
    console.trace();
    return 0;
  }
  return x * x;
}

function bar(x) {
  const fooResult = foo(x);
  console.log(`Foo returned ${fooResult}`);
}

bar(4);
