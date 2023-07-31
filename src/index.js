module.exports = function check(str, brConfig) {
  console.log(str, brConfig);
  const begin = brConfig.reduce((a, b) => [...a, b[0]], []);
  const end = brConfig.reduce((a, b) => [...a, b[1]], []);

  console.log("end", end);
  console.log("begin", begin);
  let res = [];
  try {
    res = str.split("").reduce((a, b) => {
      console.log("a", a);
      const len = a.length;
      if (len && begin.indexOf(a[len - 1]) === end.indexOf(b)) {
        a.length--;
        return a;
      } else return [...a, b];
    }, []);
  } catch (error) {
    return false;
  }
  console.log(res);
  return !res.length;
};

// console.log(
//   check("[]][[]", [
//     ["(", ")"],
//     ["[", "]"],
//   ])
// );

// console.log(
//   check(
//     "([[[[(({{{}}}(([](((((((())))||||||))))[[{{|{{}}|}}[[[[]]]]{{{{{}}}}}]]))))]]]]))()",
//     [
//       ["(", ")"],
//       ["[", "]"],
//       ["{", "}"],
//       ["|", "|"],
//     ]
//   )
// );

// console.log(
//   check("([{}])", [
//     ["(", ")"],
//     ["[", "]"],
//     ["{", "}"],
//   ])
// );

// console.log("a", a);
// if (begin.includes(b) && end.includes(b)) {
//   if (end.indexOf(b) === begin.indexOf(a[a.length - 1])) {
//     a.length--;
//     return a;
//   } else return [...a, b];
// } else if (begin.includes(b)) return [...a, b];
// else if (end.includes(b)) {
//   if (end.indexOf(b) === begin.indexOf(a[a.length - 1])) {
//     a.length--;
//     return a;
//   } else throw new Error();
// } else throw new Error();
