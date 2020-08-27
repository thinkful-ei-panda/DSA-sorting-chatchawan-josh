/* 1. Understanding merge sort
Given the following list of numbers 21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40
 */

function merge(left, right, array) {
  let leftIndex = 0;
  let rightIndex = 0;
  let outputIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      array[outputIndex++] = left[leftIndex++];
    } else {
      array[outputIndex++] = right[rightIndex++];
    }
  }

  for (let i = leftIndex; i < left.length; i++) {
    array[outputIndex++] = left[i];
  }

  for (let i = rightIndex; i < right.length; i++) {
    array[outputIndex++] = right[i];
  }
  return array;
}

function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }

  const middle = Math.floor(array.length / 2);
  let left = array.slice(0, middle);
  let right = array.slice(middle, array.length);

  left = mergeSort(left);
  right = mergeSort(right);
  return merge(left, right, array);
}

console.log(mergeSort([21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40]));

// What is the resulting list that will be sorted after 3 recursive calls to mergesort?
// [21, 1]

// What is the resulting list that will be sorted after 16 recursive calls to mergesort?
// [16, 49, 39, 27, 43, 34, 46, 40]

// What are the first 2 lists to be merged?
// [21] and [1], [26] and [45], [1, 21] and [26,45]

// Which two lists would be merged on the 7th merge?
// [16] and [49]

// 2. Understanding quicksort

function quickSort(array, start = 0, end = array.length) {
  if (start >= end) {
    return array;
  }
  const middle = partition(array, start, end);
  array = quickSort(array, start, middle);
  array = quickSort(array, middle + 1, end);
  return array;
}

function swap(array, i, j) {
  const tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
}

function partition(array, start, end) {
  const pivot = array[end - 1];
  let j = start;
  for (let i = start; i < end - 1; i++) {
    if (array[i] <= pivot) {
      swap(array, i, j);
      j++;
    }
  }
  swap(array, end-1, j);
  return j;
}

console.log(quickSort([14, 17, 13, 15, 19, 10, 3, 16, 9, 12]));

/* 1) Suppose you are debugging a quicksort implementation that is supposed to sort an array
  in ascending order. After the first partition step has been completed, the contents of the
  array is in the following order: 3 9 1 14 17 24 22 20. Which of the following statements
  is correct about the partition step? Explain your answer. */

// The pivot could have been either 14 or 17 - everyting to the left of 14 and 17 is less than both,
// everything to the right of 14 and 17 is greater than both.

/* 2) Given the following list of numbers 14, 17, 13, 15, 19, 10, 3, 16, 9, 12 show the resulting
list after the second partitioning according to the quicksort algorithm. */

// When using the last item on the list as a pivot
// [10, 3, 9, 12, 19, 14, 17, 16, 13, 15]

// When using the first item on the list as a pivot
// [14, 13, 10, 3, 9, 12, 15, 16, 19, 17]

