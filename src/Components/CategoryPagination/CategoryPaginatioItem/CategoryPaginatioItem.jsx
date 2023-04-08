import {
    ActivePaginationButton,
    PaginationButton,
} from "./CategoryPaginatioItem.styled";

export const PaginationItem = ({
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
                >
                    {page}
                </ActivePaginationButton>
            ) : (
                <PaginationButton
                    type="button"
                    disabled={disabled}
                    onClick={() => onPageChange(page)}
                >
                    {page}
                </PaginationButton>
            )}
        </li>
    );
};
