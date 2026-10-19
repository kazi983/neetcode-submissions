func hasDuplicate(nums []int) bool {
	keys := make(map[int]struct{})
	result := []int{}
	for _, item := range nums {
		if _, exists := keys[item]; !exists {
			keys[item] = struct{}{}
			result = append(result, item)
		} else {
			return true
		}
	}
	return false
}
