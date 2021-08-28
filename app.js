
const moodInput = document.getElementById("cars");
const addButton = document.getElementById("submit");
const moodList = document.querySelector(".mood-list");


addButton.addEventListener("click", addMood);

function addMood(event){
    console.log('clicked');
    event.preventDefault();

    const boxLi = document.createElement("li");
    boxLi.classList.add("boxes");
    const newMood = document.createElement("div");
    newMood.classList.add("mood");
    newMood.innerHTML=moodInput.value;
    const moodText = document.createElement("div");
    moodText.classList.add("styled");
    if(moodInput.value==="Bad"){
        moodText.innerHTML = "In the middle of difficulties lie oppurtunities, work your way to a better future..."
    }
    if(moodInput.value==="Decent"){
        newMood.style.color = "rgb(185, 183, 16)";
        moodText.innerHTML = "Allow your passion to become purpose and one day it will become your profession..."
    }
    if(moodInput.value==="Bad"){
        moodText.innerHTML = "In the middle of difficulties lie oppurtunities, work your way to a better future..."
    }
    if(moodInput.value==="Good"){
        newMood.style.color = "rgb(27, 233, 27)";
        moodText.innerHTML = "Once you accept your limits, you can't go beyond. So, keep pushing youself to the fullest..."
    }
    boxLi.appendChild(newMood);
    boxLi.appendChild(moodText);
    if(moodInput.value!==""){ 
        moodList.appendChild(boxLi);
    }
}

