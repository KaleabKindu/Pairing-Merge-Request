<template>
    <Requests :requests="all"/>
  </template>
  
  <script>
  import Requests from './Requests.vue';
  import { mapActions, mapState } from 'vuex';
  
  export default {
      name:'AllRequests',
      components:[Requests],
      async created(){
          await this.fetchRequests('all')
      },
      computed:{
          ...mapState(['all'])
      },
      methods:{
      ...mapActions(['fetchRequests'])
    }
  
  }
  </script>
  