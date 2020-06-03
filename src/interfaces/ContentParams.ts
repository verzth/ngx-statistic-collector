export default interface ContentParams {
  /* Mandatory */
  _start: string;
  _end: string;
  action: any;
  /* Optional */
  merge: number;
  columns: string[];
  page: string;
  page_type: string;
  isInteraction: number;
  age: number;
  gender: string;
  type: string;
  category: string;
  id: string;
  attributes: any;
  device: any;
  location: any;
}
