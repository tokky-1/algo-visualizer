export function* binarySearch(array, target) {
    array = array.slice();

    let len = array.length;
    let lower = 0;
    let upper = len - 1;

    while (lower <= upper) {
        let mid = Math.floor((lower + upper) / 2);
        yield { array, marks: { [lower]: "low", [mid]: "mid", [upper]: "hi" }, type: "probe" };
        if (array[mid] === target) {
            yield { array, marks:{[mid]:"mid"}, type: "found" };
            return mid;
        }
        else if (array[mid] < target) {
            lower = mid + 1;
        }
        else { upper = mid - 1; }
    }
   yield { array ,marks:{}, type: "not-found" };
}
