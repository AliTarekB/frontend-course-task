const nums=[1,2,2,3,3,4,4,5];
let k=nums.length;
let a;
let b;




for(let i=0;i<nums.length;i++){
    

    for(let j=i+1;j<nums.length;j++){

        if(nums[i] == nums[j]){

            nums[j]="_";
            k--;

        }


    }


}
console.sort();
console.log(nums);
console.log(k)