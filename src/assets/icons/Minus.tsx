type MinusProps = {
  onClick: () => void;
};

export default function Minus({ onClick }: MinusProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="4"
      viewBox="0 0 12 4"
      fill="none"
      onClick={onClick}
      style={{ cursor: 'pointer' }}
    >
      <path
        d="M11.3571 3.33214C11.7134 3.33214 12 3.04554 12 2.68929V0.642857C12 0.286607 11.7134 0 11.3571 0H0.642857C0.286607 0 0 0.286607 0 0.642857V2.68929C0 3.04554 0.286607 3.33214 0.642857 3.33214H11.3571Z"
        fill="#FF7E1B"
      />
      <mask
        id="mask0_0_301"
        style={{ maskType: 'luminance' }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="12"
        height="4"
      >
        <path
          d="M11.3571 3.33214C11.7134 3.33214 12 3.04554 12 2.68929V0.642857C12 0.286607 11.7134 0 11.3571 0H0.642857C0.286607 0 0 0.286607 0 0.642857V2.68929C0 3.04554 0.286607 3.33214 0.642857 3.33214H11.3571Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask0_0_301)"></g>
    </svg>
  );
}
