import (
    "slices"
)
func isAnagram(s string, t string) bool {
	if len(s) != len(t) {return false}

	ss:=[]rune(s)
	st:=[]rune(t)

	slices.Sort(ss) 
	slices.Sort(st)

	return string(ss)==string(st)
}
