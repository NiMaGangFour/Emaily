import axios from "axios";
import { FETCH_USER } from "./types";

export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current_user");
  console.log("fetchUser-res.data", res.data);
  console.log("fetchUser-res.data.body", res.data.body);
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleToken = token => async dispatch => {
  const res = await axios.post("/api/stripe", token);
  console.log("handleToken", res.data);
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitSurvey = (values, history) => async dispatch => {
  const res = await axios.post("/api/surveys", values);
  history.push("/surveys");

  dispatch({ type: FETCH_USER, payload: res.data });
};
// axios.get('/api/current_user')
//   .then(res => dispatch({ type:FETCH_USER, payload: res }));
