$(document).ready(function () {
    let lastScrollTop = 0;
    $(window).on('scroll', function () {
        let scrollTop = $(this).scrollTop();
        if (scrollTop > lastScrollTop) {
            $('#header-nav').addClass('hidden-nav');
        } else {
            $('#header-nav').removeClass('hidden-nav');
        }
        lastScrollTop = scrollTop;
    });



    // FORM
    let form = document.getElementById('form');
    form.addEventListener('submit', function (event) {

        event.preventDefault();
        let isValid = true;
        console.log(isValid);
        let nameform = document.getElementById('form-name');
        let email = document.getElementById('form-email');
        let message = document.getElementById('form-message');
        let divErr = document.getElementById('messageError');
        let alertText = document.getElementById('alertText');
        divErr.style.display = 'none';

        if ((nameform.value === '') || (email.value === '') || (message.value === '')) {
            isValid = false;
            divErr.classList.remove('d-none');
            divErr.classList.add('d-block');
            alertText.innerHTML = 'Veuillez remplir tous les champs'
        }



    })

    // A PROPOS


    let btnMore = document.getElementById('expandButton');
    let isExpanded = false;
    let txtCourt = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et unde earu autem rem rerum cupiditate dignissimos. Ab optio quos perspiciatis molestias consequatur? Ut amet, accusantium distinctio libero maiores laborum sunt!";
    let txtLong = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et unde earum autem rem rerum cupiditate dignissimos. Ab optio quos perspiciatis molestias consequatur? Utamet, accusantium distinctio libero maiores laborum sunt! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa.";
    
    btnMore.innerHTML = "Je veux en savoir plus";
    
    btnMore.addEventListener('click', function(event) {
        event.preventDefault();
        let description = document.getElementById('description');
    
        if (isExpanded) {
            description.innerHTML = txtCourt;
            btnMore.innerHTML = "Je veux en savoir plus";
        } else {
            description.innerHTML = txtLong;
            btnMore.innerHTML = "Voir moins";
        }
    
        isExpanded = !isExpanded;
    });
})