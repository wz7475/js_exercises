/* task is to sort array of objects by values of numTeeth objects' properties */


const speciesArray = [{ speciesName: 'shark', numTeeth: 50 }, { speciesName: 'dog', numTeeth: 42 }, { speciesName: 'alligator', numTeeth: 80 }, { speciesName: 'human', numTeeth: 32 }];

// Write your code here:
const sortSpeciesByTeeth = arr => {
    let score = [];
    //let counter = arr.length;
    while (arr.length != 0) {
        let lider = arr[0];
        /* arr.forEach(i => {
            if (i != "undefined"){
                lider = i;
            } */
        /* for (let i in arr) {
            if (arr[i] != "undefined") {
                lider = arr[i];
                break;
            }
        } */

        arr.forEach(i => {
            //console.log(i);
            //console.log(score);
            if (i["numTeeth"] < lider["numTeeth"])
                lider = i;
        })

        score.push(lider);
        /* delete arr[arr.indexOf(lider)];
        counter--; */
        arr.splice(arr.indexOf(lider), 1);

    }
    return score;
}






// Feel free to comment out the code below when you're ready to test your function!

console.log(sortSpeciesByTeeth(speciesArray))
/*
// Should print [ { speciesName: 'human', numTeeth: 32 },
  { speciesName: 'dog', numTeeth: 42 },
  { speciesName: 'shark', numTeeth: 50 },
  { speciesName: 'alligator', numTeeth: 80 } ]

 */