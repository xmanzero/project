<style type="text/css">
	#jqxgrid .jqx-tabs-headerWrapper.jqx-tabs-header {
		height:25px;
	}
	#jqxgrid .jqx-tabs-headerWrapper.jqx-tabs-header ul.jqx-tabs-title-container {
		height: 25px;
	}
	#jqxgrid .jqx-tabs-headerWrapper.jqx-tabs-header ul.jqx-tabs-title-container li.jqx-tabs-title {
		height: 13px;
	}
	#jqxgrid .jqx-widget-content .jqx-tabs .jqx-tabs-content-element .jqx-grid.jqx-widget {
		border:none;
	}
	#jqxgrid .jqx-widget-content .jqx-tabs .jqx-tabs-content-element .jqx-grid-header {
		border-width: 1px 1px 1px 1px;
	}
	#jqxgrid .jqx-widget-content .jqx-tabs .jqx-tabs-content-element .jqx-widget-content .jqx-grid-cell{
		border-width: 0px 1px 1px 1px;
	}
	.jqx-window-olbius .jqx-window-content table.table-left-width250 tr td.td-left {
	  	width: 250px;
	  	min-width: 250px;
	  	max-width: 250px;
	}
	.ui-dialog.ui-widget.ui-widget-content {
		z-index:18005 !important;
	}
	.ui-widget-overlay {
		z-index:18004 !important;
	}
	.ui-datepicker#ui-datepicker-div {
		z-index:18006 !important;
	}
</style>

<#assign dependentForm = "editOrganizationalUnit"/>
<#assign mainId = "countryGeoId"/>
<#assign requestName = "getAssociatedStateList"/>
<#assign paramKey = "countryGeoId"/>
<#assign dependentId = "stateProvinceGeoId"/>
<#assign responseName = "stateList"/>
<#assign dependentKeyName = "geoId"/>
<#assign descName = "geoName"/>
<#assign selectedDependentOption = "mechMap.postalAddress.stateProvinceGeoId"/>
<script type="text/javascript">
	jQuery(document).ready(function() {
	    if (jQuery('#${dependentForm}').length) {
	      jQuery("#${dependentForm}_${mainId}").change(function(e, data) {
	          getDependentDropdownValues('${requestName}', '${paramKey}', '${dependentForm}_${mainId}', '${dependentForm}_${dependentId}', '${responseName}', '${dependentKeyName}', '${descName}');
	      });
	      getDependentDropdownValues('${requestName}', '${paramKey}', '${dependentForm}_${mainId}', '${dependentForm}_${dependentId}', '${responseName}', '${dependentKeyName}', '${descName}', '${selectedDependentOption}');
	    }
	})
</script>

