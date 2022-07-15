export const MyWalletIcon = ({ fill, connected, ...props }: any) => {
  if (connected === 'true')
    return (
      <svg width={40} height={40} {...props}>
        <path d="m36.75 9.55-3.1-3.45H7.45l-3.4 3.35V31.1l3.05 3.35c.033.033.083.05.15.05H33.8l2.95-3.2V9.55Zm-11.7 5.25H36.2v10.1H25.05V14.8ZM4.6 9.75l3.05-3 7.7 12.8-8.1 14.25-2.65-2.95V9.75ZM7.75 33.9l7.9-13.85L24.4 33.9H7.75Zm25.5-27.35L36.2 9.8v4.4H24.5v11.3h11.7v5.55l-2.6 2.85h-8.55l-8.8-13.95a.941.941 0 0 1 .1.15L8.25 6.55h25Zm-6.9 10.35v6.15h5.5V16.9h-5.5Zm.55 5.55v-4.9h4.4v4.9h-4.4Z" />
        <path
          d="m36.2 9.8-2.95-3.25h-25l8.1 13.55a.941.941 0 0 0-.1-.15l8.8 13.95h8.55l2.6-2.85V25.5H24.5V14.2h11.7V9.8Z"
          fill="url(#a)"
        />
        <path d="M15.65 20.05 7.75 33.9H24.4l-8.75-13.85Z" fill="url(#b)" />
        <path d="m7.65 6.75-3.05 3v21.1l2.65 2.95 8.1-14.25-7.7-12.8Z" fill="url(#c)" />
        <path d="M36.2 14.8H25.05v10.1H36.2V14.8Zm-9.85 8.25V16.9h5.5v6.15h-5.5Z" fill="url(#d)" />
        <path d="M26.9 17.55v4.9h4.4v-4.9h-4.4Z" fill="url(#e)" />
        <defs>
          <linearGradient
            id="a"
            x1={8.688}
            y1={16.188}
            x2={35.712}
            y2={24.212}
            gradientUnits="userSpaceOnUse"
          >
            <stop offset={0.106} stopColor="#FFC63B" />
            <stop offset={0.973} stopColor="#976503" />
          </linearGradient>
          <linearGradient
            id="b"
            x1={7.725}
            y1={26.9}
            x2={24.375}
            y2={26.9}
            gradientUnits="userSpaceOnUse"
          >
            <stop offset={0.106} stopColor="#FFC63B" />
            <stop offset={0.973} stopColor="#976503" />
          </linearGradient>
          <linearGradient
            id="c"
            x1={4.575}
            y1={20.25}
            x2={15.325}
            y2={20.25}
            gradientUnits="userSpaceOnUse"
          >
            <stop offset={0.106} stopColor="#FFC63B" />
            <stop offset={0.973} stopColor="#976503" />
          </linearGradient>
          <linearGradient
            id="d"
            x1={25.025}
            y1={19.8}
            x2={36.175}
            y2={19.8}
            gradientUnits="userSpaceOnUse"
          >
            <stop offset={0.106} stopColor="#FFC63B" />
            <stop offset={0.973} stopColor="#976503" />
          </linearGradient>
          <linearGradient
            id="e"
            x1={26.899}
            y1={19.95}
            x2={31.299}
            y2={19.95}
            gradientUnits="userSpaceOnUse"
          >
            <stop offset={0.106} stopColor="#FFC63B" />
            <stop offset={0.973} stopColor="#976503" />
          </linearGradient>
        </defs>
      </svg>
    )

  return (
    <svg width="40" height="40" viewBox="0 0 40 40" {...props}>
      <path
        d="M36.7498 9.55005L33.5998 6.05005H7.4998L4.0498 9.45005V31.1L7.0998 34.4501C7.13314 34.4834 7.18314 34.5 7.2498 34.5H33.7998L36.7498 31.3V9.55005ZM33.2498 6.55005L36.1998 9.80005V14.2H24.4998V25.5H36.1998V31.05L33.5998 33.9001H25.0498L15.9498 19.45C15.9498 19.3834 15.9331 19.3167 15.8998 19.25L8.2498 6.55005H33.2498ZM25.0498 14.8H36.1998V24.9H25.0498V14.8ZM4.5998 9.75005L7.6498 6.75005L15.3498 19.55L7.2498 33.8L4.5998 30.85V9.75005ZM7.7498 33.9001L15.6498 20.05L24.3998 33.9001H7.7498ZM26.3498 16.9V23.05H31.8498V16.9H26.3498ZM26.8998 22.4501V17.55H31.2998V22.4501H26.8998Z"
        fill={fill || 'white'}
      />
    </svg>
  )
}
