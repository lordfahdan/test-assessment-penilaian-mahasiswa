export const ACTIONS = {
  addPenilaian: 'add-penilaian',
}

export const PenilaianReducer = (state, action) => {
  switch(action.type) {
    case ACTIONS.addPenilaian: {
      const target = state.map(mahasiswa => {
        if(mahasiswa.name !== action.payload.name) return mahasiswa;
        mahasiswa.aspek[action.payload.aspek] = action.payload.value
        return mahasiswa
      })

      return target
    }
    default:
      return state
  }
}