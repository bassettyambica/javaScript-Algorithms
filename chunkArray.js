const chunkArray = (array, size) => {
  const chunked = [];
  let i = 0;

  while (i < array.length) {
    chunked.push(array.slice(i, i + size));
    i += size;
  }

  return chunked;
}
