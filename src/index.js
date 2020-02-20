// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!matrix) return [];
    if (!matrix.length) {
        return [];
    } else {
        let array = [];
        matrix.forEach((element, index) => {
            if (index % 2 == 0) {
                for (let a = 0; a <= element.length - 1; a++) {
                    array.push(element[a])
                }
            } else {
                element = element.reverse()
                for (let a = 0; a <= element.length - 1; a++) {
                    array.push(element[a])
                }
            }
        });
        return array;
    }
}
