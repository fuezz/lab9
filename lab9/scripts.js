<script>
    // Function to calculate and display the time difference
    function stopTime() {
        // Create a new instance of Date for the stop time
        var stop = new Date();

        // Calculate the time difference in milliseconds
        var timeDifference = stop.getTime() - start.getTime();

        // Convert milliseconds to seconds
        var secondsPassed = timeDifference / 1000;

        // Display the number of seconds in a pop-up
        alert("Seconds passed since the page loaded: " + secondsPassed);
    }

    // Create a new instance of Date for the start time when the page loads
    var start = new Date();

    // Alternatively, you can use the DOMContentLoaded event
    // document.addEventListener("DOMContentLoaded", function() {
    //     var start = new Date();
    // });
</script>
