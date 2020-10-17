import axios from "axios";

export const getDoritosCode = async (code) => {
  const endpoint = process.env.serviceEndpoint;
  const response = await axios
    .post(`${endpoint}/doritos/code`, {
      doritos_code: code,
    })
    .then(function (response) {
      let isError = true;
      let data = null;
      if (response && response?.status === 200) {
        const {
          data: { doritos_code },
        } = response?.data;
        if (doritos_code) {
          data = doritos_code;
          isError = false;
        }
      }
      return {
        isError,
        data,
      };
      return response;
    })
    .catch(function (error) {
      return { isError: true };
    });

  return response;
};
