function HexagonBorder({src, width, height}: {src?: string, width: number, height: number}) {
  const color1 = "#A73EE7";
  const color2 = "#00EBFF";


  return(
    <div style={{ position: 'relative', width, height }} className="hexagon-border">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 30 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ position: 'absolute', top: 0, left: 0 }}
      >
        <clipPath id="clip">
          <path
            d="M26.7128 6.8453L16.8564 1.1547C15.6188 0.440169 14.094 0.440169 12.8564 1.1547L3 6.8453C1.7624 7.55983 1 8.88034 1 10.3094V21.6906C1 23.1197 1.7624 24.4402 3 25.1547L12.8564 30.8453C14.094 31.5598 15.6188 31.5598 16.8564 30.8453L26.7128 25.1547C27.9504 24.4402 28.7128 23.1197 28.7128 21.6906V10.3094C28.7128 8.88034 27.9504 7.55983 26.7128 6.8453Z"
          />
        </clipPath>

        {src && <image
          x="0"
          y="0"  
          height="100%" 
          width="100%" 
          clipPath="url(#clip)"
          preserveAspectRatio="xMidYMid slice"
          xlinkHref={src}/>}

        <path
          d="M26.7128 6.8453L16.8564 1.1547C15.6188 0.440169 14.094 0.440169 12.8564 1.1547L3 6.8453C1.7624 7.55983 1 8.88034 1 10.3094V21.6906C1 23.1197 1.7624 24.4402 3 25.1547L12.8564 30.8453C14.094 31.5598 15.6188 31.5598 16.8564 30.8453L26.7128 25.1547C27.9504 24.4402 28.7128 23.1197 28.7128 21.6906V10.3094C28.7128 8.88034 27.9504 7.55983 26.7128 6.8453Z"
          stroke="url(#paint0_linear)"
          strokeWidth={.5}
        />
        
        <defs>
          <linearGradient id="paint0_linear" x1="0.856384" y1="9.5" x2="26.3564" y2="26" gradientUnits="userSpaceOnUse">
            <stop stopColor={color1} />
            <stop offset="1" stopColor={color2} />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
};


export default HexagonBorder