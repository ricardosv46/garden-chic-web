import * as React from 'react'
import { SVGProps } from 'react'

const IconChevronLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    stroke='currentColor'
    fill='currentColor'
    strokeWidth={0}
    viewBox='0 0 24 24'
    height='1em'
    width='1em'
    xmlns='http://www.w3.org/2000/svg'
    {...props}>
    <path d='M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z' stroke='none' />
  </svg>
)

export default IconChevronLeft
