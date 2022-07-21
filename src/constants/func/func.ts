import { configs } from "@/configs";

type URLType = {
  currentPage: string;
  finalUrl: string;
};

function removeAccent(str: string): string {
  let initStr = str;
  str = str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[&\/\\#@^,+()$~%-.!'":*?<>{}]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .toLowerCase();
  if (str === "") str = encodeURIComponent(initStr);
  else str = encodeURIComponent(str);
  return str;
}

function formatCurrency(price: number): string {
  const formattedPrice = price
    .toLocaleString("it-IT", {
      style: "currency",
      currency: "USD",
    })
    .replace("USD", "$")
    .replace(/\s+/g, "");
  return formattedPrice;
}

function getYear(date: string): number {
  const yearMovie = new Date(date);
  return yearMovie.getFullYear();
}

function splitMulti(str: string, tokens: string[]): string[] {
  var tempChar = tokens[0];
  for (let i = 1; i < tokens.length; i++) {
    str = str.split(tokens[i]).join(tempChar);
  }
  const strArrAfterSplit = str.split(tempChar);
  return strArrAfterSplit;
}

function getAPI(ROOT_API: string, SUFFIX: string): string {
  return (
    configs.api.BASE_URL + ROOT_API + "?api_key=" + configs.api.API_KEY + SUFFIX
  );
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

function formatDate(date: string | Date): string {
  const dateInit = new Date(date);
  const year = new Intl.DateTimeFormat("en", { year: "numeric" }).format(
    dateInit
  );
  const month = new Intl.DateTimeFormat("en", { month: "2-digit" }).format(
    dateInit
  );
  const day = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(
    dateInit
  );
  return `${day}/${month}/${year}`;
}

function formatDateWithoutSep(date: string | Date): string {
  const dateInit = new Date(date);
  const year = new Intl.DateTimeFormat("en", { year: "numeric" }).format(
    dateInit
  );
  const month = new Intl.DateTimeFormat("en", { month: "2-digit" }).format(
    dateInit
  );
  const day = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(
    dateInit
  );
  return `${year}-${month}-${day}`;
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
  removeAccent,
  formatCurrency,
  splitMulti,
  getAPI,
  getYear,
  formatDate,
  formatDateWithoutSep,
};
