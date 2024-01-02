import { handle } from 'hono/vercel'
import app from '../app'

export const config = {
  runtime: 'edge'
}

export default handle(app)
