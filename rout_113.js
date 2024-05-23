function random(val) {
    return Math.floor(Math.random() * val);
}

// function cls_ava(val, tch) {
//     let attempts = 0;
//     while (attempts < val) {
//         const cls = random(val);
//         if (tch[cls] === 0) {
//             return cls;
//         }
//         attempts++;
//     }
//     if(attempts <= val){
//         for(let i = 0 ;i < tch.len; i++){
//             if(tch[i] === 0){
//                 return i;
//             }
//         }
//     }else{
//         return -1;
//     }
 
// }

function Algo(j,tch,val,k,i,box){
if(j === 0){
    let cls = cls_ava(tch,val);
    tch[cls] = 1;
    return cls;
}else if(j > 0){
    let cls = cls_ava(tch,val);
    if(check(box,cls)){
        tch[cls] = 1;
        return cls;
    }else{
        while(check(box,cls)){
            cls = cls_ava(box,cls);
        }
        tch[cls] = 1;
        return cls;
    }
}
}

function cls_ava(val, tch) {
    const attempted = new Set();
    const totalClasses = tch.length;

    // Attempt random selection first
    while (attempted.size < val) {
        const cls = random(val);
        if (!attempted.has(cls)) {
            attempted.add(cls);
            if (tch[cls] === 0) {
                return cls;
            }
        }
    }

    // If no available class found, check the remaining classes sequentially
    for (let i = 0; i < totalClasses; i++) {
        if (tch[i] === 0 && !attempted.has(i)) {
            return i;
        }
    }

    return -1;
}



// check the map
function check(box,cl_n){
    let len = box.length;
    for(let i = 0 ; i < len ;i++){
        if(box[i] === cl_n){
            return false
        }
    }
    return true
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

//function of generating Routine

function generateRoutine() {
    // const numSectionsInput = document.getElementById('numSections');
    // numSectionsInput.setAttribute('max', cls.toString()); 
    
    const sec = parseInt(document.getElementById('numSections').value);
    const data = JSON.parse(localStorage.getItem('formDataArray'));
    const school = data[1];
    const cls = parseInt(data[3]);
    const days = 5;
    const teacher = JSON.parse(localStorage.getItem('teachersData'))
    const subject = JSON.parse(localStorage.getItem('subjectData'))

    let z = 0
    let section = []
    let check_sec = [];

    var disp = document.getElementById('cover')
    disp.style.display = "flex";

    const val = teacher.length;
    const tch = Array(val).fill(0);
    

    //Creating the Section Array 


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

//Creating the Check Section Array

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

// MAIN ALGORITHM

    for(let i = 0 ; i < days ; i++){
        for(let j = 0; j < cls ; j++){
            for(let k = 0 ; k < sec ;k++){
                let box = []
                if(j > 0){
                    for(let c = j - 1 ; c >= 0 ; c--){
                        box[c] = check_sec[k][c][i];
                    }
                }
                console.log(box)
                let t = Algo(j,tch,val,box,k,i);
                section[k][j][i] = t;
                check_sec[k][j][i] = t;
            }    
            tch.fill(0);
        }
    }

    var down_cont = document.getElementById('down_cont');

  
    const layerIndex = 0; // Index of the layer to rotate
    for(let i = 0 ; i < sec ; i++){
    rotate2DArrayInside3DArrayClockwise(section, i);
    }

    console.log(section)

}

