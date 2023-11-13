<script>
    // Prompt the user for their birthdate
    var birthdateInput = prompt("Please enter your birthdate in the format DD/MM/YYYY:");

    // Split the entered value into day, month, and year
    var parts = birthdateInput.split('/');
    var day = parseInt(parts[0]);
    var month = parseInt(parts[1]);
    var year = parseInt(parts[2]);

    // Check if the entered values are valid numbers
    if (!isNaN(day) && !isNaN(month) && !isNaN(year)) {
        // Get the current year
        var currentYear = new Date().getFullYear();

        // Calculate the birth year
        var birthYear = currentYear - year;

        // Display the result on the page
        var resultContainer = document.getElementById("resultContainer");
        resultContainer.innerHTML = "<p>Your birth year is: " + birthYear + "</p>";
    } else {
        // Display an error message if the entered values are not valid numbers
        var resultContainer = document.getElementById("resultContainer");
        resultContainer.innerHTML = "<p>Invalid input. Please enter a valid birthdate in the format DD/MM/YYYY.</p>";
    }
</script>
