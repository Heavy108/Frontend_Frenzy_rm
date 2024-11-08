'use client'
import React, { useState } from "react";
import Pagination from "./Pagination";
import style from "../css/MagCluster.module.css";
import Magazine from "./Magazine_Frame_1";

function Mag_Section({  Data, MagazinesPerPage}) {
  const [currentPage, setCurrentPage] = useState(1);
 
  const lastIndex = currentPage * MagazinesPerPage;
  const firstIndex = lastIndex - MagazinesPerPage;
  const records = Data.slice(firstIndex, lastIndex);
  const npage = Math.ceil(Data.length / MagazinesPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  const handlePrevPage = () => {
    if (currentPage !== firstIndex) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage !== lastIndex) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleChangePage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className={style.All_magazine}>
      <center className={style.mag_head}>
        <h4>Today's Special</h4>
      </center>

      {records.map((items, index) => (
        <Magazine
          key={index}
          {...items} // Passing  all properties from 'items' as props
        />
      ))}

      <Pagination
        currentPage={currentPage}
        handlePrevPage={handlePrevPage}
        handleNextPage={handleNextPage}
        handleChangePage={handleChangePage}
        numbers={numbers}
        npage={npage}
        firstIndex={firstIndex}
        lastIndex={lastIndex}
        data={Data.length}
      />
    </div>
  );
}

export default Mag_Section;
