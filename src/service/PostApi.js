import axios from "axios";

import React from "react";
const URL = "http://localhost:4000";
const PostApi = async (data) => {
  try {
    return await axios.post(`${URL}/add`, data);
  } catch (error) {
    console.log("ERR: ", error);
  }
};

export default PostApi;
