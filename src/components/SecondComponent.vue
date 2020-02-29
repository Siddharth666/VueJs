<template>
   
   <html>
      <!-- <div class="container"> -->
    <h2>{{msg}}</h2>
     <!-- {{this.myinfo()}} -->
     <!-- <form @submit.prevent="addTodo"> -->
     <label>Name</label>: <input type="text" v-model="bname" name="Name" >
     Language: <input type="text" v-model="blanguage" name="Language" >
     <button type="submit" class="btn btn-success" v-on:click="created()">Submit</button>

     <button type="submit" class="btn btn-primary" v-on:click="GetOne()">Get</button>
     <button type="submit" class="btn btn-warning" v-on:click="Update()">Update</button>
     <button type="submit" class="btn btn-danger" v-on:click="Delete()">Delete</button>

     <button type="submit" class="btn btn-success" v-on:click="GetAll()">Get All</button>
     <!-- </form> -->
     <!-- </div> -->
   
   </html>
</template>

<script>
 import axios from 'axios'
export default {
  data () {
    return {
     //msg: '',
      msg: 'VueJs + Flask/Python + MongoDB',
      bname: '',
      blanguage: '',
      todos: [
      ]
    }
  },
  methods: {
    created() {
        //List view try try try
        // axios.get('http://localhost:5000/framework')
        // .then(res => {console.log(res.data.result[0].name)})
        // .catch(err => console.log(err))
    
        axios.post('http://localhost:5000/framework', {
            language: this.blanguage,
            name: this.bname
        })
         .then(function(response) {alert(" is added.")})
         .catch(function(err) {console.log(err);})
    },

    Delete() {
        alert(this.bname)
        axios.delete('http://localhost:5000/framework/'+this.bname)
         .then(function(response) {})
         .catch(function(err) {console.log(err);})
    },

   GetOne() {
        axios.get('http://localhost:5000/framework/'+this.bname, {

        }).then(function(res) {
            let urr = JSON.parse(JSON.stringify(res))
            alert(urr.data.result.language)
            blanguage = 'urr.data.result.language'
             bname = 'urr.data.result.name'
            //alert(urr.data.result.name)
            //this.bname = res.data.result[0].name;
        })
   },
   GetAll() {
        axios.get('http://localhost:5000/framework', {

        }).then(function(res) {
            let urr = JSON.parse(JSON.stringify(res))
            console.log(urr.data.result)
        })
   },
   Delete() {
       axios.delete('http://localhost:5000/framework/'+this.bname)
       .then(function(res) {alert("Deleted Succesfully")})
   },
   
   Update() {
       axios.put('http://localhost:5000/framework/'+this.bname, {
           language: this.blanguage,
           name: this.bname
       })
       .then(function(res) {alert("Updated Succesfully")})
   }
  }

  
 
}

</script>

<style scoped>

</style>