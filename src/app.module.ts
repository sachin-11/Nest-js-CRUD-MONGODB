import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PostController } from './posts/posts.controller';
import { PostService } from './posts/posts.service';
import { PostSchema } from './posts/post.model';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest-mongodb-crud'),
    MongooseModule.forFeature([{ name: 'Post', schema: PostSchema }]),
  ],
  controllers: [PostController],
  providers: [PostService],
})
export class AppModule {}
