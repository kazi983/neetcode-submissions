/**
 * Pair class to store key-value pairs
 */
// class Pair {
//     /**
//      * @param {number} key The key to be stored in the pair
//      * @param {string} value The value to be stored in the pair
//      */
//     constructor(key, value) {
//         this.key = key;
//         this.value = value;
//     }
// }
class Solution {
  /**
   * @param {Pair[]} pairs
   * @returns {Pair[][]}
   */
  insertionSort(pairs) {
    const res = [];

    for (let sortIndex = 0; sortIndex < pairs.length; sortIndex++) {
      // The element at sortIndex is the next element to insert.
      let currIndex = sortIndex;

      // Move the current pair left until it reaches its correct position.
      while (currIndex > 0 && pairs[currIndex - 1].key > pairs[currIndex].key) {

        // Using a temp variable for swap avoids creating a temporary array,
        // which is faster than array destructuring assignment.
        let temp = pairs[currIndex];
        pairs[currIndex] = pairs[currIndex-1];
        pairs[currIndex - 1] = temp;

        // destructuring assingment: 
        // // [pairs[currIndex - 1], pairs[currIndex]] = [pairs[currIndex], pairs[currIndex - 1]];
        
        currIndex--;
      }

      // Store a snapshot of the array after each insertion.
      res.push([...pairs]);
    }

    return res;
  }
}
