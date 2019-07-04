//FIZZ BUZZ problem
const fizzBuzz = n => {
  for (let i = 0; i <= n ; i++) {
    if (i % 15 === 0) {
      console.log('FIZZ BUZZ')
    } else if (i % 3 === 0) {
      console.log('FIZZ ')
    } else if (i % 5 === 0) {
      console.log('Buzz ')
    } else {
      console.log(i)
    }
  }
}

fizzBuzz(46);

////draw 2 squares of width 50px side by side.
//each square should have a circle in center with radius of 10px
//distance between 2 squares should be 10px.
