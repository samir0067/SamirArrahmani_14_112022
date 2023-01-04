const useFilterEmployee = () => {
  function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }

  function getComparator<Key extends keyof any>(
    order: "asc" | "desc",
    orderBy: Key,
  ): (a: { [key in Key]: number | string }, b: { [key in Key]: number | string }) => number {
    return order === "desc"
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }

  function applySortFilter(array: any[], queryData: string, comparator: (arg0: any, arg1: any) => any) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    if (queryData) {
      return array.filter((item: any) =>
        Object.keys(item).some((key) => item[key].toString().toLowerCase().includes(queryData?.toLowerCase().trim())),
      );
    }
    return stabilizedThis.map((el: any[]) => el[0]);
  }

  return { applySortFilter, getComparator };
};

export default useFilterEmployee;
