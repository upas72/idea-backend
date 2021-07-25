import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn
} from "typeorm";
import { Image } from "./Image";

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  userId: number;

  @Column({
    unique: true,
    nullable: false
  })
  username: string;

  @Column({
    nullable: true,
    select: false
  })
  password: string;

  @OneToOne(() => Image, { nullable: true, cascade: true })
  @JoinColumn({ name: "avatar" })
  @Column({ nullable: true })
  avatar: Image;

  @Column({
    type: "text",
    nullable: false
  })
  bio: string;

  @Column({
    nullable: true
  })
  linkedin: string;

  @Column({
    nullable: true
  })
  twitter: string;

  @Column({
    nullable: true
  })
  github: string;

  @Column({
    nullable: true
  })
  youtube: string;

  @Column({
    nullable: true
  })
  facebook: string;

  @CreateDateColumn({ type: "timestamp" })
  createdAt: Date;

  @CreateDateColumn({ type: "timestamp" })
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
