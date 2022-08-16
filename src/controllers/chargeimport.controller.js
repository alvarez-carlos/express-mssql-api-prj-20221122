import { getDPCConnection, ciQueries } from "../database";
import sql from "mssql";

export const getChargeImport = async (req, res) => {
  try {
    const pool = await getDPCConnection();
    const result = await pool.request().query(ciQueries.getAllChargeImport);
    // console.log(result)
    // console.log({ ...result.recordset, PatientDOB: PatientDOB.toLocaleString() })
    // res.json({ ...result.recordset, PatientDOB: PatientDOB.toLocaleString() });
    res.json(result.recordset);
  } catch (error) {
    res.status(500); // 500 Error interno del servidor
    res.send(error.message);
  }
};

export const postChargeImport = async (req, res) => {
  const { ...ci } = req.body;
  // console.log(ci)

  if (ci.SrcFileImportDate == null) ci.SrcFileImportDate = "1999-09-09";
  if (ci.ChargeImportDate == null) ci.ChargeImportDate = "1999-09-09";
  if (ci.SrcItemImportDateWTime == null)
    ci.SrcItemImportDateWTime = "1999-09-09";
  if (ci.ProcessStage == null) ci.ProcessStage = "Imported-not in Production";
  if (ci.SourceName == null) ci.SourceName = "SourceNameFromAPI_testing";
  if (ci.SourceImportID == null) ci.SourceImportID = 1;
  if (ci.ChargeImportUserID == null) ci.ChargeImportUserID = "API_UserID";
  if (ci.LastUserID == null) ci.LastUserID = "API_UserID";
  if (ci.PatientFirstName == null) ci.PatientFirstName = "Alberto";

  // just for testing of the ui
  if (ci.BillCoID == null) ci.BillCoID = "MPP";
  if (ci.ClientID == null) ci.ClientID = "PGEA";
  if (ci.AccessionNo == null) ci.AccessionNo = "16873546";

  // if (ci.BillCoID == null || ci.ClientID == null || ci.AccessionNo == null) {
  //   return res
  //     .status(400)
  //     .json({ message: "Bad Request. Please Fill All Fields." });
  // }

  // console.log(ci)

  try {
    const pool = await getDPCConnection();
    const result = await pool
      .request()
      .input("BillCoID", sql.VarChar, ci.BillCoID)
      .input("ClientID", sql.VarChar, ci.ClientID)
      .input("SrcFileImportDate", sql.Date, ci.SrcFileImportDate)
      .input("SrcItemImportDateWTime", sql.DateTime, ci.SrcItemImportDateWTime)
      .input("SourceName", sql.VarChar, ci.SourceName)
      .input("SourceImportID", sql.Int, ci.SourceImportID)
      .input("ChargeImportDate", sql.DateTime, ci.ChargeImportDate)
      .input("ChargeImportUserID", sql.VarChar, ci.ChargeImportUserID)
      .input("LastUserID", sql.VarChar, ci.LastUserID)
      .input("LastUserUpdate", sql.DateTime, ci.LastUserUpdate)
      .input("PatientFirstName", sql.VarChar, ci.PatientFirstName)
      .input("PatientMiddleName", sql.VarChar, ci.PatientMiddleName)
      .input("PatientLastName", sql.VarChar, ci.PatientLastName)
      .input("PatientStreet", sql.VarChar, ci.PatientStreet)
      .input("PatientStreet2", sql.VarChar, ci.PatientStreet2)
      .input("PatientCity", sql.VarChar, ci.PatientCity)
      .input("PatientState", sql.VarChar, ci.PatientState)
      .input("PatientZip", sql.VarChar, ci.PatientZip)
      .input("PatientDOB", sql.Date, ci.PatientDOB)
      .input("PatientSex", sql.VarChar, ci.PatientSex)
      .input("PatientPhoneNumber", sql.VarChar, ci.PatientPhoneNumber)
      .input("PatientSSN", sql.VarChar, ci.PatientSSN)
      .input("PatientIDType", sql.VarChar, ci.PatientIDType)
      .input("PatientDriversLicense", sql.VarChar, ci.PatientDriversLicense)
      .input("PatientConsent", sql.VarChar, ci.PatientConsent)
      .input("PatientTRF_Form", sql.VarChar, ci.PatientTRF_Form)
      .input("SubscriberFirstName", sql.VarChar, ci.SubscriberFirstName)
      .input("SubscriberLastName", sql.VarChar, ci.SubscriberLastName)
      .input("SubscriberDOB", sql.Date, ci.SubscriberDOB)
      .input("PrimaryInsName", sql.VarChar, ci.PrimaryInsName)
      .input("PrimaryInsPolicyNo", sql.VarChar, ci.PrimaryInsPolicyNo)
      .input("PrimaryInsGroupNo", sql.VarChar, ci.PrimaryInsGroupNo)
      .input("PrimaryInsRelation", sql.VarChar, ci.PrimaryInsRelation)
      .input("InsCardFront", sql.VarChar, ci.InsCardFront)
      .input("InsCardBack", sql.VarChar, ci.InsCardBack)
      .input("SecondaryInsName", sql.VarChar, ci.SecondaryInsName)
      .input("SecondaryInsPolicyNo", sql.VarChar, ci.SecondaryInsPolicyNo)
      .input("SecondaryInsGroupNo", sql.VarChar, ci.SecondaryInsGroupNo)
      .input("OrderingProviderNPI", sql.VarChar, ci.OrderingProviderNPI)
      .input("OrderingProviderName", sql.VarChar, ci.OrderingProviderName)
      .input("OrderingProviderStreet", sql.VarChar, ci.OrderingProviderStreet)
      .input("OrderingProviderStreet2", sql.VarChar, ci.OrderingProviderStreet2)
      .input("OrderingProviderCity", sql.VarChar, ci.OrderingProviderCity)
      .input("OrderingProviderState", sql.VarChar, ci.OrderingProviderState)
      .input("OrderingProviderZip", sql.VarChar, ci.OrderingProviderZip)
      .input("OrderingProviderPhone", sql.VarChar, ci.OrderingProviderPhone)
      .input("OrderingProviderEmail", sql.VarChar, ci.OrderingProviderEmail)
      .input("FacilityID", sql.VarChar, ci.FacilityID)
      .input("FacilityName", sql.VarChar, ci.FacilityName)
      .input("FacilityStreet", sql.VarChar, ci.FacilityStreet)
      .input("FacilityCity", sql.VarChar, ci.FacilityCity)
      .input("FacilityState", sql.VarChar, ci.FacilityState)
      .input("FacilityZip", sql.VarChar, ci.FacilityZip)
      .input("FacilityCLIA", sql.VarChar, ci.FacilityCLIA)
      .input("AccessionNo", sql.VarChar, ci.AccessionNo)
      .input("DateOfService", sql.DateTime, ci.DateOfService)
      .input("DateOfResults", sql.DateTime, ci.DateOfResults)
      .input("CPTCode1", sql.VarChar, ci.CPTCode1)
      .input("CPTCode2", sql.VarChar, ci.CPTCode2)
      .input("CPTCode3", sql.VarChar, ci.CPTCode3)
      .input("CPTCode4", sql.VarChar, ci.CPTCode4)
      .input("CPTCode5", sql.VarChar, ci.CPTCode5)
      .input("CPTCode6", sql.VarChar, ci.CPTCode6)
      .input("ICD10Code1", sql.VarChar, ci.ICD10Code1)
      .input("ICD10Code2", sql.VarChar, ci.ICD10Code2)
      .input("ICD10Code3", sql.VarChar, ci.ICD10Code3)
      .input("ICD10Code4", sql.VarChar, ci.ICD10Code4)
      .input("ICD10Code5", sql.VarChar, ci.ICD10Code5)
      .input("ICD10Code6", sql.VarChar, ci.ICD10Code6)
      .input("ICD10Code7", sql.VarChar, ci.ICD10Code7)
      .input("ICD10Code8", sql.VarChar, ci.ICD10Code8)
      .input("ICD10Code9", sql.VarChar, ci.ICD10Code9)
      .input("ICD10Code10", sql.VarChar, ci.ICD10Code10)
      .input("ICD10Code11", sql.VarChar, ci.ICD10Code11)
      .input("ICD10Code12", sql.VarChar, ci.ICD10Code12)
      .input("ServiceType", sql.VarChar, ci.ServiceType)
      .input("ClientNotes", sql.VarChar, ci.ClientNotes)
      .input("SubClientName", sql.VarChar, ci.SubClientName)
      .input("PartnerGroupName", sql.VarChar, ci.PartnerGroupName)
      .input("Barcode", sql.VarChar, ci.Barcode)
      .input("WSLOrderID", sql.VarChar, ci.WSLOrderID)
      .input("InsMissing", sql.VarChar, ci.InsMissing)
      .input("DateToProduction", sql.DateTime, ci.DateToProduction)
      .input("ProcessStage", sql.VarChar, ci.ProcessStage)
      .input("NeedsReview", sql.Bit, ci.NeedsReview)
      .input("IssueID", sql.Int, ci.IssueID)
      .input("InNGO", sql.Int, ci.InNGO)
      .input("NGO_IsBalance", sql.Bit, ci.NGO_IsBalance)
      .query(ciQueries.postNewChargeImport);
    res.json({ ...ci });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getTotalChargeImport = async (req, res) => {
  try {
    const pool = await getDPCConnection();
    const result = await pool.request().query(ciQueries.getTotalChargeImport);
    res.json(result.recordset[0][""]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getChargeImportById = async (req, res) => {
  const { id } = req.params;
  try {
    const pool = await getDPCConnection();
    const result = await pool
      .request()
      .input("id", sql.Int, id)
      .query(ciQueries.getChargeImportById);
    res.json(result.recordset[0]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const deleteChargeImportById = async (req, res) => {
  const { id } = req.params;
  try {
    const pool = await getDPCConnection();
    const result = await pool
      .request()
      .input("id", sql.Int, id)
      .query(ciQueries.deleteChargeImportById);
    res.sendStatus(204); //Eliminado correctamente o request exitosa
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const putChargeImportById = async (req, res) => {
  // console.log(req.body)
  const { ...ci } = req.body;
  const { id } = req.params;
  console.log('API', { ...ci }, id);

  if (ci.SrcFileImportDate == null) ci.SrcFileImportDate = "1999-09-09";
  if (ci.ChargeImportDate == null) ci.ChargeImportDate = "1999-09-09";
  if (ci.SrcItemImportDateWTime == null)
    ci.SrcItemImportDateWTime = "1999-09-09";
  if (ci.ProcessStage == null) ci.ProcessStage = "Imported-not in Production";
  if (ci.SourceName == null) ci.SourceName = "SourceNameFromAPI_testing";
  if (ci.SourceImportID == null) ci.SourceImportID = 1;
  if (ci.ChargeImportUserID == null) ci.ChargeImportUserID = "API_UserID";
  if (ci.LastUserID == null) ci.LastUserID = "API_UserID";

  // if (ci.PatientFirstName == null) ci.PatientFirstName = "Alberto";

  // just for testing of the ui
  // if (ci.BillCoID == null) ci.BillCoID = "MPP";
  // if (ci.ClientID == null) ci.ClientID = "PGEA";
  // if (ci.AccessionNo == null) ci.AccessionNo = "16873546";

  if (ci.BillCoID == null || ci.ClientID == null || ci.AccessionNo == null) {
    return res
      .status(400)
      .json({ message: "Bad Request. Please Fill All Fields." });
  }

  // console.log(ci)

  try {
    const pool = await getDPCConnection();
    const result = await pool
      .request()
      .input("BillCoID", sql.VarChar, ci.BillCoID)
      .input("ClientID", sql.VarChar, ci.ClientID)
      .input("SrcFileImportDate", sql.Date, ci.SrcFileImportDate)
      .input("SrcItemImportDateWTime", sql.DateTime, ci.SrcItemImportDateWTime)
      .input("SourceName", sql.VarChar, ci.SourceName)
      .input("SourceImportID", sql.Int, ci.SourceImportID)
      .input("ChargeImportDate", sql.DateTime, ci.ChargeImportDate)
      .input("ChargeImportUserID", sql.VarChar, ci.ChargeImportUserID)
      .input("LastUserID", sql.VarChar, ci.LastUserID)
      .input("LastUserUpdate", sql.DateTime, ci.LastUserUpdate)
      .input("PatientFirstName", sql.VarChar, ci.PatientFirstName)
      .input("PatientMiddleName", sql.VarChar, ci.PatientMiddleName)
      .input("PatientLastName", sql.VarChar, ci.PatientLastName)
      .input("PatientStreet", sql.VarChar, ci.PatientStreet)
      .input("PatientStreet2", sql.VarChar, ci.PatientStreet2)
      .input("PatientCity", sql.VarChar, ci.PatientCity)
      .input("PatientState", sql.VarChar, ci.PatientState)
      .input("PatientZip", sql.VarChar, ci.PatientZip)
      .input("PatientDOB", sql.Date, ci.PatientDOB)
      .input("PatientSex", sql.VarChar, ci.PatientSex)
      .input("PatientPhoneNumber", sql.VarChar, ci.PatientPhoneNumber)
      .input("PatientSSN", sql.VarChar, ci.PatientSSN)
      .input("PatientIDType", sql.VarChar, ci.PatientIDType)
      .input("PatientDriversLicense", sql.VarChar, ci.PatientDriversLicense)
      .input("PatientConsent", sql.VarChar, ci.PatientConsent)
      .input("PatientTRF_Form", sql.VarChar, ci.PatientTRF_Form)
      .input("SubscriberFirstName", sql.VarChar, ci.SubscriberFirstName)
      .input("SubscriberLastName", sql.VarChar, ci.SubscriberLastName)
      .input("SubscriberDOB", sql.Date, ci.SubscriberDOB)
      .input("PrimaryInsName", sql.VarChar, ci.PrimaryInsName)
      .input("PrimaryInsPolicyNo", sql.VarChar, ci.PrimaryInsPolicyNo)
      .input("PrimaryInsGroupNo", sql.VarChar, ci.PrimaryInsGroupNo)
      .input("PrimaryInsRelation", sql.VarChar, ci.PrimaryInsRelation)
      .input("InsCardFront", sql.VarChar, ci.InsCardFront)
      .input("InsCardBack", sql.VarChar, ci.InsCardBack)
      .input("SecondaryInsName", sql.VarChar, ci.SecondaryInsName)
      .input("SecondaryInsPolicyNo", sql.VarChar, ci.SecondaryInsPolicyNo)
      .input("SecondaryInsGroupNo", sql.VarChar, ci.SecondaryInsGroupNo)
      .input("OrderingProviderNPI", sql.VarChar, ci.OrderingProviderNPI)
      .input("OrderingProviderName", sql.VarChar, ci.OrderingProviderName)
      .input("OrderingProviderStreet", sql.VarChar, ci.OrderingProviderStreet)
      .input("OrderingProviderStreet2", sql.VarChar, ci.OrderingProviderStreet2)
      .input("OrderingProviderCity", sql.VarChar, ci.OrderingProviderCity)
      .input("OrderingProviderState", sql.VarChar, ci.OrderingProviderState)
      .input("OrderingProviderZip", sql.VarChar, ci.OrderingProviderZip)
      .input("OrderingProviderPhone", sql.VarChar, ci.OrderingProviderPhone)
      .input("OrderingProviderEmail", sql.VarChar, ci.OrderingProviderEmail)
      .input("FacilityID", sql.VarChar, ci.FacilityID)
      .input("FacilityName", sql.VarChar, ci.FacilityName)
      .input("FacilityStreet", sql.VarChar, ci.FacilityStreet)
      .input("FacilityCity", sql.VarChar, ci.FacilityCity)
      .input("FacilityState", sql.VarChar, ci.FacilityState)
      .input("FacilityZip", sql.VarChar, ci.FacilityZip)
      .input("FacilityCLIA", sql.VarChar, ci.FacilityCLIA)
      .input("AccessionNo", sql.VarChar, ci.AccessionNo)
      .input("DateOfService", sql.DateTime, ci.DateOfService)
      .input("DateOfResults", sql.DateTime, ci.DateOfResults)
      .input("CPTCode1", sql.VarChar, ci.CPTCode1)
      .input("CPTCode2", sql.VarChar, ci.CPTCode2)
      .input("CPTCode3", sql.VarChar, ci.CPTCode3)
      .input("CPTCode4", sql.VarChar, ci.CPTCode4)
      .input("CPTCode5", sql.VarChar, ci.CPTCode5)
      .input("CPTCode6", sql.VarChar, ci.CPTCode6)
      .input("ICD10Code1", sql.VarChar, ci.ICD10Code1)
      .input("ICD10Code2", sql.VarChar, ci.ICD10Code2)
      .input("ICD10Code3", sql.VarChar, ci.ICD10Code3)
      .input("ICD10Code4", sql.VarChar, ci.ICD10Code4)
      .input("ICD10Code5", sql.VarChar, ci.ICD10Code5)
      .input("ICD10Code6", sql.VarChar, ci.ICD10Code6)
      .input("ICD10Code7", sql.VarChar, ci.ICD10Code7)
      .input("ICD10Code8", sql.VarChar, ci.ICD10Code8)
      .input("ICD10Code9", sql.VarChar, ci.ICD10Code9)
      .input("ICD10Code10", sql.VarChar, ci.ICD10Code10)
      .input("ICD10Code11", sql.VarChar, ci.ICD10Code11)
      .input("ICD10Code12", sql.VarChar, ci.ICD10Code12)
      .input("ServiceType", sql.VarChar, ci.ServiceType)
      .input("ClientNotes", sql.VarChar, ci.ClientNotes)
      .input("SubClientName", sql.VarChar, ci.SubClientName)
      .input("PartnerGroupName", sql.VarChar, ci.PartnerGroupName)
      .input("Barcode", sql.VarChar, ci.Barcode)
      .input("WSLOrderID", sql.VarChar, ci.WSLOrderID)
      .input("InsMissing", sql.VarChar, ci.InsMissing)
      .input("DateToProduction", sql.DateTime, ci.DateToProduction)
      .input("ProcessStage", sql.VarChar, ci.ProcessStage)
      .input("NeedsReview", sql.Bit, ci.NeedsReview)
      .input("IssueID", sql.Int, ci.IssueID)
      .input("InNGO", sql.Int, ci.InNGO)
      .input("NGO_IsBalance", sql.Bit, ci.NGO_IsBalance)
      .input("id", sql.Int, id)
      .query(ciQueries.putChargeImportById);
    res.json({ ...ci });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
