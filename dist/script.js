function openMeal(evt, meal) {
    var i, tabcontent, tablinks;
    tabcontent = $(".tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = $(".tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(meal).style.display = "flex";
    evt.currentTarget.className += " active";
}


// Next/previous controls


function setActivity(slide) {
    slide.classList.add("active");
    slide.style.display = "flex";
}

function showSlides(n) {
    var i;
    var slides = $(".mySlides");
    var activeIndex = 0;
    for (i = 0; i < slides.length; i++) {
        if (slides[i].className.includes("active")) {
            activeIndex = i;
        }
        slides[i].classList.remove("slide-prev", "slide-next", "active");
        slides[i].style.display = "none";
    }
    if (n === 1) {
        if (!slides[activeIndex + 1]) {
            slides[0].classList.add("slide-prev");
            setActivity(slides[0]);
        } else {
            slides[activeIndex + 1].classList.add("slide-prev");
            setActivity(slides[activeIndex + 1]);
        }
    }
    if (n === -1) {
        if (!slides[activeIndex - 1]) {
            slides[slides.length - 1].classList.add("slide-next");
            setActivity(slides[slides.length - 1]);
        } else {
            slides[activeIndex - 1].classList.add("slide-next");
            setActivity(slides[activeIndex - 1]);
        }
    }
}

function hideNavItems(navItemValues, isHide) {
    for (let i = 0; i < navItemValues.length; i++) {
        if (isHide) {
            navItemValues[i].style.display = "none";
        } else {
            navItemValues[i].style.display = "flex";
        }
    }
}

function expandSearch() {
    const navItemValues = $(".nav-item");
    const searchWrapper = document.getElementById("searchWrapper");
    const searchInput = document.getElementById("searchInput");
    if (navItemValues[0].style.display !== "none") {
        hideNavItems(navItemValues, true);
        searchWrapper.style.visibility = "visible";
        searchWrapper.style.width = "620px";
        setTimeout(() => {
            searchInput.focus();
        }, 600);
    } else {
        searchWrapper.style.visibility = "hidden";
        searchWrapper.style.width = "0px";
        setTimeout(() => {
            hideNavItems(navItemValues, false);
        }, 600);
    }

}

document.getElementById("searchInput").addEventListener("blur", () => {
    expandSearch();
});