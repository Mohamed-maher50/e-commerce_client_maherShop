import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import ReactPaginate from "react-paginate";

const Pagination = ({ ...props }) => {
  return (
    <ReactPaginate
      pageCount={50}
      previousLabel={<FaChevronLeft />}
      nextLabel={<FaChevronRight />}
      breakLabel="..."
      breakClassName="break-me"
      marginPagesDisplayed={1}
      pageRangeDisplayed={4}
      containerClassName="pagination"
      previousClassName="page-num"
      pageLinkClassName="page-num"
      nextLinkClassName="page-num"
      subContainerClassName="pages pagination"
      activeClassName="active"
      {...props}
    />
  );
};

export default Pagination;
