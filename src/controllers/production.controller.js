// import { getDPCConnection, pQueries } from "../database";
// import sql from "mssql";

// export const getProduction = async (req, res) => {
//   try {
//     const pool = await getDPCConnection();
//     const result = await pool.request().query(pQueries.getAllProduction);
//     res.json(result.recordset);
//   } catch (error) {
//     res.status(500);
//     res.send(error.message);
//   }
// };

// export const postProduction = async (req, res) => {
//   const { ...p } = req.body;

//   if (p.BillCoID == null || p.ClientID == null || p.TransPostDate == null) {
//     return res
//       .status(400)
//       .json({ message: "Bad Request. Please Fill All Fields." });
//   }

//   // console.log(ci)

//   try {
//     const pool = await getDPCConnection();
//     const result = await pool
//       .request()
//       .input("BillCoID", sql.VarChar, p.BillCoID)
//       .input("ClientID", sql.VarChar, p.ClientID)
//       .input("ChgImportID", sql.Int, p.ChgImportID)
//       .input("TransPostDate", sql.DateTime, p.TransPostDate)
//       .input("PatID", sql.Int, p.PatID)
//       .input("PatientSS", sql.VarChar, p.PatientSS)
//       .input("PatientFirstName", sql.VarChar, p.PatientFirstName)
//       .input("PatientLastName", sql.VarChar, p.PatientLastName)
//       .input("PatientDOB", sql.Date, p.PatientDOB)
//       .input("PatientSex", sql.VarChar, p.PatientSex)
//       .input("SubscriberFirstName", sql.VarChar, p.SubscriberFirstName)
//       .input("SubscriberLastName", sql.VarChar, p.SubscriberLastName)
//       .input("PrimaryInsCoID", sql.Int, p.PrimaryInsCoID)
//       .input("PrimaryInsNameFrSource", sql.VarChar, p.PrimaryInsNameFrSource)
//       .input("PrimaryInsCoName", sql.VarChar, p.PrimaryInsCoName)
//       .input("PrimaryInsPlanName", sql.VarChar, p.PrimaryInsPlanName)
//       .input("PrimaryInsPolicyNo", sql.VarChar, p.PrimaryInsPolicyNo)
//       .input("PrimaryInsGroupNo", sql.VarChar, p.PrimaryInsGroupNo)
//       .input("PrimaryInsRelation", sql.VarChar, p.PrimaryInsRelation)
//       .input("IsHRSA", sql.Bit, p.IsHRSA)
//       .input("InsuranceScope", sql.VarChar, p.InsuranceScope)
//       .input("OrderingProviderNPI", sql.VarChar, p.OrderingProviderNPI)
//       .input("OrderingProviderName", sql.VarChar, p.OrderingProviderName)
//       .input("OrderingProviderStreet", sql.VarChar, p.OrderingProviderStreet)
//       .input("OrderingProviderStreet2", sql.VarChar, p.OrderingProviderStreet2)
//       .input("OrderingProviderCity", sql.VarChar, p.OrderingProviderCity)
//       .input("OrderingProviderState", sql.VarChar, p.OrderingProviderState)
//       .input("OrderingProviderZip", sql.VarChar, p.OrderingProviderZip)
//       .input("OrderingProviderPhone", sql.VarChar, p.OrderingProviderPhone)
//       .input("OrderingProviderEmail", sql.VarChar, p.OrderingProviderEmail)
//       .input("PatientIDType", sql.VarChar, p.PatientIDType)
//       .input("ServiceType", sql.VarChar, p.ServiceType)
//       .input("FacilityID", sql.VarChar, p.FacilityID)
//       .input("FacilityName", sql.VarChar, p.FacilityName)
//       .input("DateOfService", sql.DateTime, p.DateOfService)
//       .input("DateOfResults", sql.DateTime, p.DateOfResults)
//       .input("AccessionNo", sql.VarChar, p.AccessionNo)
//       .input("ProcessStage", sql.VarChar, p.ProcessStage)
//       .input("CPTCode", sql.VarChar, p.CPTCode)
//       .input("ICD10Code1", sql.VarChar, p.ICD10Code1)
//       .input("ICD10Code2", sql.VarChar, p.ICD10Code2)
//       .input("ICD10Code3", sql.VarChar, p.ICD10Code3)
//       .input("ICD10Code4", sql.VarChar, p.ICD10Code4)
//       .input("ICD10Code5", sql.VarChar, p.ICD10Code5)
//       .input("ICD10Code6", sql.VarChar, p.ICD10Code6)
//       .input("ICD10Code7", sql.VarChar, p.ICD10Code7)
//       .input("ICD10Code8", sql.VarChar, p.ICD10Code8)
//       .input("ICD10Code9", sql.VarChar, p.ICD10Code9)
//       .input("ICD10Code10", sql.VarChar, p.ICD10Code10)
//       .input("ICD10Code11", sql.VarChar, p.ICD10Code11)
//       .input("ICD10Code12", sql.VarChar, p.ICD10Code12)
//       .input("Prof_Fee", sql.Money, p.Prof_Fee)
//       .input("Tech_Fee", sql.Money, p.Tech_Fee)
//       .input("Glob_Fee", sql.Money, p.Glob_Fee)
//       .input("MCR_Prof_Fee", sql.Money, p.MCR_Prof_Fee)
//       .input("MCR_Tech_Fee", sql.Money, p.MCR_Tech_Fee)
//       .input("MCR_Glob_Fee", sql.Money, p.MCR_Glob_Fee)
//       .input("LastBotMachineName", sql.VarChar, p.LastBotMachineName)
//       .input("LastBotResult", sql.VarChar, p.LastBotResult)
//       .input("Voided", sql.Bit, p.Voided)
//       .input("VoidedDate", sql.DateTime, p.VoidedDate)
//       .input("LastUserID", sql.VarChar, p.LastUserID)
//       .input("LastUserUpdate", sql.DateTime, p.LastUserUpdate)
//       .input("HRSAID", sql.Int, p.HRSAID)
//       .input("NGO_ChargeItemID", sql.Int, p.NGO_ChargeItemID)
//       .input("NGO_ChargeAmount", sql.Money, p.NGO_ChargeAmount)
//       .input("NGO_Pat_Resp", sql.Money, p.NGO_Pat_Resp)
//       .input("NGO_Pat_Pmt", sql.Money, p.NGO_Pat_Pmt)
//       .input("NGO_Ins_Pmt", sql.Money, p.NGO_Ins_Pmt)
//       .input("NGO_Ins_Adj", sql.Money, p.NGO_Ins_Adj)
//       .input("NGO_InsBal", sql.Money, p.NGO_InsBal)
//       .input("NGO_RefreshDate", sql.DateTime, p.NGO_RefreshDat)
//       .query(pQueries.postNewProduction);
//     res.json({ ...p });
//   } catch (error) {
//     res.status(500);
//     res.send(error.message);
//   }
// };

