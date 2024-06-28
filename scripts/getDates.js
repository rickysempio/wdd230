document.querySelector("#lastModified").innerHTML = `Last Modification: ${ document.lastModified}`;

const hamButton = document.querySelector('nav');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});


