const EMAIL = "abubakir02061995@gmail.com"
let subject = "TITLE";
let body = "hellow"
function sendMail() {
    window.open('mailto:' + EMAIL + '?subject=' + subject + '&body=' + body);
}