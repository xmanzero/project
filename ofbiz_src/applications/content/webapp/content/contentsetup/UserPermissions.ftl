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
<script type="text/javascript" language="javascript1.2">
function call_fieldlookup3(view_name) {
    var obj_lookupwindow = window.open(view_name + "?webSitePublishPoint=" + webSitePublishPoint,'FieldLookup', 'width=700,height=550,scrollbars=yes,status=no,top='+my+',left='+mx+',dependent=yes,alwaysRaised=yes');
    obj_lookupwindow.opener = window;
    obj_lookupwindow.focus();
}
    function submitRows(rowCount) {
        var rowCountElement = document.createElement("input");
        rowCountElement.setAttribute("name", "_rowCount");
        rowCountElement.setAttribute("type", "hidden");
        rowCountElement.setAttribute("value", rowCount);
        document.forms.siteRoleForm.appendChild(rowCountElement);

        rowCountElement = document.createElement("input");
        rowCountElement.setAttribute("name", "partyId");
        rowCountElement.setAttribute("type", "hidden");
        rowCountElement.setAttribute("value", "${partyId?if_exists}");
        document.forms.siteRoleForm.appendChild(rowCountElement);

        rowCountElement = document.createElement("input");
        rowCountElement.setAttribute("name", "userLoginId");
        rowCountElement.setAttribute("type", "hidden");
        rowCountElement.setAttribute("value", "${userLoginId?if_exists}");
        document.forms.siteRoleForm.appendChild(rowCountElement);

        rowCountElement = document.createElement("input");
        rowCountElement.setAttribute("name", "webSitePublishPoint");
        rowCountElement.setAttribute("type", "hidden");
        rowCountElement.setAttribute("value", "${webSitePublishPoint?if_exists}");
        document.forms.siteRoleForm.appendChild(rowCountElement);

        document.forms.siteRoleForm.submit();
    }

</script>

<#-- ============================================================= -->
<div class="widget-box transparent no-bottom-border">
<div class="widget-header"></div>
<div class="widget-body">
<table border="0" width='100%' cellspacing='0' cellpadding='0'>
  <tr style="border-bottom: 1px #C0C0C0 solid;">
    <td width='100%'>
      <form name="userform" method="post" action="<@ofbizUrl>UserPermissions</@ofbizUrl>" >
      <table width='100%' border='0' cellspacing='0' cellpadding='0' class='appTitle'>
        <tr>
          <td valign="middle">
          <div class="permission" style="margin-left: auto; margin-right: auto; width: 320px;">
             <input type="text" style="margin-top: 10px;" name="webSitePublishPoint" size="20" value="${webSitePublishPoint?if_exists}" />
             <button type="submit" class="btn btn-small btn-info margin_top_10">
             <i class="icon-refresh"></i>
             ${uiLabelMap.CommonRefresh}
             </button>
             <input type="hidden" name="partyId" value="${partyId?if_exists}"/>
             <input type="hidden" name="userLoginId" value="${userLoginId?if_exists}"/>
          </div>
          </td>
        </tr>
      </table>
      </form>
    </td>
  </tr>
  <tr>
    <td width='100%'>
      <form name="siteRoleForm" method="post" action="<@ofbizUrl>updateSiteRoles</@ofbizUrl>">
      <table width='100%' border='0' cellspacing='0' cellpadding='4' class='boxoutside'>
        <tr>
            <td class="">${uiLabelMap.ContentWebSite}</td>
            <#list blogRoleIdList as roleTypeId>
              <td class="">${roleTypeId}</td>
            </#list>
        </tr>

      <#assign rowCount=0/>
        <#list siteList as map>
          <tr>
            <td class="">${map.partyId?if_exists}</td>
            <#list blogRoleIdList as roleTypeId>
              <#assign cappedSiteRole= Static["org.ofbiz.entity.model.ModelUtil"].dbNameToVarName(roleTypeId) />
              <td align="center">
              <input type="checkbox" name="${cappedSiteRole}_o_${rowCount}" value="Y" <#if map[cappedSiteRole]?has_content && map[cappedSiteRole] == "Y">checked="checked"</#if>/>
              </td>
            </#list>
          </tr>
          <input type="hidden" name="contentId_o_${rowCount}" value="${webSitePublishPoint}"/>
          <input type="hidden" name="partyId_o_${rowCount}" value="${map.partyId}"/>
          <#assign rowCount=rowCount + 1/>
        </#list>
          <tr>
            <td>
              <div class="smallSubmit" ><a class="btn btn-small btn-info icon-edit open-sans" href="javascript:submitRows('${rowCount?if_exists}')">&nbsp${uiLabelMap.CommonUpdate}</a></div>
            </td>
          </tr>
      </table>
      </form>
    </td>
  </tr>
</table>
</div>
</div>