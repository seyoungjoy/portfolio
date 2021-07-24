//마우스 커서 효과
var cursor = $(".cursor"),
follower = $(".cursor-follower");

var posX = 0,
posY = 0,
mouseX = 0,
mouseY = 0;

TweenMax.to({}, 0.016, {
repeat: -1,
onRepeat: function() {
    posX += (mouseX - posX) / 9;
    posY += (mouseY - posY) / 9;

    TweenMax.set(follower, {
        css: {
            left: posX - 20,
            top: posY - 20
        }
    });

    TweenMax.set(cursor, {
        css: {
            left: mouseX,
            top: mouseY
        }
    });
}
});

$(document).on("mousemove", function(e) {
mouseX = e.pageX;
mouseY = e.pageY;
});

$(".keyword_pt").on("mouseenter", function() {
cursor.addClass("active");
follower.addClass("active");
});

$(".keyword_pt").on("mouseleave", function() {
cursor.removeClass("active");
follower.removeClass("active");
});
$("#header nav a").on("mouseenter", function() {
cursor.addClass("show");
follower.addClass("show");
});

$("#header nav a").on("mouseleave", function() {
cursor.removeClass("show");
follower.removeClass("show");
});
$("h1").on("mouseenter", function() {
cursor.addClass("show");
follower.addClass("show");
});

$("h1").on("mouseleave", function() {
cursor.removeClass("show");
follower.removeClass("show");
});
$("button").on("mouseenter", function() {
cursor.addClass("show");
follower.addClass("show");
});

$("button").on("mouseleave", function() {
cursor.removeClass("show");
follower.removeClass("show");
});

$("a").on("mouseenter", function() {
cursor.addClass("show");
follower.addClass("show");
});

$("a").on("mouseleave", function() {
cursor.removeClass("show");
follower.removeClass("show");
});

$(".over").on("mouseenter", function() {
cursor.addClass("show");
follower.addClass("show");
});

$(".over").on("mouseleave", function() {
cursor.removeClass("show");
follower.removeClass("show");
});

