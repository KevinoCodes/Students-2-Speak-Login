function validate() {
  var classcode = document.getElementById("codeinput").value;
  console.log(classcode);
  if (classcode === "21SDP") {
    console.log("success");

    window.location.replace(
      "https://sites.google.com/view/students-2-speak/home?authuser=0"
    );
  } else {
    console.log("error");
    window.alert("Incorrect Class Code, please check case sensitivity");
  }
}
