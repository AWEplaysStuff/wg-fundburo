const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
require('dotenv').config();
const User = require('./models/UserSchema');

(async () => {
  try {
    await mongoose.connect(process.env.mongoURI);

    const email = process.env.ADMIN_EMAIL || 'admin@example.com';
    const password = process.env.ADMIN_PASSWORD || 'admin123';

    let admin = await User.findOne({ email });
    if (!admin) {
      const hashedPassword = bcrypt.hashSync(password, 8);
      admin = await User.create({
        username: 'Admin',
        rollno: 'ADMIN',
        email,
        password: hashedPassword,
        role: 'admin'
      });
      console.log('Admin user created');
    } else {
      console.log('Admin user already exists');
    }
  } catch (err) {
    console.error(err);
  } finally {
    mongoose.connection.close();
  }
})();
