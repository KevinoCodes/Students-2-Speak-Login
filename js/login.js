function validate() {
  var classcode = document.getElementById("codeinput").value;
  console.log(classcode);
  if (classcode === "21SDP") {
    console.log("success");

    window.location.replace(
      "https://www.notion.so/Students-2-Speak-Summer-Debate-Program-Homework-and-Class-Materials-Message-Board-4c15dcbe1d064d3896a10d208f1e2a63"
    );
  } else {
    console.log("error");
    window.alert("Incorrect Class Code, please check case sensitivity");
  }
}
