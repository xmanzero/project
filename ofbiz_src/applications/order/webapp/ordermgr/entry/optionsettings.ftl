<#--
Licensed to the Apache Software Foundation (ASF) under one
or more contributor license agreements.  See the NOTICE file
distributed with this work for additional information
regarding copyright ownership.  The ASF licenses this file
to you under the Apache License, Version 2.0 (the
"License"); you may not use this file except in compliance
with the License.  You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing,
software distributed under the License is distributed on an
"AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, either express or implied.  See the License for the
specific language governing permissions and limitations
under the License.
-->

<#if security.hasEntityPermission("ORDERMGR", "_CREATE", session) || security.hasEntityPermission("ORDERMGR", "_PURCHASE_CREATE", session)>
<form method="post" action="<@ofbizUrl>finalizeOrder</@ofbizUrl>" name="checkoutsetupform">
<div class="widget-box olbius-extra">
    <div class="widget-header widget-header-small header-color-blue2">
    		<h6>
            <#if shoppingCart.getOrderType() == "PURCHASE_ORDER">
            ${uiLabelMap.OrderPurchaseOrder}
       		<#else>
            ${uiLabelMap.OrderSalesOrder}
        	</#if>
        	</h6>
        <div class="widget-toolbar">
        	<a href="#" data-action="collapse"><i class="icon-chevron-up"></i></a>
		</div>
	</div>
	<div class="widget-body">
    <div class="widget-body-inner">
    <div class="widget-main">
<table border="0" width='100%' cellspacing='0' cellpadding='0' class='boxoutside'>
<tr>
    <td width='100%'>
      <br />
      <table width='100%' border='0' cellspacing='0' cellpadding='0' class='boxbottom'>
        <tr>
          <td>
            <table width="100%" cellpadding="1" border="0" cellpadding="0" cellspacing="0">
              <tr>
                <td colspan="2">
                  <h3 class="custom-header2 width80pc">${uiLabelMap.OrderInternalNote}</h3>
                </td>
                <td colspan="2">
                  <h3 class="custom-header2 width80pc">${uiLabelMap.OrderShippingNotes}</h3>
                </td>
              </tr>
              <tr>
                <td colspan="2">
                  <textarea cols="60" rows="3" name="internal_order_notes"><#if (cart.getInternalOrderNotes().size()>0)>${(cart.getInternalOrderNotes()[0])?if_exists}</#if></textarea>
                </td>
                <td colspan="2">
                  <textarea cols="60" rows="3" name="shippingNotes"><#if (cart.getOrderNotes().size()>0)>${(cart.getOrderNotes()[0])?if_exists}</#if></textarea>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td>
              <input type="hidden" name="finalizeMode" value="options"/>
<#list 1..cart.getShipGroupSize() as currIndex>
<#assign shipGroupIndex = currIndex - 1>

<#if cart.getShipmentMethodTypeId(shipGroupIndex)?exists && cart.getCarrierPartyId(shipGroupIndex)?exists>
    <#assign chosenShippingMethod = cart.getShipmentMethodTypeId(shipGroupIndex) + '@' + cart.getCarrierPartyId(shipGroupIndex)>
