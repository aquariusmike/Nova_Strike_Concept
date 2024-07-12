const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
}); 

 let novaslide = 1;
setInterval(function(){
    document.getElementById('nova-radio' + novaslide).checked = true;
    novaslide++;
    if(novaslide > 5){
        novaslide= 1;
    }
}, 
5000);

//slider content reveal
document.addEventListener('scroll', function() {
    const revealElements = document.querySelectorAll(".novainfo");//select all novainfo elements

        for (let i =0 ; i < revealElements.length; i++) {
            const windowHeight = window.innerHeight;
            const elementTop = revealElements[i].getBoundingClientRect().top;
            const elementVisible = 1;//

            if (elementTop < windowHeight - elementVisible){
                revealElements[i].classList.add("reveal");
            } else {
                revealElements[i].classList.remove("reveal");
            }
        };
    
        
    
});
//Object for nova slider
let novasliderContent = [
  {
    slideImg: '',
    novaName: '',
    novaLogo: '',
    novaDescription: ''
  }
]
//Update Note List database
let updateNoteList = [
  {
    thumbnail: './nova3icon.png',
    text: 'Update1'
  },
  {
    thumbnail: './nova1icon.png',
    text: 'Update2'
  },
  {
  thumbnail: './nova5icon.png',
  text: 'Update5'
  },
  {
    thumbnail: './nova2icon.png',
    text: 'Update3'
  },
  {
    thumbnail: './nova4icon.png',
    text: 'Update4'
  }
]

//function to display update notes
function displayUpdates(limit) {
  const updateContainer = document.querySelector(".smallpatchlistwrap");
//slice show the latest array and (0, limit) set a parameter that limit the total count to show on page load
  updateNoteList.slice(0, limit).forEach(note => {
    const patchnoteDiv = document.createElement('div');//create div with a css class "smallpatch"
    patchnoteDiv.className = 'smallpatch';

    const patchnoteImg = document.createElement('img');
    patchnoteImg.className = 'smallpatch_thumbnail';//create a image with a css class "patch_thumbnail"
    patchnoteImg.src = note.thumbnail;

    const patchcontent = document.createElement('div');
    patchcontent.className = 'smallpatch_content';//create div with a css class "smallpatch_content"
    
    const patchTitle = document.createElement('h3');
    patchTitle.className = 'patch_Heading';//create h3 with a css class 'patch_heading
    patchTitle.textContent = note.text;

    const MorepatchBtn = document.createElement('button');
    MorepatchBtn.className = "moreinfo-patch";//create button with a css class "moreinfo-patch"
    MorepatchBtn.textContent = ">";

    
    console.log("Update Note Data successfully recieved");
    patchcontent.appendChild(patchTitle);//add patchTitle as a child of patchcontent
    patchcontent.appendChild(MorepatchBtn);//add MorepatchBtn as a child of patchcontent
    patchnoteDiv.appendChild(patchnoteImg);//add patchnoteImg as a child of patchnoteDiv
    patchnoteDiv.appendChild(patchcontent);//add patchcontent as a child of patchnoteDiv
    updateContainer.insertBefore(patchnoteDiv, updateContainer.querySelector('.moreinfo-btn'));
  }
  );
};
//display Notes
displayUpdates(4);