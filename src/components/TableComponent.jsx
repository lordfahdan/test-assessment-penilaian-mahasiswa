import { useContext } from "react";
import { SelectComponent } from "./SelectComponent";
import userImage from '../assets/images/user.png'
import { PenilaianContext } from "../context/PenilaianContext";
import { SubmitComponent } from "./SubmitComponent";

export const TableComponent = () => {
  const { state, addPenilaian } = useContext(PenilaianContext)

  const onChangeAspek = (name, aspek, value) => {
    addPenilaian({
      name,
      aspek,
      value: Number(value)
    })
  }

  return (
    <>
      <div className="table">
        <div className="table-head">
          <div className="table-cell"></div>
          <div className="table-cell">
            <h2>Aspek penilaian 1</h2>
          </div>
          <div className="table-cell">
            <h2>Aspek penilaian 2</h2>
          </div>
          <div className="table-cell">
            <h2>Aspek penilaian 3</h2>
          </div>
          <div className="table-cell">
            <h2>Aspek penilaian 4</h2>
          </div>
        </div>
        {typeof state === 'object' && state.length > 0 && state.map((mahasiswa, index) => (
          <div className="table-content" key={`mahasiswa ${index}`}>
            <div className="table-cell cell-feature">
              <div className="profile">
                <img src={userImage}/>
                <h2>{mahasiswa?.name}</h2>
              </div>
            </div>
            <div className="table-cell">
              <SelectComponent
                data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                onChangeHandler={(value) => {
                  onChangeAspek(mahasiswa.name, 'penilaian_1', value)
                }}
              />
            </div>
            <div className="table-cell">
              <SelectComponent
                data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                onChangeHandler={(value) => {
                  onChangeAspek(mahasiswa.name, 'penilaian_2', value)
                }}
              />
            </div>
            <div className="table-cell">
              <SelectComponent
                data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                onChangeHandler={(value) => {
                  onChangeAspek(mahasiswa.name, 'penilaian_3', value)
                }}
              />
            </div>
            <div className="table-cell">
              <SelectComponent
                data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                onChangeHandler={(value) => {
                  onChangeAspek(mahasiswa.name, 'penilaian_4', value)
                }}
              />
            </div>
          </div>
        ))}
      </div>
      <SubmitComponent />
    </>
  );
};
