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

// Hash map
// create hash map
function create_map(sec, val) {
    const width = 2;
    const map = [];
    for (let i = 0; i < sec; i++) {
        map.push([]);
        for (let j = 0; j < val; j++) {
            map[i].push([]);
            for (let k = 0; k < width; k++) {
                map[i][j].push(0);
            }
        }
    }
    return map;
}

function check_map(map, k, cl_n) {
    if (!map[k] || !map[k][cl_n]) {
        return;
    }

    if (map[k][cl_n][0] === 0) {
        map[k][cl_n][0] = 1;
        map[k][cl_n][1] += 1;
    } else if (map[k][cl_n][0] === 1) {
        map[k][cl_n][1] += 1;
    }
    return map;
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

    let map = create_map(sec, val);

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
                        if (section[k][j][i] === teacher[check_sec[k][c][i]]) {
                            tch[cl_n] = 0;
                            cl_n = cls_ava(val, tch);

                            if (cl_n === -1) {
                                console.error("No available teacher found during conflict resolution!");
                                break;
                            }

                            if (tch[cl_n] === 0 && tch[cl_n] !== check_sec[k][c][i]) {
                                tch[cl_n] = 1;
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

    console.log(section);

    for (let i = 0; i < sec; i++) {
        rotate2DArrayInside3DArrayClockwise(section, i);
    }
    console.log(section);

}

g_routine(section, days, cls, sec, teacher, tch, val);
