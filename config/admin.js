module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '448464f15ba3a28977fa3724fd60da9d'),
  },
});
