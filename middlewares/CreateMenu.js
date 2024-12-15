var Car = require("../models/car").Car;
module.exports = async function(req, res, next) {
    try {
        const menu = await Car.find(
            { $and: [{ nick: { $exists: true, $ne: "" } }, { title: { $exists: true, $ne: "" } }] },
            { _id: 0, title: 1, nick: 1 }
        );
        res.locals.nav = menu;
        next();
    } catch (error) {
        console.error("Ошибка при загрузке меню:", error);
        next(error);
    }
};