import { ProgramPercentageType, RaceEthnicityType } from '../../src/typedefs'

export const prepData = (dataObj) => {
  
  const programData = []


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

  return programData

}