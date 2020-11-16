// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from 'next'

type Response = {
  name: string
}

export default (req: NextApiRequest, res: NextApiResponse<Response>): void => {
  res.statusCode = 200
  res.json({ name: 'John Doe' })
}
