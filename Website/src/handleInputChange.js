// inspired by https://youtu.be/b0IZo2Aho9Y?si=m97l9lIRDcvuGnAv&t=446

const handleInputChange = (func) => {
  return (e) => func(e.target.value);
};

export default handleInputChange;
