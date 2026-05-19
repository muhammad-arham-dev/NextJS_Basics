"use client"

import { useEffect, useState } from "react"
import api from "@/services/api"

export default function HomePage() {
  const [users, setUsers] =
    useState([])

  const [name, setName] =
    useState("")

  const [loading, setLoading] =
    useState(true)

  const [error, setError] =
    useState("")

  // FETCH USERS
  const fetchUsers = async () => {
    try {
      const response =
        await api.get("/users")

      setUsers(response.data)
    } catch (error) {
      console.log(error)

      setError(
        "Failed to fetch users"
      )
    } finally {
      setLoading(false)
    }
  }

  // ADD USER
  const addUser = async () => {
    setError("")

    try {
      const response =
        await api.post("/users", {
          name
        })

      setUsers((prev) => [
        ...prev,
        response.data.user
      ])

      setName("")
    } catch (error) {
      console.log(error)

      setError(
        error.response?.data?.error ||
          "Something went wrong"
      )
    }
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  return (
    <main className="min-h-screen bg-gray-100 p-10">
      <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Users App
        </h1>

        {/* FORM */}
        <div className="flex gap-3 mb-3">
          <input
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
            className="border border-gray-300 p-3 rounded-lg w-full outline-none"
          />

          <button
            onClick={addUser}
            className="bg-black text-white px-6 rounded-lg"
          >
            Add
          </button>
        </div>

        {/* ERROR */}
        {error && (
          <p className="text-red-500 mb-4">
            {error}
          </p>
        )}

        {/* USERS */}
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="space-y-3">
            {users.map((user) => (
              <div
                key={user.id}
                className="bg-gray-200 p-3 rounded-lg"
              >
                {user.name}
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}