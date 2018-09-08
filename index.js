// add solution here
 const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
//var arrayLength = musicians.length;

function theBeatlesPlay(musicians,instruments){
  var emptyArray = [];
  for (var i=0, l = musicians.length; i < l; i++)
  {
  tempString = `(musicians).${i} plays (instruments).${i}`;
  console.log(tempString);
  emptyArray.push(tempString); 
  }
  
  
  
  
}