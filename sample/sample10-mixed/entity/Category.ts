import {
    Column,
    Entity,
    ManyToMany,
    ManyToOne,
    PrimaryGeneratedColumn,
} from "../../../src/index"
import { Post } from "./Post"
import { PostDetails } from "./PostDetails"

@Entity("sample10_category")
export class Category {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    description: string

    @ManyToMany(() => Post, (post) => post.categories)
    posts: Post[]

    @ManyToOne(() => PostDetails, (postDetails) => postDetails.categories)
    details: PostDetails
}
