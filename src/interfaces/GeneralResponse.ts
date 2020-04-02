export interface GeneralResponse<A> {
  status: number;
  status_number: string;
  status_code: string;
  status_message: string;
  data: A;
}
