<template>
    <v-app>
        <v-toolbar dark src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg">
            <v-spacer />
            <v-toolbar-title>LISTA FÁCIL</v-toolbar-title>
            <v-spacer />
        </v-toolbar>

        <v-container class="grey lighten-5">
            <v-row>
                <v-col cols="12" sm="8">
                    <v-text-field label="Digite o nome do produto que deseja procurar" />
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
                                    <v-btn color="primary" fab small dark>
                                        <v-icon>mdi-plus</v-icon>
                                    </v-btn>
                                </v-card-actions>
                            </div>
                        </v-list-item>
                        <v-list-item-subtitle class="px-2 pb-2">Castanha de Caju Salgada Inteira W1 500g</v-list-item-subtitle>
                    </v-card>
                </v-col>

                <v-col cols="12" sm="4">
                    <h3 class="black--text">LISTA FÁCIL</h3>
                    <v-card class="mx-auto mb-2" outlined v-for="item in 5" :key="item">
                        <v-list-item four-line>
                            <v-list-item-avatar tile size="40" color="grey">
                                <v-img
                                    height="4em"
                                    width="4em"
                                    src="./../public/img/castanha-caju.webp"
                                ></v-img>
                            </v-list-item-avatar>
                            <v-list-item-content>
                                <div class="d-flex justify-space-between caption">
                                    <div class="v-sheet theme--light">R$ 10,99 (100g)</div>
                                    <div class="v-sheet theme--light">100g</div>
                                    <div class="v-sheet theme--light">R$ 109,90</div>
                                </div>
                                <div class="d-flex justify-space-between caption">
                                    <div
                                        class="v-sheet theme--light text-truncate"
                                    >Castanha de Caju Salgada Inteira W1 500g</div>
                                </div>
                            </v-list-item-content>
                            <v-list-item-avatar size="20">
                                <v-btn fab color="red">
                                    <v-icon color="white" size="20">mdi-minus</v-icon>
                                </v-btn>
                            </v-list-item-avatar>
                        </v-list-item>
                    </v-card>
                </v-col>
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

    data: () => ({})
};
</script>
