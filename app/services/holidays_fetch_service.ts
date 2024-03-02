import ky from 'ky'

export default class HolidaysService {
  async fetchHolidaysAvailable(year: string) {
    try {
      const data = await ky
        .get(`https://calendrier.api.gouv.fr/jours-feries/metropole/${year}.json`)
        .json()
      for (const [date, name] of Object.entries(data)) {
        await ky
          .post('http://localhost:53388/holidays', {
            json: {
              days: date,
              name_holidays: name,
            },
          })
          .json()
      }
    } catch (error) {
      console.log('this error is not good')
      throw error
    }
  }
}
