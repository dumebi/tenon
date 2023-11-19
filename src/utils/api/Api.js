import axios from "axios";

const url = process.env.REACT_APP_API_URL;

const table_id = process.env.REACT_APP_TABLE_ID;

const key = process.env.REACT_APP_AIR_TABLE_KEY;

const Api = {
  fetchVacancies: () => {
    const response = axios({
      url: `${url}/v0/${table_id}/vacancies`,
      method: "GET",
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
      },
    });
    return response;
  },
};

export default Api;
