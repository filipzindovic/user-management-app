const defaultConfig = (config) => ({
  ...config,
  global: {
    stubs: {
      "font-awesome-icon": {
        template: "<template></template>"
      }
    }
  }
})

export { defaultConfig }
