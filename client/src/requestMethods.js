import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNzZjZDI4ZWRjOTk0NDE2ZGM3YzU0NiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNTMyNTAyOSwiZXhwIjoxNjM1NTg0MjI5fQ.WwHQUbmXus7fVsI2jNK8jENc2ZXuqcjDvbdXBto1H6g";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