<#assign initrowdetailsDetail = "function (index, parentElement, gridElement, datarecord) {
	var tabsdiv = null;
    var information = null;
    var notes = null;
    tabsdiv = $($(parentElement).children()[0]);
    if (tabsdiv != null) {
        notes = tabsdiv.find('.notes');
        
        var loadingStr = '<div id=\"info_loader_' + index + '\" style=\"overflow: hidden; position: absolute; display: none; left: 45%; top: 25%;\" class=\"jqx-rc-all jqx-rc-all-olbius\">';
        loadingStr += '<div style=\"z-index: 99999; position: relative; width: auto; height: 33px; padding: 5px; font-family: verdana; font-size: 12px; color: #767676; border-color: #898989; border-width: 1px; border-style: solid; background: #f6f6f6; border-collapse: collapse;\" ';
        loadingStr += ' class=\"jqx-rc-all jqx-rc-all-olbius jqx-fill-state-normal jqx-fill-state-normal-olbius\">';
        loadingStr += '<div style=\"float: left;\"><div style=\"float: left; overflow: hidden; width: 32px; height: 32px;\" class=\"jqx-grid-load\"></div>';
        loadingStr += '<span style=\"margin-top: 10px; float: left; display: block; margin-left: 5px;\">Loading...</span></div></div></div>';
        var notescontainer = $(loadingStr);
        $(notes).append(notescontainer);
        
        var partyId = datarecord.partyId;
        
        $(tabsdiv).jqxTabs({ theme: 'energyblue', width: '96%', height: 170});
        
        var loadPage = function (url, tabClass, data, index) {
            $.ajax({
			  	type: 'POST',
			  	url: url,
			  	data: data,
			  	dataType: 'json',
			  	beforeSend: function () {
					$(\"#info_loader_\" + index).show();
				}, 
				success: function(data){
					//console.log(data);
					//$('.' + tabClass).text(data);
					var tabActive = tabsdiv.find('.' + tabClass);
					var container2 = $('<div style=\"margin: 5px;\"></div>')
			        container2.appendTo($(tabActive));
			        
			        var column1 = $('<div style=\"float: left; width: 40%;\"></div>');
			        var column2 = $('<div style=\"float: left; width: 60%;\"></div>');
			        container2.append(column1);
			        container2.append(column2);
			        
			        var partyIdQ = data.partyId;
			        var partyNameViewQ = data.partyNameView;
			        var postalAddressQ = data.postalAddress;
			        var phoneQ = data.phone;
			        var emailQ = data.email;
			        
			        if (partyIdQ != undefined) {
			        	var partyIdDiv = '<div style=\"margin: 10px;\"><b>${StringUtil.wrapString(uiLabelMap.DASalesmanId)}:</b> ' + partyIdQ + '</div>';
			        	$(column1).append(partyIdDiv);
			        }
			        if (phoneQ != undefined) {
			        	var phoneDiv = '<div style=\"margin: 10px;\"><b>${StringUtil.wrapString(uiLabelMap.DAPhone)}:</b> ' + phoneQ + '</div>';
			        	$(column1).append(phoneDiv);
			        }
                    if (emailQ != undefined) {
			        	var emailDiv = '<div style=\"margin: 10px;\"><b>${StringUtil.wrapString(uiLabelMap.DAEmail)}:</b> ' + emailQ + '</div>';
			        	$(column1).append(emailDiv);
			        }
			        if (postalAddressQ != undefined) {
			        	for (var i = 0; i < postalAddressQ.length; i++) {
			        		var postalAddressQItem = postalAddressQ[i];
			        		var div1 = '<div style=\"margin: 10px;\"><b>${StringUtil.wrapString(uiLabelMap.DAAddress)} ' + (i + 1) + ':</b></div>';
			        		$(column2).append(div1);
			        		var div2 = '<div style=\"margin: 2px 15px;\">${StringUtil.wrapString(uiLabelMap.DAAddress)}: ' + postalAddressQItem.address1 + '</div>';
			        		$(column2).append(div2);
			        		var div3 = '<div style=\"margin: 2px 15px;\">${StringUtil.wrapString(uiLabelMap.DACountry)}: ' + postalAddressQItem.countryGeoId + '</div>';
			        		$(column2).append(div3);
			        		var div4 = '<div style=\"margin: 2px 15px;\">${StringUtil.wrapString(uiLabelMap.DAStateProvince)}: ' + postalAddressQItem.stateProvinceGeoId + '</div>';
			        		$(column2).append(div4);
			        		var div5 = '<div style=\"margin: 2px 15px;\">${StringUtil.wrapString(uiLabelMap.DACountyGeoId)}: ' + postalAddressQItem.countyGeoId + '</div>';
			        		$(column2).append(div5);
			        	}
			        }
				},
				error: function(){
				}, 
	            complete: function() {
			        $(\"#info_loader_\" + index).hide();
			    }
			});
        }
        loadPage('getGeneralInformationOfParty', 'notes', {'partyId' : partyId}, index);
        /*
        $('#jqxTabs').on('selected', function (event) {
            var pageIndex = event.args.item + 1;
            loadPage('pages/ajax' + pageIndex + '.htm', pageIndex);
        });
        */
    }
 }"/>

<#assign dataField="[{ name: 'partyId', type: 'string'},
					 { name: 'fullName', type: 'string'},
					 { name: 'address', type: 'string'},
					 { name: 'phone', type: 'string'},
					 { name: 'email', type: 'string'},
					 { name: 'birthDate', type: 'date'},
					 { name: 'countryGeoId', type: 'string'},
					 { name: 'stateProvinceGeoId', type: 'string'}, 
					 { name: 'countyGeoId', type: 'string'},
					 { name: 'preferredCurrencyUomId', type: 'string'},
					 { name: 'statusId', type: 'string'},
					 { name: 'description', type: 'string'},
					 { name: 'createdDate', type: 'date', other:'Timestamp'},
					 { name: 'createdByUserLogin', type: 'string'},
					 { name: 'toName', type: 'string'},
					 {name: 'rowDetail', type: 'string'}
					 ]"/>
