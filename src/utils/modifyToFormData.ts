const modifyToFormData = <T>(payload: T): FormData => {
  const obj = { ...payload };
  const data = JSON.stringify(obj);
  const formData = new FormData();
  formData.append("data", data);
  return formData;
};

export default modifyToFormData;
