export class UserModel {
  _id: string;
  user_name: string;
  password: string;
  email: string;

  static fromJson(json: any): UserModel {
    const user = new UserModel();

    user._id = json._id || '';
    user.user_name = json.user_name || '';
    user.password = json.password || '';
    user.email = json.email || '';

    return user;
  }


}
