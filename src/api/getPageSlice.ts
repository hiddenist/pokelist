export const getPageSlice = <T>(
  list: ReadonlyArray<T>,
  page: number,
  perPage: number
): ReadonlyArray<T> => {
  return list.slice(
    Math.max(page - 1, 0) * perPage,
    Math.max(page, 0) * perPage
  )
}
