let sec = 7;
let days = 5;
let cls = 6;
let z = 0;
let section = [];
let check_sec = [];
const teacher = [
    'Alice',
    'Bob',
    'Charlie',
    'David',
    'Eva',
    'Frank',
    'Grace',
    'Hannah',
    'Ivan',
    'Julia'
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


// check the map
function check(box,cl_n){
    let len = box.length;
    for(let i = 0 ; i < len ;i++){
        if(box[i] === cl_n){
            return false
            break;
        }
    }
    return true
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
    


    for (let i = 0; i < days; i++) {
        for (let j = 0; j < cls; j++) {
            for (let k = 0; k < sec; k++) {
                let cl_n = cls_ava(val, tch);
if(j === 0){
                if (cl_n === -1) {
                    console.error("No available teacher found!");
                    g_routine(section, days, cls, sec, teacher, tch, val);
                    continue;
                }

                if (tch[cl_n] === 0) {
                    tch[cl_n] = 1;
                }

                section[k][j][i] =cl_n;
                check_sec[k][j][i] = cl_n;
}
                        let box = []

                if (j > 0) {
                    for (let c = j - 1; c >= 0; c--) {
                        for(let st = c ; st >= 0 ;st--){
                                box[st] = check_sec[k][st][i];
                            }
                            if(check(box,cl_n)){
                                
                                section[k][j][i] = cl_n;
                                check_sec[k][j][i] = cl_n;
                                tch[cl_n] = 1;
                                
                            }else{
                                    while(!check(box,cl_n)){
                                        cl_n = cls_ava(val,tch);
                                    }
                                    if(check(box,cl_n)){
                                    section[k][j][i] = cl_n;
                                    check_sec[k][j][i] = cl_n;
                                    tch[cl_n] = 1;
                                    }
                                
                            }
                    }
                    // console.log(box)
                    // console.log(cl_n)
                }
                   
                box.fill(0)

            }
            tch.fill(0);
        }
    }

    for (let i = 0; i < sec; i++) {
        rotate2DArrayInside3DArrayClockwise(section, i);
    }

for (let i = 0; i < sec; i++) {
        for (let j = 0; j < days; j++) {
            for (let k = 0; k < cls; k++) {
                section[i][j][k] = teacher[section[i][j][k]];
            }
        }
}
console.log(section);

}

g_routine(section, days, cls, sec, teacher, tch, val);
