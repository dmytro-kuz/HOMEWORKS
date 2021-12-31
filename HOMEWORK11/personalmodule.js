// ***************** Task2 *****************
exports.myDateTime = function () {
    let date = Date();
    return date;
};

let os = require("os");

exports.name = function () {
    let d = new Date();
    let hour = d.getHours();

    if (hour > 0 && hour <=8) {
        return "Good night, " + os.userInfo().username;
    } else if (hour > 8 && hour <=11) {
        return "Good morning, " + os.userInfo().username;
    } else if (hour > 11 && hour <=17) {
        return "Good day, " + os.userInfo().username;
    } else if (hour > 17) {
        return "Good evening, " + os.userInfo().username;
    };
}
