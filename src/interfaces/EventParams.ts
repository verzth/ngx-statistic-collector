export default interface EventParams {
  /* Mandatory */
  _start: string;
  _end: string;
  name: any;
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
  isOk: number;
  status: string;
  status_number: string;
  status_code: string;
  status_message: string;
}
