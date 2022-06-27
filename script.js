console.log('Its working')

let theme = localStorage.getItem('theme')

if (theme == null) {
    setTheme('light')
} else {
    setTheme(theme)
}

let themeDots = document.getElementsByClassName('theme-dot')


for (var i = 0; themeDots.length > i; i++) {
    themeDots[i].addEventListener('click', function() {
        let mode = this.dataset.mode
        console.log('Option clicked:', mode)
        setTheme(mode)
    })
}

function setTheme(mode) {
    if (mode == 'light') {
        document.getElementById('theme-style').href = 'default.css'
    }


}

function initAccordion(elem, option) {
    document.addEventListener('click', function(e) {
        // Daca elementul nu este .acc-title, nu fa nimic
        if (!e.target.matches(elem + ' .acc-title')) return;
        else {
            // Daca parintele (.acc-container) lui .acc-title are clasa .acc-active
            if (!e.target.parentElement.classList.contains('acc-active')) {
                // Daca option==true, sterge clasa .acc-active pentru celelalte elemente
                if (option == true) {
                    var elementList = document.querySelectorAll(elem + ' .acc-container');
                    Array.prototype.forEach.call(elementList, function(e) {
                        e.classList.remove('acc-active');
                    });
                }
                // Daca nu are clasa .acc-active, adauga clasa .acc-active
                e.target.parentElement.classList.add('acc-active');
            } else {
                // Daca are clasa .acc-active, remove clasa .acc-active
                e.target.parentElement.classList.remove('acc-active');
            }
        }
    });
}

// Deschide doar unul, inchide celelalte
initAccordion('.accordion.acc-single-open', true);
// Deschide multiple, fara a inchide celelalte
initAccordion('.accordion.acc-multiple-open', false);