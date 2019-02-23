
$("#btnGras").click(
    function() {
        $("#text").css("font-weight") === "700"    ?   $("#text").css("font-weight","normal")  :   $("#text").css("font-weight","bold")
    }
)

$("#btnItalique").click(
    function () {
   $("#text").css("font-style") === "italic" ? $("#text").css("font-style", "normal") : $("#text").css("font-style", "italic")
}
)


$("#btnSouligner").click(
    function () {
    $("#text").css("text-decoration") === "underline" ? $("#text").css("text-decoration", "none") : $("#text").css("text-decoration", "underline")
}
)

$("#family").click(
    function () {
    var x = $("#family").val()
    $("#text").css('font-family',x)
 })

 $("#size").click(
     function (){
    var x = $("#size").val()+"px"
    $("#text").css('font-size',x)
}
)








//document.querySelector("#btnGras").addEventListener('click',gras)
