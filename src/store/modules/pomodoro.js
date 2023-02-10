import { createStore } from 'vuex'

export default createStore({
    state: {
        contributions: [],
        chartData: {},
        chartOptions: {},
        chartDailyData: {},
        chartDailyOptions: {},
    },
    getters: {
        getContributions (state) {
            return state.contributions;
        },

        getChartData (state) {
            return state.chartData;
        },

        getChartOptions (state) {
          return state.chartOptions;
        },

        getChartDailyData (state) {
            return state.chartDailyData;
        }
    },
    mutations: {
        setContributions (state, contributions) {
            state.contributions = contributions;
        },

        setChartData (state, chartData) {
            state.chartData = chartData;
        },

        setChartOptions (state, chartOptions) {
            state.chartOptions = chartOptions;
        },

        setChartDailyData (state, chartDailyData) {
            state.chartDailyData = chartDailyData;
        },

        setChartDailyOptions (state, chartDailyOptions) {
            state.chartDailyOptions = chartDailyOptions;
        }
    },
    actions: {
        fetchContributions ({ commit }) {
            const response = [
                {
                    date: '2022-2-09',
                    day: 'Monday',
                    time: '16:17:13',
                    year: '',
                    month: '',
                    exact_date: '',
                    count: 3
                },
                { 
                    date: '2022-2-10',
                    day: 'Tuesday',
                    time: '17:17:13',
                    year: '',
                    month: '',
                    exact_date: '',
                    count: 4 
                },
                { 
                    date: '2022-2-11',
                    day: 'Wednesday',
                    time: '18:17:13',
                    year: '',
                    month: '',
                    exact_date: '',
                    count: 5 
                },
                { 
                    date: '2022-2-12',
                    day: 'Thursday',
                    time: '20:17:13',
                    year: '',
                    month: '',
                    exact_date: '',
                    count: 6
                }, 
                { 
                    date: '2022-2-13',
                    day: 'Friday',
                    time: '21:17:13',
                    year: '',
                    month: '',
                    exact_date: '',
                    count: 7 
                }, 
                { 
                    date: '2022-2-14',
                    day: 'Saturday',
                    time: '23:17:13',
                    year: '',
                    month: '',
                    exact_date: '',
                    count: 8 
                }, 
                { 
                    date: '2022-2-15',
                    day: 'Sunday',
                    time: '00:17:13',
                    year: '',
                    month: '',
                    exact_date: '',
                    count: 2
                },
                { 
                    date: '2022-2-16',
                    day: 'Monday',
                    time: '12:17:13',
                    year: '',
                    month: '',
                    exact_date: '',
                    count: 1 
                } 
            ];
            const chartDailyData = {
                labels: [],
                datasets: [
                    { 
                        label: 'Pomodoro Blocks',
                        backgroundColor: '#f87979',
                        data: []
                    },
                ],
            };
            const chartDailyOptions = {
                responsive: true
            };

            response.forEach(chart => {
                chartDailyData.labels.push(chart.time.split(':')[0] + ':00');
                chartDailyData.datasets[0].data.push(chart.time);
            });

            commit('setContributions', response);
            commit('setChartDailyData', chartDailyData);
            commit('setChartDailyOptions', chartDailyOptions);
        },

        fetchChartData ({ commit }) {
            const response = {
                chartData: {
                    labels: [ 'January', 'February', 'March' ],
                    datasets: [
                        { 
                          label: 'Pomodoro Blocks',
                          backgroundColor: '#f87979',
                          data: [40, 20, 12]
                        },
                    ]
                },
                chartOptions: {
                  responsive: true
                }
            };

            console.log(response.chartData);
            console.log(response.chartOptions);

            commit('setChartData', response.chartData);
            commit('setChartOptions', response.chartOptions);
        }
    },
    modules: {
    }
});