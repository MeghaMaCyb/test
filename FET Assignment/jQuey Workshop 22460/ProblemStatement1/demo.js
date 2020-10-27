$(document).ready(()=>{
    $("#B1").click(()=>{
        //alert("The paragraph was clicked.");
        //var data=document.getElementsByClassName("circle1");
        //document.getElementById('mydiv').append(data.length);
        //$(".circle1").append("<span>////////</span>");
        //$(".circle1").append("<div><span>////////</span></div>");
        //$("div").append("<li>Appended item</li>");
        //$("span").filter(".circle1").after("<div>hiiii</div>");

        $("span[class!='circle1']").hide();
        $("span[class='circle1']").show();
        $("#B1").css("background-color","red")
      });

      $("#B2").click(()=>{

        $("span[class!='circle2']").hide();
        $("span[class='circle2']").show();
        $("#B2").css("background-color","yellow")
      });

      $("#B3").click(()=>{

        $("span[class!='circle3']").hide();
        $("span[class='circle3']").show();
        $("#B3").css("background-color","orange")
      });

      $("#B4").click(()=>{

        $("span[class!='circle4']").hide();
        $("span[class='circle4']").show();
        $("#B4").css("background-color","green")
      });
})