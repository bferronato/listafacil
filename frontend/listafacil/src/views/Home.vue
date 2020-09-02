<template>
    <div class="home">
        <!-- <HelloWorld msg="Welcome to Your Vuewwwwwww.js App"/> -->
        <div class="wrapper">
            <div class="box">
              <div class="pesquisa-wrapper">
                <input type="text" class="pesquisa-produto" />

              </div>

                <ul>
                    <li style="border:1px solid gray;">
                      <div>
                        <img src="../../public/img/castanha-caju.webp" width="10%" />
                      </div>
                    </li>
                    <li>
                        <img src="../../public/img/castanha-caju.webp" width="10%" />
                    </li>
                    <li>
                        <img src="../../public/img/castanha-caju.webp" width="10%" />
                    </li>
                </ul>
            </div>
            <div class="box">
                <select name="lista-de-compras" id="lista-de-compras" multiple>
                    <option value="1">Castanha de Cajú</option>
                    <option value="2">Castanha de Cajú</option>
                    <option value="3">Castanha de Cajú</option>
                    <option value="4">Castanha de Cajú</option>
                    <option value="5">Castanha de Cajú</option>
                </select>
            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
    name: "Home",
    components: {
        //  HelloWorld
    }
};
</script>

<style >


.wrapper {
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-gap: 10px; 
    background-color: #fff;
    color: #444;
    padding: 1em;
}

.box {
    border: 1px solid #444;
    color: #fff;
    border-radius: 5px;
    font-size: 150%;
    padding: 1em;
}

.pesquisa-produto {
    left: 0;
    right: 0;
    width: fit-content;
}
.pesquisa-wrapper {
  padding: 0.3em;
}

</style>