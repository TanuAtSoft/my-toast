import React from "react";
// Define ErrorIcon as a component
const ErrorIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M44 24C44 35.045 35.045 44 24 44C12.955 44 4 35.045 4 24C4 12.955 12.955 4 24 4C35.045 4 44 12.955 44 24Z"
      fill="#C93026"
    />
    <path
      d="M29.6556 15.5161L32.4836 18.3441L18.3436 32.4841L15.5156 29.6561L29.6556 15.5161Z"
      fill="white"
    />
    <path
      d="M32.4836 29.6561L29.6556 32.4841L15.5156 18.3441L18.3436 15.5161L32.4836 29.6561Z"
      fill="white"
    />
  </svg>
);

const SuccessIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M44 24C44 35.045 35.045 44 24 44C12.955 44 4 35.045 4 24C4 12.955 12.955 4 24 4C35.045 4 44 12.955 44 24Z"
      fill="#387A23"
    />
    <path
      d="M34.6016 14.6021L20.9996 28.199L15.3976 22.6011L12.6006 25.3981L20.9996 33.801L37.3976 17.3991L34.6016 14.6021Z"
      fill="white"
    />
  </svg>
);
const WarningIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_25_154)">
      <rect
        x="14.417"
        y="10.0151"
        width="17.8145"
        height="30.6799"
        fill="white"
      />
      <path
        d="M24 4C20.0444 4 16.1776 5.17298 12.8886 7.37061C9.59962 9.56824 7.03617 12.6918 5.52242 16.3463C4.00867 20.0009 3.6126 24.0222 4.3843 27.9018C5.15601 31.7814 7.06082 35.3451 9.85787 38.1421C12.6549 40.9392 16.2186 42.844 20.0982 43.6157C23.9778 44.3874 27.9992 43.9913 31.6537 42.4776C35.3082 40.9638 38.4318 38.4004 40.6294 35.1114C42.827 31.8224 44 27.9556 44 24C44 21.3736 43.4827 18.7728 42.4776 16.3463C41.4725 13.9198 39.9993 11.715 38.1421 9.85786C36.285 8.00069 34.0802 6.5275 31.6537 5.52241C29.2272 4.51732 26.6264 4 24 4ZM24 34C23.6044 34 23.2178 33.8827 22.8889 33.6629C22.56 33.4432 22.3036 33.1308 22.1522 32.7654C22.0009 32.3999 21.9613 31.9978 22.0384 31.6098C22.1156 31.2219 22.3061 30.8655 22.5858 30.5858C22.8655 30.3061 23.2219 30.1156 23.6098 30.0384C23.9978 29.9613 24.3999 30.0009 24.7654 30.1522C25.1308 30.3036 25.4432 30.56 25.6629 30.8889C25.8827 31.2178 26 31.6044 26 32C26 32.5304 25.7893 33.0391 25.4142 33.4142C25.0391 33.7893 24.5304 34 24 34ZM26 26C26 26.5304 25.7893 27.0391 25.4142 27.4142C25.0391 27.7893 24.5304 28 24 28C23.4696 28 22.9609 27.7893 22.5858 27.4142C22.2107 27.0391 22 26.5304 22 26V16C22 15.4696 22.2107 14.9609 22.5858 14.5858C22.9609 14.2107 23.4696 14 24 14C24.5304 14 25.0391 14.2107 25.4142 14.5858C25.7893 14.9609 26 15.4696 26 16V26Z"
        fill="#E9C141"
      />
    </g>
    <defs>
      <clipPath id="clip0_25_154">
        <rect width="48" height="48" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
const CloseButton = ({ closeToast }) => (
  <button
    onClick={closeToast}
    style={{
      background: "transparent",
      border: "none",
      cursor: "pointer",
      position: "absolute",
      right: "10px",
      top: "10px",
      fontWeight: "bold",
    }}
  >
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 6L6 18"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 6L18 18"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </button>
);

const CustomToast = ({ closeToast, message, type }) => {
  return (
    <div
      //   className="toast-body"
      style={{ minWidth: "200px", padding: "10px 20px" }}
    >
      <CloseButton closeToast={closeToast} />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          gap: "20px",
        }}
      >
        <div style={{ height: "32px", width: "32px" }}>
          {type === "error" && <ErrorIcon />}
          {type === "success" && <SuccessIcon />}
          {type === "warning" && <WarningIcon />}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            whiteSpace: "normal",
            wordWrap: "break-word",
          }}
        >
          <p style={{ fontWeight: "bold", margin: 0 }}>
            {type === "error"
              ? "Error"
              : type === "success"
              ? "Success"
              : "Warning"}
          </p>
          <p style={{ margin: 0, fontSize: "15px" }}>{message}</p>
        </div>
      </div>
    </div>
  );
};

const CustomToastWrapper = ({ message, type, closeToast }) => {
  const className = `toast-${type}`;

  return (
    <div className={`toast-body ${className}`}>
      <CustomToast closeToast={closeToast} message={message} type={type} />
    </div>
  );
};
export default CustomToastWrapper;
