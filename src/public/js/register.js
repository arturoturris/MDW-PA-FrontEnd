$(document).ready(function(){
    $("#pupil-option").hide();
    $("#teacher-option").hide();
    $("input[name=role]").click(function(){
        let option = $(this).val();
        if (option == 0){
            $("#pupil-option").show("slow");
            $("#teacher-option").hide();
        }
        if (option == 1){
            $("#pupil-option").hide();
            $("#teacher-option").show("slow");          
        }
    });
});