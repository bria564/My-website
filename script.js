const AnimalDiv = document.getElementById('animal-div');
const AnimalButton = document.getElementById('show-animal');


const powerDiv = document.getElementById('power-div');
const powerButton = document.getElementById('show-power');


const skillsDiv = document.getElementById('skills-div');
const skillButton = document.getElementById('show-skills')




AnimalButton.addEventListener('click',()=> {
    AnimalDiv.classList.toggle("hidden");
})


powerButton.addEventListener('click',()=>{
    powerDiv.classList.toggle("hidden");
} )


skillButton.addEventListener('click',()=> {
    skillsDiv.classList.toggle("hidden");
})