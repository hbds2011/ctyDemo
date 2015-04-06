//監視中/監視対象外ノードのチャート表示
function displayNodesPieChart() {
  "use strict";
  //監視ノード チャート
  var monitoredNodesData = [
    {
      label: "正常",
      data: 33,
      color: "blue"
    },
    {
      label: "異常",
      data: 10,
      color: "yellow"
    },
    {
      label: "停止",
      data: 8,
      color: "red"
    },
    {
    　　label: "監視時間帯外",
    　　data: 5,
    　　color: "#1abc9c"
    },
    {
    　　label: "特別監視対象外",
    　　data: 8,
    　　color: "#e67e22"
    },
    {
    　　label: "その他監視対象外",
    　　data: 7,
    　　color: "#2ecc71"
    }
    ];

  $.plot('#monitoredPieChart', monitoredNodesData, {
    series: {
      pie: {
        show: true,
        radius: 1,
        tilt: 0.4,
        label: {
          show: true,
          radius: 3/4,
          formatter: function (label, series) {
            return '<div style="font-size:12px; text-align:center; padding:2px 2px; color:white;">' + label + '<br/>' + Math.round(series.percent) + '%</div>';
          },
          background: {
              opacity: 0.8,
              color: '#444'
          }
        }
      }
    },
    legend: {
      show: true,
      noColumns: 1,
      position: "se",
      labelFormatter: function(label, series) {
        return '<span style="font-size:12px;">' + label + ": " + series.data[0][1] +  '</span>';
      }
    },
    grid: {
      hoverable: true,
      clickable: true
    }
  });
}