class Solution {
  Arrsub(arr, l, r) {
    let temp = arr[r];
    for (let j = r; j > l - 1; j--) {
      arr[j] = arr[j - 1];
    }
    arr[l] = temp;

    return arr;
  }

  toNegative(arr) {
    let last_neg_index = -1;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < 0) {
        last_neg_index += 1;
        let temp = arr[i];
        arr[i] = arr[last_neg_index];
        arr[last_neg_index] = temp;
        if (i - last_neg_index >= 2) this.Arrsub(arr, last_neg_index + 1, i);
      }
    }

    return arr;
  }
}

let arr = [5, 5, -3, 4, -8, 0, -7, 3, -9, -3, 9, -2, 1, 1.5];
let ob = new Solution();
ob.toNegative(arr);
for (let i of arr) {
  console.log(i, " ");
}
