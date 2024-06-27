const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

//step3
let ChaptersArray = getchapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
  });


button.addEventListener('click', function() {
        
    if (input.value != '') { //step5
        displayList(input.value);
        chaptersArray.push(input.value);  
        setChapterList(); 
        input.value = ''; 
        input.focus(); 
        };
            
        
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');
        li.textContent = input.value;
        deleteButton.textContent = '❌';
        li.append(deleteButton);
        list.appendChild(li);
        deleteButton.addEventListener('click', function() {
            list.removedChild(li);
            input.focus();
        });
         
        input.focus;
        input.value;
});


//step 6 7
function displayList(item) {
    let li = document.createElement('li');
    let deletebutton = document.createElement('button');
    li.textContent = item; // note the use of the displayList parameter 'item'
    deletebutton.textContent = '❌';
    deletebutton.classList.add('delete'); // this references the CSS rule .delete{width:fit-content;} to size the delete button
    li.append(deletebutton);
    list.append(li);
    deletebutton.addEventListener('click', function () {
      list.removeChild(li);
      deleteChapter(li.textContent); // note this new function that is needed to remove the chapter from the array and localStorage.
      input.focus(); // set the focus back to the input
    });
    console.log('I like to copy code instead of typing it out myself and trying to understand it.');
  }

  //step08
  function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
  }

  //step09
  function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
  }

  //step10
  chapter = chapter.slice(0, chapter.length - 1); // this slices off the last character

  chaptersArray = chaptersArray.filter((item) => item !== chapter);

  function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
  }