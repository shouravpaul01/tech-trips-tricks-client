import * as React from "react";

import { IconSvgProps } from "@/src/types";

export const Logo: React.FC<IconSvgProps> = ({
  size = 36,
  width,
  height,
  ...props
}) => (
  <svg
    fill="none"
    height={size || height}
    viewBox="0 0 32 32"
    width={size || width}
    {...props}
  >
    <path
      clipRule="evenodd"
      d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);

export const DiscordIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <path
        d="M14.82 4.26a10.14 10.14 0 0 0-.53 1.1 14.66 14.66 0 0 0-4.58 0 10.14 10.14 0 0 0-.53-1.1 16 16 0 0 0-4.13 1.3 17.33 17.33 0 0 0-3 11.59 16.6 16.6 0 0 0 5.07 2.59A12.89 12.89 0 0 0 8.23 18a9.65 9.65 0 0 1-1.71-.83 3.39 3.39 0 0 0 .42-.33 11.66 11.66 0 0 0 10.12 0q.21.18.42.33a10.84 10.84 0 0 1-1.71.84 12.41 12.41 0 0 0 1.08 1.78 16.44 16.44 0 0 0 5.06-2.59 17.22 17.22 0 0 0-3-11.59 16.09 16.09 0 0 0-4.09-1.35zM8.68 14.81a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.93 1.93 0 0 1 1.8 2 1.93 1.93 0 0 1-1.8 2zm6.64 0a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.92 1.92 0 0 1 1.8 2 1.92 1.92 0 0 1-1.8 2z"
        fill="currentColor"
      />
    </svg>
  );
};

export const TwitterIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <path
        d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"
        fill="currentColor"
      />
    </svg>
  );
};

export const GithubIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <path
        clipRule="evenodd"
        d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

export const MoonFilledIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <path
      d="M21.53 15.93c-.16-.27-.61-.69-1.73-.49a8.46 8.46 0 01-1.88.13 8.409 8.409 0 01-5.91-2.82 8.068 8.068 0 01-1.44-8.66c.44-1.01.13-1.54-.09-1.76s-.77-.55-1.83-.11a10.318 10.318 0 00-6.32 10.21 10.475 10.475 0 007.04 8.99 10 10 0 002.89.55c.16.01.32.02.48.02a10.5 10.5 0 008.47-4.27c.67-.93.49-1.519.32-1.79z"
      fill="currentColor"
    />
  </svg>
);

export const SunFilledIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <g fill="currentColor">
      <path d="M19 12a7 7 0 11-7-7 7 7 0 017 7z" />
      <path d="M12 22.96a.969.969 0 01-1-.96v-.08a1 1 0 012 0 1.038 1.038 0 01-1 1.04zm7.14-2.82a1.024 1.024 0 01-.71-.29l-.13-.13a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.984.984 0 01-.7.29zm-14.28 0a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a1 1 0 01-.7.29zM22 13h-.08a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zM2.08 13H2a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zm16.93-7.01a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a.984.984 0 01-.7.29zm-14.02 0a1.024 1.024 0 01-.71-.29l-.13-.14a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.97.97 0 01-.7.3zM12 3.04a.969.969 0 01-1-.96V2a1 1 0 012 0 1.038 1.038 0 01-1 1.04z" />
    </g>
  </svg>
);

export const HeartFilledIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <path
      d="M12.62 20.81c-.34.12-.9.12-1.24 0C8.48 19.82 2 15.69 2 8.69 2 5.6 4.49 3.1 7.56 3.1c1.82 0 3.43.88 4.44 2.24a5.53 5.53 0 0 1 4.44-2.24C19.51 3.1 22 5.6 22 8.69c0 7-6.48 11.13-9.38 12.12Z"
      fill="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
  </svg>
);

export const SearchIcon = (props: IconSvgProps) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height="1em"
    role="presentation"
    viewBox="0 0 24 24"
    width="1em"
    {...props}
  >
    <path
      d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
    <path
      d="M22 22L20 20"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
);

