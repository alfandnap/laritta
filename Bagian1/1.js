function fibonacci(n) {
  if (n <= 0) {
    return [];
  } else if (n === 1) {
    return [1];
  } else if (n === 2) {
    return [1, 1];
  } else {
    const temp = [1, 1];
    for (let i = 2; i < n; i++) {
      const num = temp[i - 1] + temp[i - 2];
      temp.push(num);
      if (num >= n) {
        break
      }
    }
    return temp;
  }
}

console.log(fibonacci(5));
