import * as React from 'react'

import { MainPaginationButtons } from './main-pagination-buttons'
import { NextButton, PrevButton } from './navigation-buttons'
import s from './pagination.module.scss'
import { PerPageSelect } from './per-page-select'
import { usePagination } from './usePagination'

type PaginationConditionals =
  | {
      perPage?: null
      perPageOptions?: never
      onPerPageChange?: never
    }
  | {
      perPage: number
      perPageOptions: number[]
      onPerPageChange?: (itemPerPage: number) => void
    }

export type PaginationProps = {
  totalCount?: number
  page?: number
  onChange?: (page: number) => void
  siblings?: number
  perPage?: number | null
  perPageOptions?: number[]
  onPerPageChange?: (itemPerPage: number) => void
} & PaginationConditionals

export const Pagination = ({
  onChange,
  totalCount = 10,
  page = 1,
  perPage = null,
  perPageOptions,
  onPerPageChange,
  siblings,
}: PaginationProps) => {
  const {
    paginationRange,
    isLastPage,
    isFirstPage,
    handlePreviousPageClicked,
    handleNextPageClicked,
    handleMainPageClicked,
  } = usePagination({
    totalCount,
    page,
    siblings,
    onChange,
  })

  const showPerPageSelect = !!perPage && !!perPageOptions && !!onPerPageChange

  return (
    <div className={s.root}>
      <div className={s.container}>
        <PrevButton onClick={handlePreviousPageClicked} disabled={isFirstPage} />

        <MainPaginationButtons
          currentPage={page}
          onClick={handleMainPageClicked}
          paginationRange={paginationRange}
        />

        <NextButton onClick={handleNextPageClicked} disabled={isLastPage} />
      </div>

      {showPerPageSelect && (
        <PerPageSelect
          perPageOptions={perPageOptions}
          onPerPageChange={onPerPageChange}
          perPage={perPage}
        />
      )}
    </div>
  )
}
