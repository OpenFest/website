export default function Circle({ className }) {
  return (
    <svg
      className={className}
      height='100%'
      viewBox='0 0 473 472'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g filter='url(#filter0_d_181_191)'>
        <circle
          cx='236.5'
          cy='236'
          r='166'
          stroke='#2F1B5D'
          strokeWidth='40'
          shapeRendering='crispEdges'
        />
      </g>
      <defs>
        <filter
          id='filter0_d_181_191'
          x='0.5'
          y='0'
          width='472'
          height='472'
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
          <feOffset />
          <feGaussianBlur stdDeviation='25' />
          <feComposite in2='hardAlpha' operator='out' />
          <feColorMatrix
            type='matrix'
            values='0 0 0 0 0.773556 0 0 0 0 0.327778 0 0 0 0 0.983333 0 0 0 0.2 0'
          />
          <feBlend
            mode='normal'
            in2='BackgroundImageFix'
            result='effect1_dropShadow_181_191'
          />
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='effect1_dropShadow_181_191'
            result='shape'
          />
        </filter>
      </defs>
    </svg>
  )
}
