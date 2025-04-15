export const findIndexOfArray = (arr: number[], target: number) => {
  //cách 1
  // for(let i=0;i<arr.length;i++){
  //     if(arr[i] ===target){
  //         return i
  //     }
  // }
  // return "No number found"

  //cách 2
  const result = arr.findIndex((num, index) => num === target);
  return result !== -1 ? result : "no number found";
};
