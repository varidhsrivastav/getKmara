
  function validation(){
    var username = document.getElementById('nameid').value;
    var email = document.getElementById('emailid').value;

    var usercheck = /^[A-Za-z]{3,30}$/;
    var emailcheck = /^[A-Za-z_0-9.]{3,}[.]{1}[A-Za-z.]{2,8}$/;

    if (usercheck.test(username)) {
      document.getElementById('errorname').innerHTML =" ";   
    }
    else{
      document.getElementById('errorname').innerHTML = "** Invalid Name **"
      return false;
    }
    if (usercheck.test(email)) {
      document.getElementById('erroremail').innerHTML =" ";   
    }
    else{
      document.getElementById('erroremail').innerHTML = "** Invalid email **"
      return false;
    }
  }
