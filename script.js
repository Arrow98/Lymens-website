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


apply.addEventListener('click', function(){
  overLay.classList.remove('hidden')
  form.classList.remove('hidden')
})
   
cancelIcon.addEventListener('click',function(){
  overLay.classList.add('hidden')
  form.classList.add('hidden')
})

overLay.addEventListener('click',function(){
  overLay.classList.add('hidden')
  form.classList.add('hidden')
})