/**
 * @param {number[]} values
 * @return {number}
 */
var minScoreTriangulation = function(values) {
   let n = values.length;
   const dp = Array.from({ length: n}, () => Array(n).fill(0));

   for (let length = 3; length <= n; length++) {
    for (let i = 0; i + length - 1 < n; i++) {
        let j = i + length - 1;
        dp[i][j] = Infinity;

        for (let k = i + 1; k < j; k++) {
            let x = dp[i][k] + dp[k][j] + values[i] * values[j] * values[k];
            dp[i][j] = Math.min(dp[i][j], x);
        }
    }
   }
   return dp[0][n - 1];
};
