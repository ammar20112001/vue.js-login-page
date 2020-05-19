<template>
    <div>
        <b-container class='my-3 my-lg-4'>
            <b-form @submit.prevent="onSubmit" @reset="onReset">

                <div class="row">
                    <div class="col-6">
                        <b-form-group id="inputFirstName" class='input-box' label="First Name:" label-for="input-1">
                            <b-form-input id="input-1" :class="{ 'is-invalid': validationStatus($v.firstName) }" type="text" placeholder="e.g. Ammar" v-model.trim="$v.firstName.$model"></b-form-input>
                            <div v-if="!$v.firstName.required" class="invalid-feedback">This field is required</div>
                            <div v-if="!$v.firstName.minLength" class="invalid-feedback">Name should have atleast {{ $v.firstName.$params.minLength.min }} letters</div>
                            <div v-if="!$v.firstName.maxLength" class="invalid-feedback">Name should have atmost {{ $v.firstName.$params.maxLength.max }} letters</div>
                        </b-form-group>
                    </div>
                    <div class="col-6">
                        <b-form-group id="inputLastName" class='input-box' label="Last Name:" label-for="input-2">
                            <b-form-input id="input-2" :class="{ 'is-invalid': validationStatus($v.lastName) }" type="text" placeholder="e.g. Syed" v-model.trim="$v.lastName.$model"></b-form-input>
                            <div v-if="!$v.lastName.required" class="invalid-feedback">This field is required</div>
                            <div v-if="!$v.lastName.minLength" class="invalid-feedback">Name should have atleast {{ $v.lastName.$params.minLength.min }} letters</div>
                            <div v-if="!$v.lastName.maxLength" class="invalid-feedback">Name should have atmost {{ $v.lastName.$params.maxLength.max }} letters</div> 
                        </b-form-group>
                    </div>
                </div>
                
                <b-form-group id="inputEmail" class='input-box' label="Email address:" label-for="input-3">
                    <b-form-input id="input-3" :class="{ 'is-invalid': validationStatus($v.email) }" type="email" placeholder="Enter email" v-model.trim="$v.email.$model"></b-form-input>
                    <div v-if="!$v.email.required" class="invalid-feedback">This field is required</div>
                    <div v-if="!$v.email.email" class="invalid-feedback">Invalid Email!</div>
                </b-form-group>

                <b-form-group id="inputPassword" class='input-box' label="Password:" label-for="input-4">
                    <b-form-input id="input-4" :class="{ 'is-invalid': validationStatus($v.password) }" type="password" placeholder="Enter Password" v-model.trim="$v.password.$model"></b-form-input>
                    <div v-if="!$v.password.required" class="invalid-feedback">This field is required</div>
                    <div v-if="!$v.password.minLength" class="invalid-feedback">Password should have atleast {{ $v.lastName.$params.minLength.min }} letters</div>
                    <div v-if="!$v.password.passwordUpperCase" class="invalid-feedback">Password must contain at least one upper case letter</div>
                    <div v-if="!$v.password.passwordLowerCase" class="invalid-feedback">Password must contain at least one lower case letter</div>
                </b-form-group>

                <b-form-group id="inputPassword2" class='input-box' label="Re-enter Password:" label-for="input-5">
                    <b-form-input id="input-4" :class="{ 'is-invalid': validationStatus($v.repeatPassword) }" type="password" placeholder="Enter Password" v-model.trim="$v.repeatPassword.$model"></b-form-input>
                    <div v-if="!$v.password.required" class="invalid-feedback">This field is required</div>
                    <div v-if="!$v.password.sameAsPassword" class="invalid-feedback">Password must be identical</div>                 
                </b-form-group>

                <b-form-group id="inputAdress" class='input-box' label="Address:" label-for="input-5" description='Optional'>
                    <b-form-input id="input-5" type="text" placeholder="Enter Address" v-model.trim="address"></b-form-input>
                </b-form-group>

                <div class='d-flex justify-content-center'>
                    <b-button class='mx-1' type="submit" >Sign Up</b-button>
                    <b-button class='mx-1' type="reset" >Reset</b-button>
                </div>
                
            </b-form>
        </b-container>
    </div>
</template>

<script>

    import { required, minLength, maxLength, email, sameAs } from 'vuelidate/lib/validators'

    function passwordUpperCase (value) {
        return(/[A-Z]/.test(value))? true:false;
    }
    function passwordLowerCase (value) {
        return(/[a-z]/.test(value))? true:false;
    }

    export default {
        data() {
            return {
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                address: '',
                repeatPassword: ''
            };
        },
        validations: {
            firstName: {
                required,
                minLength: minLength(3),
                maxLength: maxLength(8)
            },
            lastName: {
                required,
                minLength: minLength(3),
                maxLength: maxLength(8)
            },
            email: {
                required,
                email
            },
            password: {
                required,
                minLength: minLength(6),
                passwordUpperCase,
                passwordLowerCase
            },
            repeatPassword: {
                required,
                sameAsPassword: sameAs('password')
            }

        },
        methods: {
            onSubmit() {
                this.$v.$touch();
                if (this.$v.$pending || this.$v.$error) return;

                alert('Thanks for Signing Up, ' + this.fullName + '!')
            },
            onReset() {
                this.firstName = ''
                this.lastName = ''
                this.email = ''
                this.password = ''
                this.address = ''
            },
            validationStatus (validation) {
                return typeof validation != undefined ? validation.$error: false;
            },
        },
        computed: {
            fullName() {
                return this.firstName + ' ' + this.lastName
            }
        }
    }
</script>

<style scoped>

button {
    background-color: orange;
    border: orange;
}

</style>