<script>
	<#assign roleTypeList = delegator.findList("RoleType",  Static["org.ofbiz.entity.condition.EntityCondition"].makeCondition("roleTypeId", Static["org.ofbiz.entity.condition.EntityOperator"].IN , ["AGENT", "CUSTOMER", "SUPPLIER", "CONSUMER", "DISTRIBUTOR", "BUYER",  "VENDOR", "CONTRUCTOR", "PARTNER", "PERSON_ROLE", "ORGANIZATION_ROLE"]), null, null, null, false) />
	var roleTypeData = new Array();
	<#list roleTypeList as roleType>
		<#assign description = StringUtil.wrapString(roleType.get("description", locale)) />
		var row = {};
		row['description'] = "${description}";
		row['roleTypeId'] = "${roleType.roleTypeId}";
		roleTypeData[${roleType_index}] = row;
	</#list>
	
	<#assign agreementTypeList = delegator.findList("AgreementType", null, null, null, null, false) />
	var agreementTypeData = new Array();
	<#list agreementTypeList as agreementType>
		<#assign description = StringUtil.wrapString(agreementType.get("description", locale)) />
		var row = {};
		row['description'] = "${description}";
		row['agreementTypeId'] = '${agreementType.agreementTypeId}';
		agreementTypeData[${agreementType_index}] = row;
	</#list>
	
	<#assign Parties = delegator.findList("PartyNameView", null, null, null, null, false) />
	var partyData =  new Array();
	<#list Parties as item>
		var row = {};
		<#assign firstName = StringUtil.wrapString(item.firstName?if_exists)>
		<#assign middleName = StringUtil.wrapString(item.middleName?if_exists)>
		<#assign lastName = StringUtil.wrapString(item.lastName?if_exists)>
		<#assign groupName = StringUtil.wrapString(item.groupName?if_exists)>

		row['partyId'] = '${item.partyId?if_exists}';
		row['firstName'] = "${firstName}";
		row['middleName'] = "${middleName}";
		row['lastName'] = "${lastName}";
		row['groupName'] = "${groupName}";
		partyData[${item_index}] = row;
	</#list>
	
	<#assign statusList = delegator.findByAnd("StatusItem", {"statusTypeId" : "AGREEMENT_STATUS"}, null, false) />
	var statusData = new Array();
	<#list statusList as statusItem>
		<#assign description = StringUtil.wrapString(statusItem.get("description", locale)) />
		var row = {};
		row['statusId'] = '${statusItem.statusId}';
		row['description'] = "${description}";
		statusData[${statusItem_index}] = row;
	</#list>
	
	<@renderFilterType arrayName="dataStringFilterType"/>
	<@renderDateTimeFilterType arrayName="dataDatetimeFilterType"/>
</script>
<!-- partyIdFrom is a datafield -->
<!-- HTML for Lookup partyIdFrom -->
<div id="jqxwindowpartyIdFrom" style="display:none;">
	<div>${uiLabelMap.SelectPartyIdFrom}</div>
	<div style="overflow: hidden;">
		<table id="PartyIdFrom">
			<tr>
				<td>
					<input type="hidden" id="jqxwindowpartyIdFromkey" value=""/>
					<input type="hidden" id="jqxwindowpartyIdFromvalue" value=""/>
					<div id="jqxgridpartyidfrom"></div>
				</td>
			</tr>
		    <tr>
		        <td style="padding-top: 10px;" align="right"><input style="margin-right: 5px;" type="button" id="alterSave3" value="${uiLabelMap.CommonSave}" /><input id="alterCancel3" type="button" value="${uiLabelMap.CommonCancel}" /></td>
		    </tr>
		</table>
	</div>
</div>
<!-- HTML for Lookup partyIdFrom-->
<div id="jqxwindowpartyIdTo" style="display:none;">
	<div>${uiLabelMap.SelectPartyIdTo}</div>
	<div style="overflow: hidden;">
		<table id="PartyIdTo">
			<tr>
				<td>
					<input type="hidden" id="jqxwindowpartyIdTokey" value=""/>
					<input type="hidden" id="jqxwindowpartyIdTovalue" value=""/>
					<div id="jqxgridpartyidto"></div>
				</td>
			</tr>
		    <tr>
		        <td style="padding-top: 10px;" align="right"><input style="margin-right: 5px;" type="button" id="alterSave4" value="${uiLabelMap.CommonSave}" /><input id="alterCancel4" type="button" value="${uiLabelMap.CommonCancel}" /></td>
		    </tr>
		</table>
	</div>
</div>

