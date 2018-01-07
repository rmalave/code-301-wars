function cubeOdd(arr) {
    return (arr.every(n => typeof(n) === 'number') !== true ? undefined : arr.map(n => Math.pow(n, 3)).filter(n => n % 2).reduce((acc, cur) => acc + cur, 0));
  }