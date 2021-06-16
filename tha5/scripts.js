// problem 1 --> solution

function is_array(input){
  return Array.is_array(input);
}
console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));


// problem 2 --> solution

array_Clone = function(arra1) {
 return arra1.slice(0);
    };
console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));


// problem 3  --> solution

function first(val,num){
  if(num==null)
    num=1;
  return val.slice(0,num);
}
console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));

// problem 4  --> solution

myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.toString());
console.log(myColor.join());
console.log(myColor.join('+'));

// problem 5  --> solution
  
var max = 1;
function maxcount(arr){
var count = 0;
var item;
  for (var i=0; i<arr.length; i++)
  {
          for (var j=i; j<arr.length; j++)
          {
                  if (arr[i] == arr[j])
                   count+=1;
                  if (count>max)
                  {
                    max=count; 
                    item = arr[i];
                  }
          }
          count=0;
  }
  return item;
}
const arr=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
console.log(maxcount(arr) + " is repeated "+max+" times");
