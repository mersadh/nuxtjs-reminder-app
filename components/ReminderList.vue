<template>
  <div class="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
    <h2 class="text-2xl font-bold mb-4">Reminder List</h2>
    <ul>
      <!-- Add your reminder list items here -->
      <!-- You can use a database or local storage to store the reminders -->
      <!-- and display them in this component -->
    </ul>
    <div class="mt-4">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">Add Reminder</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ReminderList',
}
</script>

<style scoped>
/* Add the CSS styles here */
.reminder-list {
  width: 300px;
  margin: 50px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
</style>
