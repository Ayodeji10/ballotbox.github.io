$(document).ready(function () {
    function showPopUp() {
        $(".pop-up").show()
        $(".add").addClass("main");
    }

    function hidePopUp() {
        $(".pop-up").hide();
        $(".main").removeClass("main");
    }

    $(".fa-times").click(function () {
        hidePopUp()
    })

    $(".login").click(function (event) {
        event.preventDefault();
        showPopUp()
    })
})