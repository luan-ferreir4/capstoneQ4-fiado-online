const verifyAcceptedKeys = (data: any) => {
  const acceptedKeys = process.env.ACCEPTED_USER_KEYS.split(',');
  const requestData = data;

  Object.keys(data).forEach((item) => {
    if (!acceptedKeys.includes(item)) {
      delete requestData[item];
    }
  });

  return data;
};
export default verifyAcceptedKeys;

// for (let [key] of Object.entries(data)) {
//   if (!acceptedKeys.includes(key)) {
//     delete data[key];
//   }
// }
