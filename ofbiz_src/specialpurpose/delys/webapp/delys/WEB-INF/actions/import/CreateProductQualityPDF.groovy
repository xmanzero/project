import org.ofbiz.entity.condition.EntityCondition;
import org.ofbiz.base.util.UtilMisc;

def productId = parameters.Product;
def product = delegator.findOne("Product",	UtilMisc.toMap("productId", productId), false);
def productName = product.internalName;
def catalog = product.primaryProductCategoryId;
context.catalog = catalog;
context.productName = productName;
context.xdspcdkn  = productName;
context.NumberQP = parameters.NumberQP;
context.DVNK = parameters.DVNK;
context.PTDGSPH = parameters.PTDGSPH;
context.CamKet = parameters.CamKet;
context.AddressDVNK = parameters.AddressDVNK;
context.txtPhone = parameters.txtPhone;
context.txtFax = parameters.txtFax;
context.txtXuatXu = parameters.txtXuatXu;
context.txtNhaSanXuat = parameters.txtNhaSanXuat;
context.ManufacturerAddress = parameters.ManufacturerAddress;
context.txtNhaXuatKhau = parameters.txtNhaXuatKhau;
context.QCVN = parameters.QCVN;
context.txtStatusOutside = parameters.txtStatusOutside;
context.txtColor = parameters.txtColor;
context.txtFlavor = parameters.txtFlavor;
context.txtImpurities = parameters.txtImpurities	;
context.txtCaloriesUnit = parameters.txtCaloriesUnit;
context.txtCalories = parameters.txtCalories;
context.txtProteinUnit = parameters.txtProteinUnit;
context.txtProtein = parameters.txtProtein;
context.txtCarbonHydratUnit = parameters.txtCarbonHydratUnit;
context.txtCarbonHydrat = parameters.txtCarbonHydrat;
context.txtFatUnit = parameters.txtFatUnit;
context.txtFat = parameters.txtFat;
context.txtCanxiUnit = parameters.txtCanxiUnit;
context.txtCanxi = parameters.txtCanxi;
context.txtpHUnit = parameters.txtpHUnit;
context.txtpH = parameters.txtpH;
context.txtLmonocytogenesUnit = parameters.txtLmonocytogenesUnit;
context.txtLmonocytogenes = parameters.txtLmonocytogenes;
context.txtSalmonellaUnit = parameters.txtSalmonellaUnit;
context.txtSalmonella = parameters.txtSalmonella;
context.txtStaphylococciUnit = parameters.txtStaphylococciUnit;
context.txtStaphylococci = parameters.txtStaphylococci;
context.txtStaphylococcalUnit = parameters.txtStaphylococcalUnit;
context.txtStaphylococcal = parameters.txtStaphylococcal;
context.NoiViet = parameters.NoiViet;
context.ctDelys = parameters.ctDelys;

context.txtLeadUnit = parameters.txtLeadUnit;
context.txtLead = parameters.txtLead;
context.txtAntimoxyUnit = parameters.txtAntimoxyUnit;
context.txtAntimoxy = parameters.txtAntimoxy;
context.txtArsenUnit = parameters.txtArsenUnit;
context.txtArsen = parameters.txtArsen;
context.txtCadimiUnit = parameters.txtCadimiUnit;
context.txtCadimi = parameters.txtCadimi;
context.txtMercuryUnit = parameters.txtMercuryUnit;
context.txtMercury = parameters.txtMercury;
context.txtAflatoxinUnit = parameters.txtAflatoxinUnit;
context.txtAflatoxin = parameters.txtAflatoxin;
context.txtMelamineUnit = parameters.txtMelamineUnit;
context.txtMelamine = parameters.txtMelamine;
context.txtUnwantedNorms = parameters.txtUnwantedNorms;
context.Components = parameters.Components;
context.shelfLife = parameters.shelfLife;
context.Instruction = parameters.Instruction;
context.Maintain = parameters.Maintain;
context.PackagingMaterialAndPacking = parameters.PackagingMaterialAndPacking;
context.Packing = parameters.Packing;
context.NetWeight = parameters.NetWeight;
context.Manufacturer = parameters.Manufacturer;
context.AddressManufacturer = parameters.AddressManufacturer;
context.Importer = parameters.Importer;
context.AddressImporter = parameters.AddressImporter;
context.ProductName = parameters.ProductName;
context.Components2 = parameters.Components2;
context.NutritiousInfoIn100g = parameters.NutritiousInfoIn100g;
context.dateOfManufacture = parameters.dateOfManufacture;
context.shelfLife2 = parameters.shelfLife2;
context.txtMaintain = parameters.txtMaintain;
context.txtInstruction = parameters.txtInstruction;
context.txtNetWeight = parameters.txtNetWeight;
context.txtorigin = parameters.txtorigin;
context.Exporter = parameters.Exporter;
context.Importer2 = parameters.Importer2;
context.organizationName = parameters.organizationName;
context.organizationAddress = parameters.organizationAddress;
context.TechnologyApplying = parameters.TechnologyApplying;
context.SurveyTest = parameters.SurveyTest;
context.RePulish = parameters.RePulish;
context.thtpt = parameters.thtpt;
context.dgsphcsp = parameters.dgsphcsp;
context.xlkqdgsph = parameters.xlkqdgsph;
context.klvsph = parameters.klvsph;

context.txtExpireDay = parameters.txtExpireDay;
context.dateOfManufacture = parameters.dateOfManufacture;
context.ExpireDate = parameters.ExpireDate;