let state: Record<string, string> = {}

Object.defineProperty(window, 'localStorage', {
  value: {
    getItem: jest.fn(key => state[key]),
    setItem: jest.fn((key, value) => { state[key] = value }),
    removeItem: jest.fn(key => delete state[key]),
    clear: jest.fn(() => { state = {} })
  }
})