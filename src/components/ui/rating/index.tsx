import React from 'react'

import { Star, StarOutlined } from '@assets/icons'

import s from './rating.module.scss'

type RatingPropsType = {
  value: number
}
export const Rating = ({ value }: RatingPropsType) => {
  const ratingValue = Math.round(value)

  return (
    <div className={s.rating}>
      {ratingValue > 0 ? <Star /> : <StarOutlined />}
      {ratingValue >= 2 ? <Star /> : <StarOutlined />}
      {ratingValue >= 3 ? <Star /> : <StarOutlined />}
      {ratingValue >= 4 ? <Star /> : <StarOutlined />}
      {ratingValue >= 5 ? <Star /> : <StarOutlined />}
    </div>
  )
}
