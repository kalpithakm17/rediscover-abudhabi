var res = window.location.href.split("/");
$(".select-language option").removeAttr('selected', 'selected');
var selectedValue = "";
switch (res[res.length - 1]) {
    case 'summer2020.aspx':
        selectedValue = 'summer2020';
        break;
    case '':
        selectedValue = 'summer2020';
        break;
    case 'summer2020-ar.aspx':
        selectedValue = 'summer2020-ar'
        break;
    default :
        selectedValue = 'summer2020';  
}
$(".select-language").val(selectedValue);


var lselectedValue;
$(window).load(function(){
if($('.select-language').val()=='summer2020'){
lselectedValue='en | '
}
else if($('.select-language').val()=='summer2020-ar'){
lselectedValue='ar | '
}
});


function handleSelect(elm)
{
var currentValue;
if($('.select-language option:selected').val()=='summer2020'){
currentValue='en'
}
else if($('.select-language option:selected').val()=='summer2020-ar'){
currentValue='ar'
}

dataLayer.push({
event: "gaEvent",
category1: "Header Interaction",
action1: "Select Language",
label1: lselectedValue + currentValue
});
window.location = elm.value + ".aspx";
}
