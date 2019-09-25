export default (state = 0, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return state + 1
      case 'RESET':
        return 0
      default:
        return state
    }
  }
