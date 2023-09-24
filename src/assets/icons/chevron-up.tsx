import * as React from 'react'
import { SVGProps, Ref, forwardRef, memo } from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} fill="none" ref={ref} {...props}>
    <path
      fill="#fff"
      d="M9.77 7.26a.5.5 0 0 1-.82.38L6.27 5.4 3.6 7.56a.5.5 0 0 1-.7-.07.5.5 0 0 1 .07-.73l3-2.42a.5.5 0 0 1 .63 0l3 2.5a.5.5 0 0 1 .18.42Z"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)
const Memo = memo(ForwardRef)

export default Memo
