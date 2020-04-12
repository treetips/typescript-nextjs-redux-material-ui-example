import { NextApiRequest, NextApiResponse } from "next"
import { InputResponseModel } from "../../model"

export default (req: NextApiRequest, res: NextApiResponse) => {
  const inputValue = String(req.query["value"])
  const responseBody: InputResponseModel = {
    input: inputValue,
    timestamp: getCurrentTimestamp(),
  }
  res.status(200).json(responseBody)
}

const getCurrentTimestamp = () => {
  const padding = (value: number, num: number): string =>
    String(value).padStart(num, "0")
  const d = new Date()
  const year = d.getFullYear()
  const month = padding(d.getMonth() + 1, 2)
  const date = padding(d.getDate(), 2)
  const hour = padding(d.getHours(), 2)
  const minute = padding(d.getMinutes(), 2)
  const second = padding(d.getSeconds(), 2)
  const microSecond = padding(d.getMilliseconds(), 3)

  return `${year}/${month}/${date} ${hour}:${minute}:${second}.${microSecond}`
}
