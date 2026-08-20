/**
 * Pair class to store key-value pairs
 */
class Solution {
  /**
   * @param {number[]} array
   * @returns {number[][]}
   */
  insertionSortNumbers(array) {
    /*             preIn         pre       cur    
    -6 20 8 -2 4 | -1     > 0 &&  NaN(-1) > -6(0)   false -> break
    
                   pre     cur
    -6 20 8 -2 4 | -6(0) > 20(1)  false -> break

    -6 20 8 -2 4 | 20(1) > 8(2)   true  -> [CONTINUE]
    -6 8 20 -2 4 | -6(0) > 8(1)   false -> break
    
    -6 8 20 -2 4 | 20(2) > -2(3)  true  -> [CONTINUE]
    -6 8 -2 20 4 | 8(1) > -2(2)   true  -> [CONTINUE]
    -6 -2 8 20 4 | -6(0) > -2(1)  false -> break
    */

    const res = [];

    for (let i = 0; i < array.length; i++) {
      let currIndex = i;
      let prevIndex = i - 1;

      while (prevIndex >= 0 && array[prevIndex] > array[currIndex]) {
        [array[prevIndex], array[currIndex]] = [
          array[currIndex],
          array[prevIndex],
        ];
        prevIndex--;
        currIndex--;
      }
      res.push([...array]);
    }

    return res;
  }

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
        [pairs[currIndex - 1], pairs[currIndex]] = [
          pairs[currIndex],
          pairs[currIndex - 1],
        ];
        currIndex--;
      }

      // Store a snapshot of the array after each insertion.
      res.push([...pairs]);
    }

    return res;
  }
}