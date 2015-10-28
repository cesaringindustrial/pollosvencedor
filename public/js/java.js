$(document).ready(function(){
    $("div.accordion> div.Layout").hide();
    $("div.accordion> div.Cumplimiento").click(function(){
       $(this).next().slideToggle(90) 
    })
})
