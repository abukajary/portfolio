document.addEventListener("DOMContentLoaded", function(event) {
  let path = window.location.pathname;
  let page = path.split("/").pop();

  switch (page) {
    case "https:abukajary.github.ioportfolio":
      let el = document.getElementById('a_home');
      el.style.borderBottom = "1px solid black";
      break;
    case "about.html":
      let el1 = document.getElementById('a_about');
      el1.style.borderBottom = "1px solid black";
      break;
    default:
      let el2 = document.getElementById('a_contact');
      el2.style.borderBottom = "1px solid black";
      break;
  }

});
