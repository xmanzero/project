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


    <#if parameters.hideFields?default("N") != "Y">
        <script language="JavaScript" type="text/javascript">
    <!--//
      document.lookupparty.partyId.focus();
    //-->
        </script>
    </#if>
    <#if partyList?exists>
    <div>
            <span class="widget-toolbar">
                <#if (partyListSize > 0)>
                    <#if (partyListSize > highIndex)>
                        <li><a class="nav-next" href="<@ofbizUrl>findEmployees?VIEW_SIZE=${viewSize}&amp;VIEW_INDEX=${viewIndex-1}&amp;hideFields=${parameters.hideFields?default("N")}${paramList}</@ofbizUrl>">${uiLabelMap.CommonNext}</a></li>
                    <#else>
                        <li class="disabled">${uiLabelMap.CommonNext}</li>
                    </#if>
                    <li>${lowIndex} - ${highIndex} ${uiLabelMap.CommonOf} ${partyListSize}</li>
                    <#if (viewIndex > 0)>
                        <li><a class="nav-previous" href="<@ofbizUrl>findEmployees?VIEW_SIZE=${viewSize}&amp;VIEW_INDEX=${viewIndex-1}&amp;hideFields=${parameters.hideFields?default("N")}${paramList}</@ofbizUrl>">${uiLabelMap.CommonPrevious}</a></li>
                    <#else>
                        <li class="disabled">${uiLabelMap.CommonPrevious}</li>
                    </#if>
                </#if>
            </span>
        </div>
        <div class="widget-body">
    <#if partyList?has_content>
        <table class="table table-hover table-striped table-bordered dataTable" cellspacing="0">
            <tr class="header-row">
                <td class="header-table">${uiLabelMap.PartyPartyId}</td>
                <td class="header-table">${uiLabelMap.PartyUserLogin}</td>
                <td class="header-table">${uiLabelMap.PartyName}</td>
                <#if extInfo?default("") == "P" >
                    <td class="header-table">${uiLabelMap.PartyCity}</td>
                </#if>
                <#if extInfo?default("") == "P">
                    <td class="header-table">${uiLabelMap.PartyPostalCode}</td>
                </#if>
                <#if extInfo?default("") == "T">
                    <td class="header-table">${uiLabelMap.PartyAreaCode}</td>
                </#if>
                <td class="header-table">${uiLabelMap.PartyType}</td>
                <td>&nbsp;</td>
            </tr>
            <#assign alt_row = false>
            <#list partyList as partyRow>
            <#assign partyType = partyRow.getRelatedOne("PartyType", false)?if_exists>
            <tr valign="middle"<#if alt_row> class="alternate-row"</#if>>
                <td><a class="" href="<@ofbizUrl>EmployeeProfile?partyId=${partyRow.partyId}</@ofbizUrl>">${partyRow.partyId}</a></td>
                <td><#if partyRow.containsKey("userLoginId")>
                        ${partyRow.userLoginId?default("N/A")}
                    <#else>
                    <#assign userLogins = partyRow.getRelated("UserLogin", null, null, false)>
                    <#if (userLogins.size() > 0)>
                        <#if (userLogins.size() > 1)>
                            (${uiLabelMap.CommonMany})
                        <#else>
                        <#assign userLogin = userLogins.get(0)>
                            ${userLogin.userLoginId}
                        </#if>
                        <#else>
                            (${uiLabelMap.CommonNone})
                        </#if>
                    </#if>
                </td>
                <td><#if partyRow.getModelEntity().isField("lastName") && lastName?has_content>
                        ${partyRow.lastName}<#if partyRow.firstName?has_content>, ${partyRow.firstName}</#if>
                    <#elseif partyRow.getModelEntity().isField("groupName") && partyRow.groupName?has_content>
                        ${partyRow.groupName}
                    <#else>
                    <#assign partyName = Static["org.ofbiz.party.party.PartyHelper"].getPartyName(partyRow, true)>
                    <#if partyName?has_content>
                        ${partyName}
                    <#else>
                        (${uiLabelMap.PartyNoNameFound})
                    </#if>
                    </#if>
                </td>
                <#if extInfo?default("") == "T">
                    <td>${partyRow.areaCode?if_exists}</td>
                </#if>
                <#if extInfo?default("") == "P" >
                    <td>${partyRow.city?if_exists}, ${partyRow.stateProvinceGeoId?if_exists}</td>
                </#if>
                <#if extInfo?default("") == "P">
                    <td>${partyRow.postalCode?if_exists}</td>
                </#if>
                <td><#if partyType.description?exists>${partyType.get("description", locale)}<#else>???</#if></td>
                <td class="button-col align-float">
                    <a class="btn btn-info btn-mini icon-chevron-circle-right open-sans" href="<@ofbizUrl>EmployeeProfile?partyId=${partyRow.partyId}</@ofbizUrl>">&nbsp${uiLabelMap.CommonDetails}</a>
                </td>
            </tr>
          <#-- toggle the row color -->
            <#assign alt_row = !alt_row>
            </#list>
        </table>
    <#else>
        <div>
            <p class="alert alert-info">${uiLabelMap.PartyNoPartiesFound}</p>
        </div>
    </#if>
    </div>
    <#if lookupErrorMessage?exists>
        <div><p class="alert alert-info">${lookupErrorMessage}</p></div>
    </#if>
    </div>
    </#if>
<!-- end findEmployees.ftl -->
