#### Whiteboarding problems:

Directions reduction: https://www.codewars.com/kata/directions-reduction
    Data Structure problem
    Answer:
    ```
    function dirReduc(arr) {
    let stack = [];
    arr.forEach((item, i) => {
        if(stack[stack.length -1] === 'NORTH' && arr[i] ==='SOUTH') {
            stack.pop()
        }
        else if(stack[stack.length -1] === 'SOUTH' && arr[i] === 'NORTH'){
            stack.pop()
        }
        else if(stack[stack.length -1] === 'EAST' && arr[i] === 'WEST'){
            stack.pop()
        }
        else if(stack[stack.length -1] === 'WEST' && arr[i] === 'EAST'){
            stack.pop()
        }
        else {
            stack.push(arr[i]);
        }
    } 
);
    return stack
};
```

Sum of Pairs: https://www.codewars.com/kata/sum-of-pairs
    Algorithm, Design Pattern

Chain Adding: https://www.codewars.com/kata/a-chain-adding-function
    Algorithm, Functional Programming

Moving Zeros To The End: https://www.codewars.com/kata/moving-zeros-to-the-end
    Data Structure problem, Array problem
   
