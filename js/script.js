document.querySelectorAll('.module-expand-btn').forEach(el => {
    el.onclick = function () {
        if (el.children[0].classList.contains('expanded')) {
            el.children[0].classList.remove('expanded');
            el.parentElement.parentElement.querySelector('.dropdown-submenu-block').classList.remove('visible');
        } else {
            el.querySelector('.module-expand-btn__pic').classList.add('expanded')
            el.parentElement.parentElement.querySelector('.dropdown-submenu-block').classList.add('visible');

        }
    }
})