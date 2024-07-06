// JavaScript code for interactivity

// Wait for the document to be fully loaded
document.addEventListener('DOMContentLoaded', (event) => {
    // Elements for pop-ups and buttons
    const dismissButton = document.getElementById('dismiss-button');
    const changeAddressButton = document.getElementById('change-address-button');
    const popupBox = document.getElementById('box-popup');
    const secondPopupBox = document.getElementById('second-popup');
    const loginContainer = document.querySelector('.login-container');
    const loginDiv = document.querySelector('.login');
    const accountList = document.querySelector('.account-list');

    // Dismiss the popup message
    dismissButton.addEventListener('click', () => {
        popupBox.style.display = 'none';
    });

    // Toggle address change popup
    changeAddressButton.addEventListener('click', () => {
        // Assuming you have an address change form
        // Toggle its visibility here
        alert('Address change functionality not implemented yet.');
    });

    // Toggle second popup for login
    loginDiv.addEventListener('click', () => {
        secondPopupBox.style.display = secondPopupBox.style.display === 'none' ? 'block' : 'none';
    });

    // Simulate login functionality
    secondPopupBox.querySelector('button').addEventListener('click', () => {
        const loginText = document.createElement('span');
        loginText.textContent = 'Hello, User';
        loginContainer.innerHTML = '';
        loginContainer.appendChild(loginText);

        const yourAccountLink = document.createElement('a');
        yourAccountLink.href = '#';
        yourAccountLink.textContent = 'Your Account';
        accountList.querySelector('.list').innerHTML = '';
        accountList.querySelector('.list').appendChild(yourAccountLink);

        secondPopupBox.style.display = 'none';
    });
});

// Search functionality
const searchInput = document.querySelector('.search_input');
const searchIcon = document.querySelector('.search_icon');

searchIcon.addEventListener('click', () => {
    const query = searchInput.value;
    if (query) {
        alert('Search functionality not implemented. You searched for: ' + query);
    } else {
        alert('Please enter a search query.');
    }
});

// Cart functionality
const cartIcon = document.querySelector('.cart');

cartIcon.addEventListener('click', () => {
    alert('Cart functionality not implemented.');
});

// Navbar dropdown functionality for smaller screens
const allMenu = document.querySelector('.fa-bars');
allMenu.addEventListener('click', () => {
    const navOptions = document.querySelector('.secondbar');
    navOptions.classList.toggle('show');
});