// export const getTotalProduction = async (req, res) => {
//   try {
//     const pool = await getDPCConnection();
//     const result = await pool.request().query(pQueries.getTotalProduction);
//     res.json(result.recordset[0][""]);
//   } catch (error) {
//     res.status(500);
//     res.send(error.message);
//   }
// };

// export const getProductionById = async (req, res) => {
//   const { id } = req.params;
//   try {
//     const pool = await getDPCConnection();
//     const result = await pool
//       .request()
//       .input("id", sql.Int, id)
//       .query(pQueries.getProductionById);
//     res.json(result.recordset[0]);
//   } catch (error) {
//     res.status(500);
//     res.send(error.message);
//   }
// };

// export const deleteProductionById = async (req, res) => {
//   const { id } = req.params;
//   try {
//     const pool = await getDPCConnection();
//     const result = await pool
//       .request()
//       .input("id", sql.Int, id)
//       .query(pQueries.deleteProductionById);
//     res.sendStatus(204); //Eliminado correctamente o request exitosa
//   } catch (error) {
//     res.status(500);
//     res.send(error.message);
//   }
// };

// export const putProductionById = async (req, res) => {
//   const { ...p } = req.body;
//   const { id } = req.params;

//   if (p.BillCoID == null || p.ClientID == null || p.TransPostDate == null) {
//     return res
//       .status(400)
//       .json({ message: "Bad Request. Please Fill All Fields." });
//   }

