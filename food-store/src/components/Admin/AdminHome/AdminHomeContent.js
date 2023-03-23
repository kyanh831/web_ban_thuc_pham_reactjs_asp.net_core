import React, { useEffect, useState } from 'react'

import 'chart.js/auto'
import { Bar, Bubble, Line, Pie, Radar, Scatter } from 'react-chartjs-2';
import axios from 'axios';
import Statistical from './Statistical';


export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
      align: "end",
    },
    title: {
      display: true,
      text: 'e Chart',
      color: 'rgba(73, 76, 35, 0.5)',
    },
  },
};

const labelsMonth = ['Jan', 'Feb', 'Mar', 'April', 'May', 'June', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dev'];
const labelsDay = ['today','yesterday' ,  'day_bef_2', 'day_bef_3','day_bef_4' ,'day_bef_5' ,'day_bef_6'];



const AdminHomeContent = () => {
  const userInfo = JSON.parse(localStorage.getItem('userInfo'))
  const [totalMonth, setTotalMonth] = useState()
  const [totalDay, setTotalDay] = useState()
  const actions = [
    {
      name: 'Randomize',
      handler(chart) {
        chart.data.datasets.forEach(dataset => {
          dataset.data = totalDay;
        });
        chart.update();
      }
    },
  ];

  const labels = ['apple', 'Orange', 'Banana', 'cherry', 'kiwi'];
  const data = {
    labels: labels,
    datasets: [
      {
        label: 'total',
        data: totalDay,
        backgroundColor: [
          'rgba(130, 205, 254,0.7)',
          'rgba(255, 230, 170,0.7)',
          'rgba(165, 223, 223,0.7)',
          'rgba(255, 177, 193,0.7)',
          'rgba(255, 207, 159,0.7)',

        ]
      }
    ]
  }
  const config = {
    type: 'polarArea',
    data: data,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Chart.js Polar Area Chart'
        }
      }
    },
  };

  const data1 = {
    labels: labelsDay,
    datasets: [
      {
        fill: true,
        label: 'total',
        data: totalDay,
        borderColor: 'rgb(255, 207, 159)',
        backgroundColor: [
          'rgba(130, 205, 254,0.7)',
          'rgba(255, 230, 170,0.7)',
          'rgba(165, 223, 223,0.7)',
          'rgba(255, 177, 193,0.7)',
          'rgba(255, 207, 159,0.7)',

        ],
        borderWidth: 2,
        borderRadius: 6,
        borderSkipped: false,
      },
    ],
  };
  const data2 = {
    labels: labelsMonth,
    datasets: [
      {
        fill: true,
        label: 'total',
        data: totalMonth,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: [
          'rgba(130, 205, 254,0.7)',
          'rgba(255, 230, 170,0.7)',
          'rgba(165, 223, 223,0.7)',
          'rgba(255, 177, 193,0.7)',
          'rgba(255, 207, 159,0.7)',

        ],

      },
    ],
  };
  const fetchTotals = async () => {
    const config = {
      headers: {
        "Content-type": "application/json",
        "Authorization": `Bearer ${userInfo?.Token}`,
      }
    };
    const response = await axios.get(
      `http://localhost:5000/api/AdminDonHangs/statistical/`, config
    ).catch((e) => {
      console.log(e)
    })
    setTotalDay(response.data.total7Day)
    setTotalMonth(response.data.total)

  }

  useEffect(() => {
    fetchTotals()
  }, [])


  return (
    <div className='col-10 admin-home-content' style={{ height: "2000px" }}>
      <div className='container'>
        <Statistical />
        <div className='row'>
          <div className='col-lg-6 col-md-12'>
            <h4>Total money in 2022/01 - Now:2022/11</h4>

            <Line options={options} data={data2} />
          </div>
          <div className='col-lg-6 col-md-12'>
            <h4>Total money in 7 day ago - Now:2022/11</h4>
            <Bar options={options} data={data1} />
          </div>

        </div>
        <div className='row'>
          <h4>Top product sales</h4>
          <div className='col-lg-6 col-md-12'>
            <Pie actions={actions} config={config} data={data} />
          </div>
          <div className='col-lg-6 col-md-12'>
            <Scatter config={config} data={data} />
          </div>
        </div>

      </div>
    </div>
  )
}

export default AdminHomeContent