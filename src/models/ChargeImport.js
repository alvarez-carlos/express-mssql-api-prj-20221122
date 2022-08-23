import { DataTypes } from "sequelize";
import { sequelize } from "../database/database";

export const ChargeImport = sequelize.define(
  "ChargeImport",
  {
    ChgImportID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    BillCoID: {
      type: DataTypes.STRING,
    },
    ClientID: {
      type: DataTypes.STRING,
    },
    SrcFileImportDate: {
      type: DataTypes.DATEONLY,
    },
    SrcItemImportDateWTime: {
      type: DataTypes.DATE,
    },
    SourceName: {
      type: DataTypes.STRING,
    },
    SourceImportID: {
      type: DataTypes.INTEGER,
    },
    ChargeImportDate: {
      type: DataTypes.DATE,
    },
    ChargeImportUserID: {
      type: DataTypes.STRING,
    },
    LastUserID: {
      type: DataTypes.STRING,
    },
    LastUserUpdate: {
      type: DataTypes.DATE,
    },
    PatientFirstName: {
      type: DataTypes.STRING,
    },
    PatientMiddleName: {
      type: DataTypes.STRING,
    },
    PatientLastName: {
      type: DataTypes.STRING,
    },
    PatientStreet: {
      type: DataTypes.STRING,
    },
    PatientStreet2: {
      type: DataTypes.STRING,
    },
    PatientCity: {
      type: DataTypes.STRING,
    },
    PatientState: {
      type: DataTypes.STRING,
    },
    PatientZip: {
      type: DataTypes.STRING,
    },
    PatientDOB: {
      type: DataTypes.DATEONLY,
    },
    PatientSex: {
      type: DataTypes.STRING,
    },
    PatientPhoneNumber: {
      type: DataTypes.STRING,
    },
    PatientSSN: {
      type: DataTypes.STRING,
    },
    PatientIDType: {
      type: DataTypes.STRING,
    },
    PatientDriversLicense: {
      type: DataTypes.STRING,
    },
    PatientConsent: {
      type: DataTypes.STRING,
    },
    PatientTRF_Form: {
      type: DataTypes.STRING,
    },
    SubscriberFirstName: {
      type: DataTypes.STRING,
    },
    SubscriberLastName: {
      type: DataTypes.STRING,
    },
    SubscriberDOB: {
      type: DataTypes.DATEONLY,
    },
    PrimaryInsName: {
      type: DataTypes.STRING,
    },
    PrimaryInsPolicyNo: {
      type: DataTypes.STRING,
    },
    PrimaryInsGroupNo: {
      type: DataTypes.STRING,
    },
    PrimaryInsRelation: {
      type: DataTypes.STRING,
    },
    InsCardFront: {
      type: DataTypes.STRING,
    },
    InsCardBack: {
      type: DataTypes.STRING,
    },
    SecondaryInsName: {
      type: DataTypes.STRING,
    },
    SecondaryInsPolicyNo: {
      type: DataTypes.STRING,
    },
    SecondaryInsGroupNo: {
      type: DataTypes.STRING,
    },
    OrderingProviderNPI: {
      type: DataTypes.STRING,
    },
    OrderingProviderName: {
      type: DataTypes.STRING,
    },
    OrderingProviderStreet: {
      type: DataTypes.STRING,
    },
    OrderingProviderStreet2: {
      type: DataTypes.STRING,
    },
    OrderingProviderCity: {
      type: DataTypes.STRING,
    },
    OrderingProviderState: {
      type: DataTypes.STRING,
    },
    OrderingProviderZip: {
      type: DataTypes.STRING,
    },
    OrderingProviderPhone: {
      type: DataTypes.STRING,
    },
    OrderingProviderEmail: {
      type: DataTypes.STRING,
    },
    FacilityID: {
      type: DataTypes.STRING,
    },
    FacilityName: {
      type: DataTypes.STRING,
    },
    FacilityStreet: {
      type: DataTypes.STRING,
    },
    FacilityCity: {
      type: DataTypes.STRING,
    },
    FacilityState: {
      type: DataTypes.STRING,
    },
    FacilityZip: {
      type: DataTypes.STRING,
    },
    FacilityCLIA: {
      type: DataTypes.STRING,
    },
    AccessionNo: {
      type: DataTypes.STRING,
    },
    DateOfService: {
      type: DataTypes.DATE,
    },
    DateOfResults: {
      type: DataTypes.DATE,
    },
    CPTCode1: {
      type: DataTypes.STRING,
    },
    CPTCode2: {
      type: DataTypes.STRING,
    },
    CPTCode3: {
      type: DataTypes.STRING,
    },
    CPTCode4: {
      type: DataTypes.STRING,
    },
    CPTCode5: {
      type: DataTypes.STRING,
    },
    CPTCode6: {
      type: DataTypes.STRING,
    },
    ICD10Code1: {
      type: DataTypes.STRING,
    },
    ICD10Code2: {
      type: DataTypes.STRING,
    },
    ICD10Code3: {
      type: DataTypes.STRING,
    },
    ICD10Code4: {
      type: DataTypes.STRING,
    },
    ICD10Code5: {
      type: DataTypes.STRING,
    },
    ICD10Code6: {
      type: DataTypes.STRING,
    },
    ICD10Code7: {
      type: DataTypes.STRING,
    },
    ICD10Code8: {
      type: DataTypes.STRING,
    },
    ICD10Code9: {
      type: DataTypes.STRING,
    },
    ICD10Code10: {
      type: DataTypes.STRING,
    },
    ICD10Code11: {
      type: DataTypes.STRING,
    },
    ICD10Code12: {
      type: DataTypes.STRING,
    },
    ServiceType: {
      type: DataTypes.STRING,
    },
    ClientNotes: {
      type: DataTypes.STRING,
    },
    SubClientName: {
      type: DataTypes.STRING,
    },
    PartnerGroupName: {
      type: DataTypes.STRING,
    },
    Barcode: {
      type: DataTypes.STRING,
    },
    WSLOrderID: {
      type: DataTypes.STRING,
    },
    InsMissing: {
      type: DataTypes.STRING,
    },
    DateToProduction: {
      type: DataTypes.DATE,
    },
    ProcessStage: {
      type: DataTypes.STRING,
    },
    NeedsReview: {
      type: DataTypes.BOOLEAN,
    },
    IssueID: {
      type: DataTypes.INTEGER,
    },
    InNGO: {
      type: DataTypes.INTEGER,
    },
    NGO_IsBalance: {
      type: DataTypes.BOOLEAN,
    },
  },
  {
    createdAt: false,
    updatedAt: false,
    timestamps: false,
    freezeTableName: true,
    tableName: "ChargeImport",
  }
);
