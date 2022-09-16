import { apiKeyAuthSchema } from './schemas/'
import {
  badRequest,
  serverError,
  unauthorized,
  forbidden
} from './components/'

export default {
  securitySchemes: { apiKeyAuthSchema },
  badRequest,
  serverError,
  unauthorized,
  forbidden
}
