<template>
     <div class="Footer" >
          <v-footer app class="text-right">
               <v-btn text @click="showDialog = true;">
                    App Info
               </v-btn>
          </v-footer>

          <v-dialog v-model="showDialog" max-width="600">
               <v-card width="100%" class="pa-8">
                    Simple App Test &copy; 2022 TowerT5
               </v-card>
          </v-dialog>
     </div>
</template>

<script>
export default {
     name: 'Footer',
     data() {
          return {
               showDialog: false
          }
     }
}
</script>