import fs from "fs";
import { client } from "../../index.js";

const createRecord = async (recordType, amount, category, payee, note) => {
  const createRecordQuery = `INSERT INTO records(recordType, amount,category,payee,note) VALUES ($1,$2,$3,$4,$5) RETURNING id`;
  const recordID = await client.query(createRecordQuery, [
    recordType,
    amount,
    category,
    payee,
    note,
  ]);
  return recordID;
};

export const createRecordQuery = async (req, res) => {
  const { recordType, amount, category, payee, note } = req.body;

  try {
    const recordID = await createRecord(
      recordType,
      amount,
      category,
      payee,
      note
    );

    return recordID;
  } catch (error) {
    throw new Error(error.message);
  }
};
