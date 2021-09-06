var buyBtns = document.querySelectorAll('.js-place-buy')
var modal = document.querySelector('.modal')
var closemodal = document.querySelector('.modal-close')
var modelcontainer = document.querySelector('.modal-container')
function showmodal(){
    modal.classList.add('open')
}
function hidemodal(){
    modal.classList.remove('open')
}
for (const buyBtn of buyBtns){
    buyBtn.addEventListener('click',showmodal)
}
closemodal.addEventListener('click',hidemodal)
modal.addEventListener('click',hidemodal)
modelcontainer.addEventListener('click',function(even){
    even.stopPropagation()
})