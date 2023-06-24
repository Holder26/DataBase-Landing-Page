const main =document.querySelector(".main")
const toggler = document.querySelector(".hamburger")
const navLinksContainer = document.querySelector(".navlink-container")
const container = document.querySelector(".container")

const toggleNav = () => {
    toggler.classList.toggle("open")
    navLinksContainer.classList.toggle("open")
    container.classList.toggle("hidden")
}
toggler.addEventListener("click", toggleNav)




/***********************ANIMATIONS MAIN PAGE****************** */
const boxService = document.querySelectorAll(".boxContainer")
const imgMain = document.querySelector(".imgAcceuil")

const captureData = document.querySelector(".captureData")
const captureCard = document.querySelector(".captureCard")
const captureText = document.querySelectorAll(".text")

const intersectionObserver = new IntersectionObserver(activIntersect, {rootMargin: "-10%"})
const observerData = new IntersectionObserver (dataObs, {rootMargin: "-10%"})
const observCard = new IntersectionObserver(cardObs, {rootMargin: "-10%"})
const observText = new IntersectionObserver(textObs, {rootMargin: "-10%"} )


boxService.forEach(box=> intersectionObserver.observe(box))
captureText.forEach(texte=> observText.observe(texte))
observerData.observe(captureData)
observCard.observe(captureCard)

function textObs (entries){
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("captureTextAnim")
            console.log(entry)
        }
    })
}


function activIntersect(entries){
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("boxActiv")
            console.log("dccc")
        }
    });
}
function dataObs(entries){
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("captureDataShow")
            console.log("nn")
        }
    });
}
function cardObs(entries){
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("captureCardShow")
            console.log("bb")
        }
    });
}










/******************SIGN IN***************************** */
/********************************************** */

const signInBtn = document.querySelector("#sign_in")
const signInContainer = document.querySelector(".sign-in-container")
const signInIcon = document.querySelector(".user-toggler")
const createAccount = document.querySelector(".createAccount")

createAccount.addEventListener("click", showSignUp)
signInBtn.addEventListener('click', showSignIn)
signInIcon.addEventListener('click', showSignIn)

function showSignIn(){
    setTimeout(() => {
        main.style.display = "none"
        signInContainer.classList.toggle( "container-active")
    signUpContainer.classList.remove("signUpActiv")
    dataForm.classList.remove("dataActiv")
    signInBtn.classList.add("backgroundActivButton")
    signUpBtn.classList.remove("backgroundActivButton")
    }, 200);
    
}



/*********login******* */
const loginInput = document.querySelector("#login")
const loginError = document.querySelector(".loginError")
console.log(loginInput.value)

let loginVerif = false;

loginInput.addEventListener('input', loginValid)

function loginValid(){
    if(loginInput.value.length <3){
            loginError.style.opacity = 1
            loginVerif = false;
        }
        else{
            loginError.style.opacity = 0
            loginVerif = true;
        }
    }

/**********password***************** */
const passwordInput = document.querySelector("#password")
const passwordError = document.querySelector(".passwordError")

passwordInput.addEventListener('input', passwordValid)

let passwordVerif = false;


const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/

function passwordValid(){
    if(!regexPassword.test(passwordInput.value)){
            passwordError.style.opacity = 1
            passwordVerif = false;

        }
        else{
            passwordError.style.opacity = 0
            passwordVerif = true;
        }
    }

/****************valid formulaire*********** */

const form = document.querySelector("form")

let shakeActiv = false;

form.addEventListener("submit", validFunction)

function validFunction (e){
    e.preventDefault()
    console.log(loginVerif)
    console.log(passwordVerif)

    if(passwordInput.value ==="" || loginInput.value ==="" || !loginVerif || !passwordVerif && !shakeActiv){
        console.log("test")
        shakeActiv = true
        container.classList.add("shake")
    }
    setTimeout(() => {
        container.classList.remove("shake")
    }, 400);
    shakeActiv = false
    
}

/**********************SIGN-UP----------------------- */
//**************************************************** */

const validationIcon = document.querySelectorAll(".icone-verif");
const validationText = document.querySelectorAll(".error-msg")
const signUpContainer = document.querySelector(".signUpContainer")

