import { Component, OnInit } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  name = "Angular";

  options: any;

  labelOption = {
    show: true,
    position: "insideLeft",
    align: "left",
    verticalAlign: "middle",
    distance: 2,
    rotate: 0,
    fontSize: 10,
    formatter: "{name|{a}} \n{c}",
    rich: {
      name: {
        color: "#fff"
      }
    }
  };

  option = {
    tooltip: {
      trigger: "item",
      axisPointer: {
        type: "shadow" // 'shadow' as default; can also be 'line' or 'shadow'
      },
      formatter: "{name|{a}} \n{c}"
    },
    legend: {
      data: ["Web", "Line", "Messenger", "Android", "Ios"]
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true
    },
    xAxis: {
      type: "value"
    },
    yAxis: {
      type: "category",
      data: ["今日問答數", "今日通話數", "今日使用人數"]
    },
    series: [
      {
        name: "Ios",
        type: "bar",
        stack: "总量",
        data: [
          {
            value: 341,
            label: this.labelOption,
            tooltip: {
              formatter(params) {
                const percentage = ((1 / params.value) * 100).toFixed(2);
                const total = 1596;
                return `Ios <br>
                     Ratio: ${percentage} % <br>
                     Total: ${total}`;
              }
            }
          },
          {
            value: 302,
            label: this.labelOption,
            tooltip: {
              formatter(params) {
                const percentage = ((1 / params.value) * 100).toFixed(2);
                const total = 1822;
                return `Ios <br>
                     Ratio: ${percentage} % <br>
                     Total: ${total}`;
              }
            }
          },
          {
            value: 399,
            label: this.labelOption,
            tooltip: {
              formatter(params) {
                const percentage = ((1 / params.value) * 100).toFixed(2);
                const total = 2268;
                return `Ios <br>
                     Ratio: ${percentage} % <br>
                     Total: ${total}`;
              }
            }
          }
        ]
      },
      {
        name: "Android",
        type: "bar",
        stack: "总量",
        label: {
          show: true,
          position: "insideRight"
        },
        emphasis: {
          focus: "series",
          label: {
            show: true
          }
        },
        data: [
          {
            value: 241,
            label: this.labelOption,
            tooltip: {
              formatter(params) {
                const percentage = ((1 / params.value) * 100).toFixed(2);
                const total = 1596;
                return `Ios <br>
                     Ratio: ${percentage} % <br>
                     Total: ${total}`;
              }
            }
          },
          {
            value: 300,
            label: this.labelOption,
            tooltip: {
              formatter(params) {
                const percentage = ((1 / params.value) * 100).toFixed(2);
                const total = 1822;
                return `Ios <br>
                     Ratio: ${percentage} % <br>
                     Total: ${total}`;
              }
            }
          },
          {
            value: 599,
            label: this.labelOption,
            tooltip: {
              formatter(params) {
                const percentage = ((1 / params.value) * 100).toFixed(2);
                const total = 2268;
                return `Ios <br>
                     Ratio: ${percentage} % <br>
                     Total: ${total}`;
              }
            }
          }
        ]
      },
      {
        name: "Messenger",
        type: "bar",
        stack: "总量",
        label: {
          show: true,
          position: "insideRight"
        },
        emphasis: {
          focus: "series",
          label: {
            show: true
          }
        },
        data: [
          {
            value: 201,
            label: this.labelOption,
            tooltip: {
              formatter(params) {
                const percentage = ((1 / params.value) * 100).toFixed(2);
                const total = 1596;
                return `Ios <br>
                     Ratio: ${percentage} % <br>
                     Total: ${total}`;
              }
            }
          },
          {
            value: 388,
            label: this.labelOption,
            tooltip: {
              formatter(params) {
                const percentage = ((1 / params.value) * 100).toFixed(2);
                const total = 1822;
                return `Ios <br>
                     Ratio: ${percentage} % <br>
                     Total: ${total}`;
              }
            }
          },
          {
            value: 500,
            label: this.labelOption,
            tooltip: {
              formatter(params) {
                const percentage = ((1 / params.value) * 100).toFixed(2);
                const total = 2268;
                return `Ios <br>
                     Ratio: ${percentage} % <br>
                     Total: ${total}`;
              }
            }
          }
        ]
      },
      {
        name: "Line",
        type: "bar",
        stack: "总量",
        label: {
          show: true,
          position: "insideRight"
        },
        emphasis: {
          focus: "series",
          label: {
            show: true
          }
        },
        data: [
          {
            value: 323,
            label: this.labelOption,
            tooltip: {
              formatter(params) {
                const percentage = ((1 / params.value) * 100).toFixed(2);
                const total = 1596;
                return `Ios <br>
                     Ratio: ${percentage} % <br>
                     Total: ${total}`;
              }
            }
          },
          {
            value: 321,
            label: this.labelOption,
            tooltip: {
              formatter(params) {
                const percentage = ((1 / params.value) * 100).toFixed(2);
                const total = 1822;
                return `Ios <br>
                     Ratio: ${percentage} % <br>
                     Total: ${total}`;
              }
            }
          },
          {
            value: 482,
            label: this.labelOption,
            tooltip: {
              formatter(params) {
                const percentage = ((1 / params.value) * 100).toFixed(2);
                const total = 2268;
                return `Ios <br>
                     Ratio: ${percentage} % <br>
                     Total: ${total}`;
              }
            }
          }
        ]
      },
      {
        name: "Web",
        type: "bar",
        stack: "总量",
        label: {
          show: true,
          position: "insideRight"
        },
        emphasis: {
          focus: "series",
          label: {
            show: true
          }
        },
        data: [
          {
            value: 490,
            label: this.labelOption,
            tooltip: {
              formatter(params) {
                const percentage = ((1 / params.value) * 100).toFixed(2);
                const total = 1596;
                return `Ios <br>
                     Ratio: ${percentage} % <br>
                     Total: ${total}`;
              }
            }
          },
          {
            value: 511,
            label: this.labelOption,
            tooltip: {
              formatter(params) {
                const percentage = ((1 / params.value) * 100).toFixed(2);
                const total = 1822;
                return `Ios <br>
                     Ratio: ${percentage} % <br>
                     Total: ${total}`;
              }
            }
          },
          {
            value: 288,
            label: this.labelOption,
            tooltip: {
              formatter(params) {
                const percentage = ((1 / params.value) * 100).toFixed(2);
                const total = 2268;
                return `Ios <br>
                     Ratio: ${percentage} % <br>
                     Total: ${total}`;
              }
            }
          }
        ]
      }
    ]
  };

  ngOnInit() {}
}
