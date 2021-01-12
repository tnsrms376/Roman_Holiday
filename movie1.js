$(document).ready(function () {
    $("#main_navigation a").click(function () {  //main nav의 a를 누르면 (탭을 누르면~)        
        //alert($(this).html());

        //크릭한 메뉴의 data-target 속성의 값을 얻는다
        var target = $(this).attr('data-target');   //target은 인포메이션 멀티미디어 그런 정보들 
        //data-name 이 있는 요소 중에서 
        //data-name-target 과 다른 항목은 active 클래스를 제거
        $(":not([data-name=" + target + "])").removeClass("active");
        // 같은 항목은 active 클래스추가
        $("[data-name=" + target + "]").addClass("active");

    })

    var currentPosition = 1;
    $("#character > a:nth-child(1)").click(function () {
        currentPosition--;
        if (currentPosition < 1)
            currentPosition = 3;
        // alert("눌렸다!")
        $("article").removeClass("show");
        $("article:nth-of-type(" + currentPosition + ")").addClass("show");
    })

    $("#character > a:nth-child(2)").click(function () {
        currentPosition++;
        if (currentPosition > 3)
            currentPosition = 1;

        $("article").removeClass("show");
        $("article:nth-of-type(" + currentPosition + ")").addClass("show");
    });
});