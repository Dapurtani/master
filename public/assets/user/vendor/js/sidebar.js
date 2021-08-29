$(document).ready(function(){
  $(".sidebarNavigation .navbar-collapse").hide().clone().appendTo("body").removeAttr("class").addClass("sideMenu").show(),
  $("body").append("<div class='overlay'></div>"),
  $(".sideMenu").addClass($(".sidebarNavigation").attr("data-sidebarClass")),
  $(".navbar-toggle, .keranjang-icon").on("click",function(){

    $(".sideMenu, .overlay").toggleClass("open"),
    $(".overlay").on("click",function(){
      $(this).removeClass("open"),
      $(".sideMenu").removeClass("open")
    })
  }),
  $("body").on("click",".sideMenu.open .nav-item",function(){
    $(this).hasClass("dropdown")||$(".sideMenu, .overlay").toggleClass("open")
  }),
  $(window).resize(function(){
    $(".keranjang-icon").is(":hidden")?$(".sideMenu, .overlay").hide():$(".sideMenu, .overlay").show()
  })
});
