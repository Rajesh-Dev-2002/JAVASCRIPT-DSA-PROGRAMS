let num = [7,6,9,4,3];

let res = num.reduce((max,el)=>{
  if(max < el){
    return el;
  }
  else{
    return max;
  }
});

console.log(res)
