const button = document.querySelectorAll(".button")
const overLay = document.getElementById("overlay")
const cancelIcon = document.getElementById("cancel-icon")
const apply = document.getElementById("apply")
const form = document.getElementById("application-form")


  for(let i = 0; i < button.length; i++){
    button[i].addEventListener('click', function() {

    window.location.href = '/pages/aboutus.html';
    });
  }
  function hidden(){
  overLay.classList.remove('hidden')
  form.classList.remove('hidden')
  }

function add (){
  overLay.classList.add('hidden')
  form.classList.add('hidden')
}
apply.addEventListener('click', function(){
  hidden()
})
   
cancelIcon.addEventListener('click',function(){
  add()
})

overLay.addEventListener('click',function(){
  add()
})

document.getElementById("application-form").addEventListener("click", (e) => {
  e.stopPropagation()
 
} )