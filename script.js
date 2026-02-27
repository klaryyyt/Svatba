function checkPassword() {
    const correctPassword = "KK2026"; // ZDE se změní heslo 
    const entered = document.getElementById("password").value;

    if (entered === correctPassword) {
        document.getElementById("login-screen").style.display = "none";
        document.getElementById("main-content").style.display = "block";
    } else {
        document.getElementById("error").innerText = "Nesprávné heslo.";
    }
}
