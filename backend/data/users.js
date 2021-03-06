import bcrypt from 'bcryptjs';

const user = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'First User',
    email: 'user1@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Second User',
    email: 'user2@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default user;
