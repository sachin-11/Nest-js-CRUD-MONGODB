import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { PostModel } from './post.model';

@Injectable()
export class PostService {
  constructor(
    @InjectModel('Post') private readonly postModel: Model<PostModel>,
  ) {}

  async create(createPostDto: PostModel): Promise<PostModel> {
    const createdPost = new this.postModel(createPostDto);
    return createdPost.save();
  }

  async findAll(): Promise<PostModel[]> {
    return this.postModel.find().exec();
  }

  async findOne(id: string): Promise<PostModel> {
    return this.postModel.findById(id).exec();
  }

  async update(id: string, updatePostDto: PostModel): Promise<PostModel> {
    return this.postModel
      .findByIdAndUpdate(id, updatePostDto, { new: true })
      .exec();
  }

  async remove(id: string): Promise<PostModel> {
    return this.postModel.findByIdAndRemove(id).exec();
  }
}
