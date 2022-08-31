const encrypt = (text) => {
    let result = '';
    for (let i = 0; i < text.length; i = i + 2) {
      result = result + text[i + 1] + text[i];
      const t = text[i + 1];
      const m = (t === undefined) ? '' : t;
    };
    return result;
  };
  export default encrypt;