import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CustomToastWrapper from "./CustomToast"; // Ensure the correct path
import "./styles.css"; // Ensure your CSS is imported

function App() {
  const notify = (message, type) => {
    const options = {
      position: "top-center",
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
      theme: "colored",
      closeButton: false,
    };

    if (type === "success") {
      options.autoClose = 1000; // 10 seconds for success
    } else {
      options.autoClose = false; // No autoClose for error and warning
    }

    toast(
      (props) => (
        <CustomToastWrapper
          closeToast={props.closeToast}
          message={message}
          type={type}
        />
      ),
      options
    );
  };

  const handleNotifyClick = (type, message) => {
    notify(message, type);
  };

  return (
    <div>
      <button
        onClick={() =>
          handleNotifyClick(
            "success",
            "This is a success toast and will be dismissed after 10 seconds"
          )
        }
      >
        Success Toast
      </button>
      <button
        onClick={() =>
          handleNotifyClick(
            "error",
            "This is an error toast and must be dismissed by the user"
          )
        }
      >
        Error Toast
      </button>
      <button
        onClick={() =>
          handleNotifyClick(
            "warning",
            "This is a warning toast and must be dismissed by the user"
          )
        }
      >
        Warning Toast
      </button>
      <ToastContainer
        className="toast-container"
        position="top-center"
        hideProgressBar
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}

export default App;
