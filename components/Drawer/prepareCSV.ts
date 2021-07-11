import { SchoolDataType } from '../../src/store'

export const prepareCSV = (data:SchoolDataType | undefined) => {

  const csvData = data ? Object.entries(data).map(([key, value]) => {
    return { [key]: value }
  })
  : null
  return csvData

}