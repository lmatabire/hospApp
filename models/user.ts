import * as mongoose from 'mongoose';

export interface IUser extends mongoose.Document {
    userName: string;
    name:string;
    surname:string;
    email: string;
    phone:string;
    role: string;
    created: number;
    lastLogin: number;
    password: string;
    occupation: string;
}

let userSchema = new mongoose.Schema ({
  userName: {type: String},
  name: {type: String,required: false},
  surname: {type: String,required:false},
  email: {type: String,required: true},
  phone: {type: Number,required: true},
  role: {type: String,required: true},
  lastLogin: {
      type: Date
  },
  created: {
      type: Date,
  },
  password: {
      type: String,
      required: true
  },
  occupation: {
      type: String,
      required: false
  }
});

export default mongoose.model<IUser>('User', userSchema);
