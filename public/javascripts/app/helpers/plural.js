Handlebars.registerHelper('plural', function(count) {
    var text = "";
    if(count>1){ text = 's';}
    return text;
});
