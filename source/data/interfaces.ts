// Define the structure of a User
interface UserInterface {
  id: number,
  name: string,
  surname: string, 
  email: string,
  password: string, 
  lastLogin: string,
  active: boolean,
  getUsers()
}

export { UserInterface }
