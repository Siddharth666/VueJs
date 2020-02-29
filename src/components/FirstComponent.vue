<template>
   
   <html>
      <!-- <div class="container"> -->
    <h2>{{msg}}</h2>
     <!-- {{this.myinfo()}} -->
     <!-- <form @submit.prevent="addTodo"> -->
     <label>Name</label>: <input type="text" v-model="bname" name="Name" >
     Email Id: <input type="text" v-model="bemail" name="Email" >
     <button type="submit" class="btn btn-success" v-on:click="created()">Submit</button>
    <br />
    Search By ID: <input type="text" v-model="bId" name="Id" >
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
      msg: 'VueJs + Nodejs/Express + MongoDB',
      bname: '',
      bemail: '',
      bId: '',
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
    
        axios.post('http://localhost:8080/api/contacts', {
            name: this.bname,
           email: this.bemail
        })
         .then(function(response) {alert(" is added.")})
         .catch(function(err) {console.log(err);})
    },

    Delete() {
        alert(this.bname)
        axios.delete('http://localhost:8080/api/contacts/'+this.bId)
         .then(function(response) {})
         .catch(function(err) {console.log(err);})
    },

   GetOne() {
        axios.get('http://localhost:8080/api/contacts/'+this.bId, {

        }).then(function(res) {
            let urr = JSON.parse(JSON.stringify(res))
            console.log(urr.data.data.name)
            console.log(urr.data.data.email)
            // bemail = 'urr.data.result.language'
            //  bname = 'urr.data.result.name'
            //alert(urr.data.result.name)
            //this.bname = res.data.result[0].name;
        })
   },
   GetAll() {
        axios.get('http://localhost:8080/api/contacts', {

        }).then(function(res) {
            let urr = JSON.parse(JSON.stringify(res))
            console.log(urr.data.data)
        })
   },
   Delete() {
       axios.delete('http://localhost:8080/api/contacts/'+this.bId)
       .then(function(res) {alert("Deleted Succesfully")})
   },
   
   Update() {
       axios.put('http://localhost:8080/api/contacts/'+this.bId, {
           name: this.bname,
           email: this.bemail
       })
       .then(function(res) {alert("Updated Succesfully")})
   }
  }

  
 
}

</script>

<style scoped>

</style>