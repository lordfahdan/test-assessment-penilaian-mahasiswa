import { TableComponent } from "./components/TableComponent";
import { ToasterComponent } from "./components/ToasterComponent";
import { PenilaianContextProvider } from "./context/PenilaianContext";

function App() {

  return (
    <PenilaianContextProvider>
      <main className="container">
        <h1>Aplikasi Penilaian Mahasiswa</h1>
        <TableComponent />
        <ToasterComponent />
      </main>
    </PenilaianContextProvider>
  );
}

export default App;