<#assign columnlist = "{ text: '${StringUtil.wrapString(uiLabelMap.DASalesmanId)}', width:'12%', datafield: 'partyId'},
					 	{ text: '${StringUtil.wrapString(uiLabelMap.DAFullName)}', datafield: 'fullName'},
					 	{ text: '${StringUtil.wrapString(uiLabelMap.DABirthday)}', width:'12%', datafield: 'birthDate', cellsformat: 'dd/MM/yyyy'},
					 	{ text: '${StringUtil.wrapString(uiLabelMap.DACurrencyUomId)}', width:'7%', datafield: 'preferredCurrencyUomId'},
					 	{ text: '${StringUtil.wrapString(uiLabelMap.DAStatus)}', width:'12%', datafield: 'statusId'},
					 	{ text: '${StringUtil.wrapString(uiLabelMap.DADescription)}', width:'12%', datafield: 'description'},
					 	{ text: '${StringUtil.wrapString(uiLabelMap.DACreatedDate)}', width:'12%', datafield: 'createdDate', cellsformat: 'dd/MM/yyyy'},
					 	{ text: '${StringUtil.wrapString(uiLabelMap.DACreatedBy)}', width:'12%', datafield: 'createdByUserLogin'}
					 	"/>
<#assign rowdetailstemplateAdvance = "<ul style='margin-left: 30px;'><li>${StringUtil.wrapString(uiLabelMap.DAGeneralInformation)}</li></ul><div class='notes'></div>"/>

<#assign addrow = "false"/>
<#if security.hasPermission("PARTYSALESMAN_CREATE", session) || security.hasPermission("PARTYSALESMAN_ADMIN", session)>
	<#assign addrow = "true"/>
</#if>

<@jqGrid url="jqxGeneralServicer?sname=JQGetListSalesman" dataField=dataField columnlist=columnlist filterable="true" clearfilteringbutton="true"
		 showtoolbar="true" alternativeAddPopup="alterpopupWindow" filtersimplemode="true" addType="popup" initrowdetailsDetail=initrowdetailsDetail initrowdetails="true" 
		 mouseRightMenu="true" contextMenuId="contextMenu" rowdetailstemplateAdvance=rowdetailstemplateAdvance  defaultSortColumn="createdDate" sortdirection="desc" 
		 addrow="${addrow}" createUrl="jqxGeneralServicer?sname=createPartySalesman&jqaction=C" addrefresh="true" 
		 addColumns="partyId;firstName;lastName;middleName;gender;roleTypeId;parentOrgId;functions;birthDate(java.sql.Timestamp);currencyUomId;description;address1;emailAddress;countryGeoId;stateProvinceGeoId;countyGeoId;useForShippingAddress;countryCode;areaCode;contactNumber;userLoginIdStr;currentPassword;currentPasswordVerify;passwordHint;requirePasswordChange;partyId" 
		 />

<div id='contextMenu'>
	<ul>
	    <li><i class="icon-refresh open-sans"></i>${StringUtil.wrapString(uiLabelMap.DARefresh)}</li>
	</ul>
