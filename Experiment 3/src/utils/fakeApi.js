import { generateMockToken } from "./jwt";

const users = [
  {
    id: 1,
    name: "Ashutosh Sharma",
    email: "admin@gmail.com",
    password: "admin123",
    role: "Admin",
  },
  {
    id: 2,
    name: "John Editor",
    email: "editor@gmail.com",
    password: "editor123",
    role: "Editor",
  },
  {
    id: 3,
    name: "Alice Viewer",
    email: "viewer@gmail.com",
    password: "viewer123",
    role: "Viewer",
  },
];

// Mock Login API
export const loginUser = (email, password) => {
  const user = users.find(
    (u) => u.email === email && u.password === password
  );

  if (!user) {
    return {
      success: false,
      message: "Invalid Email or Password",
    };
  }

  const token = generateMockToken(user);

  return {
    success: true,
    user,
    token,
  };
};

// Mock Logout API
export const logoutUser = () => {
  return {
    success: true,
    message: "Logged out successfully",
  };
};