<@jqGridMinimumLib/>
<script type="text/javascript" src="/aceadmin/jqw/jqwidgets/jqxvalidator.js"></script>
<script type="text/javascript">
	$.jqx.theme = 'olbius';  
	theme = $.jqx.theme;  
	$("#jqxwindowpartyIdFrom").jqxWindow({
        theme: theme, isModal: true, autoOpen: false, cancelButton: $("#alterCancel3"), modalOpacity: 0.7, minWidth: 820, maxWidth: 1200, height: 'auto', minHeight: 515        
    });
    $('#jqxwindowpartyIdFrom').on('open', function (event) {
    	var offset = $("#jqxgrid").offset();
   		$("#jqxwindowpartyIdFrom").jqxWindow({ position: { x: parseInt(offset.left) + 60, y: parseInt(offset.top) + 60 } });
	});
	$("#alterSave3").jqxButton({theme: theme});
	$("#alterCancel3").jqxButton({theme: theme});
	$("#alterSave3").click(function () {
		var tIndex = $('#jqxgridpartyidfrom').jqxGrid('selectedrowindex');
		var data = $('#jqxgridpartyidfrom').jqxGrid('getrowdata', tIndex);
		$('#' + $('#jqxwindowpartyIdFromkey').val()).val(data.partyId);
		$("#jqxwindowpartyIdFrom").jqxWindow('close');
		var e = jQuery.Event("keydown");
		e.which = 50; // # Some key code value
		$('#' + $('#jqxwindowpartyIdFromkey').val()).trigger(e);
	});
	// From party
    var sourceF =
    {
        datafields:
        [
            { name: 'partyId', type: 'string' },
            { name: 'partyTypeId', type: 'string' },
            { name: 'firstName', type: 'string' },
            { name: 'lastName', type: 'string' },
            { name: 'groupName', type: 'string' }
        ],
        cache: false,
        root: 'results',
        datatype: "json",
        updaterow: function (rowid, rowdata) {
            // synchronize with the server - send update command   
        },
        beforeprocessing: function (data) {
            sourceF.totalrecords = data.TotalRows;
        },
        filter: function () {
            // update the grid and send a request to the server.
            $("#jqxgridpartyidfrom").jqxGrid('updatebounddata');
        },
        pager: function (pagenum, pagesize, oldpagenum) {
            // callback called when a page or page size is changed.
        },
        sort: function () {
            $("#jqxgridpartyidfrom").jqxGrid('updatebounddata');
        },
        sortcolumn: 'partyId',
		sortdirection: 'asc',
        type: 'POST',
        data: {
	        noConditionFind: 'Y',
	        conditionsFind: 'N',
	    },
	    pagesize:5,
        contentType: 'application/x-www-form-urlencoded',
        url: 'jqxGeneralServicer?sname=getFromParty',
    };
    var dataAdapterF = new $.jqx.dataAdapter(sourceF,
    {
    	autoBind: true,
    	formatData: function (data) {
    		if (data.filterscount) {
                var filterListFields = "";
                for (var i = 0; i < data.filterscount; i++) {
                    var filterValue = data["filtervalue" + i];
                    var filterCondition = data["filtercondition" + i];
                    var filterDataField = data["filterdatafield" + i];
                    var filterOperator = data["filteroperator" + i];
                    filterListFields += "|OLBIUS|" + filterDataField;
                    filterListFields += "|SUIBLO|" + filterValue;
                    filterListFields += "|SUIBLO|" + filterCondition;
                    filterListFields += "|SUIBLO|" + filterOperator;
                }
                data.filterListFields = filterListFields;
            }
            return data;
        },
        loadError: function (xhr, status, error) {
            alert(error);
        },
        downloadComplete: function (data, status, xhr) {
                if (!sourceF.totalRecords) {
                    sourceF.totalRecords = parseInt(data['odata.count']);
                }
        }
    });
    $('#jqxgridpartyidfrom').jqxGrid(
    {
        width:800,
        source: dataAdapterF,
        filterable: true,
        virtualmode: true, 
        sortable:true,
        editable: false,
        showfilterrow: true,
        theme: theme, 
        autoheight:true,
        pageable: true,
        pagesizeoptions: ['5', '10', '15'],
        ready:function(){
        },
        rendergridrows: function(obj)
		{
			return obj.data;
		},
         columns: [
          { text: '${uiLabelMap.accApInvoice_ToPartyId}', datafield: 'partyId', width:150},
          { text: '${uiLabelMap.accApInvoice_ToPartyTypeId}', datafield: 'partyTypeId', width:200},
          { text: '${uiLabelMap.FormFieldTitle_firstName}', datafield: 'firstName', width:150},
          { text: '${uiLabelMap.FormFieldTitle_lastName}', datafield: 'lastName', width:150},
          { text: '${uiLabelMap.accAccountingToParty}', datafield: 'groupName', width:150}
        ]
    });
</script>

<script type="text/javascript">
	$("#jqxwindowpartyIdTo").jqxWindow({
        theme: theme, isModal: true, autoOpen: false, cancelButton: $("#alterCancel4"), modalOpacity: 0.7, minWidth: 820, maxWidth: 1200, height: 'auto', minHeight: 515        
    });
    $('#jqxWindow').on('open', function (event) {
    	var offset = $("#jqxgrid").offset();
   		$("#jqxwindowpartyIdTo").jqxWindow({ position: { x: parseInt(offset.left) + 60, y: parseInt(offset.top) + 60 } });
	});
	$("#alterSave4").jqxButton({theme: theme});
	$("#alterCancel4").jqxButton({theme: theme});
	$("#alterSave4").click(function () {
		var tIndex = $('#jqxgridpartyidto').jqxGrid('selectedrowindex');
		var data = $('#jqxgridpartyidto').jqxGrid('getrowdata', tIndex);
		$('#' + $('#jqxwindowpartyIdTokey').val()).val(data.partyId);
		$("#jqxwindowpartyIdTo").jqxWindow('close');
		var e = jQuery.Event("keydown");
		e.which = 50; // # Some key code value
		$('#' + $('#jqxwindowpartyIdTokey').val()).trigger(e);
	});
	// FromParty
    var sourceP =
    {
        datafields:
        [
            { name: 'partyId', type: 'string' },
            { name: 'partyTypeId', type: 'string' },
            { name: 'firstName', type: 'string' },
            { name: 'lastName', type: 'string' },
            { name: 'groupName', type: 'string' }
        ],
        cache: false,
        root: 'results',
        datatype: "json",
        updaterow: function (rowid, rowdata) {
            // synchronize with the server - send update command   
        },
        beforeprocessing: function (data) {
            sourceP.totalrecords = data.TotalRows;
        },
        filter: function () {
            // update the grid and send a request to the server.
            $("#jqxgridpartyidto").jqxGrid('updatebounddata');
        },
        pager: function (pagenum, pagesize, oldpagenum) {
            // callback called when a page or page size is changed.
        },
        sort: function () {
            $("#jqxgridpartyidto").jqxGrid('updatebounddata');
        },
        sortcolumn: 'partyId',
		sortdirection: 'asc',
        type: 'POST',
        data: {
	        noConditionFind: 'Y',
	        conditionsFind: 'N',
	    },
	    pagesize:5,
        contentType: 'application/x-www-form-urlencoded',
        url: 'jqxGeneralServicer?sname=getFromParty',
    };
    var dataAdapterP = new $.jqx.dataAdapter(sourceP,
    {
    	autoBind: true,
    	formatData: function (data) {
    		if (data.filterscount) {
                var filterListFields = "";
                for (var i = 0; i < data.filterscount; i++) {
                    var filterValue = data["filtervalue" + i];
                    var filterCondition = data["filtercondition" + i];
                    var filterDataField = data["filterdatafield" + i];
                    var filterOperator = data["filteroperator" + i];
                    filterListFields += "|OLBIUS|" + filterDataField;
                    filterListFields += "|SUIBLO|" + filterValue;
                    filterListFields += "|SUIBLO|" + filterCondition;
                    filterListFields += "|SUIBLO|" + filterOperator;
                }
                data.filterListFields = filterListFields;
            }
            return data;
        },
        loadError: function (xhr, status, error) {
            alert(error);
        },
        downloadComplete: function (data, status, xhr) {
                if (!sourceP.totalRecords) {
                    sourceP.totalRecords = parseInt(data['odata.count']);
                }
        }
    });
    $('#jqxgridpartyidto').jqxGrid(
    {
        width:800,
        source: dataAdapterP,
        filterable: true,
        virtualmode: true, 
        sortable:true,
        theme: theme, 
		showfilterrow: true,
        editable: false,
        autoheight:true,
        pageable: true,
        pagesizeoptions: ['5', '10', '15'],
        ready:function(){
        },
        rendergridrows: function(obj)
		{
			return obj.data;
		},
         columns: [
			  { text: '${uiLabelMap.accApInvoice_ToPartyId}', datafield: 'partyId', width:150},
	          { text: '${uiLabelMap.accApInvoice_ToPartyTypeId}', datafield: 'partyTypeId', width:200},
	          { text: '${uiLabelMap.FormFieldTitle_firstName}', datafield: 'firstName', width:150},
	          { text: '${uiLabelMap.FormFieldTitle_lastName}', datafield: 'lastName', width:150},
	          { text: '${uiLabelMap.accAccountingToParty}', datafield: 'groupName', width:150}
			]
    });
    
    $(document).keydown(function(event){
	    if(event.ctrlKey)
	        cntrlIsPressed = true;
	});
	
	$(document).keyup(function(event){
		if(event.which=='17')
	    	cntrlIsPressed = false;
	});
	var cntrlIsPressed = false;
	
 	var cellclass = function (row, columnfield, value) {
 		var now = new Date();
		now.setHours(0,0,0,0);
 		var data = $('#jqxgrid').jqxGrid('getrowdata', row);
        if (data.thruDate != undefined && data.thruDate != null && Date.parseExact(data.thruDate,"dd/MM/yyyy HH:mm:ss") <= now) {
            return 'background-red';
        }
    }
