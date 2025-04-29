function rotate(matrix) {
    const n = matrix.length;
    console.log(`length: ${n}`);

    // Transpose the matrix
    for ( let i = 0; i < n; i++) {
        for (let j = i+ 1; j < n; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }
    // Reverse each row
    for ( let i = 0; i < n; i++) {
        matrix[i].reverse();
    }

    console.log(matrix);
}

rotate([[1,2,3],[4,5,6],[7,8,9]]);