const signUpBtn =document.querySelector("#sign_up")


signUpBtn.addEventListener("click", showSignUp)

function showSignUp (){
    setTimeout(() => {
        main.style.display = "none"
        signUpContainer.classList.toggle("signUpActiv")
    signInContainer.classList.remove( "container-active")
    dataForm.classList.remove("dataActiv")
    signUpBtn.classList.add("backgroundActivButton")
    signInBtn.classList.remove("backgroundActivButton")
    }, 200);
    
}

/***********validation formulaire**************** */

const signUpForm = document.querySelector(".sign-up-form")


signUpForm.addEventListener('submit', validForm)

let isActive = false

const signUpValidity = {
    user : false,
    email: false, 
    password: false,
    confirmPassword: false
}

function validForm(e){
    e.preventDefault()
    console.log(signUpValidity)
    const keys = Object.keys(signUpValidity)
    const inputFalse = keys.filter(input=> !signUpValidity[input])


    if(inputFalse.length && !isActive){
        inputFalse.forEach(input => {
            const index = keys.indexOf(input)
            validation ({index: index, validation: false})
            signUpContainer.classList.add("shakeSignup")
            isActive=true
            setTimeout(() => {
                signUpContainer.classList.remove("shakeSignup")
            }, 400);
            isActive = false
        });
    }
}



/**************sign up user***************************** */
const inputUser = document.querySelector("#user")

inputUser.addEventListener('input', userValid)


function userValid(){
    if(inputUser.value.length >=3){
        validation({index:0, validation:true})
         signUpValidity.user = true
    }
    else{
        validation({index:0, validation:false})
        signUpValidity.user = false
    }
}

/*****************fonction validation*********** */

function validation ({index, validation}){
    if(validation){
        validationIcon[index].style.display = "inline"
        validationIcon[index].src = "check.svg"
        if(validationText[index]){validationText[index].style.display = "none"}
    }
    else{
        validationIcon[index].style.display = "inline"
        validationIcon[index].src = "error.svg"
        if(validationText[index]){validationText[index].style.display = "block"}
    }
}


/***************sign up email*************************** */

const inputMail = document.querySelector("#mail")

inputMail.addEventListener('input', mailValid)

const SignupEmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

function mailValid(){
    if(SignupEmailRegex.test(inputMail.value)){
        validation({index: 1, validation: true})
        signUpValidity.email = true
    }
    else{
        validation({index: 1, validation: false})
        signUpValidity.email = false
    }
}

/*****************sign up password********************** */

const inputPassword = document.querySelector("#signUp-password")

inputPassword.addEventListener('input', passwordValid)



