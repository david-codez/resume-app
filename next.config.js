/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  // A stray ~/package-lock.json otherwise makes Turbopack guess the wrong workspace root.
  turbopack: { root: __dirname },
}
