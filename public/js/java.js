$(document).ready(function(){
    $("div.accordion> div.Layout").hide();
    $("div.accordion> div.Cumplimiento").click(function(){
       $(this).next().slideToggle(90) 
    })
})
$(document).ready(function(){
    $("div.accordion1> div.open").hide();
    $("div.accordion1> div.Cumplimiento").click(function(){
       $(this).next().slideToggle(90) 
    })
})
