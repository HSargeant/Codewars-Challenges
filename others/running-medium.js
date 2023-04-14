function runningMedium(arr) {
  let result = [];
  let window = [];
  for (let i = 0; i < arr.length; i++) {
    window.push(arr[i]);
    window.sort((a, b) => a - b);
    if (window.length % 2 === 0) {
      result.push((window[window.length / 2] + window[window.length / 2 - 1]) / 2);
    } else {
      result.push(window[Math.floor(window.length / 2)]);
    }
  }
  return result;
}