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

<div id="address-match-map" class="widget-box">
  <div class="widget-box transparent no-border-bottom">
  <div class="widget-header">
      <h3>${uiLabelMap.PageTitleAddressMatches}</h3>
          <div class="widget-toolbar">
      <a class="open-sans icon-plus-sign" href="<@ofbizUrl>addressMatchMap</@ofbizUrl>">${uiLabelMap.PageTitleAddressMatchMap}</a>
      </div>
    </ul>
    <br class="clear"/>
  </div>
  </div>
  <div class="form-padding">
    <table class="basic-table" cellspacing="0" style="margin-top:30px">
      <form name="matchform" method="post" action="<@ofbizUrl>findAddressMatch?match=true</@ofbizUrl>">
        <tr>
          <td class="oblius-label">${uiLabelMap.PartyLastName}</td>
          <td><input type="text" name="lastName" class="required" value="${parameters.lastName?if_exists}"/><span class="tooltip">${uiLabelMap.CommonRequired}</span></td>
        </tr>
        <tr>
          <td class="oblius-label">${uiLabelMap.PartyFirstName}</td>
          <td><input type="text" name="firstName" class="required" value="${parameters.firstName?if_exists}"/><span class="tooltip">${uiLabelMap.CommonRequired}</span></td>
        </tr>
        <tr>
          <td class="oblius-label">${uiLabelMap.CommonAddress1}</td>
          <td><input type="text" name="address1" class="required" value="${parameters.address1?if_exists}"/><span class="tooltip">${uiLabelMap.CommonRequired}</span></td>
        </tr>
        <tr>
          <td class="oblius-label">${uiLabelMap.CommonAddress2}</td>
          <td><input type="text" name="address2" value="${parameters.address2?if_exists}"/></td>
        </tr>
        <tr>
          <td class="oblius-label">${uiLabelMap.CommonCity}</td>
          <td><input type="text" name="city" class="required" value="${parameters.city?if_exists}"/><span class="tooltip">${uiLabelMap.CommonRequired}</span></td>
        </tr>
        <tr>
          <td class="oblius-label">${uiLabelMap.CommonStateProvince}</td>
          <td>
            <select name="stateProvinceGeoId">
              <#if currentStateGeo?has_content>
                <option value="${currentStateGeo.geoId}">${currentStateGeo.geoName?default(currentStateGeo.geoId)}</option>
                <option value="${currentStateGeo.geoId}">---</option>
              </#if>
              <option value="ANY">${uiLabelMap.CommonAnyStateProvince}</option>
              ${screens.render("component://common/widget/CommonScreens.xml#states")}
            </select>
          </td>
        </tr>
        <tr>
          <td class="oblius-label">${uiLabelMap.PartyZipCode}</td>
          <td><input type="text" name="postalCode" class="required" value="${parameters.postalCode?if_exists}"/><span class="tooltip">${uiLabelMap.CommonRequired}</span></td>
        </tr>
        <tr>
            <td></td>
            <td><button type="submit" class="btn btn-small btn-primary">
            <i class="icon-search"></i>
            ${uiLabelMap.PageTitleFindMatches}
            </button>
            </td>
        </tr>
      </form>
      <#if match?has_content>
        <tr><td colspan="5">&nbsp;</td></tr>
        <tr>
          <td colspan="2">
            <#if matches?has_content>
              <table cellspacing="0" class="basic-table">
                <tr>
                  <td class="oblius-label" colspan="7">${uiLabelMap.PartyAddressMatching} ${lastName} / ${firstName} @ ${addressString}</td>
                </tr>
                <tr class="header-row">
                  <td>${uiLabelMap.PartyLastName}</td>
                  <td>${uiLabelMap.PartyFirstName}</td>
                  <td>${uiLabelMap.CommonAddress1}</td>
                  <td>${uiLabelMap.CommonAddress2}</td>
                  <td>${uiLabelMap.CommonCity}</td>
                  <td>${uiLabelMap.PartyZipCode}</td>
                  <td>${uiLabelMap.PartyPartyId}</td>
                </tr>
                <#list matches as match>
                  <#assign person = match.getRelatedOne("Party", false).getRelatedOne("Person", false)?if_exists>
                  <#assign group = match.getRelatedOne("Party", false).getRelatedOne("PartyGroup", false)?if_exists>
                  <tr>
                    <#if person?has_content>
                      <td>${person.lastName}</td>
                      <td>${person.firstName}</td>
                    <#elseif group?has_content>
                      <td colspan="2">${group.groupName}</td>
                    <#else>
                      <td colspan="2">${uiLabelMap.PartyUnknown}</td>
                    </#if>
                    <td>${Static["org.ofbiz.party.party.PartyWorker"].makeMatchingString(delegator, match.address1)}</td>
                    <td>${Static["org.ofbiz.party.party.PartyWorker"].makeMatchingString(delegator, match.address2?default("N/A"))}</td>
                    <td>${match.city}</td>
                    <td>${match.postalCode}</td>
                    <td class="button-col"><a href="<@ofbizUrl>viewprofile?partyId=${match.partyId}</@ofbizUrl>" class="btn btn-small btn-info">${match.partyId}</a></td>
                  </tr>
                </#list>
              </table>
            <#else>
              ${uiLabelMap.PartyNoMatch}
            </#if>
          </td>
        </tr>
      </#if>
    </table>
  </div>
</div>