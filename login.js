function validate() {
  var classcode = document.getElementById("codeinput").value;
  console.log(classcode);
  if (classcode === "21SDP") {
    console.log("success");

    window.location.href = "classLink.html";
  } else {
    console.log("error");
    window.alert("Incorrect Class Code, please check case sensitivity");
  }
}

function Powerpoints() {
  window.open("https://www.students2speak.com/login-portal")
}