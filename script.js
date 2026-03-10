// Function to handle the 'Yes' button click
function accepted() {
    alert("Yay! You said yes! ❤️");
    // Optionally, you can change the content of the page here
    document.querySelector('h1').innerText = "I knew you'd say yes! 🎉";
    document.querySelector('.buttons').style.display = 'none'; // Hide the buttons
}

// Function to move the 'No' button randomly
function moveNoButton() {
    const noBtn = document.getElementById('noBtn');
    const maxX = window.innerWidth - noBtn.offsetWidth;
    const maxY = window.innerHeight - noBtn.offsetHeight;

    // Generate random positions within the viewport boundaries
    const newX = Math.floor(Math.random() * maxX);
    const newY = Math.floor(Math.random() * maxY);

    noBtn.style.left = newX + 'px';
    noBtn.style.top = newY + 'px';
}
