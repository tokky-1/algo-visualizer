
export function* mergeSort(array) {
    const a = array.slice();
    yield* sortRange(a, 0, a.length - 1);
    yield { array: a.slice(), type: "done" };
}

function* sortRange(a, lo, hi) {
    if (lo >= hi) return;

    const mid = Math.floor((lo + hi) / 2);
    yield* sortRange(a, lo, mid);
    yield* sortRange(a, mid + 1, hi);
    yield* mergeRange(a, lo, mid, hi);
}

function* mergeRange(a, lo, mid, hi) {
    const left = a.slice(lo, mid + 1);
    const right = a.slice(mid + 1, hi + 1);

    let i = 0;
    let j = 0;
    let k = lo;

    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            a[k] = left[i];
            i++;
        } else {
            a[k] = right[j];
            j++;
        }

        yield { array: a.slice(), highlight: [k], type: "swap" };
        k++;
    }

    while (i < left.length) {
        a[k] = left[i];
        yield { array: a.slice(), highlight: [k], type: "swap" };
        i++;
        k++;
    }

    while (j < right.length) {
        a[k] = right[j];
        yield { array: a.slice(), highlight: [k], type: "swap" };
        j++;
        k++;
    }
}
