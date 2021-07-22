
$(document).ready(function(){

  //To redirect to todo.html after clicking the button
  function todo()
  {
    setTimeout (function(){
    window.location.replace("todo.html"); 
    },2000);
  }

  $("#btn").click(function(e){
    //jQuery method to stop the default action of selected element to occur
    e.preventDefault();

    //Validating username and password
    if ($("#user").val()==""|| $("#password").val()=="") {
      $("p").html("<h5>Username & Password cannot be empty</h5>")
      $("p").css("size:5px")
    }

    else if ($("#user").val()=="admin" && $("#password").val()=="12345") {
      setTimeout(function() {
        $("p").html("<h5> Success</h5>")
      },2000);
      $("p").css("color:green")

      access(todo);
    }

    else{
      $("p").html("<h5>Invalid credentials</h5>")
      $("p").css("color:red")
    }

    function access(callback) {
      alert("Login Successful");
      callback()
    }
  })

})
