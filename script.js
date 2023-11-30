arrow = document.getElementById('arrow');
arrow.addEventListener('click' , function (e) {
    e.preventDefault()
    document.getElementById('navbar').scrollIntoView({
        behavior : "smooth"
    })
} )


