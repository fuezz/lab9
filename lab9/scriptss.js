<script>
    // Function to add two numbers and display the result
    function addNumbers() {
        // Get the values from the input fields
        var num1 = parseFloat(document.getElementById("num1").value);
        var num2 = parseFloat(document.getElementById("num2").value);

        // Check if the input values are valid numbers
        if (!isNaN(num1) && !isNaN(num2)) {
            // Add the numbers
            var total = num1 + num2;

            // Display the result
            document.getElementById("result").textContent = total;
        } else {
            // Display an error message if the input values are not valid numbers
            document.getElementById("result").textContent = "Invalid input. Please enter valid numbers.";
        }
    }
</script>
