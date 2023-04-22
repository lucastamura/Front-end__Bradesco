'use strict'

const switcher = document.querySelector('.btn');
console.log(switcher);

switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');

    let className = document.body.className;
    if (className == "light-theme") {
        this.textContent = "Dark";
    }
    else {
       this.textContent = "Light";
    }
    console.log('currente class name: ' + className)
});