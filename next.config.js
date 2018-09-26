const withSass = require('@zeit/next-sass')
module.exports = withSass();

exports.exportPathMap = () => ({
  "/": { page: "/" },
  "/contact": { page: "/contact" },
  "/about": { page: "/about" },
});
