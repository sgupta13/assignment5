function checkCompleteness()
 {
   if(document.getElementById("userID").value == "")
   {
    var errmsg= document.getElementById('errID');
    errmsg.style.color="red";
    errmsg.style.textDecoration = "underline";
    document.getElementById('errID').textContent ="          Please enter an ID";
   }
   
  if(document.getElementById("userFN").value == "" )
   {
    var errmsg= document.getElementById('errFN');
    errmsg.style.color="red";
    errmsg.style.textDecoration = "underline";
    document.getElementById('errFN').textContent ="          Please enter a First Name";
   }

  if(document.getElementById("userLN").value == "")
   {
    var errmsg= document.getElementById('errLN');
    errmsg.style.color="red";
    errmsg.style.textDecoration = "underline";
    document.getElementById('errLN').textContent ="          Please enter a Last Name";
   }
   
  if(document.getElementById("userID").value == "" && document.getElementById("userFN").value !=0 && document.getElementById("userLN").value !=0 )
   {
    alert("You forgot to enter the following field(s) ID");
   }

  if(document.getElementById("userID").value !=0 && document.getElementById("userFN").value == "" && document.getElementById("userLN").value !=0 )
   {
    alert("You forgot to enter the following field(s) FirstName");
   }

  if(document.getElementById("userID").value !=0 && document.getElementById("userFN").value !=0 && document.getElementById("userLN").value == "" )
   {
    alert("You forgot to enter the following field(s) LastName");
   }
  
  if(document.getElementById("userID").value == "" && document.getElementById("userFN").value == "" && document.getElementById("userLN").value !=0)
   {
    alert("You forgot to enter the following field(s) ID, FirstName");
   }
   
  if(document.getElementById("userID").value == "" && document.getElementById("userFN").value !=0 && document.getElementById("userLN").value == "" )
   {
    alert("You forgot to enter the following field(s) ID, LastName");
   }

   if(document.getElementById("userID").value !=0 && document.getElementById("userFN").value == "" && document.getElementById("userLN").value == "" )
   {
    alert("You forgot to enter the following field(s) FirstName, LastName");
   }

  if(document.getElementById("userID").value == "" && document.getElementById("userFN").value == "" && document.getElementById("userLN").value == "" )
   {
    alert("You forgot to enter the following field(s) ID ,FirstName, LastName");
   }
   
  if(document.getElementById("userID").value !="" && document.getElementById("userFN").value !=""  && document.getElementById("userLN").value !="")
   {
    var inputID=document.getElementById("userID").value;
    var inputFN=document.getElementById("userFN").value;
    var inputLN=document.getElementById("userLN").value;

    document.getElementById("chkcomplt").reset();
	document.getElementById('successID').textContent ="Your input ID is:  " + inputID;
    document.getElementById('successFN').textContent ="Your input First Name is:  " + inputFN;
    document.getElementById('successLN').textContent ="Your input Last Name is:  " + inputLN;
   }
}