export const NextUILogo: React.FC<IconSvgProps> = (props) => {
  const { width, height = 40 } = props;

  return (
    <svg
      fill="none"
      height={height}
      width={width}
      viewBox="0 0 161 32"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        className="fill-black dark:fill-white"
        d="M55.6827 5V26.6275H53.7794L41.1235 8.51665H40.9563V26.6275H39V5H40.89L53.5911 23.1323H53.7555V5H55.6827ZM67.4831 26.9663C66.1109 27.0019 64.7581 26.6329 63.5903 25.9044C62.4852 25.185 61.6054 24.1633 61.0537 22.9582C60.4354 21.5961 60.1298 20.1106 60.1598 18.6126C60.132 17.1113 60.4375 15.6228 61.0537 14.2563C61.5954 13.0511 62.4525 12.0179 63.5326 11.268C64.6166 10.5379 65.8958 10.16 67.1986 10.1852C68.0611 10.1837 68.9162 10.3468 69.7187 10.666C70.5398 10.9946 71.2829 11.4948 71.8992 12.1337C72.5764 12.8435 73.0985 13.6889 73.4318 14.6152C73.8311 15.7483 74.0226 16.9455 73.9968 18.1479V19.0773H63.2262V17.4194H72.0935C72.1083 16.4456 71.8952 15.4821 71.4714 14.6072C71.083 13.803 70.4874 13.1191 69.7472 12.6272C68.9887 12.1348 68.1022 11.8812 67.2006 11.8987C66.2411 11.8807 65.3005 12.1689 64.5128 12.7223C63.7332 13.2783 63.1083 14.0275 62.6984 14.8978C62.2582 15.8199 62.0314 16.831 62.0352 17.8546V18.8476C62.009 20.0078 62.2354 21.1595 62.6984 22.2217C63.1005 23.1349 63.7564 23.9108 64.5864 24.4554C65.4554 24.9973 66.4621 25.2717 67.4831 25.2448C68.1676 25.2588 68.848 25.1368 69.4859 24.8859C70.0301 24.6666 70.5242 24.3376 70.9382 23.919C71.3183 23.5345 71.6217 23.0799 71.8322 22.5799L73.5995 23.1604C73.3388 23.8697 72.9304 24.5143 72.4019 25.0506C71.8132 25.6529 71.1086 26.1269 70.3314 26.4434C69.4258 26.8068 68.4575 26.9846 67.4831 26.9663V26.9663ZM78.8233 10.4075L82.9655 17.325L87.1076 10.4075H89.2683L84.1008 18.5175L89.2683 26.6275H87.103L82.9608 19.9317L78.8193 26.6275H76.6647L81.7711 18.5169L76.6647 10.4062L78.8233 10.4075ZM99.5142 10.4075V12.0447H91.8413V10.4075H99.5142ZM94.2427 6.52397H96.1148V22.3931C96.086 22.9446 96.2051 23.4938 96.4597 23.9827C96.6652 24.344 96.9805 24.629 97.3589 24.7955C97.7328 24.9548 98.1349 25.0357 98.5407 25.0332C98.7508 25.0359 98.9607 25.02 99.168 24.9857C99.3422 24.954 99.4956 24.9205 99.6283 24.8853L100.026 26.5853C99.8062 26.6672 99.5805 26.7327 99.3511 26.7815C99.0274 26.847 98.6977 26.8771 98.3676 26.8712C97.6854 26.871 97.0119 26.7156 96.3973 26.4166C95.7683 26.1156 95.2317 25.6485 94.8442 25.0647C94.4214 24.4018 94.2097 23.6242 94.2374 22.8363L94.2427 6.52397ZM118.398 5H120.354V19.3204C120.376 20.7052 120.022 22.0697 119.328 23.2649C118.644 24.4235 117.658 25.3698 116.477 26.0001C115.168 26.6879 113.708 27.0311 112.232 26.9978C110.759 27.029 109.302 26.6835 107.996 25.9934C106.815 25.362 105.827 24.4161 105.141 23.2582C104.447 22.0651 104.092 20.7022 104.115 19.319V5H106.08V19.1831C106.061 20.2559 106.324 21.3147 106.843 22.2511C107.349 23.1459 108.094 23.8795 108.992 24.3683C109.993 24.9011 111.111 25.1664 112.242 25.139C113.373 25.1656 114.493 24.9003 115.495 24.3683C116.395 23.8815 117.14 23.1475 117.644 22.2511C118.16 21.3136 118.421 20.2553 118.402 19.1831L118.398 5ZM128 5V26.6275H126.041V5H128Z"
      />
      <path
        className="fill-black dark:fill-white"
        d="M23.5294 0H8.47059C3.79241 0 0 3.79241 0 8.47059V23.5294C0 28.2076 3.79241 32 8.47059 32H23.5294C28.2076 32 32 28.2076 32 23.5294V8.47059C32 3.79241 28.2076 0 23.5294 0Z"
      />
      <path
        className="fill-white dark:fill-black"
        d="M17.5667 9.21729H18.8111V18.2403C18.8255 19.1128 18.6 19.9726 18.159 20.7256C17.7241 21.4555 17.0968 22.0518 16.3458 22.4491C15.5717 22.8683 14.6722 23.0779 13.6473 23.0779C12.627 23.0779 11.7286 22.8672 10.9521 22.4457C10.2007 22.0478 9.5727 21.4518 9.13602 20.7223C8.6948 19.9705 8.4692 19.1118 8.48396 18.2403V9.21729H9.72854V18.1538C9.71656 18.8298 9.88417 19.4968 10.2143 20.0868C10.5362 20.6506 11.0099 21.1129 11.5814 21.421C12.1689 21.7448 12.8576 21.9067 13.6475 21.9067C14.4374 21.9067 15.1272 21.7448 15.7169 21.421C16.2895 21.1142 16.7635 20.6516 17.0844 20.0868C17.4124 19.4961 17.5788 18.8293 17.5667 18.1538V9.21729ZM23.6753 9.21729V22.845H22.4309V9.21729H23.6753Z"
      />
    </svg>
  );
};
export const EyeSlashFilledIcon: React.FC<IconSvgProps> = (props) => {
  const { width, height = 40 } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      />
    </svg>
  );
};
export const EyeFilledIcon: React.FC<IconSvgProps> = (props) => {
  const { width, height = 24 } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
      />
    </svg>
  );
};
export const AccountBox: React.FC<IconSvgProps> = (props) => {
  const { width = 24, height = 24 } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      width={width}
      viewBox="0 -960 960 960"
      fill="white"
    >
      <path d="M200-246q54-53 125.5-83.5T480-360q83 0 154.5 30.5T760-246v-514H200v514Zm280-194q58 0 99-41t41-99q0-58-41-99t-99-41q-58 0-99 41t-41 99q0 58 41 99t99 41ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm69-80h422q-44-39-99.5-59.5T480-280q-56 0-112.5 20.5T269-200Zm211-320q-25 0-42.5-17.5T420-580q0-25 17.5-42.5T480-640q25 0 42.5 17.5T540-580q0 25-17.5 42.5T480-520Zm0 17Z" />
    </svg>
  );
};
export const LoginIcon: React.FC<IconSvgProps> = (props) => {
  const { width = 24, height = 24 } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      width={width}
      viewBox="0 -960 960 960"
      fill="white"
    >
      <path d="M480-120v-80h280v-560H480v-80h280q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H480Zm-80-160-55-58 102-102H120v-80h327L345-622l55-58 200 200-200 200Z" />
    </svg>
  );
};
export const BarIcon: React.FC<IconSvgProps> = (props) => {
  const { width = 24, height = 24 } = props;

  return (
    <svg xmlns="http://www.w3.org/2000/svg"  height={height}
    width={width} viewBox="0 -960 960 960"  fill="#5f6368"><path d="M240-160q-33 0-56.5-23.5T160-240q0-33 23.5-56.5T240-320q33 0 56.5 23.5T320-240q0 33-23.5 56.5T240-160Zm240 0q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm240 0q-33 0-56.5-23.5T640-240q0-33 23.5-56.5T720-320q33 0 56.5 23.5T800-240q0 33-23.5 56.5T720-160ZM240-400q-33 0-56.5-23.5T160-480q0-33 23.5-56.5T240-560q33 0 56.5 23.5T320-480q0 33-23.5 56.5T240-400Zm240 0q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm240 0q-33 0-56.5-23.5T640-480q0-33 23.5-56.5T720-560q33 0 56.5 23.5T800-480q0 33-23.5 56.5T720-400ZM240-640q-33 0-56.5-23.5T160-720q0-33 23.5-56.5T240-800q33 0 56.5 23.5T320-720q0 33-23.5 56.5T240-640Zm240 0q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Zm240 0q-33 0-56.5-23.5T640-720q0-33 23.5-56.5T720-800q33 0 56.5 23.5T800-720q0 33-23.5 56.5T720-640Z"/></svg>
  );
};
export const HomeIcon: React.FC<IconSvgProps> = (props) => {
  const { width = 24, height = 24 } = props;

  return (
    <svg xmlns="http://www.w3.org/2000/svg"  height={height}
    width={width} viewBox="0 -960 960 960"  fill="#0000F5"><path d="M160-120v-375l-72 55-48-64 440-336 440 336-48 63-72-54v375H160Zm80-80h480v-356L480-739 240-556v356Zm0 0h480-480Zm80-160q-17 0-28.5-11.5T280-400q0-17 11.5-28.5T320-440q17 0 28.5 11.5T360-400q0 17-11.5 28.5T320-360Zm160 0q-17 0-28.5-11.5T440-400q0-17 11.5-28.5T480-440q17 0 28.5 11.5T520-400q0 17-11.5 28.5T480-360Zm160 0q-17 0-28.5-11.5T600-400q0-17 11.5-28.5T640-440q17 0 28.5 11.5T680-400q0 17-11.5 28.5T640-360Z"/></svg>
  );
};
export const PremiumIcon: React.FC<IconSvgProps> = (props) => {
  const { width = 24, height = 24,fill="#EA3323" } = props;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={height}
    width={width}  viewBox="0 -960 960 960"  fill={fill}><path d="m387-412 35-114-92-74h114l36-112 36 112h114l-93 74 35 114-92-71-93 71ZM240-40v-309q-38-42-59-96t-21-115q0-134 93-227t227-93q134 0 227 93t93 227q0 61-21 115t-59 96v309l-240-80-240 80Zm240-280q100 0 170-70t70-170q0-100-70-170t-170-70q-100 0-170 70t-70 170q0 100 70 170t170 70ZM320-159l160-41 160 41v-124q-35 20-75.5 31.5T480-240q-44 0-84.5-11.5T320-283v124Zm160-62Z"/></svg>
  );
};
export const ProfileIcon: React.FC<IconSvgProps> = (props) => {
  const { width = 24, height = 24 } = props;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={height}
    width={width}  viewBox="0 -960 960 960" fill="#78A75A"><path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z"/></svg>
  );
};
export const ArrowForwardIcon: React.FC<IconSvgProps> = (props) => {
  const { width = 24, height = 24 } = props;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={height}
    width={width} viewBox="0 -960 960 960"  fill="#FFFFFF"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/></svg>
  );
};
export const LogoutdIcon: React.FC<IconSvgProps> = (props) => {
  const { width = 24, height = 24 } = props;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={height}
    width={width} viewBox="0 -960 960 960"  fill="#FFFFFF"><path d="M212-86q-53 0-89.5-36.5T86-212v-536q0-53 36.5-89.5T212-874h276v126H212v536h276v126H212Zm415-146-88-89 96-96H352v-126h283l-96-96 88-89 247 248-247 248Z"/></svg>
  );
};
export const EditIcon: React.FC<IconSvgProps> = (props) => {
  const { width = 24, height = 24,fill="#FFFFFF" } = props;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={height}
    width={width} viewBox="0 -960 960 960"  fill={fill} ><path d="M190-99q-37.18 0-64.09-26.91Q99-152.82 99-190v-580q0-37.59 26.91-64.79Q152.82-862 190-862h401l-91 92H190v580h580v-312l92-92v404q0 37.18-27.21 64.09Q807.59-99 770-99H190Zm290-381ZM350-350v-184l371-371q13-13.5 29.71-19.75 16.72-6.25 33.93-6.25 18.36 0 34.98 7 16.62 7 30.38 20l53 53q13.61 13.96 20.8 30.74 7.2 16.77 7.2 34.13 0 17.7-7.26 35.85Q916.48-732.12 903-719L534-350H350Zm510-436-76-75 76 75ZM427-427h76l247-247-38.04-38L674-749 427-504v77Zm284.96-285L674-749l37.96 37L750-674l-38.04-38Z"/></svg>
  );
};
export const VerifiedIcon: React.FC<IconSvgProps> = (props) => {
  const { width = 24, height = 24,fill="#0000F5" } = props;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={height}
    width={width} viewBox="0 -960 960 960" fill={fill} ><path d="m438-319 245-246-74-75-171 171-86-85-74 74 160 161Zm42.13 287q-158.9-37.81-262.51-176.8Q114-347.8 114-516.16v-275.28L480-928l366 136.56v275.28q0 168.36-103.49 307.36Q639.02-69.81 480.13-32Z"/></svg>
  );
};
export const CalenderIcon: React.FC<IconSvgProps> = (props) => {
  const { width = 24, height = 24 } = props;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={height}
    width={width} viewBox="0 -960 960 960"  fill="#9ca3af "><path d="M210-34q-57.12 0-96.56-40.14Q74-114.28 74-170v-541q0-57.13 39.44-96.56Q152.88-847 210-847h15v-79h113v79h284v-79h113v79h15q57.13 0 96.56 39.44Q886-768.13 886-711v541q0 55.72-39.44 95.86Q807.13-34 750-34H210Zm0-136h540v-398H210v398Zm0-488h540v-53H210v53Zm0 0v-53 53Zm270.49 268q-20.91 0-35.7-14.59Q430-419.18 430-439.79q0-20.61 14.79-35.41 14.79-14.8 35.7-14.8 20.91 0 35.21 14.59t14.3 35.2q0 20.61-14.3 35.41-14.3 14.8-35.21 14.8Zm-160.28 0q-20.61 0-35.41-14.59-14.8-14.59-14.8-35.2 0-20.61 14.59-35.41 14.59-14.8 35.2-14.8 20.61 0 35.41 14.59 14.8 14.59 14.8 35.2 0 20.61-14.59 35.41-14.59 14.8-35.2 14.8Zm319.3 0Q620-390 605-404.59q-15-14.59-15-35.2 0-20.61 15-35.41 15-14.8 35.01-14.8 20.01 0 35 14.59Q690-460.82 690-440.21q0 20.61-14.79 35.41-14.79 14.8-35.7 14.8ZM480.49-230q-20.91 0-35.7-15Q430-260 430-280.01q0-20.01 14.79-35Q459.58-330 480.49-330q20.91 0 35.21 14.79t14.3 35.7Q530-260 515.7-245q-14.3 15-35.21 15Zm-160.28 0q-20.61 0-35.41-15-14.8-15-14.8-35.01 0-20.01 14.59-35Q299.18-330 319.79-330q20.61 0 35.41 14.79 14.8 14.79 14.8 35.7Q370-260 355.41-245q-14.59 15-35.2 15Zm319.3 0Q620-230 605-245q-15-15-15-35.01 0-20.01 15-35Q620-330 640.01-330q20.01 0 35 14.79Q690-300.42 690-279.51 690-260 675.21-245q-14.79 15-35.7 15Z"/></svg>
  );
};
export const CameraIcon: React.FC<IconSvgProps> = (props) => {
  const { width = 24, height = 24 } = props;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={height}
    width={width} viewBox="0 -960 960 960"  fill="#666666"><path d="M440-440ZM117.83-84.65q-46.93 0-80.06-33.12Q4.65-150.9 4.65-197.83v-484.34q0-46.93 33.12-80.06 33.13-33.12 80.06-33.12h114.54l84.15-80h257v113.18H361.91l-82.11 80H117.83v484.34h644.34v-375.93h113.18v375.93q0 46.93-33.12 80.06-33.13 33.12-80.06 33.12H117.83Zm665.01-609.11v-89.44h-89.32v-92.27h89.44v-89.31h92.51v89.43h89.07v92.27h-89.19v89.32h-92.51ZM439.83-253.04q77.92 0 132.52-54.44 54.61-54.43 54.61-132.35 0-77.92-54.55-132.52-54.54-54.61-132.47-54.61-77.92 0-132.41 54.55-54.49 54.54-54.49 132.47 0 77.92 54.44 132.41 54.43 54.49 132.35 54.49Zm-.1-108.39q-33.25 0-55.77-22.6-22.53-22.59-22.53-55.54t22.6-55.97q22.59-23.03 55.54-23.03t55.97 22.8q23.03 22.8 23.03 56.04 0 33.25-22.8 55.77-22.8 22.53-56.04 22.53Z"/></svg>
  );
};
export const NOImageIcon: React.FC<IconSvgProps> = (props) => {
  const { width = 24, height = 24 ,fill="#FFFFFF"} = props;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={height}
    width={width} viewBox="0 -960 960 960"  fill={fill}><path d="M162.87-131.46q-46.93 0-80.05-33.12T49.7-244.63v-470.74q0-46.93 33.12-80.05t80.05-33.12h634.26q46.93 0 80.05 33.12t33.12 80.05v470.74q0 46.93-33.12 80.05t-80.05 33.12H162.87Zm0-113.17h634.26v-470.74H162.87v470.74Zm56.26-71.85h521.74L571.76-543.02 450-379.5l-91.76-121.76-139.11 184.78Zm-56.26 71.85v-470.74 470.74Z"/></svg>
  );
};
export const EditOffIcon: React.FC<IconSvgProps> = (props) => {
  const { width = 24, height = 24 ,fill="#FFFFFF"} = props;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={height}
    width={width} viewBox="0 -960 960 960"   fill={fill}><path d="m648.3-431.02-80.02-80.02 44.39-44.39-57-56.48-43.39 44.39-80.78-80.78 206.13-205.37q11.48-11.48 25.93-16.58 14.45-5.1 29.42-5.1 14.89 0 28.5 4.98t25.56 15.7l107.87 107.39q11.73 11.81 16.08 26.27 4.36 14.47 4.36 29.55 0 15.06-4.86 28.71-4.86 13.64-16.58 25.12L648.3-431.02ZM197.59-197.83h56.24l182.69-182.45-28.24-27.76-28-28.24-182.69 183.66v54.79ZM798.46-19.11 516.54-300.26 301.17-84.65H84.65V-300.7l215.61-215.84L18.11-799.46l74.76-74.76L873.22-93.87l-74.76 74.76ZM749.7-692.22l-57.24-56.48 57.24 56.48Zm-194.03 80.31 57 56.48-57-56.48ZM408.28-408.04l-28-28.24 56.24 56-28.24-27.76Z"/></svg>
  );
};
export const PostAddIcon: React.FC<IconSvgProps> = (props) => {
  const { width = 24, height = 24 ,fill="#FFFFFF"} = props;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={height}
    width={width} viewBox="0 -960 960 960"  fill="#FFFFFF"><path d="M197.83-84.65q-46.93 0-80.06-33.12-33.12-33.13-33.12-80.06v-564.34q0-46.93 33.12-80.06 33.13-33.12 80.06-33.12h366.5v113.18h-366.5v564.34h564.34v-366.5h113.18v366.5q0 46.93-33.12 80.06-33.13 33.12-80.06 33.12H197.83Zm110.32-164.61v-102.17h343.7v102.17h-343.7Zm0-138.89v-102.18h343.7v102.18h-343.7Zm0-138.65v-102.18h343.7v102.18h-343.7Zm378.81-77.53v-82.63h-82.63v-105.76h82.63v-82.63h105.76v82.63h82.63v105.76h-82.63v82.63H686.96Z"/></svg>
  );
};
export const MoreIcon: React.FC<IconSvgProps> = (props) => {
  const { width = 24, height = 24 ,fill="#FFFFFF"} = props;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={height}
    width={width} viewBox="0 -960 960 960"  fill={fill}><path d="M201.91-384.57q-39.54 0-67.52-27.99-27.98-28-27.98-67.48 0-39.68 28.08-67.54 28.08-27.85 67.52-27.85 39.63 0 67.69 27.98 28.06 27.98 28.06 67.49 0 39.68-28.16 67.54-28.15 27.85-67.69 27.85Zm278.05 0q-39.68 0-67.54-27.99-27.85-28-27.85-67.48 0-39.68 27.99-67.54 28-27.85 67.48-27.85 39.68 0 67.54 27.98 27.85 27.98 27.85 67.49 0 39.68-27.98 67.54-27.98 27.85-67.49 27.85Zm278.1 0q-39.66 0-67.74-27.99-28.08-28-28.08-67.48 0-39.68 28.21-67.54 28.2-27.85 67.81-27.85t67.47 27.98q27.86 27.98 27.86 67.49 0 39.68-27.99 67.54-27.98 27.85-67.54 27.85Z"/></svg>
  );
};
export const XmarkIcon: React.FC<IconSvgProps> = (props) => {
  const { width = 24, height = 24 ,fill="#FFFFFF"} = props;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={height}
    width={width} fill={fill} viewBox="0 -960 960 960"  ><path d="m252.48-171.93-78.78-80.55L400.22-480 173.7-709.04l78.78-80.79 228.28 229.05 226.76-229.05 78.78 80.79L559.78-480 786.3-252.48l-78.78 80.55-226.76-229.05-228.28 229.05Z"/></svg>
  );
};
export const ThumbDownkIcon: React.FC<IconSvgProps> = (props) => {
  const { width = 24, height = 24 ,fill="#000000"} = props;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={height}
    width={width} fill={fill} viewBox="0 -960 960 960" ><path d="M232.77-841.84h452.77v539.99L396.15-12l-53.84-55.85q-7.11-7.36-11.78-19.56-4.68-12.21-4.68-24.36v-14.08l44.46-176h-246q-38.94 0-68.62-29.68Q26-361.22 26-400.15v-71.05q0-6.8 1.62-15.03 1.61-8.23 5.61-15.46l122.62-290.46q10.61-21.23 32.14-35.46 21.52-14.23 44.78-14.23Zm366.77 86H244.77q-4.23 0-8.65 2.3-4.43 2.31-6.74 7.7L112-467.84v67.69q0 5.38 3.46 8.84 3.46 3.47 8.85 3.47h357.84L425-161.61l174.54-175.77v-418.46Zm0 418.46v-418.46 418.46Zm86 35.53v-85.99H806v-368H685.54v-86H892v539.99H685.54Z"/></svg>
  
  );
};
export const ThumbUpkIcon: React.FC<IconSvgProps> = (props) => {
  const { width = 24, height = 24 ,fill="#000000"} = props;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={height}
    width={width} fill={fill} viewBox="0 -960 960 960" ><path d="M725.23-92H272.46v-540l289.39-289.84L615.69-866q7.11 7.36 11.78 19.57 4.68 12.2 4.68 24.36V-808l-44.46 176h246q38.94 0 68.62 29.69Q932-572.63 932-533.69v71.05q0 6.79-1.62 15.02-1.61 8.23-5.61 15.47L802.15-141.69q-10.61 21.23-32.14 35.46Q748.49-92 725.23-92Zm-366.77-86h354.77q4.23 0 8.65-2.31 4.43-2.31 6.74-7.69L846-466v-67.69q0-5.39-3.46-8.85t-8.85-3.46H475.85L533-772.23 358.46-596.46V-178Zm0-418.46V-178v-418.46Zm-86-35.54v86H152v368h120.46v86H66v-540h206.46Z"/></svg>
  );
};
export const AddCommentkIcon: React.FC<IconSvgProps> = (props) => {
  const { width = 24, height = 24 ,fill="#000000"} = props;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={height}
    width={width} fill={fill} viewBox="0 -960 960 960"  ><path d="M437-410h86v-122h122v-86H523v-122h-86v122H315v86h122v122ZM68-76.46v-729.23q0-41.03 28.64-69.67T166.31-904h627.38q41.03 0 69.67 28.64T892-805.69v463.38q0 41.03-28.64 69.67T793.69-244H235.54L68-76.46Z"/></svg>
  );
};

