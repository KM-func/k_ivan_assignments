let vars = [1,2,3,4,5,6,6,7,2]

function firstAndLastChecker(list){
    if ( list[0] == list[-1] ) {
        console.log("same");
    } else {
        console.log("not the same")
    }
}

firstAndLastChecker(vars)