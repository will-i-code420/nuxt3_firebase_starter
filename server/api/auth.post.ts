export default defineEventHandler((event) => {
  console.log('auth post route')
  const user = event.req.user
  return user
})
