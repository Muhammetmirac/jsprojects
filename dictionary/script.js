const inputEl= document.getElementById("input");
const infoTextEl= document.getElementById("info-text");
const meaningContainerEl=document.getElementById("meaning-container");
const titleEL = document.getElementById("title");
const meaningEL = document.getElementById("meaning");
const audioEl = document.getElementById("audio")
const btnEl = document.getElementById("btn");

async function fetchAPI(word){

try {

    infoTextEl.style.display="block";
    meaningContainerEl.style.display = "none";
    infoTextEl.innerText=`Searching the meaning of "${word}`;

     const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

  const response = await fetch(url).
                then((res)=> res.json());
  console.log(response[0]);  


  
  infoTextEl.style.display="none";
  meaningContainerEl.style.display="block";
  titleEL.innerText=response[0].word;
  meaningEL.innerText = response[0].meanings[0].definitions[0].definition;
  audioEl.src = response[0].phonetics[0].audio;




} catch (error) {
    console.log(error)
}

        
}


inputEl.addEventListener("keyup", (e)=>{
  if(e.target.value &&  e.key ==="Enter"){
    fetchAPI(e.target.value)
  }
  

})


btnEl.addEventListener("click", ()=>{
  fetchAPI(inputEl.value);
})