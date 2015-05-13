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

<script language="javascript" type="text/javascript">
//<![CDATA[
function submitForm(form, mode, value) {
    if (mode == "DN") {
        // done action; checkout
        form.action="<@ofbizUrl>checkoutoptions</@ofbizUrl>";
        form.submit();
    } else if (mode == "CS") {
        // continue shopping
        form.action="<@ofbizUrl>updateCheckoutOptions/showcart</@ofbizUrl>";
        form.submit();
    } else if (mode == "NA") {
        // new address
        form.action="<@ofbizUrl>updateCheckoutOptions/editcontactmech?preContactMechTypeId=POSTAL_ADDRESS&contactMechPurposeTypeId=SHIPPING_LOCATION&DONE_PAGE=checkoutoptions</@ofbizUrl>";
        form.submit();
    } else if (mode == "EA") {
        // edit address
        form.action="<@ofbizUrl>updateCheckoutOptions/editcontactmech?DONE_PAGE=checkoutshippingaddress&contactMechId="+value+"</@ofbizUrl>";
        form.submit();
    } else if (mode == "NC") {
        // new credit card
        form.action="<@ofbizUrl>updateCheckoutOptions/editcreditcard?DONE_PAGE=checkoutoptions</@ofbizUrl>";
        form.submit();
    } else if (mode == "EC") {
        // edit credit card
        form.action="<@ofbizUrl>updateCheckoutOptions/editcreditcard?DONE_PAGE=checkoutoptions&paymentMethodId="+value+"</@ofbizUrl>";
        form.submit();
    } else if (mode == "NE") {
        // new eft account
        form.action="<@ofbizUrl>updateCheckoutOptions/editeftaccount?DONE_PAGE=checkoutoptions</@ofbizUrl>";
        form.submit();
    } else if (mode == "EE") {
        // edit eft account
        form.action="<@ofbizUrl>updateCheckoutOptions/editeftaccount?DONE_PAGE=checkoutoptions&paymentMethodId="+value+"</@ofbizUrl>";
        form.submit();
    }
}

//]]>
</script>
<style type="text/css">
	a.button{
		color:#FFFFFF;
		background-color:#333333;
	}
	a.button:hover{
		color:#FFFFFF;
	}
	a.multistep_section{
		background-color:#FFFFFF !important;
	}
	a.multistep_section:hover{
		cursor:default !important;
	}
	a.current:hover{
		background:#e6e3e3 !important;
	}
	a.user_logged_in, a.passed{
		background:#f9f9f9 !important;
	}
	tr{
		background-color:#FFFFFF !important;
	}
	td{
		padding:0 0 5px 10px 
	}
</style>

<!-- START PRIMARY -->
<div id="primary" class= "sidebar -no">
	<div class="container group">
		<div class="row">
			<!-- START CONTENT -->
			<div id="content-page" class= "span12 content group">
				<div id="post-389" class= "post-389 page type-page status-publish hentry group instock">
					<div class="woocommerce" >
						<!-- START WOO -->
							
						<div id="checkout_multistep">
							<div id="multistep_resume">
								<div>
									<span class="checkout_progress">
										<img src="/bazar/images/icons/multistep_cart.png" alt="Checkout Progress"> 
										Checkout Progress
									</span>
								</div>
								<div>
									<a href="#" data-step="1" class="user_logged_in multistep_section">Login</a>
								</div>
								<div>
									<a href="#" data-step="2" class="passed multistep_section">Shilling Address</a>
								</div>
								<div>
									<a href="#" data-step="3" class="current multistep_section">Shipping Options</a>
								</div>
								<div>
									<a href="#" data-step="4" class="multistep_section">Payment Method</a>
								</div>
								<div>
									<a href="#" data-step="5" class="multistep_section">Order Review</a>
								</div>
							</div>

							<div class="clear"></div>

							<div class="row">
								<div id="multistep_progress" class="span12 progress progress-striped">
									<div class="bar" style="width: 66.67%;"></div>
								</div>
							</div>

							<div id="multistep_steps" class="row"></div>
						</div> <!-- end checkout_multistep -->
						
						
