import {useMemo} from "react";
import React from "react"

export const DOTS = '...';

const range = (start, end) => {
    let length = end - start + 1;
    return Array.from({ length }, (_, idx) => idx + start); // return array with elements from start to end and set elements from start value to end value
};
// return the range of numbers to be displayed in our pagination component as array

export const usePagination = ({
    totalCount, //total data available
    pageSize, // max visible in a single page
    siblingCount = 1, // min number of page buttons to be shown on each side of the current one
    currentPage // active page

}) => {
    const paginationRange = useMemo(() => {

        const totalPageCount = Math.ceil(totalCount / pageSize)

        const totalPageNumbers = siblingCount + 5; // sibling + first + last + current + 2 x DOTS

        if (totalPageNumbers >= totalPageCount) {
            return range(1, totalPageCount)
        }

        const leftSiblingIndex = Math.max(currentPage - siblingCount, 1)
        const rightSiblingIndex = Math.min(
            currentPage + siblingCount, totalPageCount
        )


        const shouldShowLeftDots = leftSiblingIndex > 2;
        const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;

        const firstPageIndex = 1;
        const lastPageIndex = totalPageCount;

        if (!shouldShowLeftDots && shouldShowRightDots) {
            let leftItemCount = 3 + 2 * siblingCount;
            let leftRange = range(1, leftItemCount);

            return [...leftRange, DOTS, totalPageCount];
        }


        if (shouldShowLeftDots && !shouldShowRightDots) {

            let rightItemCount = 3 + 2 * siblingCount;
            let rightRange = range(
                totalPageCount - rightItemCount + 1,
                totalPageCount
            );
            return [firstPageIndex, DOTS, ...rightRange];
        }

        if (shouldShowLeftDots && shouldShowRightDots) {
            let middleRange = range(leftSiblingIndex, rightSiblingIndex);
            return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
        }
    }, [totalCount, pageSize, siblingCount, currentPage]); // need to re-run when something in deps changes

    return paginationRange;
};