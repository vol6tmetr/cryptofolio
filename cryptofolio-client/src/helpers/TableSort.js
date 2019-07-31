const TableSort = {
  compareNumbers: (a, b, sorting, column_name) => {
    if (sorting[column_name] === 'desc') {
      return a[column_name] - b[column_name]
    } else {
      return b[column_name] - a[column_name]
    }
  },

  compareStrings: (a, b, sorting, column_name) => {
    if (sorting[column_name] === 'desc') {
      return a < b ? -1 : 1
    } else {
      return a < b ? 1 : -1
    }
  },

  getSorting: (sorting, column_name) => {
    return sorting[column_name] === 'desc' ? 'asc' : 'desc'
  }
}

export default TableSort