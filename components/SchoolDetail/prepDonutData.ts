import { ProgramPercentageType, RaceEthnicityType } from '../../src/typedefs'

export const prepData = (dataObj:any) => {
  
  const programData:any = []


  Object.entries(dataObj).forEach(([key, value]) => {

    if(value !== null){

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