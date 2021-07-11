
export const prepData = (dataObj) => {
  
  const programData = []

  if(dataObj) {
    Object.entries(dataObj).forEach(([key, value]) => {
      if(value !== null && value > 0){
        const datum = {
          id: key,
          label: key,
          value: value
        }
        programData.push(datum)
      }
    })
  }

  return programData

}