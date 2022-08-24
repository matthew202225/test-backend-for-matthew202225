import { Column, Entity, Unique } from 'typeorm';
import { SharedEntity } from '@src/modules/shared/entities/shared.entity';

@Entity('user')
@Unique('address_delete_at', ['id', 'deletedAt'])
export class UserEntity extends SharedEntity {
  @Column({
    type: 'varchar',
    nullable: false,
    length: 128,
    name: 'name',
    comment: 'user name',
  })
  name: string;

  @Column({
    type: 'varchar',
    nullable: false,
    length: 128,
    name: 'address',
    comment: 'user address',
  })
  address: string;

  @Column({
    type: 'varchar',
    nullable: false,
    length: 128,
    name: 'description',
    comment: 'user description',
  })
  description: string;
}
