const ctx = document.getElementById('trashChart').getContext('2d');

    const data = {
      labels: ['2021', '2022', '2023', '2024', '2025'],
      datasets: [
        {
          type: 'bar',
          label: 'Số lượng rác thải (tấn)',
          data: [150, 180, 220, 270, 320],
          backgroundColor: 'rgba(0, 200, 83, 0.7)', // xanh lá cây
          borderColor: 'rgba(0, 200, 83, 1)',
          borderWidth: 1,
          yAxisID: 'y',
            barThickness: 50, // pixel, chỉnh nhỏ hơn nữa nếu cần
        },
        {
          type: 'line',
          label: 'Mức độ nguy hiểm',
          data: [2, 3.5, 5, 6.8, 8.5],
          borderColor: 'red',
          backgroundColor: 'rgba(255, 0, 0, 0.2)',
          borderWidth: 2,
          fill: true,
          tension: 0.3,
          yAxisID: 'y1',
        }
      ]
    };

    const config = {
      data: data,
      options: {
        responsive: true,
        interaction: {
          mode: 'index',
          intersect: false,
        },
        plugins: {
          legend: {
            position: 'bottom',
          },
          tooltip: {
            mode: 'index',
  intersect: false,
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
  titleFont: {
    size: 24
  },
  bodyFont: {
    size: 14
  },
  padding: 18,
  caretPadding: 8
          }
        },
        scales: {
          y: {
            type: 'linear',
            position: 'left',
            beginAtZero: true,
            title: {
              display: true,
              text: 'Rác thải (tấn)'
            }
          },
          y1: {
            type: 'linear',
            position: 'right',
            beginAtZero: true,
            title: {
              display: true,
              text: 'Mức độ nguy hiểm'
            },
            grid: {
              drawOnChartArea: false
            }
          },
          x: {
            title: {
              display: true,
              text: 'Năm'
            }
          }
        }
      }
    };

    new Chart(ctx, config);