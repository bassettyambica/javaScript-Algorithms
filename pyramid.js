//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

const pyramid = n => {
  const midpoint = Math.floor((2 * n - 1) / 2);

  for (let i = 0; i < n; i++) {
    let level = '';

    for (let j = 0; j < 2 * n - 1; j++) {
      level = (midpoint - i <= j && midpoint + i >= j) ? level + '#' : level + ' '
    }

    console.log(level);
  }
}
