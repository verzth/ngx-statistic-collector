export default interface HitParams {
  /* Mandatory */
  _start: string;
  _end: string;
  /* Optional */
  columns: string[];
  page: string;
  page_type: string;
  isInteraction: number;
  age: number;
  gender: string;
}
