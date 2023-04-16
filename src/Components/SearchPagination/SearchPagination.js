import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

import { useMedia } from "hooks";

import  SearchPaginationList  from "./SearchPaginationList";
import { PaginationList } from "./SearchPagination.styled";

const range = (start, end) => {
    return [...Array(end - start).keys()].map((el) => el + start);
};

const getPagesCut = ({ totalPages, pagesCutCount, currentPage }) => {
    const ceiling = Math.ceil(pagesCutCount / 2);
    const floor = Math.floor(pagesCutCount / 2);

    if (totalPages < pagesCutCount) {
        return { start: 1, end: totalPages + 1 };
    }

    if (currentPage >= 1 && currentPage <= ceiling) {
        return { start: 1, end: pagesCutCount + 1 };
    }

    if (currentPage + floor >= totalPages) {
        return { start: totalPages - pagesCutCount + 1, end: totalPages + 1 };
    }

    return {
        start: currentPage - ceiling + 1,
        end: currentPage + floor + 1,
    };
};

const SearchPagination = ({
    currentPage,
    totalPages,
    onPageChange,
}) => {
    const { isMobileScreen } = useMedia();
    const paginationPages = isMobileScreen ? 5 : 8;

    const pagesCut = getPagesCut({
        totalPages,
        pagesCutCount:
            totalPages <= paginationPages ? totalPages : paginationPages,
        currentPage,
    });

    const pages = range(pagesCut.start, pagesCut.end);

    const isFirstPage = currentPage === 1;
    const isLastPage = currentPage === totalPages;

    return (
        <PaginationList>
            <SearchPaginationList
                page={<BsChevronLeft size={18} />}
                onPageChange={() => onPageChange(1)}
                disabled={isFirstPage}
            />

            {pages.map((page) => (
                <SearchPaginationList
                    page={page}
                    currentPage={currentPage}
                    key={page}
                    onPageChange={onPageChange}
                />
            ))}

            <SearchPaginationList
                page={<BsChevronRight size={18} />}
                onPageChange={() => onPageChange(totalPages)}
                disabled={isLastPage}
            />
        </PaginationList>
    );
};

export default SearchPagination;