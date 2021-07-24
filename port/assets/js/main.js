//로딩
function imagesProgress () {
    var $container = $('#load'),            
        $progressText = $container.find('.load-text'), 

        imgLoad = imagesLoaded('body'),//이미지 로딩을 모니터링
        imgTotal = imgLoad.images.length,//body 전체 이미지갯수
        imgLoaded  = 0,// 읽은 이미지갯수
        current = 0,//현재 진행률 
        progressTimer = setInterval(updateProgress, 1000 / 60);

        imgLoad.on('progress', function () {
            imgLoaded++;
        });

        function updateProgress () {
            var target = (imgLoaded / imgTotal) * 100;
            current += (target - current) * 0.1; //부드러운 여유
            $progressText.text(Math.floor(current) + '%');

            if(current >= 100){
                clearInterval(progressTimer);

                gsap.to("#load", {top: "-100%"})

                setTimeout(function(){
                let tl = gsap.timeline();
                tl.to("#header", {duration: 0.4, stagger: 0.05, opacity: 1, y: 0})
                tl.to(".menu-toggle", {duration: 0.4, stagger: 0.05, opacity: 1, y: 0})
                tl.to(".main-text > div:nth-child(1) span", {duration: 0.4, stagger: 0.05, opacity: 1, y: 0})
                tl.to(".main-text > div:nth-child(2) span", {duration: 0.4, stagger: 0.05, opacity: 1, y: 0})
                tl.to(".main-text > div:nth-child(3) span", {duration: 0.4, stagger: 0.05, opacity: 1, y: 0})
                tl.to(".main-text .blak", {duration:0.4, stagger:0.05, opacity:1, y:0, delay:-0.1})
                tl.to(".main-text > div:nth-child(4) span", {duration: 0.4, stagger: 0.05, opacity: 1, y: 0})
            },1000)
            }
            if (current > 99.9) {
                current = 100;
            }
        }
    }
    imagesProgress();


//메뉴 오버레이
$(function () {

    localStorage.removeItem('learnMenu');
    
    $(".menu-link").click(function (e) {
        e.preventDefault();  

        localStorage.setItem('learnMenu', 'learned');
        
        $(".menu-overlay").toggleClass("menu-open");
        $(".menu-toggle").toggleClass("menu-open");
    });
    $(".overlay-content p a").click(function (e) {
        $(".menu-overlay").toggleClass("menu-open");
        $(".menu-toggle").toggleClass("menu-open");
    });

});


$(".split").each(function(){
    let text = $(this).text();
    let split = text.split("").join("</span><span aria-hidden='true'>");
        split = "<span aria-hidden='true'>" + split + "</span>";
    $(this).html(split).attr("aria-label", text);
});

setTimeout(function(){
    // $(".main-text > div:nth-child(1)").css("opacity", "1");
    // document.querySelector(".main-text > div:nth-child(1)").style.opacity = "1";
    let tl = gsap.timeline();
    tl.to("#header", {duration: 0.4, stagger: 0.05, opacity: 1, y: 0})
    tl.to(".menu-toggle", {duration: 0.4, stagger: 0.05, opacity: 1, y: 0})
    tl.to(".main-text > div:nth-child(1) span", {duration: 0.4, stagger: 0.05, opacity: 1, y: 0})
    tl.to(".main-text > div:nth-child(2) span", {duration: 0.4, stagger: 0.05, opacity: 1, y: 0})
    tl.to(".main-text > div:nth-child(3) span", {duration: 0.4, stagger: 0.05, opacity: 1, y: 0})
    tl.to(".main-text .blak", {duration:0.4, stagger:0.05, opacity:1, y:0, delay:-0.1})
    tl.to(".main-text > div:nth-child(4) span", {duration: 0.4, stagger: 0.05, opacity: 1, y: 0})
},4000);


$(window).scroll(function(){
    let scroll = $(window).scrollTop(); 
    $(".scroll").text(parseInt(scroll));
    if(scroll >= $(".last").offset().top - $(window).height()/2)
    {
        $(".last").addClass("show");

        let tl = gsap.timeline();
            tl.to(".main-sub .front", {duration:0.4, stagger:0.05, opacity:1, y:0, delay:1.7})
            tl.to(".main-sub .leaf div", {duration:0.4, stagger:0.05, opacity:1, x:0, y:0})
    }

    //가로 스크롤
    let offset = scroll - $("#section5").offset().top

    if(scroll > $("#section5").offset().top){
        $(".sec5").css({left:-offset+"px"})
    }

    //section3 나타내기
    let scrollTop = $(window).scrollTop() + $(window).height();
    if( scrollTop >  $(".sticky-picture").offset().top ){
        $(".sticky-picture").addClass("show");
    }
    if( scrollTop >  $(".about_subtit>p").offset().top ){
        $(".about_subtit>p").addClass("show");
    }
    if( scrollTop >  $(".line").offset().top ){
        $(".line").addClass("show");
    }
    if( scrollTop >  $(".about_intro .intro_tit").offset().top ){
        $(".about_intro .intro_tit").addClass("show");
    }
    if( scrollTop >  $(".intro_cont").offset().top ){
        $(".intro_cont").addClass("show");
    }

    //sec4 project check svg path animation    
    if( scrollTop >  $(".checkpath").offset().top ){
        $(".checkpath").addClass("animate");
    }

});


