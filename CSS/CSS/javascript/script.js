$(document).ready(function(){

    //add a task to the list
    $('#addtask').click(function(){
        var task =$('#taskinput').val();
        if (task)
        {
            $('#tasklist').append('<ul><li class="textcontrol"><span class="tasktext">'+task+'</span> <span class="editbutton">Edit</span><span class="removebutton"> Remove</span></li></ul>')
            $('#taskinput').val('')
        }

    })

    // hign light input field on focus
    $('#taskinput').focus(function(){

        $(this).addClass('highlight')

    })
 // remove hightlight from input

 $('#taskinput').blur(function(){

    $(this).removeClass('highlight')

})
// mark task as completed

$('#tasklist').on('click','.tasktext',function(){

    $(this).toggleClass('completed')
})

//remove task


$('#tasklist').on('click','.removebutton',function(){

    $(this).parent().remove();

})

// edit task 

$('#tasklist').on('click','.editbutton',function(){

   var $tasktext= $(this).siblings('.tasktext');
   var currenttext= $tasktext.text();
   var newtext=prompt('Edit task:',currenttext);
   if(newtext){ $tasktext.text(newtext)}
  
})
})