// import { createStore } from 'vuex'

// export default createStore({
//     state: {
//         contributions: [ { date: '2022-2-09', count: 3 }, { date: '2022-2-10', count: 4 }, { date: '2022-2-11', count: 5 }, { date: '2022-2-12', count: 6 }, { date: '2022-2-13', count: 7 }, { date: '2022-2-14', count: 8 }, { date: '2022-2-15', count: 2 }, { date: '2022-2-16', count: 1 } ],
//         chartData: {
//           labels: [ 'January', 'February', 'March' ],
//           datasets: [
//             { 
//               label: 'Data One',
//               backgroundColor: '#f87979',
//               data: [40, 20, 12]
//             },
//           ]
//         },
//         chartOptions: {
//           responsive: true
//         }
//     },
//     getters: {
//         getContributions (state) {
//             return state.contributions;
//         },

//         getChartData (state) {
//             return state.chartData;
//         },

//         getChartOptions (state) {
//           return state.chartOptions;
//         } 
//     },
//     mutations: {
//     },
//     actions: {
//     },
//     modules: {
//     }
// });