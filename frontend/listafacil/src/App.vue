<template>
    <v-app>
        <!-- <v-system-bar height="10"></v-system-bar> -->
        <v-app-bar color="blue" max-height="30" height="30" dense flat>Tetseteste</v-app-bar>

        <v-container class="grey lighten-5">
            <v-row>
                <!-- <v-row justify="space-between"> -->
                <v-col cols="12" sm="8">
                    <!-- <v-card class="pa-2" outlined> -->
                    <!-- <v-card width="auto" class="mx-auto mt-5"> -->
                    <!-- <v-card class="d-inline-block mx-auto"> -->
                    <!-- <v-container> -->
                    <v-card class="mx-auto mb-2" outlined v-for="item in 5" :key="item">
                        <v-list-item four-line>
                            <v-list-item-avatar tile size="80" color="grey">
                                <v-img
                                    height="8em"
                                    width="8em"
                                    src="./../public/img/castanha-caju.webp"
                                ></v-img>
                            </v-list-item-avatar>
                            <v-list-item-content>
                                <!-- <v-text-field label="Valor" prepend-icon="mdi-currency-usd" /> -->
                                <div class="my-4 subtitle-1" align="center">R$ 10,99 (100g)</div>
                            </v-list-item-content>
                            <v-list-item-content>
                                <v-text-field label="Quantidade" />
                            </v-list-item-content>
                            <v-list-item-content class="ml-5">
                                <div class="my-4 subtitle-1" align="center">R$ 109,90</div>
                            </v-list-item-content>

                            <div class="ml-5" align="center">
                                <v-card-actions>
                                    <!-- <v-btn
        outlined
        rounded
        text
      >
        Button
                                    </v-btn>-->
                                    <v-btn color="primary" fab small dark>
                                        <v-icon>mdi-plus</v-icon>
                                    </v-btn>
                                </v-card-actions>

                                <!-- <v-btn color="primary" fab small dark>
                                    <v-icon>mdi-plus</v-icon>
                                </v-btn>-->
                            </div>
                        </v-list-item>
                        <v-list-item-subtitle class="pl-4">Castanha de Caju Salgada Inteira W1 500g</v-list-item-subtitle>
                    </v-card>

                    <!-- </v-container> -->
                    <!-- </v-card> -->
                    <!-- </v-card> -->
                    <!-- </v-card> -->
                </v-col>

                <v-col cols="12" sm="4">

  <v-card
    class="mx-auto"
    max-width="500"
  >
    <v-list shaped>
      <v-list-item-group
        v-model="model"
        multiple
      >
        <template v-for="(item, i) in items">
          <v-divider
            v-if="!item"
            :key="`divider-${i}`"
          ></v-divider>

          <v-list-item
            v-else
            :key="`item-${i}`"
            :value="item"
            active-class="deep-purple--text text--accent-4"
          >
            <template v-slot:default="{ active }">
              <v-list-item-content>
                <v-list-item-title v-text="item"></v-list-item-title>
              </v-list-item-content>

              <v-list-item-action>
                <v-checkbox
                  :input-value="active"
                  color="deep-purple accent-4"
                ></v-checkbox>
              </v-list-item-action>
            </template>
          </v-list-item>
        </template>
      </v-list-item-group>
    </v-list>
  </v-card>

                    <!-- <v-card class="pa-2" outlined>
                        <v-card width="40em" class="mx-auto mt-5">

                            
                            <v-card-title>
                                <h1 class="display1">Login</h1>
                            </v-card-title>

                            <v-card-text>
                                <v-form>
                                    <v-text-field
                                        label="username"
                                        prepend-icon="mdi-account-circle"
                                    />
                                    <v-text-field
                                        :type="showPassword ? 'text' : 'password'"
                                        label="password"
                                        prepend-icon="mdi-lock"
                                        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                                        @click:append="showPassword = !showPassword"
                                    />
                                </v-form>
                            </v-card-text>
                            <v-divider></v-divider>
                            <v-card-actions>
                                <v-btn color="success">Register</v-btn>
                                <v-spacer></v-spacer>
                                <v-btn color="info">Login</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-card> -->

                </v-col>

                <!-- <v-col
        v-for="n in 2"
        :key="n"
        cols="12"
        sm="6"
      >
        <v-card
          class="pa-2"
          outlined
          tile
        >
          One of three columns
        </v-card>
                </v-col>-->
            </v-row>
        </v-container>

        <!-- <div id="anav">
            <router-link to="/">Home</router-link>|
            <router-link to="/about">About</router-link>
        </div>
        <router-view />-->

        <!-- <v-app-bar app color="primary" dark> -->
        <!-- <div class="d-flex align-center"> -->
        <!-- <v-img
                    alt="Vuetify Logo"
                    class="shrink mr-2"
                    contain
                    src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
                    transition="scale-transition"
                    width="40"
        />-->

        <!-- <v-img
                    alt="Vuetify Name"
                    class="shrink mt-1 hidden-sm-and-down"
                    contain
                    min-width="100"
                    src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
                    width="100"
        />-->
        <!-- </div> -->

        <!-- <v-spacer></v-spacer> -->

        <!-- <v-btn href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank" text>
                <span class="mr-2">Latest Release</span>
                <v-icon>mdi-open-in-new</v-icon>
        </v-btn>-->
        <!-- </v-app-bar> -->

        <!-- <v-main>
            <HelloWorld />
        </v-main>-->
    </v-app>
</template>

<script>
// import HelloWorld from "./components/HelloWorld";

export default {
    name: "App",

    components: {
        // HelloWorld
    },

    data: () => ({
        items: [
        'Dog Photos',
        'Cat Photos',
        '',
        'Potatoes',
        'Carrots',
      ],
      model: ['Carrots'],
        showPassword: false
    })
};




</script>
