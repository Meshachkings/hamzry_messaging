import { Schema } from 'mongoose';

interface Token extends Object {
    _id: Schema.Types.ObjectId;
    expiresIn: number;
}

export default Token;
