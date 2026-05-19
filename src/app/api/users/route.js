let users = [
  {
    id: 1,
    name: "Arham"
  },
  {
    id: 2,
    name: "Ali"
  }
]

// GET USERS
export async function GET() {
  return Response.json(users)
}

// CREATE USER
export async function POST(request) {
  try {
    const body =
      await request.json()

    // VALIDATION
    if (!body.name) {
      return Response.json(
        {
          success: false,
          error:
            "Name is required"
        },
        {
          status: 400
        }
      )
    }

    if (body.name.length < 3) {
      return Response.json(
        {
          success: false,
          error:
            "Name must be at least 3 characters"
        },
        {
          status: 400
        }
      )
    }

    // CREATE USER
    const newUser = {
      id: users.length + 1,
      name: body.name
    }

    users.push(newUser)

    return Response.json(
      {
        success: true,
        user: newUser
      },
      {
        status: 201
      }
    )
  } catch (error) {
    return Response.json(
      {
        success: false,
        error:
          "Internal Server Error"
      },
      {
        status: 500
      }
    )
  }
}