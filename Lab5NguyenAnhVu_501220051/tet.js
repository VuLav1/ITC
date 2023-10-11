function tinhTongGiaTriLonNhatTrenMoiDong(matrix) {
    const sums = [];
  
    for (let i = 0; i < matrix.length; i++) {
      let maxInRow = matrix[i][0]; // Giả sử phần tử đầu tiên là lớn nhất trong dòng i
  
      for (let j = 1; j < matrix[i].length; j++) {
        if (matrix[i][j] > maxInRow) {
          maxInRow = matrix[i][j]; // Tìm giá trị lớn nhất trong dòng i
        }
      }
  
      sums.push(maxInRow); // Thêm giá trị lớn nhất của dòng i vào mảng sums
    }
  
    return sums;
  }
  
  // Example usage:
  const matrix = [
    [1, 3, 2],
    [4, 7, 1],
    [5, 2, 6]
  ];
  
  const ketQua = tinhTongGiaTriLonNhatTrenMoiDong(matrix);
  console.log("Tổng giá trị lớn nhất trên mỗi dòng:", ketQua);
  