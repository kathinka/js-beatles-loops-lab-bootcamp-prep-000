//const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
//const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
var emptyArray = [];

function theBeatlesPlay(musicians, instruments){
  
  for (var i=0, l = musicians.length; i < l; i++)
  {
  emptyArray.push(musicians[i] + " plays " + instruments[i]);
  console.log(musicians[i] + " plays " + instruments[i]);
  }
 return emptyArray;  
}

//johnLennonFacts 

function johnLennonFacts(facts){
  var factsArray = [];
  var fL = facts.length;
  var i = 0;
  while (fL>i)
  {
    
    console.log(facts[i]+"!!!" );
    factsArray.push(facts[i]+"!!!" );
    i++;
  }
  return factsArray;
}

