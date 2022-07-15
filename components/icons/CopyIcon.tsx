type Props = {
  color: string
}

const defaultColor = '#04AFBA' // check this color and use theme

export const CopyIcon = ({ color, ...props }: any) => (
  <svg
    width="14"
    height="16"
    viewBox="0 0 14 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3.46875 9.34617C3.46875 7.65386 3.46875 5.92309 3.46875 4.23078C3.46875 3.38463 3.82807 3.00002 4.74632 3.00002C7.3813 3.00002 10.0163 3.00002 12.6513 3.00002C13.5296 3.00002 13.8889 3.38463 13.8889 4.19232C13.8889 7.6154 13.8889 11.0769 13.8889 14.5C13.8889 15.3077 13.4897 15.6923 12.6513 15.6923C10.0163 15.6923 7.3813 15.6923 4.70639 15.6923C3.86799 15.6923 3.46875 15.3077 3.46875 14.5385C3.46875 12.7692 3.46875 11.0769 3.46875 9.34617ZM8.65886 6.34617C9.53719 6.34617 10.3756 6.34617 11.2539 6.34617C11.5334 6.34617 11.7729 6.30771 11.7729 6.00001C11.7729 5.69232 11.5334 5.69232 11.2539 5.69232C9.53719 5.69232 7.78054 5.69232 6.06381 5.69232C5.78434 5.69232 5.5448 5.73078 5.5448 6.03848C5.5448 6.34617 5.78434 6.34617 6.06381 6.34617C6.90221 6.34617 7.78054 6.34617 8.65886 6.34617ZM8.61894 9.00002C9.49727 9.00002 10.3756 9.00002 11.2539 9.00002C11.5334 9.00002 11.7729 8.96155 11.7729 8.65386C11.7729 8.34617 11.4935 8.34617 11.2539 8.34617C9.53719 8.34617 7.78054 8.34617 6.06381 8.34617C5.78434 8.34617 5.5448 8.38463 5.5448 8.69232C5.5448 9.00001 5.82426 9.00002 6.06381 9.00002C6.90221 9.00002 7.74061 9.00002 8.61894 9.00002ZM7.26153 11.6923C7.66076 11.6923 8.09993 11.7308 8.49917 11.6923C8.65886 11.6923 8.81856 11.5 8.97825 11.3846C8.81856 11.2692 8.69879 11.0769 8.53909 11.0385C7.70069 11 6.82236 11 5.98396 11.0385C5.82426 11.0385 5.5448 11.2308 5.5448 11.3462C5.50487 11.6154 5.74442 11.6923 6.02388 11.6923C6.42312 11.6539 6.86229 11.6923 7.26153 11.6923Z"
      fill={color || defaultColor}
    />
    <path
      d="M11.0951 2.30769C10.8955 2.30769 10.7358 2.30769 10.5761 2.30769C8.65971 2.30769 6.70344 2.30769 4.78709 2.30769C3.42967 2.30769 2.79089 2.96154 2.79089 4.26923C2.79089 7 2.79089 9.76923 2.79089 12.5C2.79089 12.6538 2.79089 12.8077 2.79089 13C2.35173 13 1.91256 13.0385 1.51332 13C0.994311 12.9231 0.714844 12.5 0.714844 11.9231C0.714844 9.96154 0.714844 7.96154 0.714844 6C0.714844 4.53846 0.714844 3.03846 0.714844 1.57692C0.714844 0.692309 1.07416 0.346155 1.99241 0.346155C4.58747 0.307693 7.22245 0.307693 9.81751 0.307693C10.6958 0.307693 11.0951 0.653847 11.0951 1.53846C11.0951 1.76923 11.0951 2.03846 11.0951 2.30769Z"
      fill={color || defaultColor}
    />
  </svg>
)