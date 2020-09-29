<template>
    <v-app>
        {{ subtotal }}

        <v-toolbar dark src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg">
            <v-spacer />
            <v-toolbar-title>LISTA FÁCIL</v-toolbar-title>
            <v-spacer />
        </v-toolbar>
         <v-container class="grey lighten-5" fill-height align-start>


            <v-row >
                <v-col cols="12" sm="8">
                    <v-text-field
                        v-model="pesquisa"
                        label="Digite o nome do produto que deseja procurar"
                        outlined
                        clearable
                    />
                    <!-- v-on:keyup="pesquisarProduto" -->
                    <v-card
                        class="mx-auto mb-2"
                        outlined
                        v-for="produto in produtosFiltro"
                        :key="produto.descricao"
                    >
                        <v-list-item four-line>
                            <v-list-item-avatar tile size="80" color="grey">
                                <v-img height="8em" width="8em" :src="produto.image"></v-img>
                            </v-list-item-avatar>
                            <v-list-item-content>
                                <div
                                    class="my-4 subtitle-1"
                                    align="center"
                                >{{produto.preco | reais}} ({{produto.fracao}}{{produto.unidade}})</div>
                            </v-list-item-content>
                            <v-list-item-content>
                                <v-text-field
                                    label="Quantidade"
                                    v-model="produto.quantidade"
                                    hide-details
                                    single-line
                                    type="number"
                                />
                            </v-list-item-content>
                            <v-list-item-content class="ml-5">
                                <div
                                    class="my-4 subtitle-1"
                                    align="center"
                                >{{ produto.total | reais}}</div>
                            </v-list-item-content>
                            <div class="ml-5" align="center">
                                <v-card-actions>
                                    <v-btn
                                        color="primary"
                                        fab
                                        small
                                        dark
                                        v-on:click="adicionarProduto(produto)"
                                    >
                                        <v-icon>mdi-plus</v-icon>
                                    </v-btn>
                                </v-card-actions>
                            </div>
                        </v-list-item>
                        <v-list-item-subtitle class="px-2 pb-2">{{ produto.descricao }}</v-list-item-subtitle>
                    </v-card>
                </v-col>

                <v-col cols="12" sm="4">
                    <h3 class="black--text mb-8 elevation-0" align="right">
                        Meu Pedido
                        <br />
                        Total {{total | reais}}
                    </h3>
                    <v-card
                        class="mx-auto mb-2"
                        outlined
                        v-for="produto_pedido in pedido"
                        :key="produto_pedido.codigo"
                    >
                        <v-list-item four-line class="elevation-o">
                            <v-list-item-avatar tile size="40" color="grey">
                                <v-img height="4em" width="4em" :src="produto_pedido.image"></v-img>
                            </v-list-item-avatar>
                            <v-list-item-content>
                                <div class="d-flex justify-space-between caption">
                                    <div
                                        class="v-sheet theme--light"
                                    >{{produto_pedido.preco | reais}} ({{produto_pedido.fracao}}{{produto_pedido.unidade}})</div>
                                    <div
                                        class="v-sheet theme--light"
                                    >{{produto_pedido.quantidade}}{{produto_pedido.unidade}}</div>
                                    <div
                                        class="v-sheet theme--light"
                                    >{{produto_pedido.total | reais}}</div>
                                </div>
                                <div class="d-flex justify-space-between caption">
                                    <div
                                        class="v-sheet theme--light text-truncate"
                                    >{{produto_pedido.descricao}}</div>
                                </div>
                            </v-list-item-content>
                            <v-list-item-avatar size="20">
                                <v-btn fab color="red" v-on:click="removerProduto(produto_pedido)">
                                    <v-icon color="white" size="20">mdi-minus</v-icon>
                                </v-btn>
                            </v-list-item-avatar>
                        </v-list-item>
                    </v-card>
                </v-col>
            </v-row>

        </v-container>
        <!-- </v-content> -->

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
// import { Money } from "v-money";

export default {
    name: "App",

    components: {
        // HelloWorld
        // Money
    },

    data: () => {
        return {
            total: 0.0,
            pesquisa: "",
            produtos: [
                {
                    descricao: "1 Castanha de Caju Salgada Inteira W1",
                    preco: "10.99",
                    fracao: "1",
                    unidade: "kg",
                    quantidade: "1",
                    total: 0.0,
                    image:
                        "https://avatars0.githubusercontent.com/u/5257917?s=88&v=4"
                },
                {
                    descricao: "Pistache",
                    preco: "12.99",
                    fracao: "300",
                    unidade: "g",
                    quantidade: "3",
                    total: 0.0,
                    image:
                        "https://avatars3.githubusercontent.com/u/17561005?s=88&u=f869426a83b53ba677a778adb326dd242b7c3408&v=4"
                },
                {
                    descricao: "3 Castanha de Caju Salgada Inteira W1",
                    preco: "22.99",
                    fracao: "1",
                    unidade: "kg",
                    quantidade: "2",
                    total: 0.0,
                    image:
                        "https://avatars2.githubusercontent.com/u/9938665?s=88&u=c2934332c341d849c61ffa5ecf98da5f53347b4b&v=4"
                },
                {
                    descricao: "4 Castanha de Caju Salgada Inteira W1",
                    preco: "45.00",
                    fracao: "1",
                    unidade: "un",
                    quantidade: "0",
                    total: 0.0,
                    image: "/img/castanha-caju.webp"
                },
                {
                    descricao: "5 Castanha de Caju Salgada Inteira W1",
                    preco: "15.20",
                    fracao: "100",
                    unidade: "g",
                    quantidade: "3",
                    total: 0.0,
                    image: "/img/castanha-caju.webp"
                }
            ],
            pedido: []
        };
    },
    computed: {
        produtosFiltro: function() {
            let pesquisa = this.pesquisa || "";

            return this.produtos.filter(function(produto) {
                return (
                    produto.descricao
                        .toLowerCase()
                        .indexOf(pesquisa.toLowerCase()) > -1
                );
            });
        },
        subtotal: function() {
            this.produtos.forEach(produto => {
                produto.total =
                    (produto.quantidade / produto.fracao) * produto.preco;
            });

            return this.produto;
        }
    },
    methods: {
        randonHex(size = 12) {
            return [...Array(size)]
                .map(() => Math.floor(Math.random() * 16).toString(16))
                .join("");
        },
        adicionarProduto(produto) {
            let pedido = JSON.parse(JSON.stringify(produto));

            // adiciono um identificador aleatorio
            pedido.id = this.randonHex();

            this.pedido.push(pedido);
            this.total += produto.total;
        },
        removerProduto(produto) {
            // localiza a posicao do produto
            var index = this.pedido
                .map(function(item) {
                    return item.id;
                })
                .indexOf(produto.id);

            // remove o produto
            this.pedido.splice(index, 1);

            this.total -= produto.total;
            if (this.total < 0) {
                this.total = 0;
            }
        }
        // pesquisarProduto() {
        //     this.produtos.filter(produto => {
        //         return produto.descricao === "pistache";
        //     });
        //     // pesquisa
        //     console.log("okkk");
        // }
    }
};
</script>
