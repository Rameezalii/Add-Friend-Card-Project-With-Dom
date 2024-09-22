let istatus : any = document.querySelector("h5")

let btn : any = document.querySelector("#add")
let check : number = 0

btn.addEventListener("click", function(){
   if(check==0){
    istatus.innerHTML = "Friends"
    istatus.style.color = "green"
    btn.innerHTML = "Remove Friend"
    check = 1
   }else{
    istatus.innerHTML = "Stranger"
    istatus.style.color = "red"
    btn.innerHTML = "Add Friend"
    check = 0
   }
})