</#if>
<#assign supplierPartyId = cart.getSupplierPartyId(shipGroupIndex)?if_exists>
<#assign supplier =  delegator.findOne("PartyGroup", Static["org.ofbiz.base.util.UtilMisc"].toMap("partyId", supplierPartyId), false)?if_exists />

              <table width="100%" cellpadding="1" border="0" cellpadding="0" cellspacing="0">
              <tr><td colspan="2"><hr /></td></tr>
              <tr>
                <td colspan="2">
                    <h3 class="header smaller lighter blue"><b>${uiLabelMap.OrderShipGroup} ${uiLabelMap.CommonNbr} ${currIndex}</b><#if supplier?has_content> - ${supplier.groupName?default(supplier.partyId)}</#if></h3>
                </td>
              </tr>
               <#if cart.getOrderType() != "PURCHASE_ORDER">
                <tr>
                  <td colspan="2">
                    <h3 class="custom-header2">${uiLabelMap.ProductShipmentMethod}</h3>
                  </td>
                </tr>
                <#assign shipEstimateWrapper = Static["org.ofbiz.order.shoppingcart.shipping.ShippingEstimateWrapper"].getWrapper(dispatcher, cart, 0)>
                <#assign carrierShipmentMethods = shipEstimateWrapper.getShippingMethods()>
                <#list carrierShipmentMethods as carrierShipmentMethod>
                <tr>
                  <td width='1%' valign="top" >
                    <#assign shippingMethod = carrierShipmentMethod.shipmentMethodTypeId + "@" + carrierShipmentMethod.partyId>
                  	<label>
						<input type='radio' name='${shipGroupIndex?default("0")}_shipping_method' value='${shippingMethod}'<#if shippingMethod == chosenShippingMethod?default("N@A")> checked="checked"</#if> id='${shipGroupIndex?default("0")}_shipping_method_${shippingMethod}' /><span class="lbl"></span>
					</label>
                  </td>
                  <td valign="top">
                    <label for="${shipGroupIndex?default("0")}_shipping_method_${shippingMethod}">
                      <#if carrierShipmentMethod.partyId != "_NA_">${carrierShipmentMethod.partyId?if_exists}&nbsp;</#if>${carrierShipmentMethod.description?if_exists}
                      <#if cart.getShippingContactMechId(shipGroupIndex)?exists>
                        <#assign shippingEst = shipEstimateWrapper.getShippingEstimate(carrierShipmentMethod)?default(-1)>
                        <#if shippingEst?has_content>
                          &nbsp;-&nbsp;
                          <#if (shippingEst > -1)>
                            <@ofbizCurrency amount=shippingEst isoCode=cart.getCurrency()/>
                          <#else>
                            Calculated Offline
                          </#if>
                        </#if>
                      </#if>
                    </label>
                  </td>
                </tr>
                </#list>
                <#if !carrierShipmentMethodList?exists || carrierShipmentMethodList?size == 0>
                <tr>
                  <td width='1%' valign="top">
                    <label>
						<input type='radio' name='${shipGroupIndex?default("0")}_shipping_method' value="Default" checked="checked" /><span class="lbl"></span>
					</label>
                  </td>
                  <td valign="top">
                    <div>${uiLabelMap.FacilityNoOtherShippingMethods}</div>
                  </td>
                </tr>
                </#if>
               <#else>
                   <tr>
                     <td>
                       <h3 class="header smaller lighter blue">${uiLabelMap.OrderOrderShipEstimate}</h3>
                     </td>
                   </tr>
                   <tr>
                     <input type='hidden' name='${shipGroupIndex?default("0")}_shipping_method' value="STANDARD@_NA_" />
                     <td>
                       <input type='text' name='${shipGroupIndex?default("0")}_ship_estimate'/>
                     </td>
                   </tr>
               </#if>
                <tr>
                  <td colspan='2'>
                    <h3 class="custom-header2">${uiLabelMap.FacilityShipOnceOrAvailable}</h3>
                  </td>
                </tr>
                <tr>
                  <td valign="top">
                  	<label>
						<input type='radio' <#if cart.getMaySplit(shipGroupIndex)?default("N") == "N">checked="checked"</#if> name='${shipGroupIndex?default("0")}_may_split' value='false' /><span class="lbl"></span>
					</label>
                  </td>
                  <td valign="top">
                    <div>${uiLabelMap.FacilityWaitEntireOrderReady}</div>
                  </td>
                </tr>
                <tr>
                  <td valign="top">
                  	<label>
						<input <#if cart.getMaySplit(shipGroupIndex)?default("N") == "Y">checked="checked"</#if> type='radio' name='${shipGroupIndex?default("0")}_may_split' value='true' /><span class="lbl"></span>
					</label>
                  </td>
                  <td valign="top">
                    <div>${uiLabelMap.FacilityShipAvailable}</div>
                  </td>
                </tr>
                <tr>
                  <td colspan="2">
                    <h3 class="custom-header2">${uiLabelMap.OrderShipBeforeDate}</h3>
                  </td>
                </tr>
                <tr>
                    <td colspan="2">
                    <div>
                      <@htmlTemplate.renderDateTimeField name="sgi${shipGroupIndex?default('0')}_shipBeforeDate" event="" action="" value="${(cart.getShipBeforeDate())?if_exists}" className="" alert="" title="Format: yyyy-MM-dd HH:mm:ss.SSS" size="25" maxlength="30" id="sgi${shipGroupIndex?default('0')}_shipBeforeDate" dateType="date" shortDateInput=false timeDropdownParamName="" defaultDateTimeString="" localizedIconTitle="" timeDropdown="" timeHourName="" classString="" hour1="" hour2="" timeMinutesName="" minutes="" isTwelveHour="" ampmName="" amSelected="" pmSelected="" compositeType="" formName=""/>
                    </div>
                    </td>
                </tr>
                <tr>
                  <td colspan="2">
                    <h3 class="custom-header2">${uiLabelMap.OrderShipAfterDate}</h3>
                  </td>
                </tr>
                <tr>
                    <td colspan="2">
                    <div>
                      <@htmlTemplate.renderDateTimeField name="sgi${shipGroupIndex?default('0')}_shipAfterDate" event="" action="" value="${(cart.getShipAfterDate())?if_exists}" className="" alert="" title="Format: yyyy-MM-dd HH:mm:ss.SSS" size="25" maxlength="30" id="sgi${shipGroupIndex?default('0')}_shipAfterDate" dateType="date" shortDateInput=false timeDropdownParamName="" defaultDateTimeString="" localizedIconTitle="" timeDropdown="" timeHourName="" classString="" hour1="" hour2="" timeMinutesName="" minutes="" isTwelveHour="" ampmName="" amSelected="" pmSelected="" compositeType="" formName=""/>
                    </div>
                    </td>
                </tr>
                <tr>
                  <td colspan="2">
                    <h3 class="custom-header2">${uiLabelMap.FacilitySpecialInstructions}</h3>
                  </td>
                </tr>
                <tr>
                  <td colspan="2">
                    <textarea cols="30" rows="3" name="${shipGroupIndex?default("0")}_shipping_instructions">${cart.getShippingInstructions(shipGroupIndex)?if_exists}</textarea>
                  </td>
                </tr>

                <#if cart.getOrderType() == 'PURCHASE_ORDER'>
                    <input type="hidden" name="${shipGroupIndex?default('0')}_is_gift" value="false" />
                <#else>
                    <#if (productStore.showCheckoutGiftOptions)?default('Y') != 'N'>
                        <tr>
                            <td colspan="2">
                                <div>
                                    <span class="h2"><b>${uiLabelMap.OrderIsThisGift}</b></span>
                                    <label>
										<input type="radio" <#if cart.getIsGift(shipGroupIndex)?default('Y') == 'Y'>checked="checked"</#if> name="${shipGroupIndex?default('0')}_is_gift" value="true" /><span class="lbl">${uiLabelMap.CommonYes}</span>
									</label>
                                	<label>
										<input type="radio" <#if cart.getIsGift(shipGroupIndex)?default('N') == 'N'>checked="checked"</#if> name="${shipGroupIndex?default('0')}_is_gift" value="false" /><span class="lbl">${uiLabelMap.CommonNo}</span>
									</label>
                                </div>
                            </td>
                        </tr>
                    </#if>
                    <tr>
                        <td colspan="2">
                            <h3 class="custom-header2">${uiLabelMap.OrderGiftMessage}</h3>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <textarea cols="30" rows="3" name="${shipGroupIndex?default('0')}_gift_message">${cart.getGiftMessage(shipGroupIndex)?if_exists}</textarea>
                        </td>
                    </tr>
                </#if>

                   <tr>
                      <td colspan="2"></td>
                   </tr>
              </table>
</#list>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
</div>
</div>
</div>
</div>
</form>
<br />
<#else>
  <div class="alert alert-danger">${uiLabelMap.OrderViewPermissionError}</div>
</#if>
