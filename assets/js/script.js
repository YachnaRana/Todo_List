// check off specific Todos by clicking
$('.todo_ul').on('click','.todo_li',function(){
    $(this).toggleClass('completed')
})

// click on  x to delete Todo
$('.todo_ul').on('click', 'span', function(e){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type = 'text']").on('keypress',function(e){
    if(e.which === 13){
        var todoText = $(this).val();  
        $(this).val('');
        $('.todo_ul').append('<li class="todo_li"><span> <i class="fa fa-trash"></i> </span>' +  todoText + '</li>')
    }
})

$(".fa-plus").click(function(){
    $("input[type = 'text']").fadeToggle();
})