<template>
  <div class="container">
    <nav class="navbar">
      <div class="title">{{msg}}</div>
      <div class="dialog">
        <div class="input-dialog">
          <input type="text" v-model="city" name="input-weather" id="input-weather" placeholder="请输入要查询的城市名称" />
        </div>
        <div class="search-btn">
          <button id="search" @click="queryWeather">查询</button>
        </div>
      </div>
  </nav>

  <article class="mainbody">
    <section class="date-place">
      <div class="date">{{forecast[0].date}}</div>
      <div class="place">{{weather.city}}</div>
    </section>
    <section class="today-weather">
      <div class="weather-condition">
        <div class="weather-mess">
          <p>当前温度：{{weather.wendu}} ℃</p>
          <p>空气质量指数：{{weather.aqi}} （单位：μg/m3）</p>
          <p>天气：{{forecast[0].type}}</p>
          <p>温度：{{forecast[0].low}} ~ {{forecast[0].high}}</p>
          <p>风力：{{forecast[0].fengxiang}} {{forecast[0].fengli.replace(/<!\[CDATA\[|\]\]>/g, "")}}</p>
        </div>
      </div>
      <div class="warmtips">
        <header>温馨提示</header>
        <div>
          <span>感冒指数：</span>
          <p>{{weather.ganmao}}</p>
        </div>
      </div>
    </section>
    <section class="week-weather">
      <div class="item" v-for="(item, index) in forecast" :key="index">
        <div>{{item.date}}</div>
        <div class="item-mess">
          <div>天气：{{item.type}}</div>
          <div>温度：{{item.low}} ~ {{item.high}}</div>
          <div>风力：{{item.fengxiang}} {{item.fengli.replace(/<!\[CDATA\[|\]\]>/g, "")}}</div>
        </div>
      </div>
    </section>
  </article>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const {mapActions, mapGetters} = createNamespacedHelpers('weather');

export default {
  name: 'IndexPage',
  data () {
    return {
      msg: '天气查询',
      city: '北京'
    }
  },
  methods: {
    ...mapActions({
      "getWeather":"init"
    }),
    queryWeather(){
      this.getWeather({"city":this.city});
    }
  },
  created(){
    this.getWeather(this.$route.query)
  },
  computed: {
    ...mapGetters([
      "weather",
      "forecast"
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
body{
  background-image: url(../assets/images/backpic.jpeg);
	background-size: cover;
}
.container{
  width: 90%;
  margin: 0 auto;
}
.navbar{
	height:70px;
	background-color:#388186;
	display: flex;
	flex-direction: row;
	align-items: center;
}

.title{
	font-size: 2rem;
	width:18%;
	padding: 1%;
	color:#fff;
}

.dialog{
	width:50%;
	display: flex;
	flex-direction: row;
	height: 30px;
}

.input-dialog{
	width:70%;
	height: 100%;
	font-size: 1.01rem
}

.input-dialog input{
	width: 100%;
	height: 100%;
}

.search-btn{
	width:30%;
	height: 100%;
	margin-left: 1%;
}

.search-btn button{
	width: 80%;
	height: 100%;
	margin-top:2px;
	background:#dde8b9;
	box-shadow: 0 0 5px #fff;
	color:#fff;
	border:none;
	outline: none;
	cursor: pointer;
}

.mainbody{
	position: absolute;
	width:90%;
}

.date-place{
	display: flex;
	flex-direction: row;
	justify-content: center;
	font-size: 1.5rem;
	background-color: rgba(92, 141, 137, 0.5);
	color:#fff;
	width: 60%;
	margin:20px auto;
}

.date, .place{
	padding: 2%;
}

.today-weather{
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	width:90%;
	margin:0 auto;
	height:450px;
}

.weather-condition{
	background-color: rgba(92, 141, 137, 0.5);
	color:#fff;
	width:60%;
	height: 100%;
}

.weather-mess{
	height:100px;
	text-align: center;
	font-size: 1.5rem;
  padding: 0 50px;
}

.weather-mess p{
  text-align: left;
}

.warmtips{
	width:40%;
	font-size: 0.8rem;
	background:rgba(255, 255, 255,0.5);
	height: 100%;
	border-radius: 5px;
	margin-left: 1%;
	box-sizing: border-box;
	padding: 20px;
}

.warmtips header{
	font-size: 1.5rem;
	color:#fc993c;
	margin-bottom: 10px;
}

.warmtips div span{
	font-size: 1.1rem;
	color:#796465;
}

.week-weather{
	display: flex;
	flex-direction: row;
	justify-content: space-around;
}

.item{
	width:100%;
	margin: 1%;
	background-color: rgba(92, 141, 137, 0.5);
	color:#fff;
	font-size: 0.9rem;
}

.item img{
	width:100%;
}

.item-mess{
	padding: 5px;
}

@media (max-width:768px){
	.navbar{
		height:auto;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 2%;
	}

	.title{
		font-size: 1.5rem;
		width:100%;
	}

	.dialog{
		width:100%;
		display: flex;
		flex-direction: row;
		height: 30px;
	}

	.input-dialog{
		width:70%;
		height: 100%;
		font-size: 1.01rem
	}

	.search-btn{
		margin-left: 2%;
	}

	.date-place{
		font-size: 1.2rem;
		width: 80%;
		padding: 2%;
	}

	.date, .place{
		padding: 1%;
	}

	.today-weather{
		display: flex;
		flex-direction: column;
		align-items: center;
		height: auto;
		width: 100%;
	}

	.weather-condition{
		width:100%;
	}

	.weather-icon{
		width: 100%;
	}
	.day figure, .night figure{
		margin:10px;
	}

	.day figure img, .night figure img{
		height: 150px;
	}

	.weather-mess{
		height:50px;
		text-align: center;
		font-size: 1.5rem;
		margin-top: -30px;
	}
	.warmtips{
		width:90%;
	}

	.week-weather{
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-around;
	}

	.item{
		width:40%;
		margin: 1%;
		background-color: rgba(92, 141, 137, 0.5);
		color:#fff;
		font-size: 0.9rem;
	}

}
</style>
