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
<div style="float:right ;padding-top:10px">
	<#if showAll = "false">
	    <a style="margin-top:-30px" href="<@ofbizUrl>requestitemnotes?custRequestId=${custRequestId}&amp;custRequestItemSeqId=${custRequestItemSeqId}&amp;showAll=true</@ofbizUrl>" class="open-sans icon-eye-open">${uiLabelMap.OrderShowAllNotes}</a>
	<#else>
	    <a style="margin-top:-30px" href="<@ofbizUrl>requestitemnotes?custRequestId=${custRequestId}&amp;custRequestItemSeqId=${custRequestItemSeqId}&amp;showAll=false</@ofbizUrl>" class="open-sans icon-eye-open">${uiLabelMap.OrderShowThisItemsNotes}</a>
	</#if>
</div>