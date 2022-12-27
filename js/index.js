
  let servicesTitle=['Responsive Layout','Modern Design','Font Awesome Icons','Ajax Portfolio']

  let box=''
  for(let i=0;i<servicesTitle.length;i++){
    box+=`
    <div class="col-md-3 my-1">
                    <div class="services-item text-center  px-4 py-4 mx-2 my-1 rounded-3 ">
                        <h6>${servicesTitle[i]}</h6>
                        <p class="text-muted">
                            Ferri reque integre mea ut, eu eos vide errem noluise se. Putent laoreet et ius utroque dissentias ut.
                        </p>
                    </div>
                   </div>
    
    `
  }
  document.getElementById('secvices-col').innerHTML=box


 
  let navchange=$('.home-title').offset().top
$(window).scroll(()=>{
if($(window).scrollTop()>navchange){
    $('.navbar').css({'backgroundColor':'rgba(0,0,0,0.8)','transition':'1s'})
    $('.navbar').removeClass('py-1')
}else{
    
    $('.navbar').css({'backgroundColor':'transparent','transition':'2s'})
    $('.navbar').addClass('py-1')
}
})

$('.fa-chevron-circle-up').click(()=>{
  $("html, body").animate ({scrollTop: 0});
})
$('.navbar-toggler').click(()=>{
  $('.navbar ').css({'backgroundColor':'rgba(12, 12, 12, 0.9)'})

})

$(document).ready(()=>{
  $('#loading').fadeOut(2500,()=>{
      $('body').css('overflow','visible')
  })
})