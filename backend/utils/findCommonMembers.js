function findCommonMembers(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) return [];
  const set1 = new Set(arr1);
  return arr2.filter(id => set1.has(id));
}
module.exports = findCommonMembers;