$(function () {
    var chkToF = true;
    $("#sideGnbLink").click(function () {
        $(this).toggleClass("applied");

        $("#sideMenuBG").stop().fadeToggle(200);
        if (chkToF) {
            $("#sideMenuArea").animate({ right: "0" }, 200);
            chkToF = false;
        } else {
            $("#sideMenuArea").animate({ right: "-50%" }, 200);
            chkToF = true;
        }

        // $("#sideMenuBG").toggleClass("sideBG_Toggle");
        // $("#sideMenuArea").toggleClass("sideMenuArea_Toggle");
    });
});
