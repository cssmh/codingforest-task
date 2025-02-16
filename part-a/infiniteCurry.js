const add = (a) => {
  return (b) => {
    if (b === undefined) return a;
    return add(a + b);
  };
};

console.log(add(1)(2)(3)(4)(5)());
