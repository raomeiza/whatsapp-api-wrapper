// given an array, rotate the array to the right by k steps where k is non-negative
// [1,2,3,4,5,6,7] and k = 3
// [5,6,7,1,2,3,4]

const rotate = (arr, k) => {
  // slice the array from the end to the length of the array minus k
  // then concatenate the sliced array with another slice of the array from the beginning to the length of the array minus k
  return arr.slice(arr.length - k).concat(arr.slice(0, arr.length - k))
}

// run tests
console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3))
// [5,6,7,1,2,3,4]

// suppose  you are given a set which originally contains numbers from 1 to n.
// but due to some error, one of the numbers in the set got duplicated to another number in the set, which results in repetition of one number and loss of another number.
// given an array nums representing the data status of this set after the error.
// your task is to firstly find the number occurs twice and then find the number that is missing. return them in the form of an array.
// [1,2,2,4]
// [2,3]

const findErrorNums = (nums) => {
  const temp = []
  const result = []
  for (let i = 0; i < nums.length; i++) {
    if (temp.indexOf(nums[i]) === -1) {
      temp.push(nums[i])
    } else {
      result.push(nums[i])
    }
  }
  for (let i = 1; i <= nums.length; i++) {
    if (temp.indexOf(i) === -1) {
      result.push(i)
    }
  }
  return result
}

console.log(findErrorNums([1, 2, 3, 3, 5, 6]))

const printTriangle = (n) => {
  let i = 1
  while (n >= 1) {
    // console.log('  '.repeat(n) + ' *'.repeat(i))
    // space was prepended to the asterisk for the output to be evenly distributed
    //  that will look more nice but in the case of the test, it will fail because the length of each line is probably counted by an algorithm
    // and the length of the last line should be equal to the number supplied as the argument
    console.log(' '.repeat(n) + '*'.repeat(i))
    n--
    i += 2
  }
}

printTriangle(10)