</script>
<style type="text/css">
	.background-red {
		background-color: #ddd !important;
	}
</style>

<#assign dataField="[{ name: 'agreementId', type: 'string' },
					 { name: 'productId', type: 'string'},
					 { name: 'partyIdFrom', type: 'string'},
					 { name: 'partyIdTo', type: 'string'},
					 { name: 'roleTypeIdFrom', type: 'string'},
					 { name: 'roleTypeIdTo', type: 'string'},
					 { name: 'agreementTypeId', type: 'string'},
					 { name: 'statusId', type: 'string'}, 
					 { name: 'agreementDate', type: 'date', other:'Timestamp'},
					 { name: 'fromDate', type: 'date', other:'Timestamp'},
					 { name: 'thruDate', type: 'date', other:'Timestamp'},
					 { name: 'description', type: 'string'},
					 { name: 'textData', type: 'string'},
					 ]
					 "/>
<#assign columnlist = "{ text: '${uiLabelMap.DAAgreementId}', width:150, datafield: 'agreementId', cellclassname: cellclass,
						   	cellsrenderer: function (row, column, value) {
								var data = $('#jqxgrid').jqxGrid('getrowdata', row);
	        					return '<a style = \"margin-left: 10px\" href=' + 'accApEditAgreementTerms?agreementId=' + data.agreementId + '>' +  data.agreementId + '</a>'
    						}
					 	},
					 	{ text: '${uiLabelMap.DAPartyFrom}', width:150, datafield: 'partyIdFrom', filtertype: 'olbiusdropgrid', cellclassname: cellclass,
						 	cellsrenderer: function (row, column, value) {
								for(i = 0; i < partyData.length; i++){
									if(partyData[i].partyId == value){
										var result = '<a title=\"' + value + '\"' + ' style = \"margin-left: 10px\" ' +  ' href=\"' + '/partymgr/control/viewprofile?partyId=' + value + '\">' + partyData[i].firstName + '&nbsp' + partyData[i].middleName + '&nbsp' + partyData[i].lastName + '&nbsp' + partyData[i].groupName + '&nbsp' + '</a>';
										return result;
									}
								}
	        					return '<a title= \"' + value  + '\"' +' style = \"margin-left: 10px\" href=' + '/partymgr/control/viewprofile?partyId=' + value + '>' + value + '</a>'
	    					},
						 	createfilterwidget: function (column, columnElement, widget) {
				   				widget.width(490);
				   			}
					 	},
					 	{ text: '${uiLabelMap.DAPartyTo}', width:150, datafield: 'partyIdTo', filtertype: 'olbiusdropgrid', cellclassname: cellclass,
						 	cellsrenderer: function (row, column, value) {
								for(i = 0; i < partyData.length; i++){
									if(partyData[i].partyId == value){
										return '<a title=\"' + value  + '\"' + ' style = \"margin-left: 10px\" href=' + '/partymgr/control/viewprofile?partyId=' + value + '>' + partyData[i].firstName + '&nbsp' + partyData[i].middleName + '&nbsp' + partyData[i].lastName + '&nbsp' + partyData[i].groupName + '&nbsp' + '</a>';
									}
								}
	        					return '<a title=\"' + value  + '\"' + ' style = \"margin-left: 10px\" href=' + '/partymgr/control/viewprofile?partyId=' + value + '>' + value + '</a>'
	    					},
						 	createfilterwidget: function (column, columnElement, widget) {
				   				widget.width(490);
				   			}
					 	},
					 	{ text: '${uiLabelMap.DARoleTypeIdFrom}', width:150, datafield: 'roleTypeIdFrom', filtertype: 'checkedlist', cellclassname: cellclass,
							cellsrenderer: function (row, column, value) {
								var data = $('#jqxgrid').jqxGrid('getrowdata', row);
	        						for(i = 0 ; i < roleTypeData.length; i++){
	        							if(data.roleTypeIdFrom == roleTypeData[i].roleTypeId){
	        								return '<span title=' + value +'>' + roleTypeData[i].description + '</span>';
	        							}
	        						}
	        						
	        						return '<span title=' + value +'>' + value + '</span>';
	    						},
	    					createfilterwidget: function (column, columnElement, widget) {
				   				var filterBoxAdapter2 = new $.jqx.dataAdapter(roleTypeData,
				                {
				                    autoBind: true
				                });
				                var empty = {roleTypeId: '', description: 'Empty'};
				   				var uniqueRecords2 = filterBoxAdapter2.records;
				   				uniqueRecords2.splice(0, 0, '(${StringUtil.wrapString(uiLabelMap.filterselectallstring)})');
				   				uniqueRecords2.splice(1, 0, empty);
				   				widget.jqxDropDownList({ source: uniqueRecords2, displayMember: 'roleTypeId', valueMember : 'roleTypeId',renderer: function (index, label, value) 
								{
									for(i=0;i < uniqueRecords2.length; i++){
										if(uniqueRecords2[i].roleTypeId == value){
											return uniqueRecords2[i].description;
										}
									}
								    return value;
								}});
				   			}
					 	},
					 	{ text: '${uiLabelMap.DARoleTypeIdTo}', width:150, datafield: 'roleTypeIdTo', filtertype: 'checkedlist', cellclassname: cellclass,
						 	cellsrenderer: function (row, column, value) {
								var data = $('#jqxgrid').jqxGrid('getrowdata', row);
	        						for(i = 0 ; i < roleTypeData.length; i++){
	        							if(data.roleTypeIdTo == roleTypeData[i].roleTypeId){
	        								return '<span title=' + value +'>' + roleTypeData[i].description + '</span>';
	        							}
	        						}
	        						
	        						return '<span title=' + value +'>' + value + '</span>';
	    						},
	    					createfilterwidget: function (column, columnElement, widget) {
				   				var filterBoxAdapter2 = new $.jqx.dataAdapter(roleTypeData,
				                {
				                    autoBind: true
				                });
				   				var empty = {roleTypeId: '', description: 'Empty'};
				   				var uniqueRecords2 = filterBoxAdapter2.records;
				   				uniqueRecords2.splice(0, 0, '(${StringUtil.wrapString(uiLabelMap.filterselectallstring)})');
				   				uniqueRecords2.splice(1, 0, empty);
				   				widget.jqxDropDownList({ source: uniqueRecords2, displayMember: 'roleTypeId', valueMember : 'roleTypeId',renderer: function (index, label, value) 
								{
									for(i=0;i < uniqueRecords2.length; i++){
										if(uniqueRecords2[i].roleTypeId == value){
											return uniqueRecords2[i].description;
										}
									}
								    return value;
								}});
								widget.jqxDropDownList('checkAll');
				   			}
					 	},
					 	{ text: '${uiLabelMap.DAAgreementTypeId}', width:150, datafield: 'agreementTypeId', filtertype: 'checkedlist', cellclassname: cellclass,
						 	cellsrenderer: function (row, column, value) {
								var data = $('#jqxgrid').jqxGrid('getrowdata', row);
	        						for(i = 0 ; i < agreementTypeData.length; i++){
	        							if(value == agreementTypeData[i].agreementTypeId){
	        								return '<span title = ' + agreementTypeData[i].description +'>' + agreementTypeData[i].description + '</span>';
	        							}
	        						}
	        						
	        						return '<span title=' + value +'>' + value + '</span>';
	    						},
	    					createfilterwidget: function (column, columnElement, widget) {
				   				var filterBoxAdapter2 = new $.jqx.dataAdapter(agreementTypeData,
				                {
				                    autoBind: true
				                });
				                var uniqueRecords2 = filterBoxAdapter2.records;
				   				uniqueRecords2.splice(0, 0, '(${StringUtil.wrapString(uiLabelMap.filterselectallstring)})');
				   				widget.jqxDropDownList({ source: uniqueRecords2, displayMember: 'agreementTypeId', valueMember : 'agreementTypeId',renderer: function (index, label, value) 
								{
									for(i=0;i < agreementTypeData.length; i++){
										if(agreementTypeData[i].agreementTypeId == value){
											return agreementTypeData[i].description;
										}
									}
								    return value;
								}});
								widget.jqxDropDownList('checkAll');
				   			}
					 	},
					 	{text: '${uiLabelMap.DAStatus}', dataField: 'statusId', width: '160px', filtertype: 'checkedlist', cellclassname: cellclass, 
							cellsrenderer: function(row, column, value){
						 		var data = $('#jqxgrid').jqxGrid('getrowdata', row);
	    						for(var i = 0 ; i < statusData.length; i++){
	    							if (value == statusData[i].statusId){
	    								return '<span title = ' + statusData[i].description +'>' + statusData[i].description + '</span>';
	    							}
	    						}
	    						return '<span title=' + value +'>' + value + '</span>';
						 	}, 
						 	createfilterwidget: function (column, columnElement, widget) {
								var filterDataAdapter = new $.jqx.dataAdapter(statusData, {
									autoBind: true
								});
								var records = filterDataAdapter.records;
								records.splice(0, 0, '(${StringUtil.wrapString(uiLabelMap.filterselectallstring)})');
								widget.jqxDropDownList({source: records, displayMember: 'statusId', valueMember: 'statusId',
									renderer: function(index, label, value){
										for(var i = 0; i < statusData.length; i++){
											if(statusData[i].statusId == value){
												return '<span>' + statusData[i].description + '</span>';
											}
										}
										return value;
									}
								});
								widget.jqxDropDownList('checkAll');
				   			}
			   			}, 
			   			{ text: '${uiLabelMap.DAProductId}', width:150, datafield: 'productId', cellclassname: cellclass, 
						 	cellsrenderer: function (row, column, value) {
								for(i = 0; i < sourceP.records.length; i++){
									if(sourceP.records[i].productId == value){
										return '<span title = ' + value + '>' + sourceP.records[i].productName + '</span>';
									}
								}
								return '<span title = ' + value + '>' + value + '</span>';
	    					}
    				 	},
					 	{ text: '${uiLabelMap.DAAgreementDate}', width:150, datafield: 'agreementDate', cellsformat: 'dd/MM/yyyy', filtertype: 'range', cellclassname: cellclass},
					 	{ text: '${uiLabelMap.DAFromDate}', width:150, datafield: 'fromDate', cellsformat: 'dd/MM/yyyy', filtertype: 'range', cellclassname: cellclass},
					 	{ text: '${uiLabelMap.DAThruDate}', width:150, datafield: 'thruDate', cellsformat: 'dd/MM/yyyy', filtertype: 'range', cellclassname: cellclass},
					 	{ text: '${uiLabelMap.DADescription}', width:150, datafield: 'description', cellclassname: cellclass},
					 	{ text: '${uiLabelMap.textValue}', width:150, datafield: 'textData', cellclassname: cellclass}
					 	"/>		

