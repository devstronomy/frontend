import { SortDirection, SortDirectionType } from 'react-virtualized'
import _sortBy from 'lodash/sortBy'

export const sort = <E>(
  arr: ReadonlyArray<E>,
  sortBy?: string,
  sortDirection?: SortDirectionType
): ReadonlyArray<E> => {
  const sorted = _sortBy(arr, sortBy!)
  if (sortDirection === SortDirection.DESC) {
    sorted.reverse()
  }
  return sorted
}
