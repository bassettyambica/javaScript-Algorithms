// /capitalize the first letter of each word in the string

function capitalize(str) {
  const words = [];

  str.split(' ').forEach(word => {
    words.push(word[0].toUpperCase() + word.slice(1));
  });

  return words.join(' ');
}
