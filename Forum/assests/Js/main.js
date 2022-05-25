let name = document.getElementById("name");
let surname = document.getElementById("surname");
let age = document.getElementById("age")
let email = document.getElementById("email");
let btn = document.getElementById("btn");
btn.onclick = function () {
    if (name.value.length < 3) {
        alert("no less than 3");
    }
    if (surname.value.length < 3) {
        alert("no less than 3")
    }
    else {
        document.body.innerHTML = `Name:${name.value} \nSurname:${surname.value} \nEmail:${email.value} \nAge:${age.value}`;
    }
}
