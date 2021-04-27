<template>
  <v-container grid-list-md>
    <v-row>
      <v-col
        md="4"
        class="pa-2"
        cols="3"
        justify-space-between
        justify-content-between
      >
        <v-card tile class="pa-6">
          <v-img
            lazy-src="https://picsum.photos/id/11/10/6"
            src="https://picsum.photos/id/11/500/300"
          ></v-img>

          <br />
          <v-card-subtitle>Activity</v-card-subtitle>
          <br />

          <v-timeline align-top dense>
            <v-timeline-item color="brown" small> Bodenmessung </v-timeline-item>
            <v-timeline-item color="grey" small> First update </v-timeline-item>
            <v-timeline-item color="grey" small> Created the project </v-timeline-item>
          </v-timeline>
        </v-card>
      </v-col>
      <v-col md="8">
        <v-card class="pa-2">
          <v-card-title> TEST CARD </v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class Project extends Vue {}
</script>
