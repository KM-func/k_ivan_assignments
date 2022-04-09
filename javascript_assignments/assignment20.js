let list_of_nums = [1,2,3,4,5]

function monotonicSequences(list_of_nums){

    //fix the if/then section tomorrow
    if (list_of_nums[0] > list_of_nums[-1]){
        console.log("the list of numbers is decreasing")
    } else if (list_of_nums[0] < list_of_nums[-1]){
        console.log("the list of numbers is increasing")
    }   
}

monotonicSequences(list_of_nums)