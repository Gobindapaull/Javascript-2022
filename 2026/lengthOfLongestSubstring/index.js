function lengthOfLongestSubstring(s) {
    const set = new Set()
    let left = 0
    let max = 0

    for (let right = 0; right < s.length; right++) {
        while(set.has(s[right])) {
            set.delete(s[left])
            left++
        }
        set.add(s[right])
        console.log(set)
        max = Math.max(max, right - left + 1)
    }

    
    console.log(max)
}

lengthOfLongestSubstring("abcabcbb")

    //  "abcabcbb"
    //   ↑   ↑
    //  left right

