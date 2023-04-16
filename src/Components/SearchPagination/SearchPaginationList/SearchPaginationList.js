import {
    ActivePaginationButton,
    PaginationButton,
} from "./SearchPaginationList.styled";

const SearchPaginationList = ({
    page,
    onPageChange,
    disabled,
    currentPage,
}) => {
    const active = page === currentPage;

    return (
        <li>
            {active ? (
                <ActivePaginationButton
                    type="button"
                    disabled={disabled}
                    onClick={() => onPageChange(page)}
                    aria-label="pagination button"
                >
                    {page}
                </ActivePaginationButton>
            ) : (
                <PaginationButton
                    type="button"
                    disabled={disabled}
                    onClick={() => onPageChange(page)}
                    aria-label="pagination button"
                >
                    {page}
                </PaginationButton>
            )}
        </li>
    );
};

export default SearchPaginationList;