<template>
  <div class="register mx-auto mt-5" style="max-width: 400px;">
    <h2>Register</h2>
    <form @submit.prevent="register">
      <div class="mb-3">
        <label for="email" class="form-label">Email:</label>
        <input type="email" v-model="email" class="form-control" required />
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password:</label>
        <input type="password" v-model="password" class="form-control" required />
      </div>
      <div class="mb-3">
        <label for="name" class="form-label">Name:</label>
        <input type="text" v-model="name" class="form-control" required />
      </div>
      <button type="submit" class="btn btn-primary">Register</button>
    </form>
    <p v-if="errorMessage" class="text-danger mt-3">{{ errorMessage }}</p>
  </div>
</template>

<script>
import { auth, db, setDoc, doc } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export default {
  data() {
    return {
      email: '',
      password: '',
      name: '',
      errorMessage: ''
    };
  },
  methods: {
    async register() {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, this.email, this.password);
        await setDoc(doc(db, 'profiles', userCredential.user.uid), {
          name: this.name,
          email: this.email
        });
        this.$router.push('/login');
      } catch (error) {
        this.errorMessage = error.message;
      }
    }
  }
};
</script>

<style scoped>
/* Additional styles if needed */
</style>

