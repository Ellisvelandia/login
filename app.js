function btnFunction() {
  const email = document.forms["suForm"]["inputEmail"].value;
  const password = document.forms["suForm"]["inputPassword"].value;

  const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

  if (!email.match(emailPattern) || password.length < 8) {
    document.getElementById("alertImg").style.display = "block";
  } else {
    document.getElementById("submitBtn").type = "submit";
  }
}

function hideAlert() {
  document.getElementById("alertImg").style.display = "none";
}
