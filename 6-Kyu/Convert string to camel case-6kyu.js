/* 
omplete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"
"The_Stealth_Warrior" gets converted to "TheStealthWarrior"
*/

//solution

function toCamelCase(str){
  
let result = "";
  

  if(str){
    
    let Arr = str.split(/[-_]/g);
    
    for (i in Arr){
      if(i > 0){
        result += Arr[i].charAt(0).toUpperCase() + Arr[i].slice(1);
      } else{
        
        result += Arr[i]
        
      }
    }
  }else{
    return result
  }
  return result;
  
  
}