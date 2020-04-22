/////////////////////////// Subject 1 //////////////////////////

let list = [10, 15, 3, 7];
let k = 17;
let result;

// Exercice 1 

const additionalMatchNested = (arr, number) => {

    for (i = 0; i < arr.length; i++) {
        for (j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === number) {
                result = true;
            }
        }
    }
    result = true ? console.log("true") : console.log("false");
}

console.log("")
console.log("Exercice 1 :")
additionalMatchNested(list, k);

// Exercice 3

const additionalMatchNotNested = (arr, number) => {
    arr.sort((a, b) => a - b);
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        const sum = arr[left] + arr[right];
        if (sum === number) {
            return console.log("true");
        } else if (sum < number) {
            left++;
        } else {
            right--;
        }
    }
    return console.log("false");
};

console.log("")
console.log("Exercice 3 :")
additionalMatchNotNested(list, k);

// Exercice 5

const additionalMatch = (arr, k) => {
    let n = 0
    for (let i = 1; i < (arr.length); i++) {
        if (arr[n] + arr[i] == k) {
            return console.log(true);
        }
        if (i === arr.length - 1) {
            i = n;
            i++;
            n++;
        }
    }
    return console.log(false);
};

console.log("")
console.log("Exercice 5 :")
additionalMatch(list, k);

/////////////////////////// Subject 2 //////////////////////////


let arrBuilding = [3, 7, 8, 3, 6, 1];
let resultSeeSunset = 0;

// Exercice 2

const seeSunset = (arr) => {
    for (i = 0; i < arr.length; i++) {
        while (arr.length >= 1) {
            tmpMax = Math.max(...arr);
            indexTmpMax = arr.indexOf(tmpMax);
            resultSeeSunset++
            arr = arr.slice(indexTmpMax + 1);
        }
    }
    console.log(resultSeeSunset);
}

console.log("")
console.log("Exercice 2 :")
seeSunset(arrBuilding)

// Exercice 4

const seeSunsetNotNested = (arr) => {
    resultSeeSunset = 1;
    let nextBuilding = arr.length - 1;
    let tmpMax = arr[nextBuilding];
    for (j = nextBuilding - 1; j >= 0; j--) {
        if (arr[j] > tmpMax) {
            tmpMax = arr[j];
            resultSeeSunset++;
        }
    }
    console.log(resultSeeSunset);
};

console.log("")
console.log("Exercice 4 :")
seeSunsetNotNested(arrBuilding)

// Exercice 6

const selectionSort = (x, n) => {
    let count = 1
    let min = x[n - 1]
    for (let j = n - 2; j >= 0; j--) {
        if (min < x[j]) {
            min = x[j]
            count++
        }
    }
    console.log(count)
}

console.log("")
console.log("Exercice 6 :")
selectionSort(arrBuilding, arrBuilding.length)