class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length; i++) {
    const second = nums.indexOf(target - nums[i], i + 1);
    if (second != -1) return [i, second];
  }
  return [];
    }
}
