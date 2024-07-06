window.onload = function() {
    setTimeout(function() {
        popup();
    }, 100);

    setTimeout(function() {
        secondPopup();
    }, 100); // Display second popup after 4 seconds
};

document.getElementById('dismiss-button').addEventListener('click', function() {
    document.getElementById('box-popup').style.display = 'none';
});

document.getElementById('change-address-button').addEventListener('click', function() {
    alert('Redirecting to change address page...');
    // Add logic to change the address here.
});

document.getElementById('sign-in-button').addEventListener('click', function() {
    window.location.href = 'signup.html';
});

function popup() {
    document.getElementById('box-popup').classList.add('open-popup');
}

function secondPopup() {
    document.getElementById('second-popup').classList.add('open-second-popup');
}
