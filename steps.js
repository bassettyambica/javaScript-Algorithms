//Solve n to print steps
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

const steps = n => {
  for (let i = 0; i < n; i++) {
    let stair = '';
    for (let j = 0; j < n; j++) {
      stair = j <= i ? stair + '#' : stair + ' ';
    }
    console.log(stair);
  }
}