$(window).scroll(function(){
    //section3 스킬 영역
    let scroll = $(window).scrollTop()
    if(scroll >= $(".skill_bg").offset().top - $(window).height()*2.8){
        let tl = gsap.timeline();
        tl.to(".round_back.skill_bg ", {opacity:1, scale:1})
        tl.to(".round_back.skill_bg .keytitle", {opacity:1, y:0, delay:0.4})
        tl.to(".round_back.skill_bg li", {opacity:1, y:0,  delay:0.5})
    };
     //section3 키워드 영역
    if(scroll >= $(".round_back.keyworld_bg").offset().top - $(window).height()*1.5){
        let tl = gsap.timeline();
        tl.to(".round_back.keyworld_bg", {opacity:1, scale:1})
        tl.to(".round_back.keyworld_bg .keytitle", {opacity:1, y:0})
        tl.to(".round_back.keyworld_bg .keysubtit", {opacity:1, y:0, delay:-0.2})
        tl.to(".round_back.keyworld_bg .keywordarrow", {opacity:1, y:0})
        tl.to(".round_back.keyworld_bg .k_cont", {opacity:1, y:0})
    };
    //section4 프로젝트 영역
    if(scroll >= $(".work.w1").offset().top - $(window).height()*1.5){
        let tl = gsap.timeline();
        tl.to(".work.w1", {opacity:1, scale:1})
        tl.to(".work.w1 .monitor img", {opacity:1, y:0},"-=0.42")
        tl.to(".work.w1 .work_text .number", {opacity:1, y:0})
        tl.to(".work.w1 .work_text .tit", {opacity:1, y:0})
        tl.to(".work.w1 .work_text .cont", {opacity:1, y:0})
    };
    if(scroll >= $(".work.w2").offset().top - $(window).height()*1.5){
        let tl = gsap.timeline();
        tl.to(".work.w2", {opacity:1, scale:1})
        tl.to(".work.w2 .monitor img", {opacity:1, y:0},"-=0.42")
        tl.to(".work.w2 .work_text .number", {opacity:1, y:0})
        tl.to(".work.w2 .work_text .tit", {opacity:1, y:0})
        tl.to(".work.w2 .work_text .cont", {opacity:1, y:0})
    };
    if(scroll >= $(".work.w3").offset().top - $(window).height()*1.5){
        let tl = gsap.timeline();
        tl.to(".work.w3", {opacity:1, scale:1})
        tl.to(".work.w3 .monitor img", {opacity:1, y:0},"-=0.42")
        tl.to(".work.w3 .work_text .number", {opacity:1, y:0})
        tl.to(".work.w3 .work_text .tit", {opacity:1, y:0})
        tl.to(".work.w3 .work_text .cont", {opacity:1, y:0})
    };
    if(scroll >= $(".work.w4").offset().top - $(window).height()*1.5){
        let tl = gsap.timeline();
        tl.to(".work.w4", {opacity:1, scale:1})
        tl.to(".work.w4 .monitor img", {opacity:1, y:0},"-=0.42")
        tl.to(".work.w4 .work_text .number", {opacity:1, y:0})
        tl.to(".work.w4 .work_text .tit", {opacity:1, y:0})
        tl.to(".work.w4 .work_text .cont", {opacity:1, y:0})
    };
    if(scroll >= $(".work.w5").offset().top - $(window).height()*1.5){
        let tl = gsap.timeline();
        tl.to(".work.w5", {opacity:1, scale:1})
        tl.to(".work.w5 .monitor img", {opacity:1, y:0},"-=0.42")
        tl.to(".work.w5 .work_text .number", {opacity:1, y:0})
        tl.to(".work.w5 .work_text .tit", {opacity:1, y:0})
        tl.to(".work.w5 .work_text .cont", {opacity:1, y:0})
    };
    if(scroll >= $(".work.w6").offset().top - $(window).height()*1.5){
        let tl = gsap.timeline();
        tl.to(".work.w6", {opacity:1, scale:1})
        tl.to(".work.w6 .monitor img", {opacity:1, y:0},"-=0.42")
        tl.to(".work.w6 .work_text .number", {opacity:1, y:0})
        tl.to(".work.w6 .work_text .tit", {opacity:1, y:0})
        tl.to(".work.w6 .work_text .cont", {opacity:1, y:0})
    };
    if(scroll >= $(".work.w7").offset().top - $(window).height()*1.5){
        let tl = gsap.timeline();
        tl.to(".work.w7", {opacity:1, scale:1})
        tl.to(".work.w7 .monitor img", {opacity:1, y:0},"-=0.42")
        tl.to(".work.w7 .work_text .number", {opacity:1, y:0})
        tl.to(".work.w7 .work_text .tit", {opacity:1, y:0})
        tl.to(".work.w7 .work_text .cont", {opacity:1, y:0})
    };
})

//sec3-1 Swiper
let swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    centeredSlides: false,
    spaceBetween: 20,
    grabCursor: false,
  });



// rotating star btn 
window.onscroll = function () {
    scrollRotate();
};

function scrollRotate() {
    let image = document.getElementById("star");
    image.style.transform = "rotate(" + window.pageYOffset/2 + "deg)";
}

