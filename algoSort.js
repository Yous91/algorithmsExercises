let fs = require('fs');

//Méthode asynchrone
fs.readFile(process.argv[2], 'utf8', (error, data) => {
    if (error) {
        console.log(error);
        return;
    }

    let arrayToSort = data.split(' ').map(Number);
    console.log(arrayToSort); //Le contenu du fichier est présent dans data


    //Méthode synchrone
    // const data = fs.readFileSync(process.argv[2], 'utf8'); //Throw en cas d'erreur (donc il faut catch)
    let counter = 0;
    let mergeSortTopDown = (IntArray) => {
        if (IntArray.length <= 1) {
            return IntArray;
        }
        const middle = Math.floor(IntArray.length / 2);
        const left = IntArray.slice(0, middle);
        const right = IntArray.slice(middle);
        counter++;
        return mergeTopDown(mergeSortTopDown(left), mergeSortTopDown(right), counter);
    };

    function mergeTopDown(left, right) {
        const array = [];
        while (left.length && right.length) {
            if (left[0] < right[0]) {
                array.push(left.shift());
            } else {
                array.push(right.shift());
            }
        }
        return array.concat(left.slice()).concat(right.slice());
        console.log(`Tri par selection: ${resultCompareselectSort} comparaisons` + ` - [${arr}]`);
    }

    console.log(mergeSortTopDown(arrayToSort))

    let resultCompareselectSort = 0;
    const selectSort = (arr, length) => {
        for (let i = 0; i < length - 1; i++) {
            min = i;
            for (let j = i + 1; j < length; j++) {
                if (arr[j] < arr[min]) {
                    min = j;
                }
            }
            if (min != i) {
                [arr[i], arr[min]] = [arr[min], arr[i]];
                resultCompareselectSort++;
            }
        }
        console.log(`Tri par selection: ${resultCompareselectSort} comparaisons` + ` - [${arr}]`);
    }

    let resultCompareinsertionSort = 0;
    const insertionSort = (arr, length) => {
        for (let i = 1; i < length; i++) {
            let tmp = arr[i];
            let j = i;
            while (j > 0 && arr[j - 1] > tmp) {
                arr[j] = arr[j - 1];
                j = j - 1;

                resultCompareinsertionSort++;
            }
            arr[j] = tmp
        }
        console.log(`Tri par insertion: ${resultCompareinsertionSort} comparaisons` + ` - [${arr}]`);
    }
});