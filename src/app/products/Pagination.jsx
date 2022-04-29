import React from "react";

export const Pagination = ({metaData, setCurrentPage}) => {
    const pagesArray = new Array(metaData.totalPages).fill(0);

    const handleOnClick = (e) => {
        if(e.target.dataset.disabled!=='true') setCurrentPage(e.target.dataset.page);
    }

    return (
        <div className="pagination">
            <a
                data-page={1}
                onClick={handleOnClick}
                data-disabled={metaData.currentPage===1}
                className={`${metaData.currentPage!==1 ? "pagination__link" : "pagination__link pagination__link--disabled"}`}
            >First</a>
            <div className="pagination__digits">
                {pagesArray.map((element, index) => (
                    <a
                        key={index}
                        data-page={index+1}
                        onClick={handleOnClick}
                        className={`${index+1 === metaData.currentPage ? "pagination__link pagination__link--active" : "pagination__link"}`}
                    >{index+1}</a>
                    ))}
            </div>
            <a
                data-page={metaData.totalPages}
                onClick={handleOnClick}
                data-disabled={metaData.currentPage===metaData.totalPages}
                className={`${metaData.currentPage!==metaData.totalPages ? "pagination__link" : "pagination__link pagination__link--disabled"}`}
            >Last</a>
        </div>
    )
}