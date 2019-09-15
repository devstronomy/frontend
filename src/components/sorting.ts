import { SortDirection, SortDirectionType } from 'react-virtualized'
import _sortBy from 'lodash/sortBy'

export const sort = <E>(arr: E[], sortBy?: string, sortDirection?: SortDirectionType): E[] => {
  const sorted = _sortBy(arr, sortBy!)
  if (sortDirection === SortDirection.DESC) {
    sorted.reverse()
  }
  return sorted
}
