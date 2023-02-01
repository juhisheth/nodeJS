const zod = require('zod');

const studentSchemaValidation = zod.object({
    body: zod.object({
        name: zod.string().min(3).max(25),
        email: zod.string(),
        password: zod.string(),
        age: zod.number().positive(),
        type:zod.string()
    }).strict()
})

module.exports = studentSchemaValidation;