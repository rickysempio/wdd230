// spotlight script.js
document.addEventListener("DOMContentLoaded", function() {
    const membersContainer = document.getElementById('members-container');

    // Fetch members data from JSON file
    fetch('data/members.json')
        .then(response => response.json())
        .then(data => {
            // Filter and display gold and silver members
            data.forEach(member => {
                if (member.membership === 'Gold' || member.membership === 'Silver') {
                    const memberDiv = document.createElement('div');
                    memberDiv.classList.add('member', member.membership);
                    memberDiv.innerHTML = `<h2>${member.name}</h2><p>${member.membership} member</p>`;
                    
                    // Add event listeners for spotlight effect
                    memberDiv.addEventListener('mouseover', () => memberDiv.classList.add('spotlight'));
                    memberDiv.addEventListener('mouseout', () => memberDiv.classList.remove('spotlight'));
                    
                    membersContainer.appendChild(memberDiv);
                }
            });
        })
        .catch(error => console.error('Error fetching the JSON data:', error));
});



// banner script.js
document.addEventListener("DOMContentLoaded", function() {
    const banner = document.getElementById('banner');
    const closeButton = document.getElementById('close-banner');

    // Function to check if today is Monday, Tuesday, or Wednesday
    function shouldShowBanner() {
        const today = new Date().getDay(); // getDay() returns 0 for Sunday, 1 for Monday, etc.
        return today === 1 || today === 2 || today === 3;
    }

    // Show the banner if today is Monday, Tuesday, or Wednesday
    if (shouldShowBanner()) {
        banner.style.display = 'block';
    }

    // Add event listener to the close button
    closeButton.addEventListener('click', function() {
        banner.style.display = 'none';
    });
});



// call to action script.js
document.addEventListener("DOMContentLoaded", function() {
    const ctaButton = document.getElementById('cta-button');

    // Function to handle button click
    ctaButton.addEventListener('click', function() {
        window.location.href = 'join.html';
    });
});



/*local storage script.s*/

// Initialize display element variable
const visitsDisplay = document.querySelector(".visits");

//Get the stored VALUE for the numVisits-ls KEY in localStorage if it exists. If the numVisits KEY is missing, then assign 0 to the numVisits variable.
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

//Determine if this is the first visit or display the number of visits. We wrote this example backwards in order for you to think deeply about the logic.
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
}

//increment the number of visits by one.
numVisits++;

// store the new visit total into localStorage, key=numVisits-ls
localStorage.setItem("numVisits-ls", numVisits);

// 💡A client can view the localStorage data using the Applications panel in the browsers's DevTools - check it out on any major site.
