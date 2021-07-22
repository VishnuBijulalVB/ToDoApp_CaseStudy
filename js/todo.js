
$(document).ready(function(){
  $("#tod").click(function(e){
  $.ajax({
    url:"https://jsonplaceholder.typicode.com/todos", dataType:"json",success:function(result){
      console.log(result);
      $.each(result,function(i,store){
        console.log(store.id);
        $("#tab").append(
        `<tr>
          <td>${store.id}</td>
          <td>${store.title}</td>
          <td>
            <div>
              <input type="checkbox" ${(store.completed)? "checked disabled": ""}>
            </div>
          </td>
        </tr>`)
      })


      let count=0;
      let target=5;
      $('input[type="checkbox"]').on('change',function(){
        if($(this).prop('checked')==true){
          count++;
          if(count==target){
            alert(`Congrats! You have completed ${target} tasks!`);
            target = target + 5;
          }
        }
        else{
          count--;
        }
      });
    }

  })
  });
});
