let sec = 6;
let days = 5;
let cls = 6;
let z = 0;
let section = [];
let check_sec = [];
const teacher = [
    1, 2, 3, 4, 5, 6, 7, 8, 9
];

const val = teacher.length;
const tch = Array(val).fill(0);

function random(val) {
    return Math.floor(Math.random() * val);
}

function cls_ava(val, tch) {
    let attempts = 0;
    while (attempts < val) {
        const cls = random(val);
        if (tch[cls] === 0) {
            return cls;
        }
        attempts++;
    }
    return -1; // All teachers are busy
}


// check the hash map
function check_r(map, section, days, cls, sec, teacher, tch, val) {
    let num = parseInt(days * cls);
    let max = parseInt(num / val);
    for (let i = 0; i < sec; i++) {
        for (let j = 0; j < val; j++) {
            if (map[i][j][1] > max || map[i][j][1] === 0) {
                // Handle the case here (e.g., regenerate routine)
            }
        }
    }
}

// Routine Generation

function g_routine(section, days, cls, sec, teacher, tch, val) {

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

    for (let i = 0; i < sec; i++) {
        let arr1 = [];
        for (let j = 0; j < cls; j++) {
            let dayArr1 = []
            for (let k = 0; k < days; k++) {
                dayArr1.push(-1);
            }
            arr1.push(dayArr1);
        }
        check_sec.push(arr1);
    }
    
function check(box,cl_n){
    let len = box.length();
    while(box[len] === cl_n){
        return false
    }
    return true
}

    for (let i = 0; i < days; i++) {
        for (let j = 0; j < cls; j++) {
            for (let k = 0; k < sec; k++) {
                let cl_n = cls_ava(val, tch);

                if (cl_n === -1) {
                    console.error("No available teacher found!");
                    continue;
                }

                if (tch[cl_n] === 0) {
                    tch[cl_n] = 1;
                }

                section[k][j][i] = teacher[cl_n];
                check_sec[k][j][i] = cl_n;

                if (j > 0) {
                    for (let c = j - 1; c >= 0; c--) {
                        let box[c]
                          box.fill(-1);
                        if (section[k][j][i] === teacher[check_sec[k][c][i]]) {
                            tch[cl_n] = 0;
                            
                            box[c] = cl_n 
                            cl_n = cls_ava(val, tch);

                            while (tch[cl_n] === 0 && !check(box,cl_n)) {
                                cl_n = cls_ava(val, tch);
                            }
                            section[k][j][i] = teacher[cl_n];
                            check_sec[k][j][i] = cl_n;
                        }
                    }
                }
            }
            tch.fill(0);
        }
    }

console.log(check_sec)
    for (let i = 0; i < sec; i++) {
        rotate2DArrayInside3DArrayClockwise(section, i);
    }
    console.log(section);

}

g_routine(section, days, cls, sec, teacher, tch, val);
