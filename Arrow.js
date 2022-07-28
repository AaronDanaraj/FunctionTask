//1. Odd numbers in an array

var odd = [1, 2, 3, 4, 22, 31].filter(a => a%2!=0);
console.log(odd);

//2. All elements in an array to uppercase

var uppercase = ["java", "html", "css"].map(a => a.toUpperCase());
console.log(uppercase);

//3. Sum of all elements in an array

var sum = [1, 2, 3, 4].reduce((a, b) => a + b);
console.log(sum);

//4. All prime numbers in an array

var prime = [3,4,6,8,11,13,14,66,101].filter(a => {
        for (let i=2;i<a;i++) {
            if (a%i==0)
                return false;
            else
                return a;
        }
    })
console.log(prime);

//5. All palindromes in an array

var palindrome = ["aaron","test","mom","kayak"].filter(a => {
                let rev = a;
                if (rev.split('').reverse().join('') === a)
                    return true;
                else
                    return false;
    })
console.log(palindrome);

