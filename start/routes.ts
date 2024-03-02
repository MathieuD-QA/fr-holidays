/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
const HolidaysController = () => import('#controllers/holidays_controller')

router.post('holidays', [HolidaysController, 'create'])
router.get('holidays/:id', [HolidaysController, 'show'])
router.get('holidays', [HolidaysController, 'index'])
router.delete('holidays/:id', [HolidaysController, 'destroy'])
router.get('toto/:id', [HolidaysController, 'run'])
