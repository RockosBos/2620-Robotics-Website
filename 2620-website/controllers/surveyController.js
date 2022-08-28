const surveyView = (req, res) => {
    res.render("survey", {});
}

const resultsView = (req, res) => {
    res.render("results", {});
}

module.exports = {
    surveyView,
    resultsView
}
