let tabs = document.querySelectorAll('.tab_btn');
let all_content = document.querySelectorAll('.content');
let line = document.querySelector('.line');


tabs.forEach((tab, index) => {
    tab.addEventListener('click', (e) => {
        tabs.forEach(tab => { tab.classList.remove('active') });
        tab.classList.add('active');

        line.style.width = e.target.offsetWidth + "px";
        line.style.left = e.target.offsetLeft + "px";
        all_content.forEach(content => { content.classList.remove('active') });
        all_content[index].classList.add('active');
    })
})