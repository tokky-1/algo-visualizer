export function* bubbleSort(array) {
    array = array.slice();
    let len = array.length;
    for (let j = 0; j < len; j++) {
        for (let i = 0; i < len - 1 - j; i++) {
            yield { array: array.slice(), highlight: [i,i+1], type: "compare" };
            if (array[i] > array[i + 1]) {
                let temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
                yield { array: array.slice(), highlight: [i,i+1], type: "swap" };
            }
        }
    }
    yield { array: array.slice(), highlight: [], type: "done" };
}