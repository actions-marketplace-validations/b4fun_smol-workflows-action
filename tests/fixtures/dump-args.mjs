const dump = await agent('Return the supplied workflow arguments unchanged.', {
  schema: {
    type: 'object',
    const: args,
  },
})

export default { dump }
