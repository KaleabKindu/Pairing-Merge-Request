<template>
  <Requests :requests="open"/>
</template>

<script>
import Requests from './Requests.vue';
import {mapActions, mapState} from 'vuex';

export default {
    name:'Open',
    components:[Requests],
    async created(){
        await this.fetchRequests('opened')
    },
    computed:{
        ...mapState(['open'])
    },
    methods:{
    ...mapActions(['fetchRequests'])
  }

}
</script>
