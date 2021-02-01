<template>
  <div>
    <img id="imagem-thumb" src="./assets/thumb.png" alt="">
    <Card/>

    </div>
      
</template>

<script>


import Card from './components/Card'


export default {
  name: 'App',

  components: {
    
   Card,
   
  },

  data: () => ({
    //
  }),
};




</script>
<style>
#imagem-thumb{
  width: 100%;
  border-radius: 50px 50px 0 0;
}
</style>