export const CommentSendkIcon: React.FC<IconSvgProps> = (props) => {
  const { width = 24, height = 24 ,fill="#000000"} = props;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={height}
    width={width} fill={fill} viewBox="0 -960 960 960" ><path d="M696-156.23 551.23-302 611-361.77l85 85 170-170L925.77-386 696-156.23ZM68-76.46v-729.23q0-41.03 28.64-69.67T166.31-904h627.38q41.03 0 69.67 28.64T892-805.69V-523h-86v-282.69q0-4.62-3.85-8.46-3.84-3.85-8.46-3.85H166.31q-4.62 0-8.46 3.85-3.85 3.84-3.85 8.46v522.08L200-330h277v86H235.54L68-76.46ZM154-330v27.69V-818v488Z"/></svg>
  );
};
export const RefreshIcon: React.FC<IconSvgProps> = (props) => {
  const { width = 24, height = 24 ,fill="#EA33F7"} = props;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={height}
    width={width} fill={fill}  viewBox="0 -960 960 960" ><path d="M480.54-146q-137.63 0-234.81-97.17-97.19-97.17-97.19-234.77 0-137.6 97.19-236.83Q342.91-814 480.54-814q71.15 0 134.77 31.69 63.61 31.7 110.15 83.54V-814h86v298.61H512.85v-85.99h178q-33.62-55.93-89.2-88.27Q546.08-722 480.54-722q-103 0-174.5 71t-71.5 173q0 103 71.5 174.5t174.5 71.5q78 0 141.5-44.5t88.5-119.5h89.23Q771.54-286.08 683-216.04 594.46-146 480.54-146Z"/></svg>
  );
};
export const CheckIcon: React.FC<IconSvgProps> = (props) => {
  const { width = 24, height = 24 ,fill="#EA33F7"} = props;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={height}
    width={width} fill={fill} viewBox="0 -960 960 960" ><path d="M382-231.85 144.62-469.23 205.38-530 382-353.38 756.62-728l60.76 60.77L382-231.85Z"/></svg>
  );
};

