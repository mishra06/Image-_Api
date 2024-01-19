const APIkey = "vfroHGwQoVB7Wf_sbABUGMRWlNEmR9ens1pdBZWvgc4";
const Search_data = document.querySelector("#srarch_imp");
const btn = document.querySelector("#Search-btn");
const results = document.querySelector(".Search_result");
const more = document.querySelector("#show_more");


let pageNo = 1;
let inputData = "";

async function Images(){

    inputData = Search_data.value;
    const Link = `https://api.unsplash.com/search/photos?page=${pageNo}&query=${inputData}&client_id=${APIkey}`;

    const response = await fetch(Link);
    const data = await response.json();
    console.log(data);

    const res = data.results;

    if(pageNo === 1){
        results.innerHTML = " ";
    }

    res.map((result) =>{
        const inner = document.createElement("div");
        inner.classList.add("inner_css");
        const image = document.createElement("img");
        image.src = result.urls.small;
        const desc = document.createElement("p");
        desc.classList.add("p_css");
        // desc = result.alt_description;
        desc.innerText=  result.alt_description;

        
        inner.appendChild(image);
        
        results.appendChild(inner);
        inner.appendChild(desc);
    });

    pageNo++;

    if(pageNo>1){
       more.style.display="block"; 
    }
}

btn.addEventListener('click', (e)=>{
    e.preventDefault();
    pageNo = 1;
    Images();
})

more.addEventListener('click', (e)=>{
    Images();
})