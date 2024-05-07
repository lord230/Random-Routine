let sec = 6;
let days = 5;
let cls = 6;
let z = 0;
let section = [];
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

for(let i = 0 ; i < sec ; i++){
    for(let j = 0; j < cls ; j++){
        for(let k = 0 ; k < days ;k++){
            section[k][j][i] =z
            z--
        }
    }
}

const layerIndex = 0; // Index of the layer to rotate
for(let i = 0 ; i < sec ; i++){
rotate2DArrayInside3DArrayClockwise(section, i);
}
console.log(section)
// code just like js
