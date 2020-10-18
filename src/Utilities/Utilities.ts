/**
 * Creates a new array and randomizes the order of the elements
 * @param array Input array
 */
export function RandomizeOrder<T> (array: T[]): T[] {
    let currentIndex = array.length, temporaryValue, randomIndex;
    let shuffledArray = [...array];

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = shuffledArray[currentIndex];
      shuffledArray[currentIndex] = shuffledArray[randomIndex];
      shuffledArray[randomIndex] = temporaryValue;
    }
  
    return shuffledArray;
}

