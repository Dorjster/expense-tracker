import { getRecordsQuery } from "../queries/record/get-records.js";
import { createRecordQuery } from "../queries/record/create-record.js";

export const createRecord = async (req, res) => {
  try {
    const result = await createRecordQuery(req);
    res.status(200).send(result);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const getRecords = async (req, res) => {
  try {
    const result = await getRecordsQuery(req);
    res.status(200).send(result);
  } catch (error) {
    res.status(400).send(error.message);
  }
};
