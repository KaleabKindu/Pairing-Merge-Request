<template>
    <v-container>
        <v-col v-for="request in requests" :key="request.id">
            <v-col class="d-flex justify-space-between"> 
                <v-col>
                    <h3>{{request.title}}</h3> 
                </v-col>
               

                <v-col md="3" class="d-flex justify-end align-center"> 
                    <v-chip color="green" outlined>open</v-chip>
                    <v-icon class="mx-1" :color="request.work_in_progress ? 'red':'green'">{{ request.work_in_progress ? 'mdi-account':'mdi-close' }}</v-icon>
                    <v-avatar v-for="assignee in request.assignees" :key="assignee.id" size="20" class="mx-1">
                        <v-img :src="assignee.avatar_url"></v-img>
                    </v-avatar> 
                    <v-icon class='outlined'>mdi-forum</v-icon>
                    <p class="my-auto ml-1">{{ request.user_notes_count }} </p>
                </v-col>
            </v-col>
            <v-col class="d-flex align-center justify-space-between">
                <v-col class="d-flex">
                    <p class="grey--text my-auto" :set="[time, format] = getTimeDifference(request.created_at)">{{ request.reference }} {{ '\u00B7' }} created {{ time }} {{ format }} ago by <span class="black--text">{{ request.author.name }}</span></p>
                <v-chip small :color="label.color ? label.color:'green'" class='mx-1' :style="{'color':label.text_color }" v-for="label in request.labels" :key="label.id">{{ label.name }} </v-chip>
                </v-col>
                <p class="my-auto" :set="[time, format] = getTimeDifference(request.updated_at)">updated {{ time }} {{ format }} ago </p>
            </v-col>
           <v-divider></v-divider>
        </v-col>
    </v-container>
  </template>
  
  <script>

  export default {
      name:'requests',
      props:{
        requests: Array
      },
      data() {
    return {
      leftColor: '#007aff', // First color
      rightColor: '#ff3b30' // Second color
    };
  },
      methods:{
        getTimeDifference(targetTime) {
            // Convert the target time to a Date object
            const targetDate = new Date(targetTime);
            
            // Get the current time as a Date object
            const currentDate = new Date();
            
            // Calculate the time difference in milliseconds
            const timeDiffMs = currentDate.getTime() - targetDate.getTime();
            
            // Convert milliseconds to seconds, minutes, hours, days, months, years
            const timeDiffSec = Math.floor(timeDiffMs / 1000);
            const timeDiffMin = Math.floor(timeDiffSec / 60);
            const timeDiffHrs = Math.floor(timeDiffMin / 60);  
            const timeDiffDays = Math.floor(timeDiffMs / (1000 * 60 * 60 * 24));
            const timeDiffMonths = Math.abs((currentDate.getMonth() + 1) - (targetDate.getMonth() + 1) + (12 * (currentDate.getFullYear() - targetDate.getFullYear())));
            const timeDiffYears = Math.floor(timeDiffMonths / 12);
            
            if (timeDiffSec < 60){
                return [timeDiffSec, 'seconds']
            }else if (timeDiffHrs < 24){
                return [timeDiffHrs, 'hours']
            }else if (timeDiffMin < 60){
                return [timeDiffMin,'minutes']
            }else if (timeDiffDays < 30){
                return [timeDiffDays, 'days']
            }else if (timeDiffMonths < 12){
                return [timeDiffMonths,'months']
            }else{
                return [timeDiffYears,'years']
            }
}

      }
  
  }
  </script>

  