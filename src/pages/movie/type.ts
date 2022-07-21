export interface IFilterCondition {
  rangeScore: number[];
  rangeTime: number[];
  filterGenresList: number[];
  fromDate: Date | null;
  toDate: Date | null;
}
