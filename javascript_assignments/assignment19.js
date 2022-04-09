str_list = ["lorem", "ipsum", "colbern", "three"]

function stringLengthFinder(str_list){
    let empty_list = []
    for (let i = 0; i < str_list.length; i++){
        empty_list.push(str_list[i].length)
    }
    console.log(empty_list)
}

stringLengthFinder(str_list)