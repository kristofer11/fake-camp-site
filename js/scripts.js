$(function() {
    $(".carousel").carousel( {interval: 2000 });
    $("#carouselPause").click(function() {
        $(".carousel").carousel("pause");
    });
    $("#carouselPlay").click(function() {
        $(".carousel").carousel("cycle");
    });
    $("#reserveButton").click(function() {
        $("#reserveModal").modal("show");
    })
});

// $('#reserveModal').modal(options)