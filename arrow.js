//a.Print odd numbers in an array:



let printOddNumbers = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            console.log(arr[i]);
        }
    }
};

printOddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9]);



//b.Convert all the strings to title caps in a string array:


let convertToTitleCaps = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1).toLowerCase();
    }
    console.log(arr);
};

convertToTitleCaps(["apple", "banana", "cherry"]);


//c.Sum of all numbers in an array:



let sumOfNumbers = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log(sum);
};

sumOfNumbers([1, 2, 3, 4, 5]);



//d.Return all the prime numbers in an array:



let findPrimeNumbers = (arr) => {
    let isPrime = (num) => {
        if (num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    };

    let primes = [];
    for (let i = 0; i < arr.length; i++) {
        if (isPrime(arr[i])) {
            primes.push(arr[i]);
        }
    }
    console.log(primes);
};

findPrimeNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9]);



//f.Return all the palindromes in an array:



let findPalindromes = (arr) => {
    let isPalindrome = (str) => {
        return str === str.split('').reverse().join('');
    };

    let palindromes = [];
    for (let i = 0; i < arr.length; i++) {
        if (isPalindrome(arr[i])) {
            palindromes.push(arr[i]);
        }
    }
    console.log(palindromes);
};

findPalindromes(["level", "hello", "noon", "world"]);