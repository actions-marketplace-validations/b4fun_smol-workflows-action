export const meta = {
  name: 'dump-test-args',
  description: 'Return workflow arguments through the debug provider for action tests',
}

const dump = await agent('Return the supplied workflow arguments unchanged.', {
  schema: {
    type: 'object',
    const: args,
  },
})

export default { dump }
