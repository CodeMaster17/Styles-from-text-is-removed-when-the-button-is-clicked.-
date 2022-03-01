var heading=document.getElementById('head');
var btn=document.getElementById('btn');
var btnAdd=document.getElementById('btn-add');
var count=1;
btn.addEventListener('click',()=>{
    heading.classList.remove('styling');
    btn.style.display="none";
    btnAdd.style.display="block";

})
btnAdd.addEventListener('click',()=>{
    heading.classList.add('styling');
    btn.style.display="block";
    btnAdd.style.display="none";

})
