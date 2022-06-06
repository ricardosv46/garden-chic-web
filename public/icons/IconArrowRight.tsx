import * as React from 'react'
import { SVGProps } from 'react'

const IconArrowRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox='0 0 20 20'
    fill='currentColor'
    className='MediaPopupBox__control-icon'
    width='1em'
    height='1em'
    {...props}
  >
    <path d='m6 15 5-5-5-5 1-2 7 7-7 7z' />
  </svg>
)

export default IconArrowRight
