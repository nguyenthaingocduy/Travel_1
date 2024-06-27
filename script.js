const menubarBtn = document.querySelector('.header-top i')
    menubarBtn.addEventListener("click", function(){
    document.querySelector('.header-top ul').classList.toggle('active')


})

function toggleContactOptions() {
    var options = document.getElementById('contact-options');
    if (options.classList.contains('show')) {
        options.classList.remove('show');
    } else {
        options.classList.add('show');
    }
}