<@jqGrid url="jqxGeneralServicer?sname=JQGetListApAgreement" dataField=dataField columnlist=columnlist filterable="true" clearfilteringbutton="true"
		 showtoolbar="true" alternativeAddPopup="alterpopupWindow" filtersimplemode="true" addrow="true" addType="popup" addrow="true" addType="popup" deleterow="true"
		 createUrl="jqxGeneralServicer?sname=createAgreement&jqaction=C" addColumns="productId;partyIdFrom;partyIdTo;roleTypeIdFrom;roleTypeIdTo;agreementTypeId;agreementDate(java.sql.Timestamp);fromDate(java.sql.Timestamp);thruDate(java.sql.Timestamp);description;textData;statusId[AGREEMENT_CREATED]"
		 removeUrl="jqxGeneralServicer?sname=cancelAgreement&jqaction=C" deleteColumn="agreementId" jqGridMinimumLibEnable="false"
		 mouseRightMenu="true" contextMenuId="contextMenu" 
		 />
<div id='contextMenu' style="display:none;">
	<ul>
	    <li><i class="icon-ok open-sans"></i>${StringUtil.wrapString(uiLabelMap.DARefresh)}</li>
	    <li><i class="icon-trash open-sans"></i>${StringUtil.wrapString(uiLabelMap.DACopy)}</li>
	    <li><i class="fa-file-pdf-o"></i>${StringUtil.wrapString(uiLabelMap.DAExportToPDF)}</li>
	</ul>
