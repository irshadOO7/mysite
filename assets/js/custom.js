"use stric";
var mainUrl ="http://localhost/pf/";
var baseUrl = mainUrl+"admin/";
var imgUrl = mainUrl+"uploads/";

function saveData(ele){
var btn = $(ele).val();
var formName = $(ele).data('frm');
	if($(formName).valid()){
		$(ele).prop('disabled', true);
		$(ele).html("<i class='fa fa-refresh fa-spin'></i> Wait..");
		//var dataId = $('#dataId').val();
		//var table = $(ele).data('tbl');
		var clean = $(ele).data('clean');
		var ctrl = $(ele).data('ctrl');
		var data = $(formName).serialize();
		//var data = data+'&table='+table+'&dataId='+dataId;
		//console.log(data);
$.ajax({
      type: 'POST',
      url: baseUrl+'msg',
      data: data,
      dataType: "text",
      success: function(resultData) { 
      	console.log(resultData);
      	var resp = JSON.parse(resultData);
      	alert(resp.status,resp.message);
      	if(clean && clean=='no'){
      		//console.log('no clean');
      	}
      	else {
      	$(formName)[0].reset();
      	}
      	$(ele).html(btn);
      	 $(ele).prop('disabled', false);
         $(".modal").modal('hide');
         location.reload(true);
      },
      error: function(e){
      	console.log(e);
      	var resp = JSON.parse(e.responseText);
      	var message = resp.message;
      	alert('error',message);
      	$(ele).html(btn);
      	$(ele).prop('disabled', false);
      },
      complete: function(e){
      	console.log(e);
      	 $(ele).html(btn);
      	 $(ele).prop('disabled', false);

      }
});
}
}