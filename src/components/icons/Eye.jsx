export default function Eye({ className }) {
  return (
    <svg
      className={className}
      height='100%'
      viewBox='0 0 485 337'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g filter='url(#filter0_d_181_192)'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M50.5 142.239L74.8397 114.72L137.533 175.709C142.269 171.883 147.703 167.864 153.643 163.805L113.659 110.353L136.834 94.3904L173.014 151.901C183.999 145.91 196.189 140.345 209.542 136.055L179.108 41.0538L225.187 30L244.247 128.286C251.545 127.475 258.882 127.049 266.257 127.088L283.26 47.1218L316.684 54.8518L292.849 129.562C318.12 134.161 339.199 144.906 356.085 158.394L420.952 79.3943L434.5 92.1874L367.498 168.366C380.891 181.468 390.984 196.116 397.777 209.992L356.202 233.916C356.202 233.916 339.354 194.532 307.639 170.801C311.288 179.149 313.267 188.387 313.267 198.049C313.267 236.003 282.173 267 244.092 267C203.991 267 172.237 232.756 175.032 193.218L210.396 197.469C205.622 214.978 218.976 233.066 237.803 233.066C253.331 233.066 266.219 220.388 266.219 204.774C266.219 163.226 218.781 153.061 184.892 167.361C163.813 176.289 146.849 189.391 123.635 207.209C99.9169 185.101 75.2279 163.844 50.5 142.239Z'
          fill='#5C46B2'
        />
      </g>
      <defs>
        <filter
          id='filter0_d_181_192'
          x='0.5'
          y='0'
          width='484'
          height='337'
          filterUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feFlood floodOpacity='0' result='BackgroundImageFix' />
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          />
          <feOffset dy='20' />
          <feGaussianBlur stdDeviation='25' />
          <feComposite in2='hardAlpha' operator='out' />
          <feColorMatrix
            type='matrix'
            values='0 0 0 0 0.546065 0 0 0 0 0.5375 0 0 0 0 1 0 0 0 0.2 0'
          />
          <feBlend
            mode='normal'
            in2='BackgroundImageFix'
            result='effect1_dropShadow_181_192'
          />
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='effect1_dropShadow_181_192'
            result='shape'
          />
        </filter>
      </defs>
    </svg>
  )
}
