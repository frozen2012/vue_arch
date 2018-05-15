import {axios, getWeather} from "@/http/api"

const state = {
    weatherData:[],
    forecastData:{}
}

// actions
const actions = {
    init:function({commit, dispatch}, {city}) {
        axios.all([
            getWeather({city})
        ]).then(axios.spread(
            (d) => {
                let data = d.data;
                commit('setForecast', data['forecast'])
                commit('setWeather', data)
            }
        ));
    }
}

// getters
const getters = {
    weather({weatherData}){
        return weatherData;
    },
    forecast({forecastData}){
        return forecastData;
    }
}

// mutations
const mutations = {
    setForecast(state, data) {
        state.forecastData = data;
    },
    setWeather(state, data) {
        state.weatherData = data;
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}