const SignUpRegexPassword = /^(?=.*\d)(?=.*[!@#$%&*?])(?=.*[a-zA-Z]).{6,}$/


function passwordValid(){

       
        if(SignUpRegexPassword.test(inputPassword.value)){
            validation({index: 2, validation: true})
            signUpValidity.password = true
        }
        else{
            validation({index: 2, validation: false})
            signUpValidity.password = false
        }

} 

/************signup verif password********* */
const inputConfirmPassword = document.querySelector("#confirm-password")

inputConfirmPassword.addEventListener('input', confirmPassword)

function confirmPassword(){
    if(inputConfirmPassword.value === inputPassword.value ){
        validation({index: 3, validation: true})
        signUpValidity.confirmPassword = true
    }
    else{
        validation({index: 3, validation: false})
        signUpValidity.confirmPassword = false
    }
}


/****************DATABASE USER******************************** */
/************************************************************* */
let user_Data;

async function getUser (){
    const userUrl = await fetch("https://randomuser.me/api/?nat=fr&results=50")
    const jsonData = await userUrl.json()
    const result = jsonData.results 
    user_Data = result
    console.log(user_Data)

    createList(user_Data)

}

getUser()

const dataForm = document.querySelector(".data-user-form")
const dataBtn = document.querySelector("#dataBtn")
dataBtn.addEventListener("click", showData)




const tableUser = document.querySelector(".table-result")

function createList(data){
    data.forEach(user => {
        let userList = document.createElement("div")
        userList.className ="table-it"
        userList.innerHTML = `
        <div class="table-item">
            <div class="info">
                <img src="${user.picture.thumbnail}" alt="avatar">
                <p class="nom">${user.name.last}</p>
                <p class="premon">${user.name.first}</p>
            </div>
            <p class="mail">${user.email}</p>
            <p class="phone">${user.cell}</p>
        </div>
        `
        tableUser.appendChild(userList)

        userList.addEventListener("click", creatUserCard)
        const userCardContainer = document.querySelector(".user-card")
        const overlay = document.querySelector(".overlay")
        
        const tableItem = document.querySelectorAll(".table-item")

        const userListObserver = new IntersectionObserver(listObs, {rootMargin: "-10%"})
        tableItem.forEach(list=>userListObserver.observe(list))

        const databaseSearch = document.querySelector(".databaseSearch")

        function listObs (entries){
            
            entries.forEach(entry=>{
                
                if(entry.isIntersecting){
                    entry.target.classList.add("tableItemAnim")
                    // console.log(entry)
                    

                }
            })
        }

        const breakPt = document.querySelector(".break")
        const databaseSearchObserv = new IntersectionObserver(dataSearchObs, {rootMargin: "-10px", threshold: 0})

        databaseSearchObserv.observe(breakPt)
console.log(databaseSearchObserv)
        function dataSearchObs (entries){
            
            entries.forEach(entry=>{
                
                if(entry.isIntersecting){
                    databaseSearch.classList.add("databaseSearchActiv")
                    // console.log(entry)
                }
                else{
                    databaseSearch.classList.remove("databaseSearchActiv")
                }

            })
        }


function creatUserCard (){
    overlay.classList.add("overlayActiv")
    dataForm.classList.toggle("zIndex")

    const userCard = document.createElement("div")
    userCard.className = "user-card-container"
    userCard.innerHTML = `
    <div class="top-user">
    <div class="idUser">
        <img src="${user.picture.large}" alt="photo user" class="user-img">
        <h3 class="first-last-name">${user.name.first + " " + user.name.last}</h3>
        <p class="age">${user.dob.age} ans</p>
    </div>
    <div class="iconUser">
        <i class="fa-solid fa-message" id="msg"></i>
        <i class="fa-solid fa-phone" id="call"></i>
    </div>
</div>
<div class="info-user">
    <p class="label">Ville</p>
    <p class="infoLabel">${user.location.city}</p>
    <p class="label">Mobile</p>
    <p class="infoLabel">${user.cell}</p>
    <p class="label">Email</p>
    <p class="infoLabel">${user.email}</p>
</div>
    `
    userCardContainer.appendChild(userCard)

    overlay.addEventListener("click", remove)

    function remove(){
        dataForm.classList.remove("zIndex")
        overlay.classList.remove("overlayActiv")
        userCard.remove()

    }
}

        
    });
}





function showData (){
    setTimeout(() => {
        console.log("test")
        main.style.display = "none"
    dataForm.classList.toggle("dataActiv")
    signInContainer.classList.remove( "container-active")
    signUpContainer.classList.remove( "signUpActiv")
    
    }, 200);
    
}

/*******************filter************ */

const inputDataSearch = document.querySelector("#dataSearch")

inputDataSearch.addEventListener('input', filterUser)

function filterUser(e){
    window.scrollTo({ top: 0, behavior: 'smooth' });
    tableUser.textContent = ""
    const searchString = e.target.value.toLowerCase().replace(/\s/g, "")
    const userFilter = user_Data.filter(user=> searchOccurence(user))


function searchOccurence(user){
    const searchTypes = {
        nom: user.name.last.toLowerCase(),
        prenom: user.name.first.toLowerCase(),
        nomPrenom: `${user.name.last +user.name.first}`.toLocaleLowerCase(),
        prenomNom: ` ${user.name.first + user.name.last}`.toLocaleLowerCase()
    }

    for(const props in searchTypes){
        if(searchTypes[props].includes(searchString)){
            return true
        } 

    }
    
}
        createList(userFilter)
}

/********************CARD USER******************************* */
/************************************************************ */

