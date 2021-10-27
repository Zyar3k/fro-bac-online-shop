import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNzZjZDI4ZWRjOTk0NDE2ZGM3YzU0NiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNTMzNzkwMywiZXhwIjoxNjM1NTk3MTAzfQ.0i0jbkti-l9odKDRmsU267GCyU3Yw-lC1S7aEDfXij4";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