</div>
<script type="text/javascript">
	$("#contextMenu").jqxMenu({ width: 200, autoOpenPopup: false, mode: 'popup', theme: theme});
	$("#contextMenu").on('itemclick', function (event) {
		var args = event.args;
        var rowindex = $("#jqxgrid").jqxGrid('getselectedrowindex');
        var tmpKey = $.trim($(args).text());
        if (tmpKey == "${StringUtil.wrapString(uiLabelMap.DARefresh)}") {
        	$("#jqxgrid").jqxGrid('updatebounddata');
        } else if (tmpKey == "${StringUtil.wrapString(uiLabelMap.DACopy)}") {
        	var data = $("#jqxgrid").jqxGrid("getrowdata", rowindex);
			var agreementId = data.agreementId;
			if (agreementId != undefined && agreementId != null) {
				copyAgreement(agreementId);
			}
        } else if (tmpKey == "${StringUtil.wrapString(uiLabelMap.DAExportToPDF)}") {
        	var data = $("#jqxgrid").jqxGrid("getrowdata", rowindex);
			if (data != undefined && data != null) {
				var agreementId = data.agreementId;
				var agreementTypeId = data.agreementTypeId;
				if ("PROMO_EXHIBITED_AGRE" == agreementTypeId) {
					var url = 'exhibitedAgreement.pdf?agreementId=' + agreementId;
					var win = window.open(url, '_blank');
  					win.focus();
				}
			}
        }
        
	});
</script>
<div id="copyPopupWindow" style="display:none;">
    <div>${uiLabelMap.PageTitleCopyAgreement}</div>
    <div style="overflow: hidden;">
    	<div style='width: 400px; margin:0 auto;'>
        	<table style = "margin: auto;">
        		<tr>
        			<td align="right">${uiLabelMap.DAAgreementId}:</td>
 					<td align="left">
 						<input id='agreementIdCopy' style='margin-left: 10px; float: left;'></input>
 					</td>
	 			</tr>
	 			<tr>
	 				<td align="right">${uiLabelMap.AccountingAgreementTerms}:</td>
 					<td align="left">
 						<div id='copyAgreementTerms' style='margin-left: 10px; float: left; margin-left: 10px !important;'></div>
 					</td>
	 			</tr>
	 			<tr>
	 				<td align="right">${uiLabelMap.ProductProducts}:</td>
 					<td align="left">
 						<div id='copyAgreementProducts' style='margin-left: 10px; float: left; margin-left: 10px !important;'></div>
 					</td>
	 			</tr>
	 			<tr>
	 				<td align="right">${uiLabelMap.Party}:</td>
 					<td align="left">
 						<div id='copyAgreementParties' style='margin-left: 10px; float: left; margin-left: 10px !important;'></div>
 					</td>
	 			</tr>
	 			<tr>
	 				<td align="right">${uiLabelMap.ProductFacilities}:</td>
 					<td align="left">
 						<div id='copyAgreementFacilities' style='margin-left: 10px; float: left; margin-left: 10px !important;'></div>
 					</td>
	 			</tr>
	 			<tr>
	 				<td align="right"><input type="button" id="alterCancel" value="${uiLabelMap.CommonCancel}" /></td>
 					<td align="left"><input type="button" id="alterCopy" value="${uiLabelMap.CommonCopy}" /></td>
	 			</tr>
	 		</table>	
    	</div>
    </div>
</div>

<div id="alterpopupWindow" style="display:none;">
    <div>${uiLabelMap.accCreateNew}</div>
    <div style="overflow: hidden;">
    	<input type="hidden" name="statusIdAdd" id="statusIdAdd" value="AGREEMENT_CREATED"/>
        <table>
    	 	<tr>
    	 		<td align="right">${uiLabelMap.DAProductId}:</td>
	 			<td align="left">
	 				<div id="productIdAdd">
	 					<div id="jqxProductGrid" />
	 				</div>
	 			</td>
	 			
	 			<td align="right">${uiLabelMap.DAAgreementDate}:</td>
	 			<td align="left"><div id="agreementDateAdd"></div></td>
    	 	</tr>
    	 	<tr>
    	 		<td align="right">${uiLabelMap.DAPartyFrom}:</td>
	 			<td align="left">
	 				<div id="partyIdFromAdd">
	 					<div id="jqxPartyFromGrid" />
	 				</div>
	 			</td>
	 			
	 			<td align="right">${uiLabelMap.DAFromDate}:</td>
	 			<td align="left"><div id="fromDateAdd"></div></td>
    	 	</tr>
    	 	<tr>
    	 		<td align="right">${uiLabelMap.DAPartyTo}:</td>
	 			<td align="left">
	 				<div id="partyIdToAdd">
	 					<div id="jqxPartyToGrid"/>
	 				</div>
	 			</td>
	 			
	 			<td align="right">${uiLabelMap.DAThruDate}:</td>
	 			<td align="left"><div id="thruDateAdd"></div></td>
    	 	</tr>
    	 	<tr>
    	 		<td align="right">${uiLabelMap.DARoleTypeIdFrom}:</td>
	 			<td align="left"><div id="roleTypeIdFromAdd"></div></td>
	 			
	 			<td align="right">${uiLabelMap.DADescription}:</td>
	 			<td align="left"><input id="descriptionAdd"></input></td>
    	 	</tr>
    	 	<tr>
    	 		<td align="right">${uiLabelMap.DARoleTypeIdTo}:</td>
	 			<td align="left"><div id="roleTypeIdToAdd"></div></td>
	 			
	 			<td align="right">${uiLabelMap.textValue}:</td>
	 			<td align="left"><input id="textDataAdd"></input></td>
    	 	</tr>
    	 	<tr>
    	 		<td align="right">${uiLabelMap.DAAgreementTypeId}:</td>
	 			<td align="left"><div id="agreementTypeIdAdd"></div></td>
	 			
	 			<td align="right"></td>
	 			<td align="left"></td>
    	 	</tr>
            <tr>
            	<td align="right"></td>
	 			<td align="left"></td>
	 			
                <td align="right">
                	<input type="button" id="alterCancel" value="${uiLabelMap.CommonCancel}" />
                </td>
                <td align="left">
                	<input type="button" id="alterSave" value="${uiLabelMap.CommonSave}" />
                </td>
            </tr>
        </table>
    </div>
