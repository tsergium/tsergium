const withSass = require('@zeit/next-sass')
module.exports = withSass();

exports.exportPathMap = () => ({
  "/": { page: "/" },
  "/portfolio": { page: "/portfolio" },
  "/contact": { page: "/contact" },
  "/about": { page: "/about" },
});
