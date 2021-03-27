const find_combinations = (num, string = "", options = null) => {
  let result = [];
  if (options === null) {
    options = [];
    for (let i = 0; i < num; i++) {
      options.push("(", ")");
    }
  }
  if (num === 0) {
    result.push(string);
    return result;
  }
  for (let i = 0; i < options.length; i++) {
    result = result.concat(
      find_combinations(
        num - 1,
        string + options[i],
        options.slice(0, i).concat(options.slice(i + 1))
      )
    );
  }
  return result;
};

// console.log(find_combinations(0));
console.log(find_combinations(1));
// console.log(find_combinations(2));
// console.log(find_combinations(3));
