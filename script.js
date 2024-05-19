document.addEventListener('DOMContentLoaded', function() {
    const checkBox = document.getElementById('toggle');
    const background = document.querySelector('.css-selector');
    const imageAnimation = document.querySelector('.video-container .image-animation');
    const gifContainers = document.querySelectorAll('.gif-container');
    const backgroundMusic = document.getElementById('backgroundMusic');
    const label = document.getElementById('toggleLabel');

    checkBox.addEventListener('change', function() {
        if (checkBox.checked) {
            background.classList.add('disco-mode');
            imageAnimation.classList.add('disco-mode'); // Apply the disco mode class to image animation
            gifContainers.forEach(container => container.classList.add('visible'));
            backgroundMusic.play(); // Play the music when the toggle is on
            label.textContent = ''; // Change text when disco is on
            label.style.color = '#000'; // Optional: Change text color when on
        } else {
            background.classList.remove('disco-mode');
            imageAnimation.classList.remove('disco-mode'); // Remove the disco mode class
            gifContainers.forEach(container => container.classList.remove('visible'));
            backgroundMusic.pause(); // Pause the music when the toggle is off
            backgroundMusic.currentTime = 0; // Optionally reset the song to the start
            label.textContent = 'DISCO!';
            label.style.color = '#FFF'; // Optional: Change text color when off
        }
    });
});

function copyText() {
    // Get the text from the h3 element
    const text = document.getElementById('textToCopy').innerText;

    // Create a temporary textarea element to copy the text
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    
    // Select the text and copy it to the clipboard
    textarea.select();
    document.execCommand('copy');
    
    // Remove the temporary textarea
    document.body.removeChild(textarea);

    
}