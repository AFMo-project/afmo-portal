<template>
  <v-container>
    <v-row>
      <div v-for="(something, i) in [1, 2, 3]" :key="i">
        <v-col>
          <!--
    <v-card class="ma-3 pa-3">
      <v-card-title primary-title>
        <div class="headline primary--text">Dashboard</div>
      </v-card-title>
      <v-card-text>
        <div class="headline font-weight-light ma-5">
          Welcome {{ greetedUser }}
        </div>
      </v-card-text>
      <v-card-actions>
        <v-btn to="/main/profile/view">View ASDF</v-btn>
        <v-btn to="/main/profile/edit">Edit Profile</v-btn>
        <v-btn to="/main/profile/password">Change Password</v-btn>
      </v-card-actions>
    </v-card> 
    -->
          <v-card
            :loading="loading"
            class="flex-wrap d-flex justify-center"
            tile
          >
            <div>
              <v-card-title primary-title>
                <div class="headline primary--text">{{ projectName }}</div>
              </v-card-title>
              <v-card-subtitle primary-title>
                <div class="subtitle">{{ shortDescription }}</div>
              </v-card-subtitle>
              <v-card-actions>
                <v-btn
                  class="ml-2 mt-5"
                  outlined
                  rounded
                  small
                  text
                  to="/main/projects/12"
                >
                  View More
                </v-btn>
              </v-card-actions>

              <svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
                <g>
                  <title>Layer 1</title>
                  <rect
                    onclick="alert(1);"
                    id="svg_1"
                    height="68"
                    width="104"
                    y="103"
                    x="180.5"
                    stroke="#000"
                    fill="#fff"
                  />
                  <rect
                    id="svg_2"
                    height="60"
                    width="112"
                    y="198"
                    x="178.5"
                    stroke="#000"
                    fill="#fff"
                  />
                  <rect
                    id="svg_3"
                    height="69"
                    width="112"
                    y="288"
                    x="183.5"
                    stroke="#000"
                    fill="#fff"
                  />
                  <text
                    xml:space="preserve"
                    text-anchor="start"
                    font-family="sans-serif"
                    font-size="24"
                    id="svg_6"
                    y="143"
                    x="203.5"
                    stroke-width="0"
                    stroke="#000"
                    fill="#000000"
                  >
                    DIM1
                  </text>
                  <text
                    style="cursor: move"
                    xml:space="preserve"
                    text-anchor="start"
                    font-family="sans-serif"
                    font-size="24"
                    id="svg_7"
                    y="241"
                    x="205.5"
                    stroke-width="0"
                    stroke="#000"
                    fill="#000000"
                  >
                    DIM2
                  </text>
                  <text
                    style="cursor: move"
                    xml:space="preserve"
                    text-anchor="start"
                    font-family="sans-serif"
                    font-size="24"
                    id="svg_8"
                    y="335"
                    x="209.5"
                    stroke-width="0"
                    stroke="#000"
                    fill="#000000"
                  >
                    DIM3
                  </text>
                </g>
              </svg>
            </div>

            <v-img
              contain
              lazy-src="https://picsum.photos/id/11/10/6"
              max-height="150"
              max-width="250"
              src="https://picsum.photos/id/11/500/300"
            ></v-img>

            <br />
            <!--

            <v-card-text>
              <v-list flat>
                <v-subheader>REPORTS</v-subheader>
                <v-list-item-group color="primary">
                  <v-list-item
                    v-for="(item, i) in [1, 2, 3, 4, 5, 6, 7]"
                    :key="i"
                  >
                    <v-list-item-icon>
                      <v-icon v-text="item.icon">TEST TEXT</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title v-text="item.text"
                        >TITLE</v-list-item-title
                      >
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>

            </v-card-text>
            -->
          </v-card>
        </v-col>
      </div>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { readUserProfile } from "@/store/main/getters";

@Component
export default class Dashboard extends Vue {
  private loading = false;

  get greetedUser() {
    const userProfile = readUserProfile(this.$store);
    if (userProfile) {
      if (userProfile.full_name) {
        return userProfile.full_name;
      } else {
        return userProfile.email;
      }
    }
  }

  get projectName() {
    console.log(this.$store);
    return "Bioland ";
  }

  get shortDescription() {
    return "This is a short description of the actual field study! It should not be longer than e.g. 200 words to reduce clutter";
  }

  details() {
    this.loading = true;

    console.log("WORKDING!");

    setTimeout(() => (this.loading = false), 2000);
  }
}
</script>