</div>
<script type="text/javascript">
	//Create Theme
	$.jqx.theme = 'olbius';  
	theme = $.jqx.theme;
	
	$("#contextMenu").jqxMenu({ width: 200, autoOpenPopup: false, mode: 'popup', theme: theme});
	$("#contextMenu").on('itemclick', function (event) {
		var args = event.args;
        var rowindex = $("#jqxgrid").jqxGrid('getselectedrowindex');
        var tmpKey = $.trim($(args).text());
        if (tmpKey == "${StringUtil.wrapString(uiLabelMap.DARefresh)}") {
        	$("#jqxgrid").jqxGrid('updatebounddata');
        }
    });
    
	<#assign countries = Static["org.ofbiz.common.CommonWorkers"].getCountryList(delegator) !>
	var countryCodeData = new Array();
	<#if countries?exists>
		<#list countries as country >
			var row = {};
			row['geoId'] = '${country.geoId?if_exists}';
			row['codeNumber'] = '${country.codeNumber?if_exists}';
			countryCodeData[${country_index}] = row;
		</#list>
	</#if>
	
	<#assign provinces = delegator.findList("Geo", Static["org.ofbiz.entity.condition.EntityCondition"].makeCondition("geoTypeId", "PROVINCE"), null, null, null, false) !>
	var areaCodeData = new Array();
	<#if provinces?exists>
		<#list provinces as province >
			var row = {};
			row['geoId'] = '${province.geoId?if_exists}';
			row['codeNumber'] = '${province.codeNumber?if_exists}';
			areaCodeData[${province_index}] = row;
		</#list>
	</#if>
	
	function searchCountry(){
		var countryGeoId = $("#editOrganizationalUnit_countryGeoId").val();
		for (var i = 0; i < countryCodeData.length; i++){
			if (countryGeoId==countryCodeData[i].geoId){
				$("#countryCode").val(countryCodeData[i].codeNumber);
			}
		}
	}
	
	<#assign counties = delegator.findList("Geo", Static["org.ofbiz.entity.condition.EntityCondition"].makeCondition("geoTypeId", "DISTRICT"), null, null, null, false) !>
