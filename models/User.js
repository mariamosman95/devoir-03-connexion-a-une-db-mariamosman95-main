const UserSchema = mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    motDePasse: { type: String, required: true },
});