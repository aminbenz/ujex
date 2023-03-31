import { getUsers, createUser } from "../../../lib/prisma/users";

export async function GET() {
  try {
    const { users, error } = await getUsers();
    if (error) throw new Error(error);
    return Response.json({ msg: "Get Users", result: users });
  } catch (error) {
    return Response.status(500).json({ error: error.message });
  }
}

export async function POST(request) {
  const req = await request.json();
  const data = req.body;
  return Response.json({ data });
  try {
    console.log(req);
    const { users, error } = await createUser(data);
    if (error) throw new Error(error);
    return Response.json({
      msg: "User created",
      result: users,
    });
  } catch (error) {
    return Response.json({ error: error.message });
  }
}
