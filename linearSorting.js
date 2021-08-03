arr=[10,-1,8,-2,0]
len=arr.length
for(i=0;i<len-1; i++)
{
    for(j=i+1; j<len;j++)
   {
        if (arr[i] < arr[j])
        {
             
             temp=arr[j]
             arr[j]= arr[i]
               arr[i]  = temp
             
         }
     }
}
console.log(arr)