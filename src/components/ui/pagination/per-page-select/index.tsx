import * as React from 'react'

import s from './per-page-select.module.scss'

import { SuperSelect } from '@/components/ui/select'

export type PerPageSelectPropsType = {
  perPage: number
  perPageOptions: number[]
  onPerPageChange: (itemPerPage: number) => void
}

export const PerPageSelect = ({
  perPage,
  perPageOptions,
  onPerPageChange,
}: PerPageSelectPropsType) => {
  return (
    <div className={s.selectBox}>
      Показать
      <SuperSelect value={perPage} options={perPageOptions} onValueChange={onPerPageChange} />
      на странице
    </div>
  )
}
