<template>
    <b-form @submit.prevent="signIn">

        <b-form-group id="signInEmail" class='input-box' label="Email address:" label-for="signIn-1">
            <b-form-input id="signIn-1" :class="{ 'is-invalid': validationStatus($v.emailSigned) }" type="email" placeholder="Enter email" v-model.trim="$v.emailSigned.$model"></b-form-input>
            <div v-if='!$v.emailSigned.required' class='invalid-feedback'>This field is required</div>
            <div v-if='!$v.emailSigned.email' class='invalid-feedback'>Invalid Email</div>        
        </b-form-group>

        <b-form-group id="signInPassword" class='input-box' label="Password:" label-for="signIn-2">
            <b-form-input id="signIn-2" :class="{ 'is-invalid': validationStatus($v.passwordSigned) }" type="password" placeholder="Enter password" v-model.trim="$v.passwordSigned.$model"></b-form-input>
            <div v-if='!$v.passwordSigned.required' class='invalid-feedback'>This field is required</div>
        </b-form-group>

        <div v-if="status" class='text-danger small'>Incorrect Password!</div>

        <div class='d-flex justify-content-center'>
            <b-button type="submit" >Sign In</b-button>
        </div>

        <!-- <div>{{ usersData }}</div> -->

    </b-form>
</template>
    
<script>

    import { required, email } from 'vuelidate/lib/validators'
    import { eventBus } from '../main'
    
export default {
    data() {
        return {
            emailSigned: '',
            passwordSigned: '',
            usersData: [],
            status: false,
        }
    },
    validations: {
        emailSigned: {
            required,
            email
        },
        passwordSigned: {
            required
        }
    },
    methods: {
        signIn() {
            this.$v.$touch();
            if (this.$v.$pending || this.$v.$error) return;
            if (this.userCheck() === true) {
                this.status = false;
                alert('Welcome Back! Great to see you again!')
                return true;
            }
            return false;
        },
        userCheck() {
            let index;
            for (index in this.usersData) {
                console.log(this.usersData[index]['em'])
                if (this.usersData[index]['em'] === this.emailSigned && this.usersData[index]['ps'] === this.passwordSigned) {
                    return true;
                }
            }
            this.status = true;
            return false;
        },
        validationStatus(validation) {
            return typeof validation != undefined ? validation.$error: false;
        }
    },
    created() {
        eventBus.$on('userInfoData', (data) => {
            this.usersData.push(data);
        })
    }
}
</script>

<style scoped>

button {
    background-color: orange;
    border: orange;
}

</style>

