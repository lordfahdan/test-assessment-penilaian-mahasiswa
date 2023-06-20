import { Toaster } from "react-hot-toast";

export const ToasterComponent = () => {
  return (
    <Toaster
      position="top-right"
      reverseOrder={false}
      gutter={8}
      toastOptions={{
        // Define default options
        className: "",
        duration: 4000,
        style: {
          background: "#d453dd",
          color: "#fff",
        },

        // Default options for specific types
        success: {
          duration: 3000,
          theme: {
            primary: "green",
            secondary: "black",
          },
        },
      }}
    />
  );
};