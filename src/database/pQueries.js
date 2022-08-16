export const pQueries = {
  getAllProduction: `SELECT top 200 * 
                   FROM Production`,

  postNewProduction: `INSERT INTO Production 
                      (BillCoID, ClientID, ChgImportID, TransPostDate, PatID, PatientSS, PatientFirstName, PatientLastName, PatientDOB, PatientSex, SubscriberFirstName, SubscriberLastName, PrimaryInsCoID, PrimaryInsNameFrSource, PrimaryInsCoName, PrimaryInsPlanName, PrimaryInsPolicyNo, PrimaryInsGroupNo, PrimaryInsRelation, IsHRSA, InsuranceScope, OrderingProviderNPI, OrderingProviderName, OrderingProviderStreet, OrderingProviderStreet2, OrderingProviderCity, OrderingProviderState, OrderingProviderZip, OrderingProviderPhone, OrderingProviderEmail, PatientIDType, ServiceType, FacilityID, FacilityName, DateOfService, DateOfResults, AccessionNo, ProcessStage, CPTCode, ICD10Code1, ICD10Code2, ICD10Code3, ICD10Code4, ICD10Code5, ICD10Code6, ICD10Code7, ICD10Code8, ICD10Code9, ICD10Code10, ICD10Code11, ICD10Code12, Prof_Fee, Tech_Fee, Glob_Fee, MCR_Prof_Fee, MCR_Tech_Fee, MCR_Glob_Fee, LastBotMachineName, LastBotResult, Voided, VoidedDate, LastUserID, LastUserUpdate, HRSAID, NGO_ChargeItemID, NGO_ChargeAmount, NGO_Pat_Resp, NGO_Pat_Pmt, NGO_Ins_Pmt, NGO_Ins_Adj, NGO_InsBal, NGO_RefreshDate)
                      VALUES
                      (@BillCoID, @ClientID, @ChgImportID, @TransPostDate, @PatID, @PatientSS, @PatientFirstName, @PatientLastName, @PatientDOB, @PatientSex, @SubscriberFirstName, @SubscriberLastName, @PrimaryInsCoID, @PrimaryInsNameFrSource, @PrimaryInsCoName, @PrimaryInsPlanName, @PrimaryInsPolicyNo, @PrimaryInsGroupNo, @PrimaryInsRelation, @IsHRSA, @InsuranceScope, @OrderingProviderNPI, @OrderingProviderName, @OrderingProviderStreet, @OrderingProviderStreet2, @OrderingProviderCity, @OrderingProviderState, @OrderingProviderZip, @OrderingProviderPhone, @OrderingProviderEmail, @PatientIDType, @ServiceType, @FacilityID, @FacilityName, @DateOfService, @DateOfResults, @AccessionNo, @ProcessStage, @CPTCode, @ICD10Code1, @ICD10Code2, @ICD10Code3, @ICD10Code4, @ICD10Code5, @ICD10Code6, @ICD10Code7, @ICD10Code8, @ICD10Code9, @ICD10Code10, @ICD10Code11, @ICD10Code12, @Prof_Fee, @Tech_Fee, @Glob_Fee, @MCR_Prof_Fee, @MCR_Tech_Fee, @MCR_Glob_Fee, @LastBotMachineName, @LastBotResult, @Voided, @VoidedDate, @LastUserID, @LastUserUpdate, @HRSAID, @NGO_ChargeItemID, @NGO_ChargeAmount, @NGO_Pat_Resp, @NGO_Pat_Pmt, @NGO_Ins_Pmt, @NGO_Ins_Adj, @NGO_InsBal, @NGO_RefreshDate)`,

  getProductionById: `SELECT * FROM Production WHERE ChgImportID = @id`,

  deleteProductionById: `DELETE FROM Production WHERE ChgImportID = @id`,
  
  getTotalProduction: `SELECT COUNT(*) FROM Production`,

  putProductionById: `UPDATE p 
                        SET BillCoID = @BillCoID, ClientID = @ClientID, ChgImportID = @ChgImportID, TransPostDate = @TransPostDate, PatID = @PatID, PatientSS = @PatientSS, PatientFirstName = @PatientFirstName, PatientLastName = @PatientLastName, PatientDOB = @PatientDOB, PatientSex = @PatientSex, SubscriberFirstName = @SubscriberFirstName, SubscriberLastName = @SubscriberLastName, PrimaryInsCoID = @PrimaryInsCoID, PrimaryInsNameFrSource = @PrimaryInsNameFrSource, PrimaryInsCoName = @PrimaryInsCoName, PrimaryInsPlanName = @PrimaryInsPlanName, PrimaryInsPolicyNo = @PrimaryInsPolicyNo, PrimaryInsGroupNo = @PrimaryInsGroupNo, PrimaryInsRelation = @PrimaryInsRelation, IsHRSA = @IsHRSA, InsuranceScope = @InsuranceScope, OrderingProviderNPI = @OrderingProviderNPI, OrderingProviderName = @OrderingProviderName, OrderingProviderStreet = @OrderingProviderStreet, OrderingProviderStreet2 = @OrderingProviderStreet2, OrderingProviderCity = @OrderingProviderCity, OrderingProviderState = @OrderingProviderState, OrderingProviderZip = @OrderingProviderZip, OrderingProviderPhone = @OrderingProviderPhone, OrderingProviderEmail = @OrderingProviderEmail, PatientIDType = @PatientIDType, ServiceType = @ServiceType, FacilityID = @FacilityID, FacilityName = @FacilityName, DateOfService = @DateOfService, DateOfResults = @DateOfResults, AccessionNo = @AccessionNo, ProcessStage = @ProcessStage, CPTCode = @CPTCode, ICD10Code1 = @ICD10Code1, ICD10Code2 = @ICD10Code2, ICD10Code3 = @ICD10Code3, ICD10Code4 = @ICD10Code4, ICD10Code5 = @ICD10Code5, ICD10Code6 = @ICD10Code6, ICD10Code7 = @ICD10Code7, ICD10Code8 = @ICD10Code8, ICD10Code9 = @ICD10Code9, ICD10Code10 = @ICD10Code10, ICD10Code11 = @ICD10Code11, ICD10Code12 = @ICD10Code12, Prof_Fee = @Prof_Fee, Tech_Fee = @Tech_Fee, Glob_Fee = @Glob_Fee, MCR_Prof_Fee = @MCR_Prof_Fee, MCR_Tech_Fee = @MCR_Tech_Fee, MCR_Glob_Fee = @MCR_Glob_Fee, LastBotMachineName = @LastBotMachineName, LastBotResult = @LastBotResult, Voided = @Voided, VoidedDate = @VoidedDate, LastUserID = @LastUserID, LastUserUpdate = @LastUserUpdate, HRSAID = @HRSAID, NGO_ChargeItemID = @NGO_ChargeItemID, NGO_ChargeAmount = @NGO_ChargeAmount, NGO_Pat_Resp = @NGO_Pat_Resp, NGO_Pat_Pmt = @NGO_Pat_Pmt, NGO_Ins_Pmt = @NGO_Ins_Pmt, NGO_Ins_Adj = @NGO_Ins_Adj, NGO_InsBal = @NGO_InsBal, NGO_RefreshDate = @NGO_RefreshDate  
                        FROM Production p
                        WHERE ChgImportID = @id`,
};
