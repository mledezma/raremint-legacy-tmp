export const AvatarPlaceholder = (props: any) => (
  <svg width={182} height={182} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle
      cx={91}
      cy={91}
      r={89}
      fill="#4A4A4A"
      stroke="#BEBEBE"
      strokeWidth={4}
      strokeDasharray="5 5"
    />
    <g clipPath="url(#a)" fill="#fff">
      <path d="M52.297 80.212C71.096 91 92.635 73.15 85.39 52.162h38.772c6.07 0 8.812 2.746 8.812 8.63v64.731c0 6.081-2.742 8.827-8.812 8.827H61.109c-5.875 0-8.616-2.746-8.616-8.631v-43.35c-.392-.588-.196-1.373-.196-2.157Zm40.143 41.192h27.414c.783 0 1.567-.393 2.35-.785-.392-.784-.588-1.569-.979-2.158-3.917-5.1-7.833-10.396-11.749-15.496-2.742-3.53-4.112-3.727-7.246-.392-3.524 3.531-7.245 3.335-9.986-.981a502.128 502.128 0 0 1-8.616-13.142c-1.567-2.354-2.35-2.354-3.917.196-5.482 10.004-10.965 19.812-16.448 29.815-1.37 2.55-1.175 2.943 1.762 2.943H92.44Zm17.427-56.296c-5.678-.197-10.574 4.315-10.574 10.004-.196 5.884 4.308 10.396 9.987 10.592 5.874.196 10.378-4.316 10.574-10.004 0-5.689-4.308-10.396-9.987-10.592Z" />
      <path d="M64.24 43.727c9.4 0 17.037 7.65 16.841 17.065 0 9.416-7.637 17.066-17.036 17.066-9.4 0-16.84-7.65-17.036-16.87.196-9.611 7.833-17.261 17.232-17.261Zm8.42 17.261c-2.936-3.138-5.874-5.884-8.224-8.434-2.74 2.746-5.482 5.492-8.224 8.042.588.785 1.175 1.57 1.763 2.55 1.566-1.373 2.937-2.746 4.503-4.315v10.788h3.72V59.027c1.763 1.569 2.938 2.746 4.309 4.119l2.154-2.158Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" transform="translate(38 40)" d="M0 0h103v102H0z" />
      </clipPath>
    </defs>
  </svg>
)
