import { FETCH_USER } from "../actions/types.js";

export default function(state = null, action) {
  //console.log(action);
  switch (action.type) {
    case FETCH_USER:
      console.log("FETCH_USER-action.payload", action.payload);
      return action.payload || false;
    default:
      return state;
  }
}