</script>
<#--
<#assign orgUnitLevels = delegator.findByAnd("RoleType", {"parentTypeId" : "ORGANIZATION_UNIT"}, null, false)/>
<#assign partyRoles = Static["com.olbius.delys.util.SecurityUtil"].getCurrentRoles(parameters.parentOrgId, delegator)/>-->
<div id="alterpopupWindow" style="display:none">
    <div>${uiLabelMap.DACreateNewSalesman}</div>
    <div style="overflow: hidden;">
    	<form name="editOrganizationalUnit" id="editOrganizationalUnit" method="post" action="<@ofbizUrl>createOrganizationalUnit</@ofbizUrl>">
    		<input type="hidden" name="statusIdAdd" id="statusIdAdd" value="AGREEMENT_CREATED"/>
	        <table class="table-left-width250" style="width:100%">
	        	<tr>
	    	 		<td align="right">${uiLabelMap.DASalesmanId}</td>
		 			<td align="left" class="td-left">
	 					<input type="text" name="partyId" id="partyId"/>
		 			</td>
		 			
		 			<td align="right" class="required">${uiLabelMap.DABelongsToSUP}</td>
		 			<td align="left" class="td-left">
		 				<div id="parentOrgId">
		 					<div id="jqxParentOrgId" />
		 				</div>
		 				<#--<@htmlTemplate.lookupField formName="editOrganizationalUnit" name="parentOrgId" id="parentOrgId" fieldFormName="LookupPartyGroup" value="${parameters.parentOrgId?if_exists}"/>-->
		 			</td>
	    	 	</tr>
	    	 	<tr>
	    	 		<td align="right" class="required">${uiLabelMap.DAFirstName}</td>
		 			<td align="left" class="td-left">
	 					<input type="text" name="firstName" id="firstName"/>
		 			</td>
		 			
		 			<td align="right">${uiLabelMap.DABirthday}</td>
		 			<td align="left" class="td-left">
		 				<div id="birthDate" name="birthDate"></div>
						<#--<@htmlTemplate.renderDateTimeField name="birthDate" id="birthDate" value="" event="" action="" className="" alert="" 
										title="Format: yyyy-MM-dd HH:mm:ss.SSS" size="25" maxlength="30" dateType="date" shortDateInput=false 
										timeDropdownParamName="" defaultDateTimeString="" localizedIconTitle="" timeDropdown="" timeHourName="" 
										classString="" hour1="" hour2="" timeMinutesName="" minutes="" isTwelveHour="" ampmName="" amSelected="" 
										pmSelected="" compositeType="" formName=""/>-->
					</td>
	    	 	</tr>
	    	 	<tr>
	    	 		<td align="right" class="required">${uiLabelMap.DALastName}</td>
		 			<td align="left" class="td-left">
	 					<input type="text" name="lastName" id="lastName"/>
		 			</td>
		 			
		 			<td align="right">${uiLabelMap.DAMiddleName}</td>
		 			<td align="left" class="td-left">
	 					<input type="text" name="middleName" id="middleName"/>
		 			</td>
	    	 	</tr>
	    	 	<tr>
	    	 		<td align="right">${uiLabelMap.Functions}</td>
		 			<td align="left" class="td-left">
		 				<input type="text" name="functions" id="functions"/>
		 			</td>
		 			
		 			<td align="right">${uiLabelMap.DADescription}</td>
		 			<td align="left" class="td-left">
		 				<input type="text" id="description" name="description" value=""/>
		 			</td>
	    	 	</tr>
	    	 	<tr>
					<td align="right">${uiLabelMap.DACurrencyUomId}</td>
		 			<td align="left" class="td-left">
		 				<#assign currencyUomId = Static["org.ofbiz.entity.util.EntityUtilProperties"].getPropertyValue("general.properties", "currency.uom.id.default", "VND", delegator) />
		 				<#assign currencies = delegator.findByAnd("Uom", {"uomTypeId" : "CURRENCY_MEASURE"}, null, false)/>
						<select id="currencyUomId" name="currencyUomId">
			              	<option value=""></option>
			              	<#list currencies as currency>
			              	<option value="${currency.uomId}" <#if currencyUomId?default('VND') == currency.uomId>selected="selected"</#if>>
			              		${currency.uomId}
		              		</option>
			              	</#list>
			            </select>
					</td>
		 			
		 			<td align="right">${uiLabelMap.gender}</td>
		 			<td align="left" class="td-left">
		 				<select name="gender" id="gender">
							<option value>&nbsp;</option>
							<option value="M">${uiLabelMap.CommonMale}</option>
							<option value="F">${uiLabelMap.CommonFemale}</option>
						</select>
		 			</td>
	    	 	</tr>
	    	 	<tr>
					<td align="right">${uiLabelMap.DARoleTypeId}</td>
		 			<td align="left" class="td-left">
		 				<#assign roleTypes = delegator.findByAnd("RoleType", {"parentTypeId" : "DELYS_SALESMAN"}, null, false)/>
						<select id="roleTypeId" name="roleTypeId">
			              	<option value=""></option>
			              	<#list roleTypes as roleType>
			              	<option value="${roleType.roleTypeId}">
			              		${roleType.get("description", locale)?default(roleType.roleTypeId)}
		              		</option>
			              	</#list>
			            </select>
					</td>
		 			
		 			<td align="right"></td>
		 			<td align="left" class="td-left"></td>
	    	 	</tr>
	    	 	<#--
	    	 	<tr>
					<td align="right">${uiLabelMap.OrganizationUnitLevel}</td>
					<td align="left" class="td-left">
						<select id="orgUnitLevel" name="orgUnitLevel">
							<#if orgUnitLevels?exists>
								<#list orgUnitLevels as orgUnitLevel>
									<option value="${orgUnitLevel.roleTypeId}">${orgUnitLevel.description}</option>
								</#list>
							</#if>
						</select>
					</td>
					<td align="right">${uiLabelMap.OrganizationUnitLevel}</td>
					<td align="left" class="td-left">
						<input id="parentRoleTypeId" name="parentRoleTypeId" value=""/>
						<select id="parentRoleTypeId" name="parentRoleTypeId">
							<#list partyRoles as roleType>
								<#assign roleTypeGv = delegator.findOne("RoleType", Static["org.ofbiz.base.util.UtilMisc"].toMap("roleTypeId", roleType), false)>
								<option value="${roleTypeGv.roleTypeId}">${roleTypeGv.description}</option>
							</#list>
						</select>
					</td>
	    	 	</tr>-->
	    	 	<tr style="border-top: 1px solid #ddd; padding-top: 15px;">
	    	 		<td align="right">${uiLabelMap.PartyAddressLine}</td>
		 			<td align="left" class="td-left"><input type="text" name="address1" id="address1"/></td>
		 			
					<td align="right">${uiLabelMap.EmailAddress}</td>
		 			<td align="left" class="td-left"><input type="text" size="60" maxlength="255" name="emailAddress" id="emailAddress" /></td>
	    	 	</tr>
	    	 	<tr>
	    	 		<td align="right">${uiLabelMap.CommonCountry}</td>
		 			<td align="left" class="td-left">
						<select name="countryGeoId" id="editOrganizationalUnit_countryGeoId" onchange="searchCountry()">
							${screens.render("component://common/widget/CommonScreens.xml#countries")}        
							<#assign defaultCountryGeoId = Static["org.ofbiz.base.util.UtilProperties"].getPropertyValue("general.properties", "country.geo.id.default")>
							<option selected="selected" value="${defaultCountryGeoId}">
								<#assign countryGeo = delegator.findOne("Geo",Static["org.ofbiz.base.util.UtilMisc"].toMap("geoId",defaultCountryGeoId), false)>
								${countryGeo.get("geoName",locale)}
							</option>
						</select>
					</td>
		 			
					<td align="right">${uiLabelMap.PartyPhoneNumber}</td>
		 			<td align="left" class="td-left">
		 				<input type="tel" size="4" maxlength="10" name="countryCode" style="width: 30px" id="countryCode" />
						<b>-</b>&nbsp;<input type="text" size="4" maxlength="10"  name="areaCode" id="areaCode" style="width: 30px"/>
						<b>-</b>&nbsp;<input type="text" size="15" maxlength="15" name="contactNumber" style="width: 96px"/>
		 			</td>
	    	 	</tr>
	    	 	<tr>
					<td align="right">${uiLabelMap.PartyState}</td>
		 			<td align="left" class="td-left">
						<select name="stateProvinceGeoId" id="editOrganizationalUnit_stateProvinceGeoId">
						</select>
					</td>
		 			
		 			<td align="right">${uiLabelMap.DAUseForShippingAddress}</td>
		 			<td align="left" class="td-left">
		 				<select name="useForShippingAddress" id="useForShippingAddress">
							<option value="Y" selected="selected">${uiLabelMap.CommonY}</option>
							<option value="N">${uiLabelMap.CommonN}</option>
						</select>
		 			</td>
	    	 	</tr>
	    	 	<tr>
	    	 		<td align="right">${uiLabelMap.DACountyGeoId}</td>
		 			<td align="left" class="td-left">
						<select name="countyGeoId" id="editOrganizationalUnit_countyGeoId">
							<#list counties as county>
								<option value="${county.geoId}">${county.geoName}</option>
							</#list>
						</select>
					</td>
					
					<td align="right"></td>
		 			<td align="left" class="td-left"></td>
	    	 	</tr>
	    	 	<tr style="border-top: 1px solid #ddd; padding-top: 15px;">
	    	 		<td align="right" class="required">${uiLabelMap.UserLoginID}</td>
		 			<td align="left" class="td-left"><input type="text" id="userLoginIdStr" name="userLoginIdStr" /></td>
		 			
					<td align="right" class="required">${uiLabelMap.CurrentPassword}</td>
		 			<td align="left" class="td-left"><input type="password" id="currentPassword" name="currentPassword" /></td>
	    	 	</tr>
	    	 	<tr>
	    	 		<td align="right" class="required">${uiLabelMap.CurrentPasswordVerify}</td>
		 			<td align="left" class="td-left"><input type="password" id="currentPasswordVerify" name="currentPasswordVerify" /></td>
		 			
					<td align="right">${uiLabelMap.PasswordHint}</td>
		 			<td align="left" class="td-left"><input type="text" id="passwordHint" name="passwordHint" /></td>
	    	 	</tr>
	    	 	<#--
	    	 	<tr>
	    	 		<td align="right" class="required">${uiLabelMap.DAAbbRequirePasswordChange}</td>
		 			<td align="left" class="td-left">
		 				<select name="requirePasswordChange" id="requirePasswordChange">
							<option value="Y">${uiLabelMap.CommonY}</option>
							<option value="N" selected="selected">${uiLabelMap.CommonN}</option>
						</select>
		 			</td>
		 			
					<td align="right"></td>
		 			<td align="left" class="td-left"></td>
	    	 	</tr>
	    	 	-->
	            <tr>
	            	<td align="right"></td>
		 			<td align="left"></td>
		 			
	                <td align="right">
	                	<input type="button" id="alterSave" value="${uiLabelMap.CommonSave}" />
	                </td>
	                <td align="left">
	                	<input type="button" id="alterCancel" value="${uiLabelMap.CommonCancel}" />
	                </td>
	            </tr>
	        </table>
    	</form>
    </div>
