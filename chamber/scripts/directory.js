//get date.js//
document.querySelector("#lastModified").innerHTML = `Last Modification: ${ document.lastModified}`;



// script.js

document.addEventListener('DOMContentLoaded', () => {
    fetchData();
    toggleView('grid'); // Set the default view to grid
});

function fetchData() {
    const data = [
        {
            "name": "Aerowind Technologies, Inc",
            "address": "Rodeo Drive, Laguna Bel Air 2 Sta. Rosa, Laguna",
            "phone": "(049) 5576103",
            "WebsiteURLs": "www.aerowind.com.ph",
            "icon" : "images/aerowind.jpg",
            "membership" : "Gold"
        },
        {
            "name": "Collabrain Technology Inc.",
            "address": "Beron Tri-Center Bldg. National Hi-Way, Brgy. Tagapo, Santa Rosa City",
            "phone": "(049) 8317048",
            "WebsiteURLs": "www.collabraintech.com",
            "icon" : "images/collabrain.jpg",
            "membership" : "Gold"
        },
        {
            "name": "She Plants Too",
            "address": "belair 1, Santa Rosa City, Laguna",
            "phone": "09186979916",
            "WebsiteURLs":"sheplantstoo.wordpress.com/she-plants-too",
            "icon" : "images/she-plants-too",
            "membership" : "Gold"

        },
        {
            "name": "Nucleio Information Services",
            "address": "Brgy. Sinalhan City of Santa Rosa, Laguna",
            "phone": "09126084607",
            "WebsiteURLs":"www.businesslist.ph",
            "icon" : "images/nuecleio.jpg",
            "membership" : "Gold"

        },
        {
            "name": "aDEAS, Inc.",
            "address": "Sta. Rosa Business Park, Don Jose, Santa Rosa City, Laguna",
            "phone": "(049)5439745",
            "WebsiteURLs":"www.adeasinc.com",
            "icon" : "images/adeas.jpg",
            "membership" : "Gold"
        },
        {
            "name": "Tensumi Corporation",
            "address": "Brgy. Balibago, Sta. Rosa City, Laguna",
            "phone": "(049) 545 4658",
            "WebsiteURLs":"www.facebook.com/tensumi/",
            "icon" : "images/tensumi.jpg",
            "membership" : "Gold"
        },
        {
            "name": "JRS Express - Santa Rosa City, Laguna",
            "address": "National Highway Crosssing, Balibago, Santa Rosa City, Laguna",
            "phone": "(49) 837-2631",
            "WebsiteURLs":"www.jrs-express.com",
            "icon" : "images/jrs-express.jpg",
            "membership" : "Gold"
        },
    
    ];
    displayData(data);
}

function displayData(data) {
    const directory = document.getElementById('directory');
    directory.innerHTML = '';
    data.forEach(business => {
        const businessCard = document.createElement('div');
        businessCard.classList.add('business-card');
        businessCard.innerHTML = `
            <h2>${business.name}</h2>
            <p>Address: ${business.address}</p>
            <p>Phone: ${business.phone}</p>
            <p>Website URLs: ${business.WebsiteURLs}</p>
            <p>Image URL: ${business.icon}</p>

            <p>Membership: ${business.membership}</p>

        `;
        directory.appendChild(businessCard);
    });
}

function toggleView(view) {
    const directory = document.getElementById('directory');
    const gridViewBtn = document.getElementById('grid-view-btn');
    const listViewBtn = document.getElementById('list-view-btn');

    if (view === 'grid') {
        directory.classList.add('grid-view');
        directory.classList.remove('list-view');
        gridViewBtn.classList.add('active');
        listViewBtn.classList.remove('active');
    } else if (view === 'list') {
        directory.classList.add('list-view');
        directory.classList.remove('grid-view');
        listViewBtn.classList.add('active');
        gridViewBtn.classList.remove('active');
    }
}





