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
<form id="glReconciledFinAccountTrans" name="glReconciledFinAccountTransForm" method="post" action="<@ofbizUrl>callReconcileFinAccountTrans?clearAll=Y</@ofbizUrl>">
  <input name="_useRowSubmit" type="hidden" value="Y"/>
  <input name="finAccountId" type="hidden" value="${finAccountId}"/>
  <input name="glReconciliationId" type="hidden" value="${glReconciliationId}"/>
  <div class="widget-box transparent no-bottom-border">
    <div class="widget-header">
    <h4>${uiLabelMap.AccountingCurrentBankReconciliation}</h4>
      <span class="widget-toolbar">
          <li><a class="open-sans icon-edit" style="text-decoration: blink; font-size:14px;" href="<@ofbizUrl>EditFinAccountReconciliations?finAccountId=${finAccountId}&amp;glReconciliationId=${glReconciliationId}</@ofbizUrl>">&nbsp${uiLabelMap.CommonEdit}</a></li>
          </span> 
      <br class="clear"/>
    </div>
    
    <div class="widget-body">
      <#assign finAcctTransCondList = delegator.findByAnd("FinAccountTrans", {"glReconciliationId" : glReconciliationId, "statusId" : "FINACT_TRNS_CREATED"}, null, false)>
      <#if finAcctTransCondList?has_content>
        <a href="javascript:document.CancelBankReconciliationForm.submit();" class="btn btn-mini btn-info">${uiLabelMap.AccountingCancelBankReconciliation}</a>
      </#if>
      <#if currentGlReconciliation?has_content>
        <table>
          <tr>
            <td><span class="label">${uiLabelMap.FormFieldTitle_glReconciliationName}</span></td>
            <td>${currentGlReconciliation.glReconciliationName?if_exists}</td>
          </tr>
          <#if currentGlReconciliation.statusId?exists>
            <tr>
              <td><span class="label">${uiLabelMap.CommonStatus}</span></td>
              <#assign currentStatus = currentGlReconciliation.getRelatedOne("StatusItem", true)>
              <td>${currentStatus.description?if_exists}</td>
            </tr>
          </#if>
          <tr>
            <td><span class="label">${uiLabelMap.FormFieldTitle_reconciledDate}</span></td>
            <td>${currentGlReconciliation.reconciledDate?if_exists}</td>
          </tr>
          <tr>
            <td><span class="label">${uiLabelMap.AccountingOpeningBalance}</span></td>
            <td><@ofbizCurrency amount=currentGlReconciliation.openingBalance?default('0')/></td>
          </tr>
          <#if currentGlReconciliation.reconciledBalance?exists>
            <tr>
              <td><span class="label">${uiLabelMap.FormFieldTitle_reconciledBalance}</span></td>
              <td><@ofbizCurrency amount=currentGlReconciliation.reconciledBalance?default('0')/></td>
            </tr>
          </#if>
          <#if currentClosingBalance?exists>
            <tr>
              <td><span class="label">${uiLabelMap.FormFieldTitle_closingBalance}</span></td>
              <td><@ofbizCurrency amount=currentClosingBalance/></td>
            </tr>
          </#if>
        </table>
      </#if>
    </div>
  </div>
  <div class="widget-box transparent no-bottom-border">
    <div class="widget-header">
    <h4>${uiLabelMap.AccountingPreviousBankReconciliation}</h4>
      <span class="widget-toolbar">
      </span>
      <br class="clear"/>
    </div>
    <div class="widget-body">
      <#if previousGlReconciliation?has_content>
        <table>
          <tr>
            <td><span class="label">${uiLabelMap.FormFieldTitle_glReconciliationName}</span></td>
            <td>${previousGlReconciliation.glReconciliationName?if_exists}</td>
          </tr>
          <#if previousGlReconciliation.statusId?exists>
            <tr>
              <td><span class="label">${uiLabelMap.CommonStatus}</span></td>
              <#assign previousStatus = previousGlReconciliation.getRelatedOne("StatusItem", true)>
              <td>${previousStatus.description?if_exists}</td>
            </tr>
          </#if>
          <tr>
            <td><span class="label">${uiLabelMap.FormFieldTitle_reconciledDate}</span></td>
            <td>${previousGlReconciliation.reconciledDate?if_exists}</td>
          </tr>
          <tr>
            <td><span class="label">${uiLabelMap.AccountingOpeningBalance}</span></td>
            <td><@ofbizCurrency amount=previousGlReconciliation.openingBalance?default('0')/></td>
          </tr>
          <#if previousGlReconciliation.reconciledBalance?exists>
            <tr>
              <td><span class="label">${uiLabelMap.FormFieldTitle_reconciledBalance}</span></td>
              <td><@ofbizCurrency amount=previousGlReconciliation.reconciledBalance?default('0')/></td>
            </tr>
          </#if>
          <#if previousClosingBalance?exists>
            <tr>
              <td><span class="label">${uiLabelMap.FormFieldTitle_closingBalance}</span></td>
              <td><@ofbizCurrency amount=previousClosingBalance/></td>
            </tr>
          </#if>
        </table>
      </#if>
    </div>
  </div>
  <div class="widget-box transparent no-bottom-border">
    <div class="widget-header">
    <h4>${uiLabelMap.AccountingFinAcctTransAssociatedToGlReconciliation}</h4>
      <span class="widget-toolbar">
      </span>
      <br class="clear"/>
    </div>
    <div class="widget-body">
      <#if finAccountTransList?has_content>
        <table class="table-bordered table table-striped table-hover dataTable" cellspacing="0">
          <tr class="header-row-2">
            <th>${uiLabelMap.FormFieldTitle_finAccountTransId}</th>
            <th>${uiLabelMap.FormFieldTitle_finAccountTransType}</th>
            <th>${uiLabelMap.PartyParty}</th>
            <th>${uiLabelMap.FormFieldTitle_transactionDate}</th>
            <th>${uiLabelMap.FormFieldTitle_entryDate}</th>
            <th>${uiLabelMap.CommonAmount}</th>
            <th>${uiLabelMap.FormFieldTitle_paymentId}</th>
            <th>${uiLabelMap.OrderPaymentType}</th>
            <th>${uiLabelMap.FormFieldTitle_paymentMethodTypeId}</th>
            <th>${uiLabelMap.CommonStatus}</th>
            <th>${uiLabelMap.CommonComments}</th>
            <#if finAccountTransactions?has_content>
              <th>${uiLabelMap.AccountingRemoveFromGlReconciliation}</th>
              <th>${uiLabelMap.FormFieldTitle_glTransactions}</th>
            </#if>
          </tr>
          <#assign alt_row = false/>
          <#list finAccountTransList as finAccountTrans>
            <#assign payment = "">
            <#assign payments = "">
            <#assign status = "">
            <#assign paymentType = "">
            <#assign paymentMethodType = "">
            <#assign partyName = "">
            <#if finAccountTrans.paymentId?has_content>
              <#assign payment = delegator.findOne("Payment", {"paymentId" : finAccountTrans.paymentId}, true)>
            </#if>
            <#assign finAccountTransType = delegator.findOne("FinAccountTransType", {"finAccountTransTypeId" : finAccountTrans.finAccountTransTypeId}, true)>
            <#if finAccountTrans.statusId?has_content>
              <#assign status = delegator.findOne("StatusItem", {"statusId" : finAccountTrans.statusId}, true)>
            </#if>
            <#if payment?has_content && payment.paymentTypeId?has_content>
              <#assign paymentType = delegator.findOne("PaymentType", {"paymentTypeId" : payment.paymentTypeId}, true)>
            </#if>
            <#if payment?has_content && payment.paymentMethodTypeId?has_content>
              <#assign paymentMethodType = delegator.findOne("PaymentMethodType", {"paymentMethodTypeId" : payment.paymentMethodTypeId}, true)>
            </#if>
            <#if finAccountTrans.partyId?has_content>
              <#assign partyName = (delegator.findOne("PartyNameView", {"partyId" : finAccountTrans.partyId}, true))>
            </#if>
            <tr valign="middle"<#if alt_row> class="alternate-row"</#if>>
              <td>
                  <input name="finAccountTransId_o_${finAccountTrans_index}" type="hidden" value="${finAccountTrans.finAccountTransId}"/>
                  <input name="organizationPartyId_o_${finAccountTrans_index}" type="hidden" value="${defaultOrganizationPartyId}"/>
                  <input id="finAccountTransId_${finAccountTrans_index}" name="_rowSubmit_o_${finAccountTrans_index}" type="hidden" value="Y"/>
                  ${finAccountTrans.finAccountTransId?if_exists}</td>
              <td>${finAccountTransType.description?if_exists}</td>
              <td><#if partyName?has_content>${(partyName.firstName)!} ${(partyName.lastName)!} ${(partyName.groupName)!}<a class=" open-sans" href="/partymgr/control/viewprofile?partyId=${partyName.partyId}">[${(partyName.partyId)!}]</a></#if></td>
              <td>${finAccountTrans.transactionDate?if_exists}</td>
              <td>${finAccountTrans.entryDateId?if_exists}</td>
              <td><@ofbizCurrency amount=finAccountTrans.amount isoCode=defaultOrganizationPartyCurrencyUomId/></td>
              <td>
                <#if finAccountTrans.paymentId?has_content>
                  <a class="btn btn-mini btn-info open-sans" href="<@ofbizUrl>paymentOverview?paymentId=${finAccountTrans.paymentId}</@ofbizUrl>">${finAccountTrans.paymentId}</a>
                </#if>
              </td>
              <td><#if paymentType?has_content>${paymentType.description?if_exists}</#if></td>
              <td><#if paymentMethodType?has_content>${paymentMethodType.description?if_exists}</#if></td>
              <td><#if status?has_content>${status.description?if_exists}</#if></td>
              <td>${finAccountTrans.comments?if_exists}</td>
              <#if finAccountTrans.statusId == "FINACT_TRNS_CREATED">
                <td align="center"><a href="javascript:document.reomveFinAccountTransAssociation_${finAccountTrans.finAccountTransId}.submit();" class="btn btn-mini btn-info open-sans">${uiLabelMap.CommonRemove}</a></td>
              <#else>
                <td/>
              </#if>
              <#if finAccountTrans.paymentId?has_content>
                <td align="center">
                  <a id="toggleGlTransactions_${finAccountTrans.finAccountTransId}" href="javascript:void(0)" class="btn btn-mini btn-info">${uiLabelMap.FormFieldTitle_glTransactions}</a>
                  <#include "ShowGlTransactions.ftl"/>
                  <script type="text/javascript">
                       jQuery(document).ready( function() {
                            jQuery("#displayGlTransactions_${finAccountTrans.finAccountTransId}").dialog({autoOpen: false, modal: true,
                                    buttons: {
                                    '${uiLabelMap.CommonClose}': function() {
                                        jQuery(this).dialog('close');
                                        }
                                    }
                               });
                       jQuery("#toggleGlTransactions_${finAccountTrans.finAccountTransId}").click(function(){jQuery("#displayGlTransactions_${finAccountTrans.finAccountTransId}").dialog("open")});
                       });
                  </script>
                </td>
              </#if>
            </tr>
            <#assign alt_row = !alt_row/>
          </#list>
        </table>
      </#if>
      <div class="right">
      <span >${uiLabelMap.AccountingTotalCapital} </span><@ofbizCurrency amount=transactionTotalAmount.grandTotal isoCode=defaultOrganizationPartyCurrencyUomId/>
      <#if isReconciled == false>
        <button class="btn btn-primary btn-small" type="submit" >
        <i class="icon-ok"></i>
        ${uiLabelMap.AccountingReconcile}
        </button>
      </#if>
    </div>
    </div>
  </div>
</form>
<form name="CancelBankReconciliationForm" method="post" action="<@ofbizUrl>cancelBankReconciliation</@ofbizUrl>">
  <input name="finAccountId" type="hidden" value="${finAccountId}"/>
  <input name="glReconciliationId" type="hidden" value="${glReconciliationId}"/>
</form>
<#list finAccountTransList as finAccountTrans>
  <form name="reomveFinAccountTransAssociation_${finAccountTrans.finAccountTransId}" method="post" action="<@ofbizUrl>reomveFinAccountTransAssociation</@ofbizUrl>">
    <input name="finAccountTransId" type="hidden" value="${finAccountTrans.finAccountTransId}"/>
    <input name="finAccountId" type="hidden" value="${finAccountTrans.finAccountId}"/>
    <input name="glReconciliationId" type="hidden" value="${glReconciliationId}"/>
  </form>
</#list>
