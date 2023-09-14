$(document).ready(()=>{

    // 1st method


    // $(".id1").click(()=>{
    //     $("div").animate({left : '1300px'})
    // });


    // $(".id2").click(()=>{
    //     $("div").animate({left:  '0px'})
    // });
     

    // second method
      $(".id1").click(()=>{
        let pos = 0;
        setInterval(()=>{
            pos += 10;
            if(pos == 5000){
            clearTimeout(divAns);
            }
            divAns = $("div").animate({left:pos+"px"})},1);
            
      })
   
});



