function splitMulti(str: string, tokens: string[]) {
  var tempChar = tokens[0];
  for (let i = 1; i < tokens.length; i++) {
    str = str.split(tokens[i]).join(tempChar);
  }
  const strArrAfterSplit = str.split(tempChar);
  return strArrAfterSplit;
}

const getUrl: Function = () => {
  const href = window.location.href;
  const charSplit = ["/", "?"];
  const splitHrefArr = splitMulti(href, charSplit);
  return {
    currentPage: splitHrefArr[3],
    finalUrl: splitHrefArr[splitHrefArr.length - 1],
  };
};

export const func = {
  getUrl,
};
