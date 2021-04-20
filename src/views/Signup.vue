<template>
  <div class="row">
        <div class="col-12 text-center mb-4">
            <h1>Sign Up</h1>
        </div>
        <div class="col-sm-5 m-auto">
            <!-- <div v-if="errorMessage !== ''" class="alert alert-danger" role="alert">
                {{ errorMessage }}
            </div>
            <div v-if="successMessage !== ''" class="alert alert-success" role="alert">
                {{ successMessage }}
            </div> -->
            <form @submit.prevent="signupRequest" id="signup-form">
                <div class="row text-left">
                    <div class="col-sm-12 form-group">
                        <label for="user">username</label>
                        <input type="user" id="user" v-model="newdata.user" class="form-control form-control-lg">
                    </div>
                    <div class="col-sm-12 form-group">
                        <label for="email">@Email-Address</label>
                        <input type="email" id="email" v-model="newdata.email" class="form-control form-control-lg">
                    </div>
                    <div class="col-sm-12 form-group">
                        <label for="password">Password</label>
                        <input type="password" id="password" v-model="newdata.password" class="form-control form-control-lg">
                    </div>
                    <div class="col-sm-12 text-center form-group">
                        <button v-bind:disabled="xhrRequest" v-bind:class="{disabled: xhrRequest}" class="btn btn-lg btn-primary px-4">
                            <span v-if="! xhrRequest">Sign Up</span>
                            <span v-if="xhrRequest">Please Wait...</span>
                        </button>
                        <div v-if="xhrRequest" class="spinner-border text-secondary _loader" role="status">
                            <span class="sr-only">Loading...</span>
                        </div>
                    </div>
                    <div class="col-sm-12 text-center form-group mt-5">
                        <p>
                            Already have an account? 
                            <router-link to="/login">Login</router-link>
                        </p>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>

import axios from 'axios'
// import {HTTP} from "./http-common"

export default {
    name: "Signup",
    data() {
        return {
            newdata:{
                user:"",
                email: "",
                password: ""
            }
        }
    }, 
    methods: {
       async signupRequest() {
           await axios.post('http://localhost:2002/api/registed',{payload:this.newdata}).then((res)=>{
               console.log(res);
            //    console.log('add-success');
                alert('register successful')
                window.location = '#/login'
           })
           .catch((error) => {
               console.log(error);
           })
        }
    }
}
</script>

<style scoped>
._loader {
    position:relative;
    top:6px;
    left:10px;
}
</style>