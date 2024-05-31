<template>
  <footer class="footer">
    <p>&copy; 2024 WanderLink. All rights reserved.</p>
    <p>
      <a href="https://www.expedia.com/" target="_blank">Expedia</a> |
      <a href="https://www.booking.com/" target="_blank">Booking.com</a> |
      <a href="https://www.tripadvisor.com/" target="_blank">Tripadvisor</a>
    </p>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
.footer {
  background: #1c5fa8;
  color: white;
  text-align: center;
  padding: 10px;
  position: fixed;
  width: 100%;
  bottom: 0;
}
.footer a {
  color: white;
  text-decoration: none;
  margin: 0 10px;
}
.footer a:hover {
  text-decoration: underline;
}
</style>
