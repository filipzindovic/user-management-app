const validateValue = (list = [], value = "") => {
  const validValue = list?.find((item) => item === value)

  return validValue ? validValue : list?.[0]
}

export { validateValue }
