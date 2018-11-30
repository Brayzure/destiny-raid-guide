(function () {
    var isDragging = false;
    $(document).on("mousedown", ".dropdown>div:first-child", function () {
        isDragging = false;
    }).on("mousemove", ".dropdown>div:first-child", function () {
        isDragging = true;
    }).on("mouseup", ".dropdown>div:first-child", function () {
        if(!isDragging) {
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
        isDragging = false;
    });
}());