</div>
<script>
	
    $.jqx.theme = 'olbius';  
	theme = $.jqx.theme;
	
	var outFilterCondition = "";
	
	//Create agreementIdCopy
	$("#agreementIdCopy").jqxInput({ width: 120, height: 25, disabled: true});
	
	//Create copyAgreementTerms
	$("#copyAgreementTerms").jqxCheckBox({ width: 120, height: 25, checked: true});
	
	//Create copyAgreementProducts
	$("#copyAgreementProducts").jqxCheckBox({ width: 120, height: 25, checked: true});
	
	//Create copyAgreementParties
	$("#copyAgreementParties").jqxCheckBox({ width: 120, height: 25, checked: true});
	
	//Create copyAgreementFacilities
	$("#copyAgreementFacilities").jqxCheckBox({ width: 120, height: 25, checked: true});
	
	//Create Copy popup
	$("#copyPopupWindow").jqxWindow({
       width: 600, resizable: true,  isModal: true, autoOpen: false, cancelButton: $("#alterCancel"), modalOpacity: 0.7         
    });
    
    $("#alterCancel").jqxButton();
    $("#alterCopy").jqxButton();
    
    function copyAgreement(agreementId){
    	agreementId
    	$('#agreementIdCopy').val(agreementId);
    	$('#copyPopupWindow').jqxWindow('open');
    }
    
    // update the edited row when the user clicks the 'Save' button.
    $("#alterCopy").click(function () {
    	var agreementId = $('#agreementIdCopy').val();
    	var copyAgreementTerms = $('#copyAgreementTerms').val();
    	var copyAgreementProducts = $('#copyAgreementProducts').val();
    	var copyAgreementParties = $('#copyAgreementParties').val();
    	var copyAgreementFacilities = $('#copyAgreementFacilities').val();
    	var request = $.ajax({
		  	url: "copyAgreement",
		  	type: "POST",
		  	data: {agreementId : agreementId, copyAgreementTerms: copyAgreementTerms, copyAgreementProducts: copyAgreementProducts, copyAgreementParties: copyAgreementParties, copyAgreementFacilities: copyAgreementFacilities},
		  	dataType: "html"
		});
		$("#jqxgrid").jqxGrid('updatebounddata');
		request.done(function(data) {
		  	if(data.responseMessage == "error"){
            	$('#jqxNotification').jqxNotification({ template: 'error'});
            	$("#jqxNotification").text(data.errorMessage);
            	$("#jqxNotification").jqxNotification("open");
            }else{
            	$('#container').empty();
            	$('#jqxNotification').jqxNotification({ template: 'info'});
            	$("#jqxNotification").text("Thuc thi thanh cong!");
            	$("#jqxNotification").jqxNotification("open");
            }
		});
		request.fail(function(jqXHR, textStatus) {
		  	alert( "Request failed: " + textStatus );
		});
        $("#copyPopupWindow").jqxWindow('close');
    });
    
    var sourceP = {
				datafields:[{name: 'productId', type: 'string' },
			    			{name: 'productName', type: 'string' }
				],
				cache: false,
				root: 'results',
				datatype: "json",
				updaterow: function (rowid, rowdata) {
					// synchronize with the server - send update command   
				},
				beforeprocessing: function (data) {
				    sourceP.totalrecords = data.TotalRows;
				},
				filter: function () {
				   	// update the grid and send a request to the server.
				   	$("#jqxProductGrid").jqxGrid('updatebounddata');
				},
				pager: function (pagenum, pagesize, oldpagenum) {
				  	// callback called when a page or page size is changed.
				},
				sort: function () {
				  	$("#jqxProductGrid").jqxGrid('updatebounddata');
				},
				sortcolumn: 'productId',
               	sortdirection: 'asc',
				type: 'POST',
				data: {
					noConditionFind: 'Y',
					conditionsFind: 'N',
				},
				pagesize:5,
				contentType: 'application/x-www-form-urlencoded',
				url: 'jqxGeneralServicer?sname=JQGetListProducts',
	};

    var dataAdapterP = new $.jqx.dataAdapter(sourceP,
    {
    	autoBind: true,
    	formatData: function (data) {
    		if (data.filterscount) {
                var filterListFields = "";
                for (var i = 0; i < data.filterscount; i++) {
                    var filterValue = data["filtervalue" + i];
                    var filterCondition = data["filtercondition" + i];
                    var filterDataField = data["filterdatafield" + i];
                    var filterOperator = data["filteroperator" + i];
                    filterListFields += "|OLBIUS|" + filterDataField;
                    filterListFields += "|SUIBLO|" + filterValue;
                    filterListFields += "|SUIBLO|" + filterCondition;
                    filterListFields += "|SUIBLO|" + filterOperator;
                }
                data.filterListFields = filterListFields;
            }
            return data;
        },
        loadError: function (xhr, status, error) {
            alert(error);
        },
        downloadComplete: function (data, status, xhr) {
                if (!sourceP.totalRecords) {
                    sourceP.totalRecords = parseInt(data['odata.count']);
                }
        }
    });	

	// Create productId
	$('#productIdAdd').jqxDropDownButton({ width: 200, height: 25});
	$("#jqxProductGrid").jqxGrid({
		width:400,
		source: dataAdapterP,
		filterable: true,
		virtualmode: true, 
 		showfilterrow: true,
		sortable:true,
		editable: false,
		autoheight:true,
		pageable: true,
		rendergridrows: function(obj) {	
			return obj.data;
		},
		columns:[{text: '${uiLabelMap.accProductId}', datafield: 'productId'},
					{text: '${uiLabelMap.accProductName}', datafield: 'productName'},
				]
	});
	$("#jqxProductGrid").on('rowselect', function (event) {
   		var args = event.args;
    	var row = $("#jqxProductGrid").jqxGrid('getrowdata', args.rowindex);
    	var dropDownContent = '<div style="position: relative; margin-left: 3px; margin-top: 5px;">' + row['productId'] + '</div>';
   		$("#productIdAdd").jqxDropDownButton('setContent', dropDownContent);
   	});
	
	var sourcePartyFrom = {
				datafields:[{name: 'partyId', type: 'string'},
					   		{name: 'firstName', type: 'string'},
					      	{name: 'lastName', type: 'string'},
					      	{name: 'middleName', type: 'string'},
					      	{name: 'groupName', type: 'string'},
			    ],
				cache: false,
				root: 'results',
				datatype: "json",
				updaterow: function (rowid, rowdata) {
					// synchronize with the server - send update command   
				},
				beforeprocessing: function (data) {
				    sourcePartyFrom.totalrecords = data.TotalRows;
				},
				filter: function () {
				   	// update the grid and send a request to the server.
				   	$("#jqxPartyFromGrid").jqxGrid('updatebounddata');
				},
				pager: function (pagenum, pagesize, oldpagenum) {
				  	// callback called when a page or page size is changed.
				},
				sort: function () {
				  	$("#jqxPartyFromGrid").jqxGrid('updatebounddata');
				},
				sortcolumn: 'partyId',
               	sortdirection: 'asc',
				type: 'POST',
				data: {
					noConditionFind: 'Y',
					conditionsFind: 'N',
				},
				pagesize:5,
				contentType: 'application/x-www-form-urlencoded',
				url: 'jqxGeneralServicer?sname=JQGetListParties',
	};

    var dataAdapterPF = new $.jqx.dataAdapter(sourcePartyFrom,
    {
    	autoBind: true,
    	formatData: function (data) {
    		if (data.filterscount) {
                var filterListFields = "";
                for (var i = 0; i < data.filterscount; i++) {
                    var filterValue = data["filtervalue" + i];
                    var filterCondition = data["filtercondition" + i];
                    var filterDataField = data["filterdatafield" + i];
                    var filterOperator = data["filteroperator" + i];
                    filterListFields += "|OLBIUS|" + filterDataField;
                    filterListFields += "|SUIBLO|" + filterValue;
                    filterListFields += "|SUIBLO|" + filterCondition;
                    filterListFields += "|SUIBLO|" + filterOperator;
                }
                data.filterListFields = filterListFields;
            }
            return data;
        },
        loadError: function (xhr, status, error) {
            alert(error);
        },
        downloadComplete: function (data, status, xhr) {
                if (!sourcePartyFrom.totalRecords) {
                    sourcePartyFrom.totalRecords = parseInt(data['odata.count']);
                }
        }
    });	
	// create Party From
	$('#partyIdFromAdd').jqxDropDownButton({ width: 200, height: 25});
	$("#jqxPartyFromGrid").jqxGrid({
		width:600,
		source: dataAdapterPF,
		filterable: true,
		virtualmode: true, 
		sortable:true,
		editable: false,
		autoheight:true,
		pageable: true,
		showfilterrow: true,
		rendergridrows: function(obj) {	
			return obj.data;
		},
		columns:[	{text: '${uiLabelMap.DAPartyId}', datafield: 'partyId', width: '20%'},
					{text: '${uiLabelMap.DAFirstName}', datafield: 'firstName', width: '20%'},
					{text: '${uiLabelMap.DAMiddleName}', datafield: 'middleName', width: '20%'},
					{text: '${uiLabelMap.DALastName}', datafield: 'lastName', width: '20%'},
					{text: '${uiLabelMap.DAGroupName}', datafield: 'groupName'},
				]
	});
	$("#jqxPartyFromGrid").on('rowselect', function (event) {
        var args = event.args;
        var row = $("#jqxPartyFromGrid").jqxGrid('getrowdata', args.rowindex);
        var dropDownContent = '<div style="position: relative; margin-left: 3px; margin-top: 5px;">' + row['partyId'] + '</div>';
        $("#partyIdFromAdd").jqxDropDownButton('setContent', dropDownContent);
    });
    
    var sourcePartyTo = {
				datafields:[{name: 'partyId', type: 'string'},
					   		{name: 'firstName', type: 'string'},
					      	{name: 'lastName', type: 'string'},
					      	{name: 'middleName', type: 'string'},
					      	{name: 'groupName', type: 'string'},
			    ],
				cache: false,
				root: 'results',
				datatype: "json",
				updaterow: function (rowid, rowdata) {
					// synchronize with the server - send update command   
				},
				beforeprocessing: function (data) {
				    sourcePartyTo.totalrecords = data.TotalRows;
				},
				filter: function () {
				   	// update the grid and send a request to the server.
				   	$("#jqxPartyToGrid").jqxGrid('updatebounddata');
				},
				pager: function (pagenum, pagesize, oldpagenum) {
				  	// callback called when a page or page size is changed.
				},
				sort: function () {
				  	$("#jqxPartyToGrid").jqxGrid('updatebounddata');
				},
				sortcolumn: 'partyId',
               	sortdirection: 'asc',
				type: 'POST',
				data: {
					noConditionFind: 'Y',
					conditionsFind: 'N',
				},
				pagesize:5,
				contentType: 'application/x-www-form-urlencoded',
				url: 'jqxGeneralServicer?sname=JQGetListParties',
	};

    var dataAdapterPT = new $.jqx.dataAdapter(sourcePartyTo,
    {
    	autoBind: true,
    	formatData: function (data) {
    		if (data.filterscount) {
                var filterListFields = "";
                for (var i = 0; i < data.filterscount; i++) {
                    var filterValue = data["filtervalue" + i];
                    var filterCondition = data["filtercondition" + i];
                    var filterDataField = data["filterdatafield" + i];
                    var filterOperator = data["filteroperator" + i];
                    filterListFields += "|OLBIUS|" + filterDataField;
                    filterListFields += "|SUIBLO|" + filterValue;
                    filterListFields += "|SUIBLO|" + filterCondition;
                    filterListFields += "|SUIBLO|" + filterOperator;
                }
                data.filterListFields = filterListFields;
            }
            return data;
        },
        loadError: function (xhr, status, error) {
            alert(error);
        },
        downloadComplete: function (data, status, xhr) {
                if (!sourcePartyTo.totalRecords) {
                    sourcePartyTo.totalRecords = parseInt(data['odata.count']);
                }
        }
    });	
    // create Party To
	$('#partyIdToAdd').jqxDropDownButton({ width: 200, height: 25});
	$("#jqxPartyToGrid").jqxGrid({
		width:600,
		source: dataAdapterPT,
		filterable: true,
		virtualmode: true, 
		sortable:true,
		editable: false,
		autoheight:true,
		pageable: true,
		showfilterrow: true,
		rendergridrows: function(obj) {	
			return obj.data;
		},
		columns:[{text: '${uiLabelMap.DAPartyId}', datafield: 'partyId', width: '20%'},
					{text: '${uiLabelMap.DAFirstName}', datafield: 'firstName', width: '20%'},
					{text: '${uiLabelMap.DAMiddleName}', datafield: 'middleName', width: '20%'},
					{text: '${uiLabelMap.DALastName}', datafield: 'lastName', width: '20%'},
					{text: '${uiLabelMap.DAGroupName}', datafield: 'groupName'},
				]
	});
	$("#jqxPartyToGrid").on('rowselect', function (event) {
        var args = event.args;
        var row = $("#jqxPartyToGrid").jqxGrid('getrowdata', args.rowindex);
        var dropDownContent = '<div style="position: relative; margin-left: 3px; margin-top: 5px;">' + row['partyId'] + '</div>';
        $("#partyIdToAdd").jqxDropDownButton('setContent', dropDownContent);
    });
    
	$("#roleTypeIdFromAdd").jqxDropDownList({source: roleTypeData, width: 200 , displayMember:"description", selectedIndex: 0 ,valueMember: "roleTypeId"});
	$("#roleTypeIdToAdd").jqxDropDownList({source: roleTypeData, width: 200, displayMember:"description",selectedIndex: 0, valueMember: "roleTypeId"});
	$("#agreementTypeIdAdd").jqxDropDownList({source: agreementTypeData, width: 200, displayMember:"description",selectedIndex: 0, valueMember: "agreementTypeId"});	
	$("#agreementDateAdd").jqxDateTimeInput({height: '25px', width: 200,  formatString: 'dd-MM-yyyy : HH:mm:ss', allowNullDate: true, value: null});
	$("#fromDateAdd").jqxDateTimeInput({height: '25px',width: 200, formatString: 'dd-MM-yyyy : HH:mm:ss'});
	$("#thruDateAdd").jqxDateTimeInput({height: '25px',width: 200, formatString: 'dd-MM-yyyy : HH:mm:ss', allowNullDate: true, value: null});
	$("#descriptionAdd").jqxInput({height: 20, width: 195});
	$("#textDataAdd").jqxInput({height: 20, width: 195});
	
	//Create alterpopupWindow
	$("#alterpopupWindow").jqxWindow({
        width: 800, resizable: true,  isModal: true, autoOpen: false, cancelButton: $("#alterCancel"), modalOpacity: 0.7          
    });
    $("#alterCancel").jqxButton({width: 100});
    $("#alterSave").jqxButton({width: 100});

    // update the edited row when the user clicks the 'Save' button.
    $("#alterSave").click(function () {
    	var row;
    	var agreementDateJS = "";
    	if ($('#agreementDateAdd').jqxDateTimeInput('getDate') != undefined && $('#agreementDateAdd').jqxDateTimeInput('getDate') != null) {
    		agreementDateJS = new Date($('#agreementDateAdd').jqxDateTimeInput('getDate').getTime());
    	}
    	var fromDateJS = "";
    	if ($('#fromDateAdd').jqxDateTimeInput('getDate') != undefined && $('#fromDateAdd').jqxDateTimeInput('getDate') != null) {
    		fromDateJS = new Date($('#fromDateAdd').jqxDateTimeInput('getDate').getTime());
    	}
    	var thruDateJS = "";
    	if ($('#thruDateAdd').jqxDateTimeInput('getDate') != undefined && $('#thruDateAdd').jqxDateTimeInput('getDate') != null) {
    		thruDateJS = new Date($('#thruDateAdd').jqxDateTimeInput('getDate').getTime());
    	}
        row = { 
        		productId:$('#productIdAdd').val(),
        		partyIdFrom:$('#partyIdFromAdd').val(),
        		partyIdTo:$('#partyIdToAdd').val(),
        		roleTypeIdFrom:$('#roleTypeIdFromAdd').val(),
        		roleTypeIdTo:$('#roleTypeIdToAdd').val(),
        		agreementTypeId:$('#agreementTypeIdAdd').val(),
        		description:$('#descriptionAdd').val(),
        		textData:$('#textDataAdd').val(),
        		agreementDate: agreementDateJS,
        		fromDate: fromDateJS,
        		thruDate: thruDateJS,
        		statusId:$('#statusIdAdd').val()
        	  };
	   $("#jqxgrid").jqxGrid('addRow', null, row, "first");
        // select the first row and clear the selection.
        $("#jqxgrid").jqxGrid('clearSelection');                        
        $("#jqxgrid").jqxGrid('selectRow', 0);  
        $("#alterpopupWindow").jqxWindow('close');
    });
 
</script>
<style type="text/css">
	#jqxgridFromParty .jqx-grid-header-olbius{
		height:25px !important;
	}	
	#jqxgridToParty .jqx-grid-header-olbius{
		height:25px !important;
	}	
	#jqxgridBillingAccountIdy .jqx-grid-header-olbius{
		height:25px !important;
	}	
	#jqxPanel td{
		padding:5px;
	}
	#addrowbutton{
		margin:0 !important;
		border-radius:0 !important;
	}
</style>