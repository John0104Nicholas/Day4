//a.Print odd numbers in an array:



(function(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            console.log(arr[i]);
        }
    }
})([1, 2, 3, 4, 5, 6, 7, 8, 9]);


//b.Convert all the strings to title caps in a string array:



(function(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1).toLowerCase();
    }
    console.log(arr);
})(["apple", "banana", "cherry"]);


//c.Sum of all numbers in an array:



(function(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log(sum);
})([1, 2, 3, 4, 5]);


//d.Return all the prime numbers in an array:

(function(arr) {
    function isPrime(num) {
        if (num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }

    let primes = [];
    for (let i = 0; i < arr.length; i++) {
        if (isPrime(arr[i])) {
            primes.push(arr[i]);
        }
    }
    console.log(primes);
})([1, 2, 3, 4, 5, 6, 7, 8, 9]);


//f.Return all the palindromes in an array:

(function(arr) {
    function isPalindrome(str) {
        return str === str.split('').reverse().join('');
    }

    let palindromes = [];
    for (let i = 0; i < arr.length; i++) {
        if (isPalindrome(arr[i])) {
            palindromes.push(arr[i]);
        }
    }
    console.log(palindromes);
})(["level", "hello", "noon", "world"]);


//g.Return median of two sorted arrays of the same size:



(function(arr1, arr2) {
    let mergedArray = arr1.concat(arr2).sort((a, b) => a - b);
    let length = mergedArray.length;
    let median = (mergedArray[Math.floor((length - 1) / 2)] + mergedArray[Math.ceil((length - 1) / 2)]) / 2;
    console.log(median);
})([1, 2, 3], [4, 5, 6]);



//g.Remove duplicates from an array:



(function(arr) {
    let uniqueArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (!uniqueArray.includes(arr[i])) {
            uniqueArray.push(arr[i]);
        }
    }
    console.log(uniqueArray);
})([1, 2, 2, 3, 4, 4, 5]);



//h.Rotate an array by k times:



(function(arr, k) {
    let n = arr.length;
    k = k % n;
    for (let i = 0; i < k; i++) {
        let temp = arr[n - 1];
        for (let j = n - 1; j > 0; j--) {
            arr[j] = arr[j - 1];
        }
        arr[0] = temp;
    }
    console.log(arr);
})([1, 2, 3, 4, 5], 2);