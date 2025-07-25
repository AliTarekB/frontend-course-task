const nums=[1,2,3,4,5];
const init=9;
let ind1;
let ind2;


for(let i=0;i<nums.length;i++){

  for(let j=0;j<nums.length;j++){
    if((nums[i]+nums[j])==init){
       ind1=i;
       ind2=j;
   break;
    }

}


}
 console.log(ind1+" "+ind2);
