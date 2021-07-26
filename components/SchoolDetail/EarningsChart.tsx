import React, { useEffect, useState } from 'react'
import axios from '../../utils/axiosRequest'
import { useSchoolsContext } from '../../src/store'
import { BarChart } from './BarChart'
import { preParedChartData } from './prepareChartData'
import LinearIndeterminate from '../Progress/LinearIndeterminate'

function EarningsChart() {

  const { currentSchool } = useSchoolsContext()
  
  const [chartData, setChartData] = useState([])
  const [fetchingData, setFetchingData] = useState(false)
  const [keys, setKeys] = useState(["a_key"])
  
  useEffect(() => {
    setFetchingData(true)
    axios()
    .get(`/earnings-chart-data/${currentSchool?.id}`)
    .then(response => {
      const earningsData = response.data.earnings
      const { providedKeys, normalizedData }:{providedKeys:any, normalizedData:any} = preParedChartData(earningsData)
      setChartData(normalizedData)
      setKeys(providedKeys)
    })
    .catch(error => {
      setFetchingData(false)
      console.log({error})
    })

    setFetchingData(false)

  }, [currentSchool?.id])



  return (
    <div className="bar-chart-container">
      {!fetchingData &&
      <div className="bar-chart-wrapper">
        <BarChart keys={keys} data={chartData} />
      </div>
      }
      {fetchingData &&
      <div style={{width: "300px", margin: "auto"}}>
        <LinearIndeterminate />
      </div>
      }
    </div>
  )
}

export default EarningsChart
