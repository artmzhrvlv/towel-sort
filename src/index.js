module.exports = function towelSort(matrix) {
    if ( matrix == undefined) {
        return [];
    }
    const newArr = [];
    matrix.map((arr, i) => {
        if ((i + 1) % 2 == 0) {
            arr.sort((a, b) => b - a);
            for (let i = 0; i < arr.length; i++) {
                newArr.push(arr[i]);
            }
        } else {
            arr.sort((a, b) => a - b);
            for (let i = 0; i < arr.length; i++) {
                newArr.push(arr[i]);
            }
        }
    });
    return newArr;
  }