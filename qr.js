var catalog = "http://quest.searchmobius.org"
var loc;
var call;
var status;
var qrInfo;

function showQR(){

var title = $(".bibInfoLabel:contains('Title')").siblings(".bibInfoData").text();    
    
    if(title.length > 40){
      qrtitle = title.substring(0,39) + "...";
    }else{
      qrtitle = title;
    }
    
if (document.getElementById("recordnum")) {
  var link =  document.getElementById("recordnum").getAttribute("href");
}else{
  var link 
}

if ( $("tr.bibItemsEntry").index() < 2 ) {
    $("#qrChoice").hide();
}

function create_qr_code(index) {
	loc = $("tr.bibItemsEntry:eq(" + index + ") td:eq(0)").text();
	call = $("tr.bibItemsEntry:eq(" + index + ") td:eq(1)").text();
	status = $("tr.bibItemsEntry td:eq(2)").text()
	qrInfo = qrtitle + " | " + loc + " | " + call + " | " + status + " | " + catalog + link;
	qrInfo = qrInfo.replace(/[&\"]/g,"");
}
    
$("tr.bibItemsEntry").each(function(index) {
    create_qr_code(index);
    $("<div><input type='radio' name='item' /><span class='qrLocation'>" + loc + "</span><br /><span id='qrlocation'>" + call + "</span><br /></div>").appendTo("#qrChoice")
});
    

$("#qrChoice input").change(function () {
	index = $("#qrChoice input").index(this);
	create_qr_code(index);
	qrCode = '<img src="http://chart.apis.google.com/chart?chs=150x150&cht=qr&chl=' + encodeURI(qrInfo) + '">'
	$("#qr").html(qrCode)
});

create_qr_code(0);
qrCode = '<img src="http://chart.apis.google.com/chart?chs=150x150&cht=qr&chl=' + encodeURI(qrInfo) + '">'
$("#qr").html(qrCode)
$('#qrChoice input:eq(0)').attr('checked', true);


return;
}

$(document).ready(function () {
    showQR();
});