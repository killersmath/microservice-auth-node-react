import { Optional } from "sequelize";
import bcrypt from "bcryptjs";
import { Column, Table, Model, DataType, BeforeUpdate, BeforeCreate } from "sequelize-typescript";

export interface UserAttributes {
  id: number;
  name: string;
  email: string;
  password: string;
}

export type UserCreationAttributes = Optional<UserAttributes, "id">;

@Table({
  tableName: "user"
})
class User extends Model<UserAttributes, UserCreationAttributes> {
  @Column({
    type: DataType.BIGINT(),
    primaryKey: true,
    autoIncrement: true,
    comment: "user id",
  })
  public id!: number;

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
    comment: "user name",
  })
  public name!: string;

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
    comment: "user email",
    unique: true,
  })
  public email!: string;

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
    comment: "user password", 
  })
  public password!: string;

  @BeforeUpdate
  @BeforeCreate
  static async hashPassword(instance: User) {
    if (instance.password) {
      instance.password = await bcrypt.hash(instance.password, 8);
    }
  }

  async validPassword(hashPassword: string) {
    return await bcrypt.compare(hashPassword, this.password);
  }
}

export default User;
