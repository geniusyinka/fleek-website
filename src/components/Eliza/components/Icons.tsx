export const RedCross = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 10.7071L14.6464 15.3536C14.8417 15.5488 15.1583 15.5488 15.3536 15.3536C15.5488 15.1583 15.5488 14.8417 15.3536 14.6464L10.7071 10L15.3536 5.35355C15.5488 5.15829 15.5488 4.84171 15.3536 4.64645C15.1583 4.45118 14.8417 4.45118 14.6464 4.64645L10 9.29289L5.35355 4.64645C5.15829 4.45118 4.84171 4.45118 4.64645 4.64645C4.45118 4.84171 4.45118 5.15829 4.64645 5.35355L9.29289 10L4.64645 14.6464C4.45118 14.8417 4.45118 15.1583 4.64645 15.3536C4.84171 15.5488 5.15829 15.5488 5.35355 15.3536L10 10.7071Z"
      fill="#FF3B30"
    />
  </svg>
);

export const GreenCheck = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.6616 4.52965C16.9213 4.75695 16.9477 5.1518 16.7204 5.41157L7.97036 15.4116C7.85645 15.5418 7.69368 15.6189 7.5208 15.6247C7.34791 15.6304 7.18037 15.5643 7.05806 15.442L3.30806 11.6919C3.06398 11.4479 3.06398 11.0521 3.30806 10.8081C3.55214 10.564 3.94786 10.564 4.19194 10.8081L7.46956 14.0857L15.7796 4.58844C16.0069 4.32867 16.4018 4.30235 16.6616 4.52965Z"
      fill="#3DD68C"
    />
  </svg>
);

export const PendingDots = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="3"
      cy="10"
      r="2"
      style={{
        animation: 'colorCycle 3s infinite',
        animationDelay: '0.5s',
      }}
    />
    <circle
      cx="10"
      cy="10"
      r="2"
      style={{
        animation: 'colorCycle 3s infinite',
        animationDelay: '1s',
      }}
    />
    <circle
      cx="17"
      cy="10"
      r="2"
      style={{
        animation: 'colorCycle 3s infinite',
        animationDelay: '1.5s',
      }}
    />
    <style>
      {`
          @keyframes colorCycle {
            0% { fill: #606060; }
            33% { fill: #B4B4B4; }
            66% { fill: #2A2A2A; }
            100% { fill: #606060; }
          }
        `}
    </style>
  </svg>
);

export const ClipboardCopy = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.75 15H5.75C5.15326 15 4.58097 14.7629 4.15901 14.341C3.73705 13.919 3.5 13.3467 3.5 12.75V5.75C3.5 5.15326 3.73705 4.58097 4.15901 4.15901C4.58097 3.73705 5.15326 3.5 5.75 3.5H12.75C13.3467 3.5 13.919 3.73705 14.341 4.15901C14.7629 4.58097 15 5.15326 15 5.75V12.75C15 13.3467 14.7629 13.919 14.341 14.341C13.919 14.7629 13.3467 15 12.75 15Z"
      fill="currentColor"
    />
    <path
      d="M5 2.5H12.3713C12.2157 2.06164 11.9283 1.68215 11.5485 1.41359C11.1687 1.14503 10.7151 1.00056 10.25 1H3.25C2.65326 1 2.08097 1.23705 1.65901 1.65901C1.23705 2.08097 1 2.65326 1 3.25V10.25C1.00056 10.7151 1.14503 11.1687 1.41359 11.5485C1.68215 11.9283 2.06164 12.2157 2.5 12.3713V5C2.5 4.33696 2.76339 3.70107 3.23223 3.23223C3.70107 2.76339 4.33696 2.5 5 2.5Z"
      fill="currentColor"
    />
  </svg>
);

export const CloudUpload = () => (
  <svg
    width="50"
    height="35"
    viewBox="0 0 50 35"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M41.1627 11.7652C38.9207 3.79129 29.8629 -1.05017 20.9313 0.951477C13.9515 2.51576 8.8834 7.90149 8.36122 14.3093C3.40527 15.0389 0.0501836 19.2172 0.867474 23.6418C1.59401 27.5753 5.41169 30.456 9.877 30.4401H17.4559V27.7336H9.877C6.52845 27.7336 3.81387 25.3101 3.81387 22.3206C3.81387 19.331 6.52845 16.9075 9.877 16.9075C10.7142 16.9075 11.3928 16.3017 11.3928 15.5543C11.3852 8.82779 17.4869 3.36942 25.0212 3.36273C31.5432 3.3569 37.1576 7.47335 38.4192 13.1861C38.5438 13.7565 39.0622 14.1922 39.7076 14.2687C43.8515 14.7955 46.7324 18.2217 46.1424 21.9213C45.6125 25.2434 42.4354 27.7169 38.6769 27.7336H32.6137V30.4401H38.6769C44.5369 30.4243 49.2729 26.1703 49.2551 20.9386C49.2403 16.5837 45.9015 12.7987 41.1627 11.7652Z"
      fill="#F5E147"
    />
    <path
      d="M23.9586 17.2998L17.8955 22.7128L20.0328 24.6209L23.5191 21.522V34.4997H26.5506V21.522L30.0218 24.6209L32.159 22.7128L26.0959 17.2998C25.5046 16.7751 24.5499 16.7751 23.9586 17.2998Z"
      fill="#F5E147"
    />
  </svg>
);

