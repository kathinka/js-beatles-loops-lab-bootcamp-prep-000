const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
var emptyArray = [];

function theBeatlesPlay(){
  
  for (var i=0, l = musicians.length; i < l; i++)
  {
  emptyArray.push(musicians[i] + " plays " + instruments[i]);
  console.log(musicians[i] + " plays " + instruments[i]);
  }
 return emptyArray;  
}

//johnLennonFacts 

const facts = [  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice" ];

function johnLennonFacts(facts){
  
  while (facts.length>0)
  {
    console.log(facts)
    
  }
  
}

