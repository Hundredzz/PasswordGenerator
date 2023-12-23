const wac = document.getElementById("asi");
const wac2 = document.getElementById("asi_2");
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        }
        else{
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
function typeWriter(element, text, index, speed) {
    if (index < text.length) {
        element.innerHTML += text.charAt(index);
        index++;
        setTimeout(() => typeWriter(element, text, index, speed), speed);
    }
}

setTimeout(function () {
    typeWriter(wac, "Asitara Phumdokmai", 0, 100);
}, 500);

setTimeout(function () {
    typeWriter(wac2, "Asitara Phumdokmai", 0, 100);
}, 500);

function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

hiddenElements.forEach((el) => observer.observe(el));
