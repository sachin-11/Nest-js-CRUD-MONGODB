import * as mongoose from 'mongoose';

export const PostSchema = new mongoose.Schema({
  title: String,
  content: String,
});

export interface PostModel extends mongoose.Document {
  title: string;
  content: string;
}
