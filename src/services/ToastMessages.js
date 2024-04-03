export let defaultToastMessages = {
  error: "some error happened",
  success: "done",
  pending: "please wait",
};
export default (messages = {}) => {
  return {
    ...defaultToastMessages,
    ...messages,
  };
};
