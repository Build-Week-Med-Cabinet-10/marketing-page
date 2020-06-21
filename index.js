window.addEventListener('load',()=>{
    let de = {
        navItemTwo: document.querySelector("#navItemTwo"),
        aboutDiv: document.querySelector("#about"),
        teamDiv: document.querySelector("#team"),
    }
    init(de);
})

function init(de) {
    let route = window.location.search.substr(1) || "about";
    if (route == "team") {
        de.navItemTwo.innerText = "About";
        de.navItemTwo.href = "?about";
        de.aboutDiv.style = "display: none";
        de.teamDiv.style = "display: block";
    }
    else if (route == "about") {
        de.navItemTwo.innerText = "Team";
        de.navItemTwo.href = "?team";
        de.aboutDiv.style = "display: block";
        de.teamDiv.style = "display: none";
    }
    else {
        window.location = "/";
    }
}