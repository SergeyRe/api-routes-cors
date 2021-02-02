import Cors from 'cors'
import initMiddleware from '../../lib/init-middleware'

// Initialize the cors middleware
const cors = initMiddleware(
  // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
  Cors({
    // Only allow requests with GET, POST and OPTIONS
    methods:  'POST',
  })
)

export default async function handler(req, res) {
  // Run cors
  await cors(req, res)
  res.setHeader("Access-Control-Allow-Headers: Origin, Content-Type, Content-Length, Accept-Encoding");
      res.status(200).json({ message: 'Hello Everyone!' });

  res.end();

  // Rest of the API logic
 // res.json({ message: 'Hello Everyone!' })
}
