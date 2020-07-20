function dummyFn(..._: any) {
}

function dummyDecorator(..._: any) {
  return dummyFn
}

export const Property = dummyDecorator
export const ArrayProp = dummyDecorator
export const Index = dummyDecorator
export const getModel = dummyFn