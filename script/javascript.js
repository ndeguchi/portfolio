

const menu = document.querySelector('.menu');

menu.addEventListener('click', function() {
    this.classList.toggle('toggle');
});


$('.fade').fadeIn(2000);


// function menu(){
//     document.querySelector('nav').classList.toggle('open');
// }

// $(function(){
//     $('.section').hide();
  
//     $('.menulist').on('click',function(){
//       $('.section').not($($(this).attr('href'))).hide();
  
//       // フェードイン・アウトのアニメーション付で、表示・非表示を交互に実行する
//       $($(this).attr('href')).fadeToggle(1000);
  
//       // show を使うと、表示するだけ （ 同じボタンを何回押しても変わらない ）
//       // $($(this).attr('href')).show();
//     });
//   });ss


// $(function(){
// 	$(window).scroll(function (){
// 		$('.fadein').each(function(){
// 			elemPos = $(this).offset().top;
// 			scroll = $(window).scrollTop();
// 			windowHeight = $(window).height();
// 			if (scroll > elemPos - windowHeight + 200){
// 				$(this).addClass('scrollin');
// 			}
// 		});
// 	});
// });                              
