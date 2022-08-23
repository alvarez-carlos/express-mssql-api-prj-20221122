import { ChargeImport } from "../models/ChargeImport";
import { CIFields } from "../database/database";

export const getChargeImport = async (req, res) => {
  try {
    const ciClaims = await ChargeImport.findAll();
    res.json(ciClaims);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const postChargeImport = async (req, res) => {
  const { ...ci } = req.body;

  if (ci.BillCoID == null || ci.ClientID == null || ci.AccessionNo == null) {
    return res
      .status(400)
      .json({ message: "Bad Request. Please Fill All Fields." });
  }

  try {
    let newClaim = await ChargeImport.create(
      {
        ...ci,
      },
      {
        fields: CIFields,
      }
    );
    return res.json(newClaim);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
  res.json("received");
};

export const getChargeImportById = async (req, res) => {
  const { id: ChgImportID } = req.params;
  try {
    const ciClaim = await ChargeImport.findOne({
      where: {
        ChgImportID,
      },
    });
    res.json(ciClaim);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const deleteProject = async (req, res) => {
  const { id: ChgImportID } = req.params;
  try {
    await ChargeImport.destroy({
      where: {
        ChgImportID,
      },
    });
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const putChargeImportById = async (req, res) => {
  try {
    const { id: ChgImportID } = req.params;
    const { ...ci } = req.body;

    const ciClaim = await ChargeImport.findByPk(id);
    if (!ciClaim) {
      return res.json({ message: "El Claim no existe en la base de datos" });
    }

    await ci.save();
    res.json(ci);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
