// DESCRIPTION:
// You will be given an array of objects (associative arrays in PHP, tables in COBOL) representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Your task is to return an array where each object will have a new property 'greeting' with the following string value:

// Hi < firstName here >, what do you like the most about < language here >?

// For example, given the following input array:

function greetDevelopers(list) {
  list.forEach((x,i)=>{
     x["greeting"] = `Hi ${x.firstName}, what do you like the most about ${x.language}?`
  })
return list
}