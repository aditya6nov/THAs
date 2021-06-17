// problem 1 soliutions
function _keys(obj) 
 {
    if (!isObject(obj)) 
      return [];
    if (Object.keys) 
      return Object.keys(obj);
    var keys = [];
    for (var key in obj) 
      if (_.has(obj, key))
        keys.push(key);
    return keys;
  }
function isObject(obj) 
{
    var type = typeof obj;
    return (type === 'function' || type === 'object' && !!obj);
}
console.log(_keys({name : "David Rayy",sclass : "VI",rollno : 12 }));

// problem 2 solutions
var student =  { 
  name : "David Rayy", 
  sclass : "VI", 
  rollno : 12  };
console.log(student);
delete student.rollno;
console.log(student);

// problem 3 solutions
Object.objsize = function(Myobj) {
    var osize = 0, key;
    for (key in Myobj) {
        if (Myobj.hasOwnProperty(key)) osize++;
    }
    return osize;
};

var student = { 
name : "David Rayy", 
sclass : "VI", 
rollno : 12 };

var objsize = Object.objsize(student);
console.log('Size of the current object : '+objsize);

// problem 4 solutions
var library = [ 
    {
        title: 'Bill Gates',
        author: 'The Road Ahead',
        readingStatus: true
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        readingStatus: true
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        readingStatus: false
    }];

for (var i = 0; i < library.length; i++) 
   {
    var book = "'" + library[i].title + "'" + ' by ' + library[i].author + ".";
    if (library[i].readingStatus) {
      console.log("Already read " + book);
    } else
    {
     console.log("You still need to read " + book);
    }
   }

// problem 5 solutions
function Cylinder(cyl_height, cyl_diameter) {
  this.cyl_height = cyl_height;
  this.cyl_diameter = cyl_diameter;
}

Cylinder.prototype.Volume = function () {
  var radius = this.cyl_diameter / 2;
  return this.cyl_height * Math.PI * radius * radius;
};

var cyl = new Cylinder(10, 6);
// Volume of the cylinder with four decimal places.
console.log('volume =', cyl.Volume().toFixed(4));

// problem 6 solutions
var library = [ 
   {
       title: 'Bill Gates',
       author: 'The Road Ahead',
       libraryID: 1254
   },
   {
       title: 'Steve Jobs',
       author: 'Walter Isaacson',
       libraryID: 4264
   },
   {
       title: 'Mockingjay: The Final Book of The Hunger Games',
       author: 'Suzanne Collins',
       libraryID: 3245
   }];

var sort_by = function(field_name, reverse, initial){

   var key = initial ?
       function(x)
             {
               return initial(x[field_name]);
             } :
       function(x) 
             {
               return x[field_name];
             };

   reverse = !reverse ? 1 : -1;

   return function (x, y) {
       return x = key(x), y = key(y), reverse * ((x > y) - (y > x));
     } ;
};


var newobj = library.sort(sort_by('libraryID', true, parseInt));

console.log(newobj);
