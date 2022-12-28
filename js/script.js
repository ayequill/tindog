import { dogs } from "./data.js";
import Dog from "./Dog.js";
let isWaiting = false
// An array to pinpoint the next object from Dog class
const posts = ['0' ,'1', '2']
let currentDogIndex = 0
let currentDog = new Dog(dogs[currentDogIndex])

function getNewDog() {
    currentDogIndex+=1
    currentDog = new Dog(dogs[currentDogIndex])
    render()
}


const render =()=>{
    document.querySelector('.user').innerHTML = currentDog.setFeedHtml ()
}

// function liked (){
//     if(!isWaiting){
//     if(post.hasBeenLiked){
//         document.querySelector('.like').classList.toggle('hidden')
//         post = getNewPost()
//          setTimeout(()=> {
            
//             render()
//         document.querySelector('.like').classList.toggle('hidden')

//         },3000)

//     }else if(post.hasBeenSwiped){
//         document.querySelector('.nope').classList.toggle('hidden')
//         post = getNewPost()
//         setTimeout(()=> {
           
//            render()
//         document.querySelector('.nope').classList.toggle('hidden')
//        },3000)
//     }
// }
// }
function liked() {
    currentDog.setMatchStatus(true)
    getNewDog()
}

document.addEventListener('click',(e)=>{
    if (e.target.id === 'likeBtn'){
       document.querySelector('.like').classList.toggle('hidden')
        setTimeout(()=>{
            liked()
            document.querySelector('.like').classList.toggle('hidden')
        },2000) 
       
    }
    
    else if(e.target.id === 'nopeBtn'){
        document.querySelector('.nope').classList.toggle('hidden')
        setTimeout(()=>{
            liked()
            document.querySelector('.nope').classList.toggle('hidden')
        },2000) 
    }
})

render()



