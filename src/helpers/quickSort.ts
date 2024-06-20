export function quickSort(arr:number[]):number[]{
    if(arr.length<=1){
        return arr
    }
    //first way
    const pivot = arr[Math.round(arr.length/2)]
    const left = arr.filter(item=>item<pivot)
    const right = arr.filter(item=>item>pivot)
    return [...quickSort(left),pivot,...quickSort(right)]

    //second way
    
    // const left:number[] = []
    // const right:number[] = []
    // for(const num of arr){
    //     if(num<pivot){
    //         left.push(num)
    //     }
    //     if(num>pivot){
    //         right.push(num)
    //     }
    // }
    // return [...quickSort(left),pivot,...quickSort(right)]
}