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


<!-- TODO : Need formatting -->
<script type="text/javascript">
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
    } else if (mode == "NC") {
        // new credit card
        form.action="<@ofbizUrl>updateCheckoutOptions/editcreditcard?DONE_PAGE=checkoutpayment</@ofbizUrl>";
        form.submit();
    } else if (mode == "EC") {
        // edit credit card
        form.action="<@ofbizUrl>updateCheckoutOptions/editcreditcard?DONE_PAGE=checkoutpayment&paymentMethodId="+value+"</@ofbizUrl>";
        form.submit();
    } else if (mode == "GC") {
        // edit gift card
        form.action="<@ofbizUrl>updateCheckoutOptions/editgiftcard?paymentMethodId="+value+"</@ofbizUrl>";
        form.submit();
    } else if (mode == "NE") {
        // new eft account
        form.action="<@ofbizUrl>updateCheckoutOptions/editeftaccount?DONE_PAGE=checkoutpayment</@ofbizUrl>";
        form.submit();
    } else if (mode == "EE") {
        // edit eft account
        form.action="<@ofbizUrl>updateCheckoutOptions/editeftaccount?DONE_PAGE=checkoutpayment&paymentMethodId="+value+"</@ofbizUrl>";
        form.submit();
    }else if(mode = "EG")
    //edit gift card
        form.action="<@ofbizUrl>updateCheckoutOptions/editgiftcard?DONE_PAGE=checkoutpayment&paymentMethodId="+value+"</@ofbizUrl>";
        form.submit();
}
//]]>
$(document).ready(function(){
var issuerId = "";
    if ($('#checkOutPaymentId_IDEAL').attr('checked') == true) {
        $('#issuers').show();
        issuerId = $('#issuer').val();
        $('#issuerId').val(issuerId);
    } else {
        $('#issuers').hide();
        $('#issuerId').val('');
    }
    $('input:radio').click(function(){
        if ($(this).val() == "EXT_IDEAL") {
            $('#issuers').show();
            issuerId = $('#issuer').val();
            $('#issuerId').val(issuerId);
        } else {
            $('#issuers').hide();
            $('#issuerId').val('');
        }
    });
    $('#issuer').change(function(){
        issuerId = $(this).val();
        $('#issuerId').val(issuerId);
    });
});
</script>

