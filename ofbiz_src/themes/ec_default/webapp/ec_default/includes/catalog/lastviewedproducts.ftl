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
<table>
  <tr>
    <td colspan="2">
      <h1>
       ${uiLabelMap.ProductProductsLastViewed}
      </h1>
    </td>
  </tr>
</table>

<#if sessionAttributes.lastViewedProducts?exists && sessionAttributes.lastViewedProducts?has_content>

  <table>
    <#list sessionAttributes.lastViewedProducts as productId>
      <tr>
        <td>
          ${setRequestAttribute("optProductId", productId)}
          ${setRequestAttribute("listIndex", productId_index)}
          ${screens.render("component://ec_default/widget/CatalogScreens.xml#productsummary")}
        </td>
      </tr>
    </#list>
  </table>

<#else>
<table>
  <tr>
    <td>
      <div class='tabletext'>${uiLabelMap.ProductNotViewedAnyProducts}.</div>
    </td>
  </tr>
</table>
</#if>