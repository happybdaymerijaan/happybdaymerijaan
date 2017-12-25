$('.message a').click(function(){
   $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
});


function validate()
{
    if(document.getElementById("text1").value == "") {
      alert("Error: Username cannot be blank!");
      document.getElementById("text1").focus();
      return false;
    }

    if(document.getElementById("text2").value == "") {
      alert("Error: Password cannot be blank!");
      document.getElementById("text1").focus();
      return false;
    }

    if(   document.getElementById("text1").value == "bharatiacademy"
       && document.getElementById("text2").value == "keyofsuccess")
    {
        location.href="document.html";
    }
    else
    {
        alert(" wrong Username or password");
        location.href="login.html";
    }
}



/*form_login.js*/

// Toggle Function
$('.toggle').click(function(){
  // Switches the Icon
  $(this).children('i').toggleClass('fa-pencil');
  // Switches the forms  
  $('.form').animate({
    height: "toggle",
    'padding-top': 'toggle',
    'padding-bottom': 'toggle',
    opacity: "toggle"
  }, "slow");
});