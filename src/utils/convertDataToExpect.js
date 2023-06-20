export const convertDataToExpect = (data) => {
  let obj = {}

  data.forEach(item => {
    Object.keys(item.aspek).forEach(aspek => {
      obj[`aspek_${aspek}`] = {
        ...obj[`aspek_${aspek}`],
        [item.name.replace(' ', '_')]: item.aspek[aspek]
      }
    })
  })

  return obj
}