</div>

<script type="text/javascript">
	//Create alterpopupWindow
	$("#alterpopupWindow").jqxWindow({
		maxWidth: 1500, minWidth: 950, minHeight: 410, maxHeight: 1200, resizable: true,  isModal: true, autoOpen: false, cancelButton: $("#alterCancel"), modalOpacity: 0.7, theme:theme           
	});
    $("#alterCancel").jqxButton({width: 100});
    $("#alterSave").jqxButton({width: 100});
    $("#birthDate").jqxDateTimeInput({width: '208px', height: '25px', allowNullDate: true, value: null});
    
    // update the edited row when the user clicks the 'Save' button.
    $("#alterSave").click(function () {
    	var row;
        row = { partyId:$('#partyId').val(),
        		firstName:$('#firstName').val(),
        		lastName:$('#lastName').val(),
        		middleName:$('#middleName').val(),
        		gender:$('#gender').val(),
        		roleTypeId:$('#roleTypeId').val(),
        		parentOrgId:$('#parentOrgId').val(),
        		functions:$('#functions').val(),
        		birthDate: $('#birthDate').jqxDateTimeInput('getDate'),
        		currencyUomId:$('#currencyUomId').val(),
        		description:$('#description').val(),
        		address1:$('#address1').val(),
        		emailAddress: $('#emailAddress').val(),
        		countryGeoId: $('#editOrganizationalUnit_countryGeoId').val(),
        		stateProvinceGeoId: $('#editOrganizationalUnit_stateProvinceGeoId').val(),
        		useForShippingAddress: $('#useForShippingAddress').val(),
        		countyGeoId: $('#editOrganizationalUnit_countyGeoId').val(),
        		countryCode: $('#countryCode').val(),
        		areaCode:$('#areaCode').val(),
        		contactNumber: $('#contactNumber').val(),
        		userLoginIdStr: $('#userLoginIdStr').val(),
        		currentPassword: $('#currentPassword').val(),
        		currentPasswordVerify: $('#currentPasswordVerify').val(),
        		passwordHint: $('#passwordHint').val(),
        		requirePasswordChange: $('#requirePasswordChange').val(),
        	  };
	   	$("#jqxgrid").jqxGrid('addRow', null, row, "first");
        // select the first row and clear the selection.
        $("#jqxgrid").jqxGrid('clearSelection');                        
        $("#jqxgrid").jqxGrid('selectRow', 0);  
        $("#alterpopupWindow").jqxWindow('close');
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
				   	$("#jqxParentOrgId").jqxGrid('updatebounddata');
				},
				pager: function (pagenum, pagesize, oldpagenum) {
				  	// callback called when a page or page size is changed.
				},
				sort: function () {
				  	$("#jqxParentOrgId").jqxGrid('updatebounddata');
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
				url: 'jqxGeneralServicer?sname=JQGetListSupervisorDepartmentInRel',
	};
	// create Party From
	$('#parentOrgId').jqxDropDownButton({ width: 200, height: 25});
	<#if strCurrentOrganization?exists && strCurrentOrganization?has_content>
		$('#parentOrgId').jqxDropDownButton({disabled: true});
		$('#parentOrgId').jqxDropDownButton('setContent', '<div style="position: relative; margin-left: 3px; margin-top: 5px;">${strCurrentOrganization}</div>');
	</#if>
	$("#jqxParentOrgId").jqxGrid({
		width:600,
		source: sourcePartyFrom,
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
		columns:[{text: '${uiLabelMap.DAPartyId}', datafield: 'partyId', width: '160px'},
					{text: '${uiLabelMap.DAFirstName}', datafield: 'firstName', width: '160px'},
					{text: '${uiLabelMap.DAMiddleName}', datafield: 'middleName', width: '160px'},
					{text: '${uiLabelMap.DALastName}', datafield: 'lastName', width: '160px'},
					{text: '${uiLabelMap.DAGroupName}', datafield: 'groupName', width: '160px'},
				]
	});
	$("#jqxParentOrgId").on('rowselect', function (event) {
        var args = event.args;
        var row = $("#jqxParentOrgId").jqxGrid('getrowdata', args.rowindex);
        var dropDownContent = '<div style="position: relative; margin-left: 3px; margin-top: 5px;">' + row['partyId'] + '</div>';
        $("#parentOrgId").jqxDropDownButton('setContent', dropDownContent);
    });
    
</script>