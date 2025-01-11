import bcrypt from "bcryptjs"

const saltRounds = 10;

async function hash(value) {
    const salt = await bcrypt.genSalt(saltRounds);
    return bcrypt.hash(value, salt);
}

async function compare(value, hashed) {
    return await bcrypt.compare(value, hashed);
}


export default { hash, compare };