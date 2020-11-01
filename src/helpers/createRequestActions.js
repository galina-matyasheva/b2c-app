import { createAction } from "redux-actions";

export function createRequestActions(actionType, payloadCreator) {
  const actionCreator = createAction(actionType, payloadCreator);
  actionCreator.success = actionType + "_SUCCESS";
  actionCreator.fail = actionType + "_FAIL";
  return actionCreator;
}
