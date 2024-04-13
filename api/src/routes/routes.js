const { Router } = require("express");

const route = Router();

route.use("/auth", require("./auth.routes"));
route.use("/prod", require("./Product.routes"));
route.use("/cart", require("./cart.routes"));
route.use("/review", require("./review.routes"));
route.use("/like", require("./like.routes"));
route.use("/productStatistics", require("./ProductStatistics.routes"));


module.exports = route;
