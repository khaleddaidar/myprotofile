

function multiply(...nums){

    result = 1;
    for (let i = 0 ; i < nums.length ; i++){
    if ( typeof(nums[i]) !== "string"){
        
        let x =Math.trunc(nums[i]);
        
        result *= x ;
        
    }
    }
    document.write(`${result}`)
    document.write(`<br><br>`)

}

 
multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000