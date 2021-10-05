// SIDEBAR TOGGLE BUTTON
$("#sidebar-collapse").click(function (e) {
    e.preventDefault();
    $(".sidebar").css("left", "-275px");
    $(".contents-page").css("width", "100%");
    $("#collapse-btn").css("opacity", 1);
})
$("#collapse-btn").click(function (e) {
    e.preventDefault();
    $(".sidebar").css("left", 0);
    $(".contents-page").css("width", "calc(100% - 275px)");
    $("#collapse-btn").css("opacity", 0);
})

// Charts
var ctx = document.getElementById("pinkChart").getContext("2d");
var myChart = new Chart(ctx, {
    type: "doughnut",
    segmentShowStroke: false,

    data: {
        datasets: [{
            data: [64, 36],
            backgroundColor: ["#E328AF", "#FFCFF2"],
        }, ],
    },
    options: {
        elements: {
            customCutout: true,
        },
        cutoutPercentage: 68,
    },
});

var ctx = document.getElementById("greenChart").getContext("2d");
var myChart = new Chart(ctx, {
    type: "doughnut",
    segmentShowStroke: false,

    data: {
        datasets: [{
            data: [64, 36],
            backgroundColor: ["#67EBFF", "#DFEDF2"],
        }, ],
    },
    options: {
        elements: {
            customCutout: true,
        },
        cutoutPercentage: 68,
    },
});