import { useReducer, useCallback } from "react";

const httpReducer = (state, action) => {
  switch (action.type) {
    case "SUCCESS":
      return {
        status: action.status,
        data: action.data,
        error: false,
      };
    case "ERROR":
      return {
        ...state,
        status: action.status,
        error: action.error,
      };

    default:
      return state;
  }
};

function useHttp(requestFunction) {
  const [httpState, dispatch] = useReducer(httpReducer, {
    data: null,
    error: null,
    status: "pending",
  });

  const sendRequest = useCallback(
    async (requestData) => {
      try {
        const response = await requestFunction(requestData);
        dispatch({ type: "SUCCESS", data: response, status: "completed" });
      } catch (e) {
        dispatch({ type: "ERROR", error: true, status: "completed" });
      }
    },
    [requestFunction]
  );

  return {
    sendRequest,
    ...httpState,
  };
}

export default useHttp;
