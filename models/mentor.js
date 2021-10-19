import mongoose from 'mongoose';

const mentorSchema = new mongoose.Schema(
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

const Mentor = mongoose.model('Mentor', userSchema);
export default Mentor;