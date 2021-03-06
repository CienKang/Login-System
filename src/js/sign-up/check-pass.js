function checkLength(password) {
    if (password.length >= 6 && password.length <= 12)
        return "Correct";
    else if (password.length < 6)
        return "Short"
    else return "Big";
}
function checkConditions(password) {
    var str = ""
    if (!password.match('[A-Z]'))
        str += "Uppercase";
    if (!password.match('[a-z]'))
        str += "Lowercase";
    if (!password.match('[#,@,$]'))
        str += "Special";
    if (!password.match('[0-9]'))
        str += "Numbers";

    if (str === "")
        return "Checked";
    else return str;
}

function verifyPass(password1, password2) {
    if (password1 === password2)
        return 1;
    else return 0;
}

function emailVerifiy(email) {
    var str = "";
    if (!email.match('@'))
        str += '@';
    if (!email.match('.'))
        str += '.'
    return str;
}

export { checkConditions, checkLength, verifyPass, emailVerifiy };