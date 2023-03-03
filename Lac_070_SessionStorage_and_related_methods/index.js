// sessionStorage used less than localstorage..
// sessionStorage as such as simeller that localStorage
// sesson storage exists only within the current browser tab another tab with same page will have a different storage..

sessionStorage.setItem("name", "Priyanshu..");
sessionStorage.getItem("name");
sessionStorage.clear();
sessionStorage.removeItem("name");

// add event
windodw.onstorage = (e) => {
    alert("changed : ");
    console.log(e);
};
