import axios from "axios"

const apiKey = process.env.REACT_APP_APP_AIRTABLE_KEY
const baseURL = 'https://api.airtable.com/v0/app9rupo4pEmQAZPw/react-finance-tracker'

const config = {
  headers: {
    Authorization: `Bearer ${apiKey}`,
  },
};

export const getAllFinances = async () => {
  try {
    const res = await axios.get(baseURL, config);
    return res.data.records;
  } catch (error) {
    console.error(error);
  }
};

export const createBudgetItem = async (form) => {
  try {
    const res = await axios.post(`${baseURL}`, { fields: form }, config);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const createExpensesItem = async (form) => {
  try {
    const res = await axios.post(`${baseURL}`, { fields: form }, config);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const createIncomesItem = async (form) => {
  try {
    const res = await axios.post(`${baseURL}`, { fields: form }, config);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};