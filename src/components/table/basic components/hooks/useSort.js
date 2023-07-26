import { useState, useMemo, useCallback } from 'react';

const useSort = (data, defaultSortKey, defaultSortDirection) => {
    const [sortKey, setSortKey] = useState(defaultSortKey);
    const [sortDirection, setSortDirection] = useState(defaultSortDirection);

    const sortedData = useMemo(() => {
        const sortedArray = [...data];
        sortedArray.sort((a, b) => {
            if (a[sortKey] < b[sortKey]) {
                return sortDirection === 'asc' ? -1 : 1;
            }
            if (a[sortKey] > b[sortKey]) {
                return sortDirection === 'asc' ? 1 : -1;
            }
            return 0;
        });
        return sortedArray;
    }, [data, sortKey, sortDirection]);

    const handleSort = useCallback((key, defaultDirection = 'asc') => {
        if (sortKey === key) {
            setSortDirection((prevDirection) => (prevDirection === 'asc' ? 'desc' : 'asc'));
        } else {
            setSortKey(key);
            setSortDirection(defaultDirection);
        }
    }, [sortKey]);

    return { sortedData, sortKey, sortDirection, handleSort };
};

export default useSort;
