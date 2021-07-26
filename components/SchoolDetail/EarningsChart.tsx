import React, { useEffect, useState } from "react";
import axios from "../../utils/axiosRequest";
import { useSchoolsContext } from "../../src/store";
import { BarChart } from "./BarChart";
import { preParedChartData } from "./prepareChartData";
import CircularIndeterminate from "../Progress/CircularIndeterminate";

function EarningsChart() {
  const { currentSchool } = useSchoolsContext();

  const [chartData, setChartData] = useState([]);
  const [fetchingData, setFetchingData] = useState(false);
  const [keys, setKeys] = useState(["a_key"]);

  useEffect(() => {
    setFetchingData(true);
    axios()
      .get(`/earnings-chart-data/${currentSchool?.id}`)
      .then((response) => {
        const earningsData = response.data.earnings;
        const {
          providedKeys,
          normalizedData,
        }: { providedKeys: any; normalizedData: any } =
          preParedChartData(earningsData);
        setChartData(normalizedData);
        setKeys(providedKeys);
        setFetchingData(false);
      })
      .catch((error) => {
        setFetchingData(false);
        console.log({ error });
      });
  }, [currentSchool?.id]);

  return (
    <div className="bar-chart-container">
      {!fetchingData && (
        <div className="bar-chart-wrapper">
          <BarChart keys={keys} data={chartData} />
        </div>
      )}
      {fetchingData && (
        <div
          style={{
            height: "400px",
            margin: "auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularIndeterminate />
          <p>Loading...</p>
        </div>
      )}
    </div>
  );
}

export default EarningsChart;
