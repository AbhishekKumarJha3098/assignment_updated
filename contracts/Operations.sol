//SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.0;

                                                                                                            


contract Operations {
    // Function to add two numbers

    
    function add(uint a, uint b) public pure returns (uint) {
        return a + b;
    }

 // Function to multiply an array of integers


      
function addNumbers(uint[] memory numbers) public pure returns (uint) {
        uint sum1 = 0;
        for (uint i = 0; i < numbers.length; i++) {
            sum1 += numbers[i];
        }
        return sum1;
    }


    function subtractNumbers(uint256[] memory nums) public pure returns (uint256) {
        uint256 result = nums[0];
        for (uint256 i = 1; i < nums.length; i++) {
            result -= nums[i];
        }
        return result;
    }


// Function to multiply an array of integers
    function multiply(uint[] memory numbers) public pure returns (uint) {
        uint product = 1;
        for (uint i = 0; i < numbers.length; i++) {
            product *= numbers[i];
        }
        return product;
    }




  function divideNumbers(uint256[] memory nums) public pure returns (uint256) {
        require(nums.length >= 2, "At least two numbers required");
        uint256 result = nums[0];
        for (uint256 i = 1; i < nums.length; i++) {
            require(nums[i] != 0, "Cannot divide by zero");
            result /= nums[i];
        }
        return result;
    }



    // Function to generate the Fibonacci sequence up to n terms
    function fibonacci(uint n) public pure returns (uint[] memory) {
        uint[] memory fib = new uint[](n);
        uint a = 0;
        uint b = 1;
        fib[0] = a;
        fib[1] = b;

        for (uint i = 2; i < n; i++) {
            uint c = a + b;
            fib[i] = c;
            a = b;
            b = c;
        }  

        return fib;
    }

    // Function to perform addition on the fibonacci sequence
    function addFibonacci(uint n) public pure returns (uint) {
        uint[] memory fib = fibonacci(n);
        uint sum = 0;

        for (uint i = 0; i < fib.length; i++) {
            sum = add(sum, fib[i]);
        }

        return sum;
    }




 function isEven(uint num) public pure returns (bool) {
        return num % 2 == 0;
    }

    // Function to perform addition and check if the result is even or odd
    function addAndCheckEvenOdd(uint n) public pure returns (bool) {
        uint sum = addFibonacci(n);
        return isEven(sum);
    }
}


