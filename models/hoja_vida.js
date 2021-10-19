import mongoose from 'mongoose';

const hoja_vidaSchema = new mongoose.Schema(
  {
    informacion_personal: { 
      type: String, 
      required: true 
    },
    habilidades: {
      type: String, 
      required: true, 
    },
    contactos: { 
      type: String, 
      required: true 
    },
  }
);

const Hoja_vida = mongoose.model('Hoja_vida', userSchema);
export default Hoja_vida;