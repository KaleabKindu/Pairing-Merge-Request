<template>
    <Requests :requests="closed"/>
  </template>
  
  <script>
import {mapActions, mapState} from 'vuex';
  import Requests from './Requests.vue';
  
  export default {
      name:'ClosedRequests',
      components:[Requests],
      async created(){
          await this.fetchRequests('closed')
      },
      computed:{
          ...mapState(['closed'])
      },
      methods:{
      ...mapActions(['fetchRequests'])
    }
  
  }
  </script>
  