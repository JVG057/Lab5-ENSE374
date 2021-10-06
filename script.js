$(document).ready( () => {

    $("#newTask").hide();
    
    function addTask(){
        var inputst = $("#placeholder").val();
        $("#newPlaceholder").attr("placeholder", inputst);
        var $el = $("#newTask").clone();
        $el.show();
        $(".addTask").before($el);
        $("#placeholder").val("");
    }

    function claimTask(){
        
    }

    $(".addBtn").click(() => {
        addTask();
    });

    $("claimBtn").click(() => {
        claimTask();
    });

    

});