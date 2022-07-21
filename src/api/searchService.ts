import { configs } from "@/configs";

const getAPI = (ROOT_API: string) =>
  configs.api.BASE_URL + ROOT_API + configs.api.API_KEY;

export const a1223 = getAPI(
  "/remote/panel?panel=popular_scroller&group=on-tv/"
);
