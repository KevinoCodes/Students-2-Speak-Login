function validate() {
  var classcode = document.getElementById("codeinput").value;
  console.log(classcode);
  if (classcode === "21FDP") {
    console.log("success");
    window.location.href = "classLink.html";
  } else {
    console.log("error");
    window.alert("Incorrect Class Code, please check case sensitivity");
  }
}

function Zoom(){
  window.open("https://zoom.us/j/93203862665?pwd=NEl2Rm5vak1xbzF0SzFPMTZyb3pWUT09")
}

function Schedule(){
  window.open("https://docs.google.com/spreadsheets/d/1xA3XkKLfFaIUY3hy64_VkyXWO3wtSUY1h-GR63zWfnw/edit?usp=sharing")
}

function Powerpoints() {
  window.open("https://drive.google.com/drive/u/0/folders/1zxtNbSOIEtTbmmXiGesTkrq7erwZVPQe")
}

function Resources() {
  window.open("https://drive.google.com/drive/u/0/folders/1AwrvCXP_9LvpqVrBlhSbuB-_BW-eTdz3")
}

function FirstClassroom() {
  window.open("https://classroom.google.com/c/MzU5MjQ4Mjg3MzMz?cjc=aq6mg72")
}

function SecondClassroom() {
  window.open("https://classroom.google.com/c/MzU5MjUwODUxNzQ0?cjc=mspguhc")
}

function Register() {
  window.open("https://www.students2speak.com/home")
}

function Recovercode(FirstName, LastName) {
  var FirstName = document.getElementById("name1").value;
  var LastName = document.getElementById("name2").value;
  console.log("hello");
  const students = ["XiranBo", "JaylenLau", "ElaineWu", "StevenXie", "TigerLi", "AbbieLi", "JacobGaochen", "HenryYin", "ChristinaZhou", "AlisaWei", "SebastianWang", "JasmineYang", "melanieLi", "Hilda",  "EricYue",  "MelindaLi", "DylanWu", "Emma",  "EvaWu", "FeiYang", "RaphaelWan", "Brian", "Jessie", "EthanLin"];
  var arrayLength = students.length;
  var uppercasefirstname = FirstName.toUpperCase();
  var uppercaselastname = LastName.toUpperCase();
  var FullName = uppercasefirstname + uppercaselastname;
  console.log(FullName)
  for (var i=0; i<arrayLength; i++) {
    if (FullName == students[i].toUpperCase()) {
      document.getElementById("codealert").innerHTML = `<h5>The Class Code is 21SDP<h5>`
    }
    else {
      window.alert("We don't have your child listed in our records, please email kevin.han@ucc.on.ca for assistance")
    }
    console.log(students[i]);
  }
}
