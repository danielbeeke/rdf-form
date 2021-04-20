export const expand = (binding, context) => {
  const bindingSplit = binding.split(':')
  if (context[bindingSplit[0]]) {
    binding = context[bindingSplit[0]] + bindingSplit[1]
  }

  return binding
}