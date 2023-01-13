export default defineEventHandler((event) => {
  const { req, res } = event
  const { userCookie } = parseCookies(event)
  console.log('server auth middleware')
  req.user = userCookie
})