//   try {
//     const pool = await getDPCConnection();
//     const result = await pool
//       .request()
//       .input("BillCoID", sql.VarChar, p.BillCoID)
//       .input("ClientID", sql.VarChar, p.ClientID)
//       .input("ChgImportID", sql.Int, p.ChgImportID)
//       .input("TransPostDate", sql.DateTime, p.TransPostDate)
//       .input("PatID", sql.Int, p.PatID)
//       .input("PatientSS", sql.VarChar, p.PatientSS)
//       .input("PatientFirstName", sql.VarChar, p.PatientFirstName)
//       .input("PatientLastName", sql.VarChar, p.PatientLastName)
//       .input("PatientDOB", sql.Date, p.PatientDOB)
//       .input("PatientSex", sql.VarChar, p.PatientSex)
//       .input("SubscriberFirstName", sql.VarChar, p.SubscriberFirstName)
//       .input("SubscriberLastName", sql.VarChar, p.SubscriberLastName)
//       .input("PrimaryInsCoID", sql.Int, p.PrimaryInsCoID)
//       .input("PrimaryInsNameFrSource", sql.VarChar, p.PrimaryInsNameFrSource)
//       .input("PrimaryInsCoName", sql.VarChar, p.PrimaryInsCoName)
//       .input("PrimaryInsPlanName", sql.VarChar, p.PrimaryInsPlanName)
//       .input("PrimaryInsPolicyNo", sql.VarChar, p.PrimaryInsPolicyNo)
//       .input("PrimaryInsGroupNo", sql.VarChar, p.PrimaryInsGroupNo)
//       .input("PrimaryInsRelation", sql.VarChar, p.PrimaryInsRelation)
//       .input("IsHRSA", sql.Bit, p.IsHRSA)
//       .input("InsuranceScope", sql.VarChar, p.InsuranceScope)
//       .input("OrderingProviderNPI", sql.VarChar, p.OrderingProviderNPI)
//       .input("OrderingProviderName", sql.VarChar, p.OrderingProviderName)
//       .input("OrderingProviderStreet", sql.VarChar, p.OrderingProviderStreet)
//       .input("OrderingProviderStreet2", sql.VarChar, p.OrderingProviderStreet2)
//       .input("OrderingProviderCity", sql.VarChar, p.OrderingProviderCity)
//       .input("OrderingProviderState", sql.VarChar, p.OrderingProviderState)
//       .input("OrderingProviderZip", sql.VarChar, p.OrderingProviderZip)
//       .input("OrderingProviderPhone", sql.VarChar, p.OrderingProviderPhone)
//       .input("OrderingProviderEmail", sql.VarChar, p.OrderingProviderEmail)
//       .input("PatientIDType", sql.VarChar, p.PatientIDType)
//       .input("ServiceType", sql.VarChar, p.ServiceType)
//       .input("FacilityID", sql.VarChar, p.FacilityID)
//       .input("FacilityName", sql.VarChar, p.FacilityName)
//       .input("DateOfService", sql.DateTime, p.DateOfService)
//       .input("DateOfResults", sql.DateTime, p.DateOfResults)
//       .input("AccessionNo", sql.VarChar, p.AccessionNo)
//       .input("ProcessStage", sql.VarChar, p.ProcessStage)
//       .input("CPTCode", sql.VarChar, p.CPTCode)
//       .input("ICD10Code1", sql.VarChar, p.ICD10Code1)
//       .input("ICD10Code2", sql.VarChar, p.ICD10Code2)
//       .input("ICD10Code3", sql.VarChar, p.ICD10Code3)
//       .input("ICD10Code4", sql.VarChar, p.ICD10Code4)
//       .input("ICD10Code5", sql.VarChar, p.ICD10Code5)
//       .input("ICD10Code6", sql.VarChar, p.ICD10Code6)
//       .input("ICD10Code7", sql.VarChar, p.ICD10Code7)
//       .input("ICD10Code8", sql.VarChar, p.ICD10Code8)
//       .input("ICD10Code9", sql.VarChar, p.ICD10Code9)
//       .input("ICD10Code10", sql.VarChar, p.ICD10Code10)
//       .input("ICD10Code11", sql.VarChar, p.ICD10Code11)
//       .input("ICD10Code12", sql.VarChar, p.ICD10Code12)
//       .input("Prof_Fee", sql.Money, p.Prof_Fee)
//       .input("Tech_Fee", sql.Money, p.Tech_Fee)
//       .input("Glob_Fee", sql.Money, p.Glob_Fee)
//       .input("MCR_Prof_Fee", sql.Money, p.MCR_Prof_Fee)
//       .input("MCR_Tech_Fee", sql.Money, p.MCR_Tech_Fee)
//       .input("MCR_Glob_Fee", sql.Money, p.MCR_Glob_Fee)
//       .input("LastBotMachineName", sql.VarChar, p.LastBotMachineName)
//       .input("LastBotResult", sql.VarChar, p.LastBotResult)
//       .input("Voided", sql.Bit, p.Voided)
//       .input("VoidedDate", sql.DateTime, p.VoidedDate)
//       .input("LastUserID", sql.VarChar, p.LastUserID)
//       .input("LastUserUpdate", sql.DateTime, p.LastUserUpdate)
//       .input("HRSAID", sql.Int, p.HRSAID)
//       .input("NGO_ChargeItemID", sql.Int, p.NGO_ChargeItemID)
//       .input("NGO_ChargeAmount", sql.Money, p.NGO_ChargeAmount)
//       .input("NGO_Pat_Resp", sql.Money, p.NGO_Pat_Resp)
//       .input("NGO_Pat_Pmt", sql.Money, p.NGO_Pat_Pmt)
//       .input("NGO_Ins_Pmt", sql.Money, p.NGO_Ins_Pmt)
//       .input("NGO_Ins_Adj", sql.Money, p.NGO_Ins_Adj)
//       .input("NGO_InsBal", sql.Money, p.NGO_InsBal)
//       .input("NGO_RefreshDate", sql.DateTime, p.NGO_RefreshDat)
//       .input("id", sql.Int, id)
//       .query(pQueries.putProductionById);
//     res.json({ ...p });
//   } catch (error) {
//     res.status(500);
//     res.send(error.message);
//   }
// };
