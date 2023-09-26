import * as React from 'react'

import { Dots } from './dots'
import { PageButton } from './page-button'

type MainPaginationButtonsPropsType = {
  paginationRange: (number | string)[]
  currentPage: number
  onClick: (pageNumber: number) => () => void
}

export const MainPaginationButtons = ({
  paginationRange,
  currentPage,
  onClick,
}: MainPaginationButtonsPropsType) => {
  return (
    <>
      {paginationRange.map((page: number | string, index) => {
        const isSelected = page === currentPage

        if (typeof page !== 'number') return <Dots key={index} />

        return <PageButton key={index} page={page} selected={isSelected} onClick={onClick(page)} />
      })}
    </>
  )
}
