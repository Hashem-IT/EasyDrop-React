import axios from "axios";

const API_URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:8081/api/auth";

export const login = (userData) => axios.post(`${API_URL}/login`, userData);
export const register = (userData) => axios.post(`${API_URL}/register`, userData);
