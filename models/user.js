const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcryptjs')
const {
  FeatureCollection,
  featureCollectionSchema,
} = require('./feature-collection')

// a user
const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    handle: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    numPosts: { type: Number, default: 0 },
    numComments: { type: Number, default: 0 },
    featureCollections: [
      { type: Schema.Types.ObjectId, ref: 'FeatureCollection' },
    ],
    notifications: {
      email: { type: Boolean, default: true },
    },
  },
  { timestamps: true }
)

// passport middleware function is run before saving a new user
// userSchema.pre('save', async function (next) {
//   try {
//     // generate a salt with 10 rounds
//     const salt = await bcrypt.genSalt(10)

//     // hash the password using this salt
//     const passwordHash = await bcrypt.hash(this.password, salt)
//     // console.log(`password during signup pre-save: ${this.password} => ${passwordHash}`)
//     this.password = passwordHash // replace original with hashed version
//     next()
//   } catch (err) {
//     next(err)
//   }
// })

// a method to encrypt the password
userSchema.methods.encryptPassword = async function (originalPassword) {
  try {
    // generate a salt with 10 rounds
    const salt = await bcrypt.genSalt(10)

    // hash the password using this salt
    const passwordHash = await bcrypt.hash(originalPassword, salt)
    return passwordHash
  } catch (err) {
    throw new Error(err)
  }
}

// a method to check the password
userSchema.methods.isValidPassword = async function (newPassword) {
  try {
    return await bcrypt.compare(newPassword, this.password)
  } catch (err) {
    throw new Error(err)
  }
}

module.exports = {
  userSchema: userSchema,
  User: mongoose.model('User', userSchema),
}
