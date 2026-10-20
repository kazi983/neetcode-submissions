class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
          const groups = new Map<string, string[]>();

  for (const str of strs) {
    const key = [...str].sort().join("");
    const group = groups.get(key);
    if (group) {
      group.push(str);
    } else {
      groups.set(key, [str]);
    }
  }

  return [...groups.values()];
    }
}
