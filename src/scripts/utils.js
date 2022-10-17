/** provide a new array which is a shuffled version of given array
 * @param {Array} arr an array
 * @return {Array} a new array which is a shuffled version of given array
*/
const shuffle = arr => {
  const shuffledArr = [...arr];                           // create a new array from parameter
  for (let i = shuffledArr.length - 1; i > 0; i--) {      // i goes from last index to 0
        const j = Math.floor(Math.random() * (i + 1));    // j randomly chosen in [0,i]
        [shuffledArr[i], shuffledArr[j]] = [shuffledArr[j], shuffledArr[i]];  // swap elements i and j
    }
    return shuffledArr;
}

export { shuffle };
