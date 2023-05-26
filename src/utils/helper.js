export function filterData(searchText, resturants) {
  // console.log(searchText);
  // console.log(resturants);
  // if (searchText.trim() === "") {
  //    return resturants;
  // }else {
  const filterData = resturants.filter((res) =>
    res?.data?.name?.toLowerCase().includes(searchText?.toLowerCase())
  );
  // }
  return filterData
}