export const Expand = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.5 9.5C13.7761 9.5 14 9.72386 14 10V13.5C14 13.7761 13.7761 14 13.5 14H10C9.72386 14 9.5 13.7761 9.5 13.5C9.5 13.2239 9.72386 13 10 13H13V10C13 9.72386 13.2239 9.5 13.5 9.5Z"
      fill="#B4B4B4"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.1464 9.14649C9.34164 8.9512 9.65822 8.95116 9.85351 9.1464L13.5348 12.8267C13.73 13.022 13.7301 13.3385 13.5348 13.5338C13.3396 13.7291 13.023 13.7291 12.8277 13.5339L9.14649 9.8536C8.9512 9.65836 8.95116 9.34178 9.1464 9.14649Z"
      fill="#B4B4B4"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 2.5C2 2.22386 2.22386 2 2.5 2H6C6.27614 2 6.5 2.22386 6.5 2.5C6.5 2.77614 6.27614 3 6 3H3V6C3 6.27614 2.77614 6.5 2.5 6.5C2.22386 6.5 2 6.27614 2 6V2.5Z"
      fill="#B4B4B4"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.46518 2.46588C2.66042 2.2706 2.977 2.27056 3.17229 2.46579L6.85354 6.14611C7.04882 6.34134 7.04887 6.65793 6.85363 6.85321C6.65839 7.0485 6.34181 7.04854 6.14652 6.8533L2.46527 3.17299C2.26998 2.97775 2.26994 2.66117 2.46518 2.46588Z"
      fill="#B4B4B4"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.5 2.5C9.5 2.22386 9.72386 2 10 2H13.5C13.7761 2 14 2.22386 14 2.5V6C14 6.27614 13.7761 6.5 13.5 6.5C13.2239 6.5 13 6.27614 13 6V3H10C9.72386 3 9.5 2.77614 9.5 2.5Z"
      fill="#B4B4B4"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.5338 2.46503C13.7291 2.66026 13.7291 2.97685 13.5339 3.17213L9.8536 6.85338C9.65836 7.04867 9.34178 7.04871 9.14649 6.85347C8.9512 6.65824 8.95116 6.34165 9.1464 6.14637L12.8267 2.46512C13.022 2.26983 13.3385 2.26979 13.5338 2.46503Z"
      fill="#B4B4B4"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.5 9.5C2.77614 9.5 3 9.72386 3 10V13H6C6.27614 13 6.5 13.2239 6.5 13.5C6.5 13.7761 6.27614 14 6 14H2.5C2.22386 14 2 13.7761 2 13.5V10C2 9.72386 2.22386 9.5 2.5 9.5Z"
      fill="#B4B4B4"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.85352 9.1464C7.04881 9.34164 7.04885 9.65822 6.85361 9.85351L3.1733 13.5348C2.97806 13.73 2.66148 13.7301 2.46619 13.5348C2.27091 13.3396 2.27087 13.023 2.4661 12.8277L6.14642 9.14649C6.34165 8.9512 6.65824 8.95116 6.85352 9.1464Z"
      fill="#B4B4B4"
    />
  </svg>
);

export const Bolt = ({ variant }: { variant?: 'small' }) =>
  variant === 'small' ? (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.7365 0.0440924C19.8713 -0.0831111 20.0763 0.0903391 19.9709 0.242402L15.2549 7.04263C15.1807 7.14964 15.2656 7.29399 15.3961 7.28267L18.1684 7.04222C18.3064 7.03025 18.3897 7.19022 18.2998 7.29482L13.5419 12.835C13.4521 12.9397 13.5353 13.0996 13.6733 13.0876L16.6586 12.8287C16.8046 12.8161 16.8851 12.9929 16.7789 13.093L5.26353 23.9559C5.12868 24.0831 4.92364 23.9096 5.0291 23.7576L9.8071 16.8679C9.88131 16.7609 9.79642 16.6165 9.66594 16.6278L6.83434 16.8734C6.69677 16.8854 6.61339 16.7264 6.70226 16.6216L11.3202 11.1762C11.4091 11.0714 11.3257 10.9123 11.1881 10.9243L8.34145 11.1712C8.19545 11.1839 8.11499 11.007 8.22117 10.9069L19.7365 0.0440924Z"
        fill="#B4B4B4"
      />
    </svg>
  ) : (
    <svg
      width="22"
      height="45"
      viewBox="0 0 22 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.3695 13.0981L12.7018 24.2968L18.54 23.1037C18.6552 23.2863 18.7704 23.469 18.8856 23.6516L0.661202 45H0L7.49488 31.1342L1.98736 32.2587C1.81079 32.01 1.79577 31.992 1.61919 31.7433L9.0502 20.7429L3.46755 21.8819C3.29098 21.6115 3.29474 21.6115 3.11817 21.3376L21.3313 0H22L14.6066 13.6856L20.0014 12.5827C20.1817 12.8314 20.193 12.8494 20.3695 13.0981Z"
        fill="white"
      />
    </svg>
  );

export const LoadingSpinner = () => (
  <svg
    width="34"
    height="33"
    viewBox="0 0 34 33"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      animation: 'spin 1s linear infinite',
    }}
    aria-label="Loading spinner"
  >
    <path
      d="M32 16.5C32 24.7843 25.2843 31.5 17 31.5C8.71573 31.5 2 24.7843 2 16.5C2 8.21573 8.71573 1.5 17 1.5C25.2843 1.5 32 8.21573 32 16.5Z"
      stroke="#606060"
      strokeWidth="2.42308"
    />
    <path
      d="M2 16.5C2 8.21573 8.71573 1.5 17 1.5"
      stroke="white"
      strokeWidth="2.42308"
      strokeLinecap="round"
    />
    <style>
      {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
    </style>
  </svg>
);
