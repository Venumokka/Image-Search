const accessKey="0bL7JV1GuRqa84pr_RlFJt2xkg4sc4SYEH97tAKI5wQ";


const searchForm=document.getElementById("search-form");
const searchBox=document.getElementById("search-box");
const searchResult=document.getElementById("search-result");
const showMoreButton=document.getElementById("show-more-btn");


let keyword = "";
let page = 2;

async function searchImages(){
    keyword = searchBox.value;
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=21`;

    const response = await fetch(url);
    const data  = await response.json();

    if (page ===1) {
        searchResult.innerHTML="";
    }

    const results = data.results;


    results.map((result) =>{
        console.log(result);
        const image = document.createElement("img"); 
        image.src = result.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";
        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);
    })
    showMoreButton.style.display= "block";
}

searchForm.addEventListener("submit",(e) =>{
    e.preventDefault();
    page = 1;
    searchImages();
})
showMoreButton.addEventListener("click", ()=>{
    page++;
    searchImages();
})
  
// This images coming form the unsplash web site//