import axios from "axios";

export const getDoritosCode = async (code) => {
  const response = await axios
    .post("https://topcho.dev/api/v1/doritos/code", {
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
