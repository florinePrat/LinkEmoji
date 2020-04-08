$(document).on("click","#emoji-picker",function(e){
    e.stopPropagation();
    $('.intercom-composer-emoji-popover').toggleClass("active");
});

$(document).click(function (e) {
    if ($(e.target).attr('class') !== '.intercom-composer-emoji-popover' && $(e.target).parents(".intercom-composer-emoji-popover").length === 0) {
        $(".intercom-composer-emoji-popover").removeClass("active");
    }
});


$(document).on("click",".intercom-emoji-picker-emoji",function(e){


    $(".share-box__text-editor").children().children().children().children().children().append($(this).html());

    let urn = $(this).parent().parent().parent().parent().parent().parent().parent().parent().parent().parent().parent().parent().parent().parent().data('urn');
    let id = $(this).parent().parent().parent().parent().parent().parent().parent().parent().parent().parent().parent().parent().parent().parent().data('id');

    let element = $("[data-urn='"+urn+"']");
    let elementComment = $("[data-id='"+id+"']");

    if(element[0]!==undefined){
        let elementsCom = element[0].getElementsByClassName("comments-comment-box-comment__text-editor");
        $(elementsCom[0]).children().children().children().children().children().append($(this).html());
    }else{
        let elementsComComment = elementComment[0].getElementsByClassName("comments-comment-box-comment__text-editor");
        $(elementsComComment[0]).children().children().children().children().children().append($(this).html());
    }

});

$(document).on('input',".intercom-composer-popover-input", function() {
    var query = this.value;
    if(query !== ""){
        $(".intercom-emoji-picker-emoji:not([title*='"+query+"'])").hide();
    }
    else{
        $(".intercom-emoji-picker-emoji").show();
    }
});
