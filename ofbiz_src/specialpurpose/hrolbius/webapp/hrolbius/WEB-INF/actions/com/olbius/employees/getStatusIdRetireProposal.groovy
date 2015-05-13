import javolution.util.FastList;

import org.ofbiz.base.util.UtilMisc;

import com.olbius.util.PartyUtil;

if(emplTerminationProposal){
	statusId = emplTerminationProposal.statusId;
	String headOfHR = PartyUtil.getHrmAdmin(delegator);
	String ceoId = PartyUtil.getCEO(delegator);
	String mgrOfEmpl = PartyUtil.getManagerOfEmpl(delegator, emplTerminationProposal.partyId);
	context.statusEdit = false;
	if(statusId.equalsIgnoreCase("TER_PPSL_CREATED")){
		context.statusIdList = delegator.findByAnd("StatusItem", UtilMisc.toMap("statusTypeId", "RETIRE_MGR_APPL"), null, false);
		if(userLogin.partyId.equalsIgnoreCase(mgrOfEmpl)){
			context.statusEdit = true;
		}
	}else if(statusId.equalsIgnoreCase("RETIRE_MGR_A")){
		context.statusIdList = delegator.findByAnd("StatusItem", UtilMisc.toMap("statusTypeId", "RETIRE_HOHR_APPL"), null, false);
		if(userLogin.partyId.equalsIgnoreCase(headOfHR)){
			context.statusEdit = true;
		}
	}else if(statusId.equalsIgnoreCase("RETIRE_HOHR_A")){
		context.statusIdList = delegator.findByAnd("StatusItem", UtilMisc.toMap("statusTypeId", "RETIRE_CEO_APPL"), null, false);
		if(userLogin.partyId.equalsIgnoreCase(ceoId)){
			context.statusEdit = true;
		}
	}else{
		context.statusIdList = FastList.newInstance();
	}
	//println ("statusEdit: " + context.statusEdit);
	context.currStatusId = statusId;
}