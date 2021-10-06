/* eslint-disable @typescript-eslint/strict-boolean-expressions */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function errMsg(err: any): string {
  if (!err) {
    return '';
  }
  return err.message ? `${err.message}` : `${err}`;
}
