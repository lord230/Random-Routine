let sec = 6;
let days = 5;
let cls = 6;
let z = 0;
let section = [];
const teacher = [
        "Math",
        "Physics",
        "Chemistry",
        "Biology",
        "English",
        "History",
        "Computer Science",
        "Geography",
        "Art",
        "Music"
    ];

const val = teacher.length;
const tch = Array(val).fill(0);

function random(val) {
    return Math.floor(Math.random() * val);
}

function cls_ava(val, tch) {
    while (true) {
        const cls = random(val);
        if (tch[cls] === 0) {
            return cls;
        }
    }
}


function rotate2DArrayInside3DArrayClockwise(arr3D, layerIndex) {
    const layer = arr3D[layerIndex];
    const rotatedLayer = [];

    // Transpose the layer
    for (let i = 0; i < layer[0].length; i++) {
        rotatedLayer.push([]);
        for (let j = 0; j < layer.length; j++) {
            rotatedLayer[i].push(layer[j][i]);
        }
    }

    // Reverse each row to rotate clockwise
    for (let i = 0; i < rotatedLayer.length; i++) {
        rotatedLayer[i].reverse();
    }

    // Replace the original layer with the rotated one
    arr3D[layerIndex] = rotatedLayer;
}

// Outer loop for sections
for (let i = 0; i < sec; i++) {
    let arr = []; // Initialize the 2D array for each section
    
    // Middle loop for days
    for (let j = 0; j < cls; j++) {
        let dayArr = []; // Initialize the 1D array for each day
        
        // Inner loop for classes
        for (let k = 0; k < days; k++) {
            dayArr.push(z); // Push value to day array
            z++;
        }
        
        arr.push(dayArr); // Push day array to section array
    }
    
    section.push(arr); // Push section array to main section array
}

// Modifying a value in the array

//console.log(section);

for(let i = 0 ; i < days ; i++){
    for(let j = 0; j < cls ; j++){
        for(let k = 0 ; k < sec ;k++){
            let cl_n = cls_ava(val, tch);

                if (tch[cl_n] === 0) {
                    tch[cl_n] = 1;
                } else {
                    console.log("yes it did");
                    cl_n = cls_ava(val, tch);
                }
                 section[k][j][i] = teacher[cl_n];
        }
        tch.fill(0);

    }
}
//console.log(section)
const layerIndex = 0; // Index of the layer to rotate
for(let i = 0 ; i < sec ; i++){
rotate2DArrayInside3DArrayClockwise(section, i);
}
console.log(section)
// code just like js
