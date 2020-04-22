let fs = require('fs');

//Méthode asynchrone
fs.readFile(process.argv[2], 'utf8', (error, data) => {
    if (error) {
        console.log(error);
        return;
    }

    let arrayToSort = data.split(' ').map(Number);
    // console.log(arrayToSort); //Le contenu du fichier est présent dans data

    merge(arrayToSort);
    insertionSort(arrayToSort, arrayToSort.length);
    selectSort(arrayToSort, arrayToSort.length);
});

const merge = (arr) => {
    let resultCompareMergeSort = 0;
    const mergeTopDown = (left, right) => {
        const array = [];
        while (left.length && right.length) {
            resultCompareMergeSort++;
            if (left[0] < right[0]) {
                array.push(left.shift());
            } else {
                array.push(right.shift());
            }
        }
        return array.concat(left.slice()).concat(right.slice());
    }
    const mergeSortTopDown = (arr) => {
        if (arr.length <= 1) {
            return arr;
        }
        const middle = Math.floor(arr.length / 2);
        const left = arr.slice(0, middle);
        const right = arr.slice(middle);

        return mergeTopDown(mergeSortTopDown(left), mergeSortTopDown(right));
    };
    arr = mergeSortTopDown(arr);
    console.log(`Tri par fusion: ${resultCompareMergeSort} comparaisons` + ` - [${arr}]`);
}

let resultCompareSelectSort = 0;
const selectSort = (arr, length) => {
    for (let i = 0; i < length - 1; i++) {
        min = i;
        for (let j = i + 1; j < length; j++) {
            resultCompareSelectSort++;
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        if (min != i) {
            [arr[i], arr[min]] = [arr[min], arr[i]];

        }
    }
    console.log(`Tri par selection: ${resultCompareSelectSort} comparaisons` + ` - [${arr}]`);
}

let resultCompareInsertionSort = 0;
const insertionSort = (arr, length) => {
    for (let i = 1; i < length; i++) {
        let tmp = arr[i];
        let j = i;
        while (j > 0 && arr[j - 1] > tmp) {
            arr[j] = arr[j - 1];
            j = j - 1;

            resultCompareInsertionSort++;
        }
        arr[j] = tmp
    }
    console.log(`Tri par insertion: ${resultCompareInsertionSort} comparaisons` + ` - [${arr}]`);
}