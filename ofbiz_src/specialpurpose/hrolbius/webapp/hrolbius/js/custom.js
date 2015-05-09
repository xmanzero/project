$( document ).ready(function() {
  $('#extTime').prop('disabled', true);
  $('#resultId').change(function() {
	  var resultVal = $("#resultId").val();
	  if(resultVal == "WTR_EXTTIME"){
		  $('#extTime').prop('disabled', false);
	  }else{
		  $('#extTime').prop('disabled', true);
	  }
  });
  	$(".chzn-select").chosen({
		search_contains: true,
		placeholder_text_multiple: "Chọn một số tùy chọn",
		placeholder_text_single: "Chọn một tùy chọn",
		no_results_text: "Không có kết quả hợp"
	});
  	
  	if($("#hrmResult").val() != "WTR_EXTTIME" && $("#hrmResult").val() != "" && $("#hrmResult").val() != null){
  		$(".ext-time-text-header").remove();
  		$(".submit-button").remove();
  	}
  	
  	if($("#ceoResult").val() != "WTR_EXTTIME" && $("#ceoResult").val() != "" && $("#ceoResult").val() != null){
  		$(".ext-time-text-header").remove();
  		$(".submit-button").remove();
  	}
  	
  	if($("#leaderResult").val() != "WTR_EXTTIME" && $("#leaderResult").val() != "" && $("#leaderResult").val() != null){
  		$(".ext-time-text-header").remove();
  		$(".submit-button").remove();
  	}
});

function getDependentDropdownValuesCustom(request, paramMap, targetField, responseName, keyName, descName, selected, callback, allowEmpty, hide, hideTitle, inputField){
    target = '#' + targetField;
    input = '#' + inputField;
    targetTitle = target + '_title'
    optionList = '';
    var data = {};
    
    for(param in paramMap){
    	//console.log("param ", param);
    	data[param] = jQuery("#" + paramMap[param]).val();
    }
    console.log("data", data);
    jQuery.ajax({
        url: request,
        data: data, // get requested value from parent drop-down field
        async: false,
        type: 'POST',
        success: function(result){
            list = result[responseName];
            // Create and show dependent select options            
            if (list) {
                if(allowEmpty) {
                    // Allow null selection in dependent and set it as default if no selection exists.
                    if (selected == undefined || selected == "_none_") {
                      optionList += "<option selected='selected' value=''></option>";
                    } else {
                      optionList += "<option value=''></option>";
                    }
                }
                jQuery.each(list, function(key, value){
                    if (typeof value == 'string') {
                        values = value.split(': ');
                        if (values[1].indexOf(selected) >= 0 && selected.length > 0) {
                            optionList += "<option selected='selected' value = " + values[1] + " >" + values[0] + "</option>";
                        } else {
                            optionList += "<option value = " + values[1] + " >" + values[0] + "</option>";
                        }
                    } else {
                        if (value[keyName] == selected) {
                            optionList += "<option selected='selected' value = " + value[keyName] + " >" + value[descName] + "</option>";
                        } else {
                            optionList += "<option value = " + value[keyName] + " >" + value[descName] + "</option>";
                        }
                    }
                })
            };
            // Hide/show the dependent drop-down if hide=true else simply disable/enable
            if ((!list) || (list.length < 1) || ((list.length == 1) && jQuery.inArray("_NA_", list) != -1)) {
                jQuery(target).attr('disabled', 'disabled');
                if (hide) {
                    if (jQuery(target).is(':visible')) {
                        jQuery(target).fadeOut(2500);
                        if (hideTitle) jQuery(targetTitle).fadeOut(2500);
                    } else {
                        jQuery(target).fadeIn();
                        if (hideTitle) jQuery(targetTitle).fadeIn();
                        jQuery(target).fadeOut(2500);
                        if (hideTitle) jQuery(targetTitle).fadeOut(2500);
                    }
                }
            } else {
                jQuery(target).removeAttr('disabled');
                if (hide) {
                    if (!jQuery(target).is(':visible')) {
                        jQuery(target).fadeIn();
                        if (hideTitle) jQuery(targetTitle).fadeIn();
                    }
                }
            }
        },
        complete: function(){
            // this is to handle a specific case where an input field is needed instead of a drop-down when no values are returned by the request (else if allow-empty="true" is used autoComplete handle the case)
            // this could be extended later to use an auto-completed drop-down or a lookup, instead of drop-down currently, when there are too much values to populate
            // Another option is to use an input field with Id instead of a drop-down, see setPriceRulesCondEventJs.ftl and top of getAssociatedPriceRulesConds service
            if (!list && inputField) {
                jQuery(target).hide();
                jQuery(input).show();
            } else if (inputField) {
                jQuery(input).hide();
                jQuery(target).show();
            }
            jQuery(target).html(optionList).click().change(); // .change() needed when using also asmselect on same field, .click() specifically for IE8
            if (callback != null) eval(callback);
        }
    });
}

