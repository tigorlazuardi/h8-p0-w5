function sorting(arrNumber) {
    let holder;
    let flag;
    do {
        flag = false;
        for (let i = 0; i < arrNumber.length - 1; i++) {
            if (arrNumber[i + 1] > arrNumber[i]) {
                holder = arrNumber[i + 1];
                arrNumber[i + 1] = arrNumber[i];
                arrNumber[i] = holder;
                flag = true;
            }
        }
    } while (flag)
    return arrNumber;
}

function getTotal(arrNumber) {
    // let count = 0;
    // let highest = arrNumber[0];
    // if (arrNumber.length === 0) {
    //     return [];
    // }
    // for (let i = 0; i < arrNumber.length; i++) {
    //     if (highest === arrNumber[i]) {
    //         count++;
    //         if (highest > arrNumber[i]) {
    //             break;
    //         }
    //     }
    // }
    // return 'angka paling besar adalah ' + highest + ' dan jumlah kemunculan sebanyak ' + count + ' kali';
    return `angka paling besar adalah ${arrNumber[0]} dan jumlah kemunculan sebanyak ${arrNumber.filter(x => x === arrNumber[0]).length} kali`
}

function mostFrequentLargestNumbers(arrNumber) {
    if (arrNumber.length === 0) return "''"
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
//''