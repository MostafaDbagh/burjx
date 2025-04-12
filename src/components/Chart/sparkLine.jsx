import React, { useEffect, useRef } from 'react';
import ApexCharts from 'apexcharts';

const SparklineChart = ({ data, isPositive, width = 190, height = 56 }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (!data || data.length === 0 || !chartRef.current) return;

    const seriesData = data.map((price, index) => ({
      x: index,
      y: typeof price === 'number' ? price : price[1]
    }));

    const options = {
      series: [{
        name: 'Price',
        data: seriesData
      }],
      chart: {
        type: 'line',
        height: height,
        width: width,
        sparkline: { enabled: true },
        animations: { enabled: false },
        toolbar: { show: false },
        parentHeightOffset: 0,
        offsetX: 0,
        offsetY: 0
      },
      stroke: {
        width: 2,
        curve: 'straight',
        colors: [isPositive ? '#26A69A' : '#EF5350']
      },
      fill: { enabled: false },
      markers: { size: 0 },
      tooltip: { enabled: false },
      xaxis: {
        type: 'numeric',
        labels: { show: false },
        axisBorder: { show: false },
        axisTicks: { show: false }
      },
      yaxis: {
        show: false,
        min: Math.min(...seriesData.map(item => item.y)) * 0.99,
        max: Math.max(...seriesData.map(item => item.y)) * 1.01
      },
      grid: {
        show: false,
        padding: { top: 0, right: 0, bottom: 0, left: 0 }
      }
    };

    const chart = new ApexCharts(chartRef.current, options);
    chart.render();

    return () => chart.destroy();
  }, [data, isPositive, width, height]);

  return <div ref={chartRef} style={{ width: `${width}px`, height: `${height}px` }} />;
};

export default React.memo(SparklineChart);