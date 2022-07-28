//Odd numbers in an array

let array = [1, 2, 3, 4, 22, 31];

let odd = function() {
    var odd = array.filter(a => a%2!=0);
    console.log(odd);
};

odd();

//2. All elements in an array to uppercase

array = ["java", "html", "css"];

let upper = function() {
var uppercase = array.map(a => a.toUpperCase());
console.log(uppercase);
};

upper();

//3. Sum of all elements in an array

array = [1, 2, 3, 4, 22, 31];

let sum = function() {
    var sum = array.reduce((a, b) => a + b);
    console.log(sum);
};

sum();

//4. All prime numbers in an array

array = [3,4,6,8,11,13,14,66,101];

let prime = function() {
    var prime = array.filter(a => {
        for (let i=2;i<a;i++) {
            if (a%i==0)
                return false;
            else
                return a;
        }
    })
console.log(prime);
};

prime();

//5. All palindromes in an array

array = ["aaron","test","mom","kayak"];

let pal = function() {
var palindrome = array.filter(a => {
                let rev = a;
                if (rev.split('').reverse().join('') === a)
                    return true
                else
                    return false
    })
console.log(palindrome);
};

pal();

//6.Median of two sorted arrays

let a1 = [2, 6, 8, 10, 13, 15]
let a2 = [9, 11, 12, 13, 14, 15]

let median = function() {
    let len1 = a1.length
    if (len1%2===0) {
        console.log("Array 1 Median: " + (a1[(len1/2)-1]+a1[(len1/2)])/2)
        console.log("Array 2 Median: " + (a2[(len1/2)-1]+a2[(len1/2)])/2)
    } else {
        console.log("Array 1 Median: " + a1[((len1+1)/2)-1])
        console.log("Array 2 Median: " + a2[((len1+1)/2)-1])
    }
};

median();

//7.Remove duplicates from an Array

array = [1, 2, 3, 3, 4, 22, 35, 35];

let dup = function() {
        let nodup = new Set(array);
        console.log(nodup);
    };

dup();

//8.Rotate an array

array = [1, 2, 3, 4, 5];
let k=3;

let rot = function() {
        let len = array.length;
        for(let i=0;i<k;i++) {
            array.push(array[0]);
            array.shift(array[0]);
        }
    console.log(array);
    };

rot();