export const InfoIcon: React.FC<IconSvgProps> = (props) => {
  const { width = 24, height = 24 ,fill="#999999"} = props;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={height}
    width={width} fill={fill} viewBox="0 -960 960 960" ><path d="M438-274h86v-246h-86v246Zm41.82-330.46q17.91 0 30.2-12.11 12.29-12.12 12.29-30.02 0-17.91-12.12-30.2-12.11-12.28-30.01-12.28-17.91 0-30.2 12.11t-12.29 30.02q0 17.9 12.12 30.19 12.11 12.29 30.01 12.29ZM480.07-68q-85.48 0-160.69-32.44t-130.84-88.05q-55.63-55.61-88.09-130.79Q68-394.46 68-479.93q0-85.74 32.5-161.17 32.5-75.43 88.21-131.23 55.71-55.8 130.79-87.74Q394.57-892 479.93-892q85.73 0 161.15 31.92 75.43 31.92 131.24 87.71 55.81 55.79 87.75 131.21Q892-565.74 892-479.98q0 85.75-31.92 160.62t-87.7 130.6q-55.78 55.73-131.18 88.25Q565.8-68 480.07-68Zm-.07-86q136.51 0 231.26-94.74Q806-343.49 806-480t-94.74-231.26Q616.51-806 480-806t-231.26 94.74Q154-616.51 154-480t94.74 231.26Q343.49-154 480-154Zm0-326Z"/></svg>
  );
};


