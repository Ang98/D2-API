import mongoose from 'mongoose';

const mentoriaSchema = new mongoose.Schema(
  {
    comentario: { 
      type: String, 
      required: true 
    },
    plan_estrategico: {
      type: String, 
      required: true, 
      unique: true, 
    },
    plan_accion: { 
      type: String, 
      required: true 
    }
  }
);

const Mentoria = mongoose.model('Mentoria', userSchema);
export default Mentoria;