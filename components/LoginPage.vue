<template>
  <div class="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
    <h2 class="text-2xl font-bold mb-4">Login</h2>
    <form class="flex flex-col space-y-4">
      <input type="text" placeholder="Username" class="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500" required>
      <input type="password" placeholder="Password" class="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500" required>
      <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">Login</button>
      <div class="text-center">
        <a href="#" class="text-blue-500 hover:text-blue-700">Forgot Password?</a>
      </div>
    </form>
  </div>
</template>

<script>
export default {
name: 'LoginPage',
}
</script>

<style scoped>
/* Add the CSS styles here */
.login-container {
  width: 300px;
  margin: 50px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.login-form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.login-form input[type="text"],
.login-form input[type="password"] {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.login-form button[type="submit"] {
  width: 100%;
  padding: 10px;
  background-color: #4CAF50;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.login-form button[type="submit"]:hover {
  background-color: #3e8e41;
}

.forgot-password {
  text-align: center;
  margin-top: 20px;
}

.forgot-password a:hover {
  text-decoration: none;
  color: #4CAF50;
}
</style>
