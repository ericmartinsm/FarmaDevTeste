<template>
  <div>
      <input type="text" name="" id="" v-model="Personagem_nome">
      <input type="button" value=" Search" v-on:click="get_api">
      <h2>Nome Personagem: {{Personagem_nome}}</h2>

      <div v-for="(id, status) in Personagem" :key="status">
          <h3>Nome{{id.name}}</h3>
          <p>Estado{{id.status}}</p>
          <p>Espécie{{id.species}}</p>
          <p>Genero{{id.gender}}</p>
          <p>Primeira aparição{{id.origin[0]}}</p>
          <p>Ultima aparição{{id.location[0]}}</p>
          <img :src="id.image" alt="">
          <p>Quantidade de Episódios{{id.episode}}</p>
      </div>
  </div>
</template>


<script>
import axios from 'axios'
export default {
    data(){
      return{
        Personagem:[],
        Personagem_nome:""
      };
    },
    
    methods:{
      get_api(){

        // let nome_pesquisa = this.Personagem_nome

        let url_padrao="https://rickandmortyapi.com/api/character/?name=";

        console.log(url_padrao)
        console.log(this.Personagem_nome)

        axios.get(url_padrao+this.Personagem_nome).then(res=>{
          console.log(res);
          this.Personagem=res.data.results;
          console.log(res.data.results)
        })
        
      }
    }
}
</script>

<style>
  div{
    background:rgba(255, 253, 253, 0.103);
    color: #fff;
  }
  
</style>