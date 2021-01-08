var res = window.location.href.split("/");
$(".select-language option").removeAttr('selected', 'selected');
var selectedValue = "";
switch (res[res.length - 1]) {
    case 'index.html':
        selectedValue = 'index';
        break;
    case '':
        selectedValue = 'index';
        break;
    case 'index-ar.html':
        selectedValue = 'index-ar'
        break;
    case 'index-de.html':
        selectedValue = 'index-de'
        break;
    case 'index-ru.html':
        selectedValue = 'index-ru'
        break;
    case 'index-fr.html':
        selectedValue = 'index-fr';
        break;
    default :
        selectedValue = 'index';  
}
$(".select-language").val(selectedValue);


var lselectedValue;
$(window).load(function(){
if($('.select-language').val()=='index'){
lselectedValue='en | '
}
else if($('.select-language').val()=='index-ar'){
lselectedValue='ar | '
}
else if($('.select-language').val()=='index-de'){
lselectedValue='de | '
}
else if($('.select-language').val()=='index-ru'){
lselectedValue='ru | '
}
else if($('.select-language').val()=='index-fr'){
lselectedValue='fr | '
}
});


function handleSelect(elm)
{
var currentValue;
if($('.select-language option:selected').val()=='index'){
currentValue='en'
}
else if($('.select-language option:selected').val()=='index-ar'){
currentValue='ar'
}
else if($('.select-language option:selected').val()=='index-de'){
currentValue='de'
}
else if($('.select-language option:selected').val()=='index-ru'){
currentValue='ru'
}
else if($('.select-language option:selected').val()=='index-fr'){
currentValue='fr'
}
dataLayer.push({
event: "gaEvent",
category1: "Header Interaction",
action1: "Select Language",
label1: lselectedValue + currentValue
});
window.location = elm.value + ".html";

}
