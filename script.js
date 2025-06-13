window.onload = function () {

    function toggleMenu() {
    const nav = document.getElementById("myNavbar");
    nav.classList.toggle("responsive");
  }
// For Firebase JS SDK v7.20.
// 0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzjp2D_aFfTN0CrHuxBD67hVmmKVR-MKU",
  authDomain: "calculator-3cb5e.firebaseapp.com",
  projectId: "calculator-3cb5e",
  storageBucket: "calculator-3cb5e.firebasestorage.app",
  messagingSenderId: "176666896544",
  appId: "1:176666896544:web:d1d847e019f521406a41c5",
  measurementId: "G-45D1RN4TW3"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//const database = firebase.database();
  const auth = firebase.auth();


// Select both forms
const loginForm = document.querySelector(".login-form");
const signupForm = document.querySelector(".signup-form");

// Signup form submission
signupForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = signupForm.querySelector("input[placeholder='Full Name']").value;
  const email = signupForm.querySelector("input[placeholder='Email']").value;
  const username = signupForm.querySelector("input[placeholder='Username']").value;
  const password = signupForm.querySelector("input[placeholder='Password']").value;
    console.log("hello");
  const userData = {
    name,
    email,
    username,
    password,
  };

  // Save to Firebase under "users/username"
  /*database.ref("users/" + username).set(userData)
    .then(() => alert("Signup successful!"))
    .catch((error) => alert("Error: " + error.message));*/


     auth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        alert("Signup successful!");
        console.log("User:", userCredential.user);
      })
      .catch((error) => {
        alert("Signup error: " + error.message);
      });
});

// Login form submission
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = loginForm.querySelector("input[placeholder='Email']").value;
  const password = loginForm.querySelector("input[placeholder='Password']").value;

//   // Fetch user data
//   database.ref("users/" + username).get().then((snapshot) => {
//     if (snapshot.exists()) {
//       const user = snapshot.val();
//       if (user.password === password) {
//         alert("Login successful!");
//       } else {
//         alert("Incorrect password.");
//       }
//     } else {
//       alert("User not found.");
//     }
//   }).catch((error) => alert("Error: " + error.message));
// });

   
    auth.signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        alert("Login successful!");
        console.log("Logged in:", userCredential.user);
        window.location.href = "signIn.html";

      })
      .catch((error) => {
        alert("Login error: " + error.message);
        window.location.href = "Index.html";

      });
  });
};
