// 01_users.js

exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('users').del()
      .then(function () {
        // Inserts seed entries
        return knex('users').insert([
          { username: 'admin', email: 'admin@example.com', password: 'adminpassword' },
          { username: 'user1', email: 'user1@example.com', password: 'user1password' },
          { username: 'user2', email: 'user2@example.com', password: 'user2password' }
        ]);
      });
  };
  