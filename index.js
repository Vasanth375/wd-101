
const registrationForm = document.getElementById("registration-form");
const registrationTable = document.getElementById("registration-table");


const data = JSON.parse(localStorage.getItem("registrationData")) || [];


function updateTable() {
  let table = "<tr><th>Name</th><th>Email</th><th>Password</th><th>dob</th><th>Accepted terms?</th></tr>";
  for (let i = 0; i < data.length; i++) {
    table += `<tr>
                <td>${data[i].name}</td>
                <td>${data[i].email}</td>
                <td>${data[i].password}</td>
                <td>${data[i].dob}</td>
                <td>${data[i].acceptTerms}</td>
              </tr>`;
  }
  registrationTable.innerHTML = table;
}

updateTable(); 


registrationForm.addEventListener("submit", function(event) {
  event.preventDefault(); 

  
  const formData = new FormData(registrationForm);
  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");
  const dob = formData.get("dob");
  const acceptTerms = formData.get("acceptTerms") ? "Yes" : "No";

  
  data.push({ name, email, password, dob, acceptTerms });
  localStorage.setItem("registrationData", JSON.stringify(data));

  updateTable(); 
  registrationForm.reset();
});
