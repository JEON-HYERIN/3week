$(function(){


  $('.btn-submit').click(function(){
    text = $('.input-text').val();

    if(text) {
      html = `<li>
                <span class="text">${text}</span>
                <button class="btn-move">이동</button>
                <button class="btn-remove">삭제</button>
              </li> `;
    
      $('.list1').append(html);
      $('.input-text').val('').focus();
    } else {
      console.log('입력하라니까요');
      $('.input-text').focus();
    }
  });

  // $('.btn-remove').click(function(){
  //   console.log(122);
  // });
  $(document).on('click', '.btn-remove', function(){
    $(this).parent().remove();
    // $(this).parent().parent().remove();
    // $(this).parents('ul').remove();
  })

  $(document).on('click', '.btn-move', function(){
    result = $(this).siblings('.text').text();
    html = `<li>${result}</li>`;
    $(this).parent().remove();
    $('.list2').append(html);
  })

}) //지우지마세요