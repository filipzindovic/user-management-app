import { format, fromUnixTime } from "date-fns"

const formatDate = (value = "", formatType = "dd/MM/yyyy") => {
  const date = new Date(fromUnixTime(value))

  return format(date, formatType)
}

export { formatDate }
