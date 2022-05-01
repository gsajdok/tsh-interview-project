import React, {useEffect, useState} from "react";

export const Pagination = ({metaData, setCurrentPage}) => {
    const [leftPages, setLeftPages] = useState([]);
    const [showSpacer, setShowSpacer] = useState(false);
    const [rightPages, setRightPages] = useState([]);

    useEffect(() => {
        if(metaData.totalPages<=6) {
            setLeftPages(new Array(metaData.totalPages).fill(0).map((e, i) => i+1));
            setRightPages([]);
            setShowSpacer(false);
        } else {
            if(metaData.currentPage >= metaData.totalPages-4) {
                setShowSpacer(false);
            } else {setShowSpacer(true);}
            if(metaData.currentPage<=1) {
                setLeftPages([1, 2, 3]);
            } else if(metaData.currentPage >= metaData.totalPages-3) {
                setLeftPages([metaData.totalPages-5, metaData.totalPages-4, metaData.totalPages-3])
            } else {
                setLeftPages([metaData.currentPage-1, metaData.currentPage, metaData.currentPage+1]);
            }
            setRightPages([metaData.totalPages-2, metaData.totalPages-1, metaData.totalPages])
        }

    }, [metaData])

    // const pagesArray = new Array(metaData.totalPages).fill(0);

    const handleOnClick = (e) => {
        if(e.target.dataset.disabled!=='true') {
            setCurrentPage(e.target.dataset.page);
            window.scrollTo({top: 0, behavior: 'smooth'});
        }
    }

    if(metaData.totalItems===0) {
        return null
    } else {
        return (
            <div className="pagination">
                <a
                    data-page={1}
                    onClick={handleOnClick}
                    data-disabled={metaData.currentPage===1}
                    className={`${metaData.currentPage!==1 ? "pagination__link" : "pagination__link pagination__link--disabled"}`}
                >First</a>
                <div className="pagination__digits">
                    {leftPages.map(e => (
                        <a
                            key={e}
                            data-page={e}
                            onClick={handleOnClick}
                            className={`${e === metaData.currentPage ? "pagination__link pagination__link--active" : "pagination__link"}`}
                        >{e}</a>
                    ))}
                    {showSpacer && <span className="pagination__spacer">...</span>}
                    {rightPages.map(e => (
                        <a
                            key={e}
                            data-page={e}
                            onClick={handleOnClick}
                            className={`${e === metaData.currentPage ? "pagination__link pagination__link--active" : "pagination__link"}`}
                        >{e}</a>
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
}