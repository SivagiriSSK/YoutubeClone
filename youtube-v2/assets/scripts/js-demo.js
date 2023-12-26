function handleClick() {
  const list = document.getElementById("demoJavascript").classList;
  list.add("myStyle");
  document.getElementById("demoJavascript").style.color = "blue";
}

function changeText() {
  document.getElementById("changeContent").innerText = "Welcome to JavaScript!";
}

// add menu using javascript
function addMenu() {
  let menuList = document.getElementById("menuList");
  let li = document.createElement("li");
  let text = document.createTextNode(
    document.getElementById("userInput").value
  );
  li.appendChild(text);
  menuList.appendChild(li);
}

// add skills using javascript
const skillList = [
  {
    id: 1,
    topic: "Java",
  },
  {
    id: 2,
    topic: "CSS",
  },
  {
    id: 3,
    topic: "JavaScript",
  },
];

function addUserSkill() {
  let userSkill = skillList
    .map((skill) => {
      return `<li id="addSkill"> ${skill.topic} </li>`;
    })
    .join("");
  let addSkill = document.getElementById("addSkill");
  addSkill.innerHTML = userSkill;
}

function addUserSkills() {
  let userSkill = document.getElementById("userSkill").value;
  let addSkill = document.getElementById("addSkill");
  let skill = `<li>${userSkill}</li>`;
  addSkill.innerHTML = skill;
}

//Geo Location
let locationBtn = document.getElementById("locationBtn");
locationBtn?.addEventListener("click", function () {
  navigator.geolocation.getCurrentPosition(
    function (position) {
      document.getElementById("locationBtn").disabled = true;
      console.log("allowed");
      console.log(position);
      document.getElementById("latitude").innerText = position.coords.latitude;
      document.getElementById("longitude").innerText =
        position.coords.longitude;
    },
    function () {
      locationBtn.innerText = "Blocked";
      locationBtn.disabled = true;
      console.log("not allowed");
    }
  );
});

//Web Storage API
let pincodeInput = document.getElementById("pincodeInput");
let savePincodeBtn = document.getElementById("savePincodeBtn");
let removePincodeBtn = document.getElementById("removePincodeBtn");

savePincodeBtn?.addEventListener("click", function () {
  localStorage.setItem("Pincode", pincodeInput.value),
    (savePincodeBtn.innerText = "Saved"),
    (document.getElementById("savePincodeBtn").disabled = true);
});

removePincodeBtn?.addEventListener("click", function () {
  localStorage.removeItem("Pincode", pincodeInput.value),
    (removePincodeBtn.innerText = "Removed"),
    (document.getElementById("removePincodeBtn").disabled = true);
  document.getElementById("pincodeInput").innerText = "";
});
