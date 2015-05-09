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

<div id="findOrdersList" style="border:0px" class="widget-box no-border-bottom transparent">

  <div class="widget-header">
      <h3>${uiLabelMap.OrderOrderReceivedOn} ${Static["org.ofbiz.base.util.UtilDateTime"].toDateString(filterDate)}</h3>
      <#assign listSize = state.getSize()>
      <#if (listSize > 10)>
        <a class="btn btn-mini btn-info" href="/ordermgr/control/orderlist?viewIndex=${state.getViewIndex() + 1}&amp;viewSize=${state.getViewSize()}&amp;filterDate=${filterDate?if_exists}">${uiLabelMap.CommonMore}</a></li>
      </#if>
      <#if orderHeaderList?has_content> 
        1-${orderHeaderList.size()} ${uiLabelMap.CommonOf} ${state.getSize()}
      </#if>
    <br class="clear"/>
  </div>
 
  <div class="widget-body">
    <#if orderHeaderList?has_content>
      <table class="table table-striped table-bordered table-hover dataTable" cellspacing='0'>
        <tr class="header-row">
          <td width="10%">${uiLabelMap.OrderOrder} ${uiLabelMap.CommonNbr}</td>
          <td width="15%">${uiLabelMap.OrderOrderBillToParty}</td>
          <td width="25%">${uiLabelMap.OrderProductStore}</td>
          <td width="10%">${uiLabelMap.CommonAmount}</td>
          <td width="20%">${uiLabelMap.OrderTrackingCode}</td>
          <td width="20%">${uiLabelMap.CommonStatus}</td>
        </tr>
        <#assign alt_row = false>
        <#list orderHeaderList as orderHeader>
          <#assign status = orderHeader.getRelatedOne("StatusItem", true)>
          <#assign orh = Static["org.ofbiz.order.order.OrderReadHelper"].getHelper(orderHeader)>
          <#assign billToParty = orh.getBillToParty()?if_exists>
          <#if billToParty?has_content>
            <#assign billToPartyNameResult = dispatcher.runSync("getPartyNameForDate", Static["org.ofbiz.base.util.UtilMisc"].toMap("partyId", billToParty.partyId, "compareDate", orderHeader.orderDate, "userLogin", userLogin))/>
            <#assign billTo = billToPartyNameResult.fullName?default("[${uiLabelMap.OrderPartyNameNotFound}]")/>
          </#if>
          <#assign productStore = orderHeader.getRelatedOne("ProductStore", true)?if_exists />
          <tr<#if alt_row> class="alternate-row"</#if>>
            <#assign alt_row = !alt_row>
            <td><a href="/ordermgr/control/orderview?orderId=${orderHeader.orderId}" class="btn btn-mini btn-info">${orderHeader.orderId}</a></td>
            <td>${billTo?if_exists}</td>
            <td><#if productStore?has_content>${productStore.storeName?default(productStore.productStoreId)}</#if></td>
            <td><@ofbizCurrency amount=orderHeader.grandTotal isoCode=orderHeader.currencyUom/></td>
            <td>
              <#assign trackingCodes = orderHeader.getRelated("TrackingCodeOrder", null, null, false)>
              <#list trackingCodes as trackingCode>
                <#if trackingCode?has_content>
                  <a href="/marketing/control/FindTrackingCodeOrders?trackingCodeId=${trackingCode.trackingCodeId}&amp;externalLoginKey=${requestAttributes.externalLoginKey?if_exists}">${trackingCode.trackingCodeId}</a><br />
                </#if>
              </#list>
            </td>
            <td>${orderHeader.getRelatedOne("StatusItem", true).get("description",locale)}</td>
          </tr>
        </#list>
      </table>
    <#else>
      <p class="alert alert-info">${uiLabelMap.OrderNoOrderFound}</p>
    </#if>
  </div>
</div>
