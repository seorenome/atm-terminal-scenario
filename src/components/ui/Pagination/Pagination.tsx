import type { PaginationProps } from './Pagination.types'
import arrowIcon from '../../../assets/icons/cont.svg?url'
import {
  ArrowIcon,
  PageButton,
  PageNumber,
  PaginationRoot,
} from './Pagination.styled'

const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

  return (
    <PaginationRoot>
      <PageButton
        $isArrow
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <ArrowIcon src={arrowIcon} alt="Previous" />
      </PageButton>

      {pages.map((page) => (
        <PageButton
          key={page}
          $active={page === currentPage}
          onClick={() => onPageChange(page)}
        >
          <PageNumber $active={page === currentPage}>{page}</PageNumber>
        </PageButton>
      ))}

      <PageButton
        $isArrow
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <ArrowIcon src={arrowIcon} alt="Next" $reversed />
      </PageButton>
    </PaginationRoot>
  )
}

export default Pagination
