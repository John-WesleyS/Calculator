let input=document.querySelector(".input");

function append(value){
   input.value+=value;
}

function clearInput(){
   input.value="";
}

function calculate(){
   try{
      input.value=eval(input.value);
   }
   catch(error){
      input.value="Error";
   }
   
}