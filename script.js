const toggle_btn=document.getElementById('btn')

toggle_btn.addEventListener('click',()=>{
    toggle_btn.parentElement.classList.toggle('active')
})