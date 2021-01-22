exports.getKiravi = (req, res, next) => {
  res.render("kiravi", {
    pageTitle: "Growth Express",
    isAuthenticated: req.session.isLoggedIn
  });
};
