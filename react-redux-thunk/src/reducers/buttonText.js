const initialText = "Search Gifs";

const buttonText = (state = initialText, action) => {
  switch (action.type) {
    case "START_REQUEST":
      return "waiting...";

    case "RECEIVE_DATA":
      return initialText;

    default:
      return state;
  }
};

export default buttonText;
