const btnEl = document.getElementById("btn");
const jokeEL = document.getElementById("joke");

const apiKey ="f0lbDjPZa+A385z53d32Lg==X10EvRFK4Tzn66cl";

const options = {
    method :"GET",
    headers : {
        "X-Api-Key": apiKey,
    }
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit="


async function getJoke(){
    jokeEL.innerText="Yükleniyorr..."
    btnEl.disabled=true;
    btnEl.innerHTML="Loading..."
    const response = await fetch(apiURL,options);
    const data = await response.json();

    
    btnEl.disabled=false;
    btnEl.innerHTML="Tell Me A Joke"


    jokeEL.innerText= data[0].joke;
}

btnEl.addEventListener("click", getJoke);