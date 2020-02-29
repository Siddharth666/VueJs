<template>
   
   <html>
      <!-- <div class="container"> -->
    <h2>{{msg}}</h2>
     <!-- {{this.myinfo()}} -->
     <!-- <form @submit.prevent="addTodo"> -->
     <label>First Name</label>: <input type="text" v-model="bFirstName" name="FirstName" >
     Last Name: <input type="text" v-model="bLastName" name="LastName" >
     <button type="submit" class="btn btn-success" v-on:click="created()">Submit</button>
    <br />
    Search By ID: <input type="text" v-model="bId" name="ID" >
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
      msg: 'VueJs + C#/Web API + MS-SQL',
      bFirstName: '',
      bLastName: '',
      bId: '',
      webapiURL: 'http://localhost:52052/api/student/',
      todos: [
      ]
    }
  },
  methods: {
    created() {
        axios.post(this.webapiURL, {
            FirstName: this.bFirstName,
            LastName: this.bLastName
        })
         .then(function(response) {alert(" is added.")})
         .catch(function(err) {console.log(err);})
    },
   GetOne() {
        axios.get(this.webapiURL+this.bId, {

        }).then(function(res) {
            let urr = JSON.parse(JSON.stringify(res))
            console.log(urr.data[0].FirstName)
            console.log(urr.data[0].LastName)
            //alert(this.FirstName+" "+this.LastName);
           // this.FirstName = urr.data[0].FirstName;
        })
   },
   GetAll() {
        axios.get(this.webapiURL, {
        }).then(function(res) {
            let urr = JSON.parse(JSON.stringify(res))
            console.log(urr.data)
        })
   },
   Delete() {
       axios.delete(this.webapiURL+this.bId)
       .then(function(res) {alert("Deleted Succesfully")})
   },
   
   Update() {
       axios.put(this.webapiURL+this.bId, {
           FirstName: this.bFirstName,
           LastName: this.bLastName
       })
       .then(function(res) {alert("Updated Succesfully")})
   }
  }

  
 
}

</script>

<style scoped>

</style>