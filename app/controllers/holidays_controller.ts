import { HttpContext } from '@adonisjs/core/http'
import Holiday from '#models/holiday'
import { createPostValidator } from '#validators/holiday'
import HolidaysService from '#services/holidays_fetch_service'
export default class HolidaysController {
  async create({ request, response }: HttpContext) {
    const data = request.all()
    const payload = await createPostValidator.validate(data)
    const holiday = await Holiday.create(payload)
    return response.created({ message: 'Holiday added successfully', data: holiday })
  }

  async show({ request }: HttpContext) {
    return Holiday.findOrFail(request.param('id'))
  }
  async destroy({ request }: HttpContext) {
    const findId = await Holiday.findOrFail(request.param('id'))
    const deleteDays = await findId.delete()
    return deleteDays
  }

  async index() {
    return await Holiday.all()
  }

  async run({request}: HttpContext) {
    const serviceHolidays = new HolidaysService()
    const res = await serviceHolidays.fetchHolidaysAvailable(request.param('id'))
    return res
  }
}
