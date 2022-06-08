type URLType = {
  currentPage: string;
  finalUrl: string;
};

function splitMulti(str: string, tokens: string[]): string[] {
  var tempChar = tokens[0];
  for (let i = 1; i < tokens.length; i++) {
    str = str.split(tokens[i]).join(tempChar);
  }
  const strArrAfterSplit = str.split(tempChar);
  return strArrAfterSplit;
}

function getUrl(): URLType {
  const href = window.location.href;
  const charSplit = ["/", "?"];
  const splitHrefArr = splitMulti(href, charSplit);
  return {
    currentPage: !splitHrefArr[3] ? "/" : `/${splitHrefArr[3]}`,
    finalUrl: splitHrefArr[splitHrefArr.length - 1],
  };
}

export const funcs = {
  getUrl,
};
