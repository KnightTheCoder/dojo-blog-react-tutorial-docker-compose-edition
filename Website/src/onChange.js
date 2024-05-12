const handleInputChange = (func) => {
  return (e) => func(e.target.value);
};

export default handleInputChange;
