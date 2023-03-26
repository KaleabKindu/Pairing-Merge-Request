<template>
    <Requests :requests="merged"/>
  </template>
  
  <script>
  import {mapActions, mapState} from 'vuex';
  import Requests from './Requests.vue';
  
  export default {
      name:'OpenRequests',
      components:[Requests],
      async created(){
          await this.fetchRequests('merged')
      },
      computed:{
          ...mapState(['merged'])
      },
      methods:{
      ...mapActions(['fetchRequests'])
    }
  
  }
  </script>
  