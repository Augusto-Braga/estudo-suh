const users = [
  {
    id: 1,
    email: "bragaaugusto361@gmail.com",
    password: "suhbonita666",
  },
  {
    id: 2,
    email: "sueli361@gmail.com",
    password: "gutofeio666",
  },
];

const emailInput = document.getElementById("email-input");
const passwordInput = document.getElementById("password-input");
const signInButton = document.getElementById("sign-in-button");
const contentDiv = document.getElementById("content");
const currentUser = { email: "sadsa", password: "fsdfssd" };
let userExists = false;

function checkLogin() {
  currentUser.email = emailInput.value;
  currentUser.password = passwordInput.value;

  users.forEach((user) => {
    if (
      user.email === currentUser.email &&
      user.password === currentUser.password
    ) {
      contentDiv.innerHTML = `
        <h2 class="sucess">PARABÉNS, VOCE LOGOU!</h2>
      `;
      userExists = true;
    }
  });

  if (!userExists) {
    contentDiv.innerHTML += `
      <h2 class="fail">usuário ou senha icorreto</h2>
    `;
  }
}

signInButton.addEventListener("click", checkLogin);