<#assign cart = shoppingCart?if_exists />


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
	div.screenlet-body > div > input[type="radio"], div.screenlet-body > div > input[type="checkbox"] {
   		float:left;
    }
    div.screenlet-body > div{
    	padding-top:10px
    }
    .nopt label{
    	 float:left;
    	 width:100px
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
									<a href="#" data-step="3" class="passed multistep_section">Shipping Options</a>
								</div>
								<div>
									<a href="#" data-step="4" class="current multistep_section">Payment Method</a>
								</div>
								<div>
									<a href="#" data-step="5" class="multistep_section">Order Review</a>
								</div>
							</div>

							<div class="clear"></div>

							<div class="row">
								<div id="multistep_progress" class="span12 progress progress-striped">
									<div class="bar" style="width: 83.33%;"></div>
								</div>
							</div>

							<div id="multistep_steps" class="row"></div>
						</div> <!-- end checkout_multistep -->
						

<h1>3.${uiLabelMap.OrderHowShallYouPay}?</h1>
<form method="post" id="checkoutInfoForm" action="">
  <fieldset>
    <input type="hidden" name="checkoutpage" value="payment" />
    <input type="hidden" name="BACK_PAGE" value="checkoutoptions" />
    <input type="hidden" name="issuerId" id="issuerId" value="" />

    <div class="screenlet">
        <div class="screenlet-title-bar">
        </div>
        <div class="screenlet-body inline">
            <#-- Payment Method Selection -->
            <div class="nopt2">
                <label>${uiLabelMap.CommonAdd}:</label>
                <#if productStorePaymentMethodTypeIdMap.CREDIT_CARD?exists>
                  <a href="javascript:submitForm(document.getElementById('checkoutInfoForm'), 'NC', '');" class="button">${uiLabelMap.AccountingCreditCard}</a>
                </#if>
                <#if productStorePaymentMethodTypeIdMap.EFT_ACCOUNT?exists>
                  <a href="javascript:submitForm(document.getElementById('checkoutInfoForm'), 'NE', '');" class="button">${uiLabelMap.AccountingEFTAccount}</a>
                </#if>
              <#if productStorePaymentMethodTypeIdMap.EXT_OFFLINE?exists>
              </div>
              <div>
                  <input type="radio" id="checkOutPaymentId_OFFLINE" name="checkOutPaymentId" value="EXT_OFFLINE" <#if "EXT_OFFLINE" == checkOutPaymentId>checked="checked"</#if> />
                  <label for="checkOutPaymentId_OFFLINE">${uiLabelMap.OrderMoneyOrder}</label>
              </div>
              </#if>
              <#if productStorePaymentMethodTypeIdMap.EXT_COD?exists>
              <div>
                  <input type="radio" id="checkOutPaymentId_COD" name="checkOutPaymentId" value="EXT_COD" <#if "EXT_COD" == checkOutPaymentId>checked="checked"</#if> />
                  <label for="checkOutPaymentId_COD">${uiLabelMap.OrderCOD}</label>
              </div>
              </#if>
              <#if productStorePaymentMethodTypeIdMap.EXT_WORLDPAY?exists>
              <div>
                  <input type="radio" id="checkOutPaymentId_WORLDPAY" name="checkOutPaymentId" value="EXT_WORLDPAY" <#if "EXT_WORLDPAY" == checkOutPaymentId>checked="checked"</#if> />
                  <label for="checkOutPaymentId_WORLDPAY">${uiLabelMap.AccountingPayWithWorldPay}</label>
              </div>
              </#if>
              <#if productStorePaymentMethodTypeIdMap.EXT_PAYPAL?exists>
              <div>
                  <input type="radio" id="checkOutPaymentId_PAYPAL" name="checkOutPaymentId" value="EXT_PAYPAL" <#if "EXT_PAYPAL" == checkOutPaymentId>checked="checked"</#if> />
                  <label for="checkOutPaymentId_PAYPAL">${uiLabelMap.AccountingPayWithPayPal}</label>
              </div>
              </#if>
              <#if productStorePaymentMethodTypeIdMap.EXT_IDEAL?exists>
              <div>
                  <input type="radio" id="checkOutPaymentId_IDEAL" name="checkOutPaymentId" value="EXT_IDEAL" <#if "EXT_IDEAL" == checkOutPaymentId>checked="checked"</#if> />
                  <label for="checkOutPaymentId_IDEAL">${uiLabelMap.AccountingPayWithiDEAL}</label>
              </div>
              
              <div id="issuers">
              <div><label >${uiLabelMap.AccountingBank}</label></div>
                <select name="issuer" id="issuer">
                <#if issuerList?has_content>
                    <#list issuerList as issuer>
                        <option value="${issuer.getIssuerID()}" >${issuer.getIssuerName()}</option>
                    </#list>
                </#if>
              </select>
              </div>
              </#if>
              <#if !paymentMethodList?has_content>
              <div class="nopt">
                  <strong>${uiLabelMap.AccountingNoPaymentMethods}.</strong>
              </div>
            <#else>
              <#list paymentMethodList as paymentMethod>
                <#if paymentMethod.paymentMethodTypeId == "GIFT_CARD">
                 <#if productStorePaymentMethodTypeIdMap.GIFT_CARD?exists>
                  <#assign giftCard = paymentMethod.getRelatedOne("GiftCard", false) />

                  <#if giftCard?has_content && giftCard.cardNumber?has_content>
                    <#assign giftCardNumber = "" />
                    <#assign pcardNumber = giftCard.cardNumber />
                    <#if pcardNumber?has_content>
                      <#assign psize = pcardNumber?length - 4 />
                      <#if 0 &lt; psize>
                        <#list 0 .. psize-1 as foo>
                          <#assign giftCardNumber = giftCardNumber + "*" />
                        </#list>
                        <#assign giftCardNumber = giftCardNumber + pcardNumber[psize .. psize + 3] />
                      <#else>
                        <#assign giftCardNumber = pcardNumber />
                      </#if>
                    </#if>
                  </#if>

                  <div class="nopt">
                      <input type="checkbox" id="checkOutPayment_${paymentMethod.paymentMethodId}" name="checkOutPaymentId" value="${paymentMethod.paymentMethodId}" <#if cart.isPaymentSelected(paymentMethod.paymentMethodId)>checked="checked"</#if> />
                      <label for="checkOutPayment_${paymentMethod.paymentMethodId}">${uiLabelMap.AccountingGift}:${giftCardNumber}</label>
                        <#if paymentMethod.description?has_content>(${paymentMethod.description})</#if>
                        <a href="javascript:submitForm(document.getElementById('checkoutInfoForm'), 'EG', '${paymentMethod.paymentMethodId}');" class="button">${uiLabelMap.CommonUpdate}</a>
                        <strong>${uiLabelMap.OrderBillUpTo}:</strong> <input type="text" size="5" class="inputBox" name="amount_${paymentMethod.paymentMethodId}" value="<#if (cart.getPaymentAmount(paymentMethod.paymentMethodId)?default(0) > 0)>${cart.getPaymentAmount(paymentMethod.paymentMethodId)?string("##0.00")}</#if>" />
                  </div>
                 </#if>
                <#elseif paymentMethod.paymentMethodTypeId == "CREDIT_CARD">
                 <#if productStorePaymentMethodTypeIdMap.CREDIT_CARD?exists>
                  <#assign creditCard = paymentMethod.getRelatedOne("CreditCard", false) />
                  <div class="nopt">
                      <input type="checkbox" id="checkOutPayment_${paymentMethod.paymentMethodId}" name="checkOutPaymentId" value="${paymentMethod.paymentMethodId}" <#if cart.isPaymentSelected(paymentMethod.paymentMethodId)>checked="checked"</#if> />
                      <label for="checkOutPayment_${paymentMethod.paymentMethodId}">CC:${Static["org.ofbiz.party.contact.ContactHelper"].formatCreditCard(creditCard)}</label>
                        <#if paymentMethod.description?has_content>(${paymentMethod.description})</#if>
                        <a href="javascript:submitForm(document.getElementById('checkoutInfoForm'), 'EC', '${paymentMethod.paymentMethodId}');" class="button">${uiLabelMap.CommonUpdate}</a>
                        <label for="amount_${paymentMethod.paymentMethodId}"><strong>${uiLabelMap.OrderBillUpTo}:</strong></label><input type="text" size="5" class="inputBox" id="amount_${paymentMethod.paymentMethodId}" name="amount_${paymentMethod.paymentMethodId}" value="<#if (cart.getPaymentAmount(paymentMethod.paymentMethodId)?default(0) > 0)>${cart.getPaymentAmount(paymentMethod.paymentMethodId)?string("##0.00")}</#if>" />
                  </div>
                 </#if>
                <#elseif paymentMethod.paymentMethodTypeId == "EFT_ACCOUNT">
                 <#if productStorePaymentMethodTypeIdMap.EFT_ACCOUNT?exists>
                  <#assign eftAccount = paymentMethod.getRelatedOne("EftAccount", false) />
                  <div class="nopt">
                      <input type="radio" id="checkOutPayment_${paymentMethod.paymentMethodId}" name="checkOutPaymentId" value="${paymentMethod.paymentMethodId}" <#if paymentMethod.paymentMethodId == checkOutPaymentId>checked="checked"</#if> />
                      <label for="checkOutPayment_${paymentMethod.paymentMethodId}">${uiLabelMap.AccountingEFTAccount}:${eftAccount.bankName?if_exists}: ${eftAccount.accountNumber?if_exists}</label>
                        <#if paymentMethod.description?has_content><p>(${paymentMethod.description})</p></#if>
                      <a href="javascript:submitForm(document.getElementById('checkoutInfoForm'), 'EE', '${paymentMethod.paymentMethodId}');" class="button">${uiLabelMap.CommonUpdate}</a>
                  </div>
                 </#if>
                </#if>
              </#list>
            </#if>

            <#-- special billing account functionality to allow use w/ a payment method -->
            <#if productStorePaymentMethodTypeIdMap.EXT_BILLACT?exists>
              <#if billingAccountList?has_content>
                <div class="nopt">
                    <select name="billingAccountId" id="billingAccountId">
                      <option value=""></option>
                        <#list billingAccountList as billingAccount>
                          <#assign availableAmount = billingAccount.accountBalance>
                          <#assign accountLimit = billingAccount.accountLimit>
                          <option value="${billingAccount.billingAccountId}" <#if billingAccount.billingAccountId == selectedBillingAccountId?default("")>selected="selected"</#if>>${billingAccount.description?default("")} [${billingAccount.billingAccountId}] ${uiLabelMap.EcommerceAvailable} <@ofbizCurrency amount=availableAmount isoCode=billingAccount.accountCurrencyUomId/> ${uiLabelMap.EcommerceLimit} <@ofbizCurrency amount=accountLimit isoCode=billingAccount.accountCurrencyUomId/></option>
                        </#list>
                    </select>
                    <label for="billingAccountId">${uiLabelMap.FormFieldTitle_billingAccountId}</label>
                </div>
                <div class="nopt">
                    <input type="text" size="5" id="billingAccountAmount" name="billingAccountAmount" value="" />
                    <label for="billingAccountAmount">${uiLabelMap.OrderBillUpTo}</label>
                </div>
              </#if>
            </#if>
            <#-- end of special billing account functionality -->

            <#if productStorePaymentMethodTypeIdMap.GIFT_CARD?exists>
              <div class="nopt2">
                  <input type="checkbox" id="addGiftCard" name="addGiftCard" value="Y" />
                  <input type="hidden" name="singleUseGiftCard" value="Y" />
                  <label for="addGiftCard">${uiLabelMap.AccountingUseGiftCardNotOnFile}</label>
              </div>
              <div class="nopt">
                  <label for="giftCardNumber">${uiLabelMap.AccountingNumber}</label>
                  <input type="text" size="15" class="inputBox" id="giftCardNumber" name="giftCardNumber" value="${(requestParameters.giftCardNumber)?if_exists}" onfocus="document.getElementById('addGiftCard').checked=true;" />
              </div>
              <#if cart.isPinRequiredForGC(delegator)>
              <div class="nopt">
                  <label for="giftCardPin">${uiLabelMap.AccountingPIN}</label>
                  <input type="text" size="10" class="inputBox" id="giftCardPin" name="giftCardPin" value="${(requestParameters.giftCardPin)?if_exists}" onfocus="document.getElementById('addGiftCard').checked=true;" />
              </div>
              </#if>
              <div class="nopt">
                  <label for="giftCardAmount">${uiLabelMap.AccountingAmount}</label>
                  <input type="text" size="6" class="inputBox" id="giftCardAmount" name="giftCardAmount" value="${(requestParameters.giftCardAmount)?if_exists}" onfocus="document.getElementById('addGiftCard').checked=true;" />
              </div>
            </#if>

              <div class="nopt">
                    <#if productStorePaymentMethodTypeIdMap.CREDIT_CARD?exists><a href="<@ofbizUrl>setBilling?paymentMethodType=CC&amp;singleUsePayment=Y</@ofbizUrl>" class="button">${uiLabelMap.AccountingSingleUseCreditCard}</a></#if>
                    <#if productStorePaymentMethodTypeIdMap.GIFT_CARD?exists><a href="<@ofbizUrl>setBilling?paymentMethodType=GC&amp;singleUsePayment=Y</@ofbizUrl>" class="button">${uiLabelMap.AccountingSingleUseGiftCard}</a></#if>
                    <#if productStorePaymentMethodTypeIdMap.EFT_ACCOUNT?exists><a href="<@ofbizUrl>setBilling?paymentMethodType=EFT&amp;singleUsePayment=Y</@ofbizUrl>" class="button">${uiLabelMap.AccountingSingleUseEFTAccount}</a></#if>
              </div>
            <#-- End Payment Method Selection -->
        </div>
    </div>
  </fieldset>
</form>
<br/>
<table width="100%">
  <tr valign="top">
    <td>
      &nbsp;<a href="javascript:submitForm(document.getElementById('checkoutInfoForm'), 'CS', '');" class="button">${uiLabelMap.OrderBacktoShoppingCart}</a>
    </td>
    <td align="right" style="text-align:right">
      <a href="javascript:submitForm(document.getElementById('checkoutInfoForm'), 'DN', '');" class="button">${uiLabelMap.OrderContinueToFinalOrderReview}</a>
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