export const PDFIcon: React.FC<IconSvgProps> = (props) => {
  const { width = 24, height = 24 ,fill="#999999"} = props;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={height}
    width={width} fill={fill} viewBox="0 -960 960 960" ><path d="M358.08-457.31h41.38v-82h41.62q18.01 0 30.2-12.17 12.18-12.17 12.18-29.21v-39.62q0-18.01-12.18-30.2-12.19-12.18-30.2-12.18h-83v205.38Zm41.38-123.38v-39.62h41.62v39.62h-41.62Zm122.77 123.38h81.46q17.04 0 29.71-12.18 12.68-12.19 12.68-30.2v-120.62q0-18.01-12.68-30.2-12.67-12.18-29.71-12.18h-81.46v205.38Zm41.38-42.38v-120.62h40.08v120.62h-40.08Zm122.08 42.38h41.39v-82h39.69v-41.38h-39.69v-39.62h39.69v-42.38h-81.08v205.38ZM331.31-230q-41.03 0-69.67-28.64T233-328.31v-463.38q0-41.03 28.64-69.67T331.31-890h463.38q41.03 0 69.67 28.64T893-791.69v463.38q0 41.03-28.64 69.67T794.69-230H331.31ZM165.37-64q-41.09 0-69.73-28.64T67-162.37v-549.32h86v549.38q0 4.62 3.85 8.46 3.84 3.85 8.46 3.85h549.38v86H165.37Z"/></svg>
  );
};