const userForm = document.getElementById('userForm');
const userCard = document.getElementById('userCard');
const reset=document.getElementById("clear");

userForm.addEventListener('submit', function(event) {
  event.preventDefault();

  let name = document.getElementById('name').value;
  let phone = document.getElementById('phone').value;
  let village = document.getElementById('village').value;
  let city = document.getElementById('city').value;

  const userData = {
    name: name,
    phone: phone,
    village: village,
    city: city
  };

  // Store user data in local storage
  localStorage.setItem('userData', JSON.stringify(userData));

  displayUserCard(userData);
});

function displayUserCard(userData) {
  userCard.innerHTML = `
    <h2>User Information:</h2>
    <p><strong>Name:</strong> ${userData.name}</p>
    <p><strong>Phone Number:</strong> ${userData.phone}</p>
    <p><strong>Village:</strong> ${userData.village}</p>
    <p><strong>City:</strong> ${userData.city}</p>
  `;
}

reset.addEventListener("click",()=>{
    userForm.reset();
   // userCard.innerHTML = '';
    //localStorage.removeItem('userData');
})

// Check if user data exists in local storage
const storedUserData = localStorage.getItem('userData');

if (storedUserData) {
  const userData = JSON.parse(storedUserData);
  displayUserCard(userData);
}
