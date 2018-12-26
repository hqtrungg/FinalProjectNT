function readURL(input) {
	$("#delete_image").show();
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function(e) {
      $('#blah').attr('src', e.target.result);
    }
	
    reader.readAsDataURL(input.files[0]);
  }
}

$("#imgInp").change(function() {
  readURL(this);
});

$(document).ready(function(){
  $("#delete_image").hide();
});

$("#delete_image").click(function(){
  $('#blah').attr('src', null);
});