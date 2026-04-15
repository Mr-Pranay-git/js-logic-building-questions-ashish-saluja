// Examples 
// [ [3,4, 8],
//   [5,6,9]    ]
// Transponse:-
    // [[3,5],
    //  [4,6],
    //  [8,9]]
//  Javascript

function transposeMatrix(inputArray){
    const numberOfRows = inputArray.length
    const numberOfColumns = inputArray[0].length

    const result = [];

    for (let i=0; i<numberOfRows; i++){
        for (let j=0; j< numberOfColumns; j++){
            // console.log(inputArray[i][j]);

            if(!result[j]){
                result[j] = [];
            }
            result[j][i]= inputArray[i][j]
        }
    }

    return result
}
inputMatrix = [ [3,4,8],
                [5,6,9] ]

console.log(transposeMatrix(inputMatrix))
