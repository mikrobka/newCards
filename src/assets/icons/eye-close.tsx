import * as React from 'react'
import { SVGProps, Ref, forwardRef, memo } from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" ref={ref} {...props}>
    <path
      fill="#fff"
      d="M12 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm3.29 4.62L14 16.78l-.07-.07-1.27-1.27a3.5 3.5 0 0 1-4.1-4.05l-2-2L5 7.87a15.89 15.89 0 0 0-2.87 3.63 1 1 0 0 0 0 1c.63 1.09 4 6.5 9.89 6.5h.25c1.1-.03 2.2-.26 3.23-.67l-.21-.21ZM8.59 5.76l2.8 2.8a3.5 3.5 0 0 1 4.05 4.05l2.68 2.68.84.84a15.9 15.9 0 0 0 2.91-3.63 1 1 0 0 0 0-1c-.64-1.11-4.16-6.68-10.14-6.5-1.1.03-2.2.26-3.23.67l.09.09Z"
    />
    <path
      fill="#fff"
      d="M20.71 19.29 19.41 18l-2-2-9.52-9.53L6.42 5 4.71 3.29a1 1 0 1 0-1.42 1.42L5.53 7l1.75 1.7 7.31 7.3.07.07L16 17.41l.59.59 2.7 2.71a1 1 0 1 0 1.42-1.42Z"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export const EyeClose = memo(ForwardRef)
