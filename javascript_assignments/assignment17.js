let vars = [0, 1]

function functionIntegerChecker(list_of_nums){
    let has_seven_or_four = false
    for (let i = 0; i < list_of_nums.length; i++){
        if (i == 7 || i == 4 ){
            has_seven_or_four = true
        }
    }
    if (has_seven_or_four == true){
        console.log("the list has a seven and/or four")
    } else {
        console.log("the list does not have a seven or four")
    }
}

functionIntegerChecker(vars)