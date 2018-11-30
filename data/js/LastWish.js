(function () {
    var x, y;
    var startX, startY;
    $(document).on("mousedown", ".dropdown>div:first-child", function () {
        startX = x;
        startY = y;
    }).on("mousemove", ".dropdown>div:first-child", function (event) {
        x = event.pageX;
        y = event.pageY;
    }).on("mouseup", ".dropdown>div:first-child", function () {
        var distance = ((x - startX)**2 + (y - startY)**2)**0.5;
        if(distance < 5) {
            if($(this).hasClass("closed")) {
                $(this).removeClass("closed");
                $(this).addClass("open");
                $(this).next().stop(true, true);
                $(this).next().slideDown();
            }
            else if($(this).hasClass("open")) {
                $(this).removeClass("open");
                $(this).addClass("closed");
                $(this).next().stop(true, true);
                $(this).next().slideUp();
            }
            else {
                $(this).next().stop(true, true);
                $(this).next().slideToggle();
            }
        }
    });
}());