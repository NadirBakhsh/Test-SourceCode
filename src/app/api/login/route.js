import { db } from "@/app/db";
export async function POST(request, response) {
  const requestData = await request.json();

  const { email, password } = requestData;

  const { users } = db;

  const isAuth = users.find((user) => (user.email === email && user.password === password))
    
  if(isAuth) {
      return new Response(JSON.stringify({isAuth: true}));
  } else {
    return new Response(JSON.stringify({isAuth: false, message: "email or password is wrong"}));
  }


}
