export function filterData(searchText, resturants) {
  // console.log(searchText);
  // console.log(resturants);
  // if (searchText.trim() === "") {
  //    return resturants;
  // }else {
  const filterData = resturants.filter((res) =>
    // console.log("res", res.info.name.toLowerCase().includes(searchText?.toLowerCase()))
    res?.info?.name?.toLowerCase().includes(searchText?.toLowerCase())
  );
  // }
  return filterData
}