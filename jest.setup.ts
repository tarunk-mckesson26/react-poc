import "@testing-library/jest-dom"

// jsdom doesn't implement ResizeObserver; Radix primitives (e.g. Tooltip/Popover arrows) need it.
class ResizeObserverMock {
  observe() {}
  unobserve() {}
  disconnect() {}
}

global.ResizeObserver = ResizeObserverMock as unknown as typeof ResizeObserver

