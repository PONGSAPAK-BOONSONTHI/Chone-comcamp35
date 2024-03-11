function scrollToImage(imageId) {
    var image = document.getElementById(imageId);
    image.scrollIntoView({ behavior: 'smooth'});
}
function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}


document.querySelector('.BT1 button.BaseButton').addEventListener('click', function() {
    document.querySelector('.navbar').style.display = 'inline-flex';
    document.querySelector('.nb').style.display = 'block'; 
});

document.querySelector('.BT1 button.BaseButton-XXX').addEventListener('click', function() {
    document.querySelector('.navbar').style.display = 'inline-flex';
    document.querySelector('.nb').style.display = 'none';
});

document.addEventListener("DOMContentLoaded", function() {
    const accordionButtons = document.querySelectorAll('.Box-6-CT-CL button');

    accordionButtons.forEach(button => {
        button.addEventListener('click', function() {
            const accordionContent = this.nextElementSibling;
            const isExpanded = this.getAttribute('aria-expanded') === 'true';

            this.setAttribute('aria-expanded', !isExpanded);
            accordionContent.classList.toggle('active');
            accordionContent.setAttribute('aria-hidden', !isExpanded);

            const icon = this.querySelector('.rotate-icon');
            if (icon) {
                icon.classList.toggle('rotate180');
            }

            if (!isExpanded) {
                setTimeout(() => {
                    accordionContent.scrollIntoView({ behavior: 'smooth1' });
                }, 300);
            }
        });
    });
});

