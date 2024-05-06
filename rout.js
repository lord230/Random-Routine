let sec = 6;
let days = 5;
let cls = 6;
let z = 0;
let section = [];

// Outer loop for sections
for (let i = 0; i < sec; i++) {
    let arr = []; // Initialize the 2D array for each section
    
    // Middle loop for days
    for (let j = 0; j < days; j++) {
        let dayArr = []; // Initialize the 1D array for each day
        
        // Inner loop for classes
        for (let k = 0; k < cls; k++) {
            dayArr.push(z); // Push value to day array
            z++;
        }
        
        arr.push(dayArr); // Push day array to section array
    }
    
    section.push(arr); // Push section array to main section array
}

// Modifying a value in the array
section[1][0][3] = 0;
section[4][0][0] = 9
//console.log(section);

for(let i = 0 ; i < sec ; i++){
    for(let j = 0; j < days ; j++){
        for(let k = 0 ; k < cls ;k++){
            section[k][j][i] =z
            z--
        }
    }
}
console.log(section)
// code just like js
