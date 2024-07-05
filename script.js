document.getElementById('tools-button').addEventListener('click', function() {
    var dropdown = document.getElementById('tools-dropdown');
    if (dropdown.style.display === 'block') {
        dropdown.style.display = 'none';
    } else {
        dropdown.style.display = 'block';
    }
});

// Alert message to notify users
alert("This website is a work in progress. It's a template and not fully built. You can contribute to building this website.");
