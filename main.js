const container = document.createElement('div');
const user = document.createElement('div');
const userNm = document.createElement('div');
const email = document.createElement('div');
const header = document.createElement('div');
const tittle1 = document.createElement('div');
const tittle2 = document.createElement('div');
const tittle3 = document.createElement('div');



header.style.display ="flex";
header.style.justifyContent ="center";
header.style.marginTop = "118px";
tittle1.style.border = "1px solid #DFDFDF";
tittle1.style.width = "400px";
tittle1.innerHTML = "User";
tittle1.style.fontWeight = "bolder";
tittle2.style.border = "1px solid #DFDFDF";
tittle2.style.width = "200px";
tittle2.innerHTML = "Username";
tittle2.style.fontWeight = "bolder";
tittle3.style.border = "1px solid #DFDFDF";
tittle3.style.width = "230px";
tittle3.innerHTML = "User Email";
tittle3.style.fontWeight = "bolder";

async function dataTable () {
  let response = await fetch(" https://jsonplaceholder.typicode.com/users")
  let data = await response.json()
  console.log(data)

  data.map(item => {
    const userText = document.createElement('h2');
    userText.textContent = `${item.id} ${item.name}`;
    user.appendChild(userText);
    userText.style.color = "#6C757D";
    userText.style.fontSize = "15px";
    userText.style.border = "1px solid #DFDFDF";
    userText.style.margin = "0px";
    userText.style.height = "50px";
    userText.style.display ="flex";
    userText.style.alignItems = "center";
    userText.style.paddingLeft = "10px"
    user.style.width = "400px";
    user.style.display = "flex";
    user.style.flexDirection = "column";
    user.style.justifyContent = "start";
    
  }).join("");
  data.map(item => {
    const userName = document.createElement('h2');
    userName.textContent = `${item.username}`;
    userNm.appendChild(userName);
    userName.style.color = "#6C757D";
    userName.style.fontSize = "15px";
    userName.style.border = "1px solid #DFDFDF";
    userName.style.margin = "0px";
    userName.style.height = "50px";
    userName.style.display ="flex";
    userName.style.alignItems = "center";
    userName.style.paddingLeft = "10px"
    userNm.style.width = "200px";
    userNm.style.display = "flex";
    userNm.style.flexDirection = "column";
    userNm.style.justifyContent = "start";
    
  }).join("");
  data.map(item => {
    const userEmail = document.createElement('h2');
    userEmail.textContent = `${item.email}`;
    email.appendChild(userEmail);
    userEmail.style.color = "#6C757D";
    userEmail.style.fontSize = "15px";
    userEmail.style.border = "1px solid #DFDFDF";
    userEmail.style.margin = "0px";
    userEmail.style.height = "50px";
    userEmail.style.display ="flex";
    userEmail.style.alignItems = "center";
    userEmail.style.paddingLeft = "10px"
    email.style.width = "230px";
    email.style.display = "flex";
    email.style.flexDirection = "column";
    email.style.justifyContent = "start";
    
  }).join("");
  container.style.display = "flex";
  container.style.justifyContent = "center";
  

  container.appendChild(user);
  container.appendChild(userNm);
  container.appendChild(email);

  document.body.appendChild(header);
  document.body.appendChild(container);
  header.appendChild(tittle1);
  header.appendChild(tittle2);
  header.appendChild(tittle3);
}

// container.style.marginTop = "118px";

dataTable();
