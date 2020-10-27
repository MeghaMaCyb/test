$("document").ready(()=>{
    //   $("body").css("background-color", "pink");
    //   $("header").append("<b>Welcome to Cybage</b>").css("background-color", "yellow");
    //   $("section").append("<div>********</div><div>#########</div><div>@@@@@@@@@@</div>");
    //   $("footer").append("this is my footer");    
    $("header").width("100%");
    $("header").height("100px");
    $("header").css("background-color", "pink");
    $("header").html("WELCOME TO CYBAGE");
    $("header").addClass("head");

    $(".d1").width("20%");
    $(".d1").height("700px");
    $(".d1").css("background-color", "lightblue");
    $(".d1").css("float","left");
    $(".d1").html("aside");

    $(".d2").width("60%");
    $(".d2").height("700px");
    $(".d2").css("background-color", "gray");
    $(".d2").css("float","left");
    $(".d2").html("Section");

    $(".d3").width("20%");
    $(".d3").height("700px");
    $(".d3").css("background-color", "lightblue");
    $(".d3").css("float","right");
    $(".d3").html("aside");
    $(".d3").html("aside");

    $("footer").width("100%");
    $("footer").height("100px");
    $("footer").css("background-color", "lightpink");
    $("footer").css("margin-top","700px");
    $("footer").html("www.cybage.com");
    $("footer").css("test-align","right");

  });