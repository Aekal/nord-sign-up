export default defineNuxtRouteMiddleware(() => {
  const formSubmitted = localStorage.getItem('formSubmitted')
  if (!formSubmitted) {
    return navigateTo({ name: 'index' })
  }
  localStorage.removeItem('formSubmitted')
})
