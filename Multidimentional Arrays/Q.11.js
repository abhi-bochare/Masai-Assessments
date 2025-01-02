let n = 3;
let m = 2;
let arr = [
    [1, 2],
    [3, 4],
    [5, 6]
  ];
  

  
for(let i=0; i<n; i++){
  let str = "";
  for(let j=0; j<m; j++){
    str += arr[i][j]+ " ";
    
  }
  console.log(str);
}