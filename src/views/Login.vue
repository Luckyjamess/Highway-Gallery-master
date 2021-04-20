<template>
  <div class="row">
        <div class="col-12 text-center mb-4">
            <h1>Log In</h1>
        </div>
        <div class="col-sm-5 m-auto">
            <!-- <div v-if="errorMessage !== ''" class="alert alert-danger" role="alert">
                {{ errorMessage }}
            </div>
            <div v-if="successMessage !== ''" class="alert alert-success" role="alert">
                {{ successMessage }}
            </div> -->
            <form @submit.prevent="loginRequest" id="login-form">
                <div class="row text-left">
                    <div class="col-sm-12 form-group">
                        <label for="email">Email Address</label>
                        <input type="email" v-model="email" id="email" class="form-control form-control-lg">
                    </div>
                    <div class="col-sm-12 form-group">
                        <label for="password">Password</label>
                        <input type="password" v-model="password" id="password" class="form-control form-control-lg">
                    </div>
                    <div class="col-sm-12 text-center form-group">
                        <!-- <router-link :to="{name:'Home', params: {user: 'Jame'}}"> -->
                        <button v-bind:disabled="xhrRequest" v-bind:class="{disabled: xhrRequest}" class="btn btn-lg btn-primary px-4">
                            <span >Login</span>
                        </button>
                        <!-- </router-link> -->
                        <div v-if="xhrRequest" class="spinner-border text-secondary loader" role="status">
                            <span class="sr-only">Loading...</span>
                        </div>
                    </div>
                    <div class="col-sm-12 text-center form-group mt-5">
                        <p>Don't have an account? <router-link to="/signup">Sign Up</router-link></p>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>

import axios from 'axios'
// import firebase from "firebase";
export default {
    name: "Login",
    data() {
        return {
            check:false,
            email: "",
            password: "",
            username:"",
            alldata: {
                
            }
        }
    },
    created() {
        axios.get('http://localhost:2002/api/query').then((res) =>{
            console.log(res);
            console.log('alldata');
            this.alldata = res.data.data
            console.log(this.alldata[0].email);
        })
    },
    methods: {
         loginRequest() {
             this.alldata.forEach(element => {
                 if (this.email == element.email){
                     if (this.password == element.password) {
                         this.username = element.user
                         this.$store.dispatch("getUsername",this.username)
                         this.check = true
                         alert("login successful Hi : "+element.user)
                         
                         window.location = '#/'
                         
                     }
                      else {
                        alert("invalid email or password!!")
                     }
                 }
             });
        }
    }
}
</script>

<style>

</style>