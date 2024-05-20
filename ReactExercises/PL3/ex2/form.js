document.getElementById('form').addEventListener('submit', function(event) {
    // Prevent the form from submitting normally
    event.preventDefault();

    // Get form data
    let name = document.getElementById('name').value;
    let phone = document.getElementById('phone').value;
    let email = document.getElementById('email').value;
    let birthday = document.getElementById('birthday').value;
    let gender = document.querySelector('input[name="gender"]:checked').value;
    let address = document.getElementById('address').value;
    let academic = document.getElementById('academic').value;
    let hobbies = Array.from(document.querySelectorAll('input[name="hobbies"]:checked')).map(el => el.id);

    // Compose the message
    let message = `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nBirthday: ${birthday}\nGender: ${gender}\nAddress: ${address}\nAcademic: ${academic}\nHobbies: ${hobbies.join(', ')}`;

    // Display the message in an alert box
    alert(message);
});


