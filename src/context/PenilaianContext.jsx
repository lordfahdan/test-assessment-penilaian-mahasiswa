import { createContext, useReducer } from "react";
import { mahasiswa } from "../data/mahasiswa";
import { ACTIONS, PenilaianReducer } from "./reducer";
import PropTypes from 'prop-types';

const INIT = mahasiswa

export const PenilaianContext = createContext(INIT);

export const PenilaianContextProvider = (props) => {
  const [state, dispatch] = useReducer(PenilaianReducer, INIT)

  const addPenilaian = (payload) => {
    /**
     * payload must be an Object: { name: string, aspek: enum(aspek_penilaian_1 | aspek_penilaian_2 | aspek_penilaian_3 | aspek_penilaian_4), value: number }
     * name should be exist in data mahasiswa
     * aspek must be one of this enum(aspek_penilaian_1 | aspek_penilaian_2 | aspek_penilaian_3 | aspek_penilaian_4)
     * value must be a number
     */

    dispatch({ type: ACTIONS.addPenilaian, payload})
  }

  return (
    <PenilaianContext.Provider
      value={{
        state,
        addPenilaian,
        }}>
      {props.children}
    </PenilaianContext.Provider>
  )
}

PenilaianContextProvider.propTypes = {
  children: PropTypes.any,
}