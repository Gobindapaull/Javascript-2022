function longestPalindrome(s) {
    let result = ''
    for (let i = 0; i < s.length; i++) {
        const palindrome1 = getExtendedPalindromes(s, i, i)
        const palindrome2 = getExtendedPalindromes(s, i, i + 1)
        const longerPalindrome = palindrome1.length > palindrome2.length ? palindrome1 : palindrome2

        if (longerPalindrome.length > result.length) {
            result = longerPalindrome
        }
    }
    return result
}

function getExtendedPalindromes(s, start, end) {
    while (start >= 0 && end < s.length && s[start] === s[end]) {
        start--;
        end++;
    }
    return s.slice(start + 1, end)
}

// Test
const s = "forgeeksskeegfor";
console.log("Longest Palindrome:", longestPalindrome(s));
