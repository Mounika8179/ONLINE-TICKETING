    var currentDate = new Date();
    document.getElementById("date").innerHTML = currentDate.toDateString();

const gallery = document.querySelector('.gallery-container');
const scrollLeftButton = document.getElementById('scrollLeft');
const scrollRightButton = document.getElementById('scrollRight');
const scrollStep = 808; // Adjust the scroll step as needed

scrollLeftButton.addEventListener('click', () => {
    scrollGallery(-scrollStep);
});

scrollRightButton.addEventListener('click', () => {
    scrollGallery(scrollStep);
});

function scrollGallery(step) {
    const currentScroll = gallery.scrollLeft;
    let newScroll = currentScroll + step;

    // Ensure newScroll is within bounds
    newScroll = Math.max(0, Math.min(newScroll, gallery.scrollWidth - gallery.clientWidth));

    gallery.scrollTo({
        left: newScroll,
        behavior: 'smooth'
    });
}