export const calculateMaxPage = (data: unknown[], itemsPerPage:number):number => {
  return Math.max(1, Math.ceil(data.length / itemsPerPage));
}