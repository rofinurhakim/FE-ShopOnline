import React from "react";

function Pagination({ page, pagecount, setPage }) {
  const paginate = (option) => {
    switch (option) {
      case "first":
        setPage(1);
        break;
      case "last":
        setPage(pagecount);
        break;
      case "prev":
        if (page > 1) {
          setPage((prevpage) => prevpage - 1);
        }
        break;
      case "next":
        if (page < pagecount) {
          setPage((prevpage) => prevpage + 1);
        }
        break;
      default:
        setPage(1);
    }
  };
  return paginate
}

export default Pagination;