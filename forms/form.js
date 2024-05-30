let form = document.getElementById("contact-form");
let allChild = form.getElementsByTagName("input");


let inpName = document.getElementById("inp-name");
let inpEmail = document.getElementById("inp-email");
let inpSub = document.getElementById("inp-subject");
let inpMsg = document.getElementById("inp-msg");

let errDiv = document.getElementsByClassName("form-error");


let error = false;

function emailSend(user) {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "zzf87055@gmail.com",
    Password: "6EC30788C47274F7BA982EBE0FED1C8F2251",
    To: "zzf87055@gmail.com",
    From: "zzf87055@gmail.com",
    Subject: user.subject,
    Body: `name : ${user.name}\nemail: ${user.email}\n message: ${user.message} `,
  }).then((message) => {
    console.log(message);
    if(message == "OK"){
      form.reset();
      for(let i of allChild){
      i.style.border = "none";
      }
      inpMsg.style.border = "none";
    }else{
      alert(message)
    }
    
  })

  console.log("message was sent");
}

function validateForm(id, sequential, message) {
  
  if (id?.value.trim() === "") {
    errDiv[sequential].innerHTML = message;
    id.style.border = "1px solid red";
    error = true;
  } else {
    errDiv[sequential].innerHTML = "";
    id.style.border = "1px solid green"

  }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
  
    validateForm(inpName,0, "username cannot be empty");
    validateForm(inpEmail,1, "email cannot be empty");
    validateForm(inpSub,2, "subject cannot be empty");
    validateForm(inpMsg,3,"message cannot be empty");

    if(!error){
      let user = {
        name : inpName.value,
        email : inpEmail.value,
        subject : inpSub.value,
        message : inpMsg.value
      }
      emailSend(user);
    }
    error = false;
})

function hello(){
  alert("form sent");
  
  
}
