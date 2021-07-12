const earningSegments = {
  "lowest_tercile": "hsl(306, 70%, 50%)",
  "middle_tercile": "hsl(70, 70%, 50%)",
  "highest_tercile": "hsl(262, 70%, 50%)",
  "female_students": "hsl(213, 70%, 50%)",
  "male_students": "hsl(335, 70%, 50%)",
  "10th_percentile_earnings": "hsl(70, 70%, 50%)",
  "25th_percentile_earnings": "hsl(139, 70%, 50%)",
  "75th_percentile_earnings": "hsl(360, 70%, 50%)",
  "90th_percentile_earnings": "hsl(213, 70%, 50%)"
 } 


export const preParedChartData = (earningsData) => {

  // add the color to the key
  const normalizedData = []
  const providedKeys = []

  
  earningsData.forEach(obj => {
    const newObject = {}

    Object.keys(earningSegments).forEach(key => {

      if(!obj[key]){
        obj[key.replace(/_/g, " ")] = 0
      }

    })
  

    Object.entries(obj).forEach(([key, value]) => {
    
      const newKey = key.replace(/_/g, " ")
  
      newObject[newKey] = value
  
      if(typeof value !== "string" && !providedKeys.includes(newKey)){
        providedKeys.push(newKey)
      }
  
      if(typeof value === "string") {
        const newValue = value.replace(/_/g, " ")
        newObject[newKey] = newValue
      }
  
    })

    normalizedData.push(newObject)

  })

  

  return {
    providedKeys,
    normalizedData
  }

}


/* 
const providedKeys = []
  const colorizedData = []

  

  earningsData.forEach((obj) => {
    console.log({obj})
    Object.entries(obj).forEach(([key , value]) => {
      if(typeof value === "string"){
        providedKeys.push(value)
      
      } else {
        obj[`${key}Color`] = earningSegments[key]
      } 

    })
  })

*/