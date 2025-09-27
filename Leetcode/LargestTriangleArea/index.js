/**
 * @param {number[][]} points
 * @return {number}
 */
var largestTriangleArea = function (points) {
    let maxArea = 0;

    const area = (p1, p2, p3) => {
        let [x1, y1] = p1;
        let [x2, y2] = p2;
        let [x3, y3] = p3;

        return Math.abs(
            x1 * (y2 - y3) +
            x2 * (y3 - y1) +
            x3 * (y1 - y2)
        ) / 2.0;
    }
        let n = points.length;

        for (let i = 0; i < n; i++) {
            for (let j = i + 1; j < n; j++) {
                for ( let k = j + 1; k < n; k++) {
                    maxArea = Math.max(maxArea, area(points[i], points[j], points[k]));
                }
            }
        }

        return maxArea;
};

// https://leetcode.com/problems/largest-triangle-area/
