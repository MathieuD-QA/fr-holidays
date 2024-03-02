import vine from '@vinejs/vine'

/**
 * Validates the post's creation action
 */
export const createPostValidator = vine.compile(
  vine.object({
    days: vine.string(),
    name_holidays: vine.string(),
  })
)
