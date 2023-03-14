function generatePassword() {
  var length = document.getElementById("length").value;
  if (length < 8) {
    var error = document.getElementById("error");
    error.innerHTML = "Must be at least 8 characters.";
    error.style.display = "block";
    setTimeout(function() {
      error.style.display = "none";
    }, 3000);
    return;
  }
  if (length > 128) {
    var error = document.getElementById("error")
    error.innerHTML = "Too many characters.";
    error.style.display = "block";
    setTimeout(function() {
      error.style.display = "none";
    }, 3000);
    return;
  }

  var uppercase = document.getElementById("uppercase").checked;
  var lowercase = document.getElementById("lowercase").checked;
  var numbers = document.getElementById("numbers").checked;
  var symbols = document.getElementById("symbols").checked;

  var characters = "";
  if (uppercase) {
    characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (lowercase) {
    characters += "abcdefghijklmnopqrstuvwxyz";
  }
  if (numbers) {
    characters += "0123456789";
  }
  if (symbols) {
    characters += "!@#$%^&*()_+-=[]{}|;':\",.<>/?`~";
  }

  if (characters === "") {
    var error = document.getElementById("error")
    error.innerHTML = "Please select at least one character type.";
    error.style.display = "block";
    setTimeout(function() {
      error.style.display = "none";
    }, 3000);
    return;
  }

  var password = "";
  for (var i = 0; i < length; i++) {
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  document.getElementById("password").value = password;
}



      function copyPassword() {
        var password = document.getElementById("password");
        password.select();
        document.execCommand("copy");

        var message = document.getElementById("message");
        message.innerHTML = "Password copied to clipboard.";
                message.style.display = "block";
        setTimeout(function() {
          message.style.display = "none";
        }, 3000);
      }

function toggleCheck() {
  var checkboxes = document.querySelectorAll('input[type="checkbox"]');
  var checkAllBtn = document.querySelector('.check-all-btn');
  var checked = checkAllBtn.classList.contains('unchecked');

  for (var i = 0; i < checkboxes.length; i++) {
    checkboxes[i].checked = !checked;
  }

  if (checked) {
    checkAllBtn.textContent = 'Check All';
    checkAllBtn.classList.remove('unchecked');
  } else {
    checkAllBtn.textContent = 'Uncheck All';
    checkAllBtn.classList.add('unchecked');
  }
}

var checkAllBtn = document.querySelector('.check-all-btn');
checkAllBtn.addEventListener('click', toggleCheck);

