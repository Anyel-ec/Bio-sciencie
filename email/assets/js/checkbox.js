$('.checkbox').click(function(){
    if ($('input.checkbox').is(':checked')) {
        $(".theme").attr("href", "assets/css/dark-theme.css");
    }else{
        $(".theme").attr("href", "assets/css/light-theme.css");
    }
});