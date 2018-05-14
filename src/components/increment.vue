<template>
    <div>
        <p>{{count}}
            <button @click="inc">+</button>
            <button @click="dec">-</button>
        </p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                
            }
        },
        computed:{
            count(){
                return this.$store.state.count
            }
        },
        methods:{
            inc(){
                this.$store.commit("inc")
            },
            dec(){
                this.$store.commit("dec")
            }
        }
    }
</script>

<style scoped>
    button  {
        width: 100px;
        height: 100px;
        font-size: 30px;
    }
</style>