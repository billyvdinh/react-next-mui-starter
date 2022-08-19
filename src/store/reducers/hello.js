const INITIAL_STATE = { message: "Hello World!" };

export const helloReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "hello":
      return { ...state, message: "hello" };
    case "world":
      return { ...state, message: "world" };
    default:
      return state;
  }
};
