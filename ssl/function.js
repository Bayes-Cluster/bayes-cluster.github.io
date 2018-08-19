function openpage(url) {
    window.open("https://ssl.uic.edu.hk/dana/home/launch.cgi?url=" + url);
}

$(document).ready(function () {
    $("#submit").click(function () {
        openpage($("#url").val());
    });
    $("#username").bind('input', function () {
        var reg = /[a-m]{1}[0-9]{9}/;
        console.log($("#username").val().match(reg));
        if ($("#username").val().match(reg) !== null && $("#username").val().match(reg)[0] === $("#username").val())
            $("#btn-login").removeAttr("disabled");
        else
            $("#btn-login").attr("disabled", "disabled");
    });
    $("#btn-login").click(function () {
        $("#loginform").submit();
        $("#loginModal").modal('hide');
    });
    $("#loginform").submit(function () {
        $("#login").addClass('hide');
        $("#exit").removeClass("hide");
    });
    $("#exit").click(function () {
        $("#login").removeClass("hide");
        $("#exit").addClass("hide");
        window.open('https://ssl.uic.edu.hk/dana-na/auth/logout.cgi');
    });
});
