import { useContext } from "react";
import { toast } from "react-hot-toast";
import { PenilaianContext } from "../context/PenilaianContext";
import createFileInBrowser from "../utils/createFileInBrowser";
import { convertDataToExpect } from "../utils/convertDataToExpect";

export const SubmitComponent = () => {
  const {state} = useContext(PenilaianContext)
  
  const downloadFile = (myData) => {
    const result = convertDataToExpect(myData)

    toast.loading("File creating...");

    createFileInBrowser(result).then((data) => {
      toast.success("Successfully created file!");

      // create "a" HTLM element with href to file
      const fileName = "penilaian_mahasiswa";
      const href = URL.createObjectURL(data);
      const link = document.createElement("a");
      link.href = href;
      link.download = fileName + ".json";
      document.body.appendChild(link);
      link.click();

      // clean up "a" element & remove ObjectURL
      document.body.removeChild(link);
      URL.revokeObjectURL(href);
    });
  };

  return (
    <button className="download" onClick={() => downloadFile(state)}>
      Download
    </button>
  );
};
