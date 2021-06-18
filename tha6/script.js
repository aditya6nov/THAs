// problem 1 ---> soliutions
var student={
    name:'David Ray',
    sclass:'VI',
    rollno:'12',
}
console.log(Object.keys(student));


// problem 2 ---> solutions
var student={
    name:'David Ray',
    sclass:'VI',
    rollno:'12',
}
console.log(Object.keys(student));
delete student.rollno;
console.log(student);



// problem 3 solutions
var student={
    name:'David Ray',
    sclass:'VI',
    rollno:'12',
}

var len = 0;
  for (let item in student) {
    len++;
  }
var len=Object.size(student);
console.log("size of the oblect "+len);

// problem 4 solutions
var library=[
    {
        author:'Bill gates',
        title:'The road Ahead',
        readingstatus:'true',
    },
    {
        author:'steve jobs',
        title:'walter isaacson',
        readingstatus:'true',
    },
    {
        author: 'Suzanne Collins', 
        title: 'Mockingjay: The Final Book of The Hunger Games', 
        readingstatus: 'false',
    }
]
for(let item in library){
console.log(library[item].readingstatus);
}



// problem 5 solutions
var cylinder={
    radius:5,
    height:5,
    volume:0,
}
cylinder.volume=(2*Math.PI)+(cylinder.radius)+(cylinder.height);
console.log("volume of the cylinder: "+volume.toFixed(4));



// problem 6 solutions
var library = [
 { title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1254 }, 
 { title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 }, 
 { title: 'Mockingjay: The Final Book of The Hunger Games', author: 'Suzanne Collins', libraryID: 3245 }
 ];
function sort(obj){
    for(var i=0;i<obj.length;i++){
        for(var j=i+1;j<obj.length;j++){
            if(obj[i].libraryID<obj[j].libraryID){
                var temp=obj[i];
                obj[i]=obj[j];
                obj[j]=temp;
            }
        }
    }
}
sort(library);
console.log(library);
