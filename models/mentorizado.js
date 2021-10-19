import mongoose from 'mongoose';

const mentorizadoSchema = new mongoose.Schema(
  {
    name: { 
      type: String, 
      required: true 
    },
    email: {
      type: String, 
      unique: true, 
    },
  },
);

const Mentorizado = mongoose.model('Mentorizado', userSchema);
export default Mentorizado;