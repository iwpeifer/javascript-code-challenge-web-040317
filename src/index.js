const CL = new CommentList

$(document).ready(function(){
  $("#note-form").on("submit", function(event){
    event.preventDefault()
    let comment = $("input[type=text]").val()
    CL.addComment(comment)
    showComments()
    $("input[type=text]").val("")
  })
})

$(document).ready(function(){
  $("a#delete_all").click(function(){
    CL.deleteAll()
    showComments()
  })
})

function showComments(){
  $("#comment-list").html(CL.render())
}
