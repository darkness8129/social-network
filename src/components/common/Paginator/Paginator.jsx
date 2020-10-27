import React from 'react';
import { useState } from 'react';
import styles from './Paginator.module.css';

const Paginator = ({
    totalItemsCount,
    pageSize,
    currentPage,
    onPageChange,
    portionSize = 10,
}) => {
    const numberOfPages = Math.ceil(totalItemsCount / pageSize);
    const numberOfPortions = Math.ceil(numberOfPages / portionSize);
    let [currentPortion, setCurrentPortion] = useState(1);
    const leftBoundary = (currentPortion - 1) * portionSize + 1;
    const rightBoundary = currentPortion * portionSize;
    const pages = [];

    for (let i = 1; i <= numberOfPages; i++) {
        pages.push(i);
    }

    const setNextPortion = () => {
        setCurrentPortion(currentPortion + 1);
    };
    const setPrevPortion = () => {
        setCurrentPortion(currentPortion - 1);
    };

    return (
        <div>
            {currentPortion !== 1 && (
                <button onClick={setPrevPortion}>Prev</button>
            )}
            {pages
                .filter((page) => page >= leftBoundary && page <= rightBoundary)
                .map((page) => {
                    return (
                        <span
                            key={page}
                            onClick={() => onPageChange(page)}
                            className={
                                currentPage === page ? styles.active : null
                            }
                        >
                            {page}
                        </span>
                    );
                })}
            {currentPortion < numberOfPortions && (
                <button onClick={setNextPortion}>Next</button>
            )}
        </div>
    );
};

export default Paginator;
