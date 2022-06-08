import { configs } from "@/configs";

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

function checkPath(page: string): string {
  const tabs = configs.tabs;
  let root: string = page;
  tabs.forEach((tab) => {
    if (tab.children) {
      tab.children.forEach((element) => {
        if (element.to === page) {
          root = tab.root;
          return;
        }
      });
    }
  });
  return root;
}

function getUrl(): URLType {
  const href = window.location.href;
  const charSplit = ["/", "?"];
  const splitHrefArr = splitMulti(href, charSplit);
  return {
    currentPage: checkPath(!splitHrefArr[3] ? "/" : `/${splitHrefArr[3]}`),
    finalUrl: splitHrefArr[splitHrefArr.length - 1],
  };
}

export const funcs = {
  getUrl,
};