<h1>2.&nbsp;${uiLabelMap.OrderHowShallWeShipIt}?</h1>
<form method="post" name="checkoutInfoForm" id="checkoutInfoForm" style="margin:0;">
    <input type="hidden" name="checkoutpage" value="shippingoptions"/>

    <div class="screenlet" style="height: 100%;">
        <div class="screenlet-title-bar">
            <hr /> <h2>${uiLabelMap.OrderMethod}</h2>
        </div>
        <div class="screenlet-body" style="height: 100%;">
            <table width="100%" cellpadding="1" border="0" cellpadding="0" cellspacing="0">
              <#list carrierShipmentMethodList as carrierShipmentMethod>
                <#assign shippingMethod = carrierShipmentMethod.shipmentMethodTypeId + "@" + carrierShipmentMethod.partyId>
                <tr>
                  <td width="1%" valign="top" >
                    <input type="radio" name="shipping_method" value="${shippingMethod}" <#if shippingMethod == StringUtil.wrapString(chosenShippingMethod!"N@A")>checked="checked"</#if> />
                  </td>
                  <td valign="top">
                    <div>
                      <#if shoppingCart.getShippingContactMechId()?exists>
                        <#assign shippingEst = shippingEstWpr.getShippingEstimate(carrierShipmentMethod)?default(-1)>
                      </#if>
                      <#if carrierShipmentMethod.partyId != "_NA_">${carrierShipmentMethod.partyId?if_exists}&nbsp;</#if>${carrierShipmentMethod.description?if_exists}
                      <#if shippingEst?has_content> - <#if (shippingEst > -1)><@ofbizCurrency amount=shippingEst isoCode=shoppingCart.getCurrency()/><#else>${uiLabelMap.OrderCalculatedOffline}</#if></#if>
                    </div>
                  </td>
                </tr>
              </#list>
              <#if !carrierShipmentMethodList?exists || carrierShipmentMethodList?size == 0>
                <tr>
                  <td width="1%" valign="top">
                    <input type="radio" name="shipping_method" value="Default" checked="checked" />
                  </td>
                  <td valign="top">
                    <div>${uiLabelMap.OrderUseDefault}.</div>
                  </td>
                </tr>
              </#if>
              <tr><td colspan="2"><hr /></td></tr>
              <tr>
                <td colspan="2">
                  <h2>${uiLabelMap.OrderShipAllAtOnce}?</h2>
                </td>
              </tr>
              <tr>
                <td valign="top">
                  <input type="radio" <#if "Y" != shoppingCart.getMaySplit()?default("N")>checked="checked"</#if> name="may_split" value="false" />
                </td>
                <td valign="top">
                  <div>${uiLabelMap.OrderPleaseWaitUntilBeforeShipping}.</div>
                </td>
              </tr>
              <tr>
                <td valign="top">
                  <input <#if "Y" == shoppingCart.getMaySplit()?default("N")>checked="checked"</#if> type="radio" name="may_split" value="true" />
                </td>
                <td valign="top">
                  <div>${uiLabelMap.OrderPleaseShipItemsBecomeAvailable}.</div>
                </td>
              </tr>
              <tr><td colspan="2"><hr /></td></tr>
              <tr>
                <td colspan="2">
                  <h2>${uiLabelMap.OrderSpecialInstructions}</h2>
                </td>
              </tr>
              <tr>
                <td colspan="2">
                  <textarea class="textAreaBox" cols="30" rows="3" wrap="hard" name="shipping_instructions">${shoppingCart.getShippingInstructions()?if_exists}</textarea>
                </td>
              </tr>
              <tr><td colspan="2"><hr /></td></tr>
              <tr>
                <td colspan="2">
                  <h2>${uiLabelMap.OrderPoNumber}</h2>&nbsp;
                  <#if shoppingCart.getPoNumber()?exists && shoppingCart.getPoNumber() != "(none)">
                    <#assign currentPoNumber = shoppingCart.getPoNumber()>
                  </#if>
                  <input type="text" class="inputBox" name="correspondingPoId" size="15" value="${currentPoNumber?if_exists}"/>
                </td>
              </tr>
              <#if productStore.showCheckoutGiftOptions?if_exists != "N">
              <tr><td colspan="2"><hr /></td></tr>
              <tr>
                <td colspan="2">
                  <div>
                    <h2>${uiLabelMap.OrderIsThisGift}</h2>
                    <input type="radio" <#if "Y" == shoppingCart.getIsGift()?default("N")>checked="checked"</#if> name="is_gift" value="true" /><span>${uiLabelMap.CommonYes}</span>
                    <input type="radio" <#if "Y" != shoppingCart.getIsGift()?default("N")>checked="checked"</#if> name="is_gift" value="false" /><span>${uiLabelMap.CommonNo}</span>
                  </div>
                </td>
              </tr>
              <tr><td colspan="2"><hr /></td></tr>
              <tr>
                <td colspan="2">
                  <h2>${uiLabelMap.OrderGiftMessage}</h2>
                </td>
              </tr>
              <tr>
                <td colspan="2">
                  <textarea class="textAreaBox" cols="30" rows="3" wrap="hard" name="gift_message">${shoppingCart.getGiftMessage()?if_exists}</textarea>
                </td>
              </tr>
              <#else/>
              <input type="hidden" name="is_gift" value="false"/>
              </#if>
              <tr><td colspan="2"><hr /></td></tr>
              <tr>
                <td colspan="2">
                  <h2>${uiLabelMap.PartyEmailAddresses}</h2>
                </td>
              </tr>
              <tr>
                <td colspan="2">
                  <div>${uiLabelMap.OrderEmailSentToFollowingAddresses}:</div>
                  <div>
                    <b>
                      <#list emailList as email>
                        ${email.infoString?if_exists}<#if email_has_next>,</#if>
                      </#list>
                    </b>
                  </div>
                  <div>${uiLabelMap.OrderUpdateEmailAddress} <a href="<@ofbizUrl>viewprofile?DONE_PAGE=checkoutoptions</@ofbizUrl>" class="buttontext">${uiLabelMap.PartyProfile}</a>.</div>
                  <br />
                  <div>${uiLabelMap.OrderCommaSeperatedEmailAddresses}:</div>
                  <input type="text" class="inputBox" size="30" name="order_additional_emails" value="${shoppingCart.getOrderAdditionalEmails()?if_exists}"/>
                </td>
              </tr>
            </table>
        </div>
    </div>
</form>
<br/>
<table width="100%">
  <tr valign="top">
    <td>
      &nbsp;<a href="javascript:submitForm(document.getElementById('checkoutInfoForm'), 'CS', '');" class="button">${uiLabelMap.OrderBacktoShoppingCart}</a>
    </td>
    <td align="right" style="text-align:right">
      <a href="javascript:submitForm(document.getElementById('checkoutInfoForm'), 'DN', '');" class="button">${uiLabelMap.CommonNext}</a>
    </td>
  </tr>
</table>





<!-- END WOO -->
                         </div>
                    </div>
               </div>
               <!-- END CONTENT -->
          </div>
     </div>
</div>
<!-- END PRIMARY -->