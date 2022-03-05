let num=13;
let count=0;
for(let i=2;i<num;i++)
{
    if(num%i==0)
    {
        console.log(num+" is not prime");
        count=1;
        break;
    }
}
if(count==0)
{
    console.log(num+" is prime");
}