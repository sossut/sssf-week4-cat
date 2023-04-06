interface User {
  user_name: string;
  email: string;
}

interface UserIdWithToken {
  id: string;
  token: string;
}

export {User, UserIdWithToken};
