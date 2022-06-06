let login = _ => {
    let dbUserEmail = "deneme@gmail.com";
    let dbUserPassword = "root"
    let predictionCount = 0;
    while (predictionCount < 3) {
        var email = prompt("Enter the email");
        var password = prompt("Enter the password")
        if (email === dbUserEmail && password === dbUserPassword) {
            adminFunction();
            break;
        }
        else {
            predictionCount++;
            alert("Login unsuccessful remaining right : " + (3 - predictionCount));
        }

    }
}

let adminFunction = _ => {
    alert("Login successfully");
}

login();