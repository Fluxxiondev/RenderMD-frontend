import React from 'react'
import { Button } from '../components/ui/button'

const Dashboard = () => {
  const handleLogout = () => {
    const tokenKey = import.meta.env.VITE_JWT_STORAGE_KEY || 'rendermd_token'
    localStorage.removeItem(tokenKey)
    window.location.href = '/login'
  }

  const getUser = () => {
    const tokenKey = import.meta.env.VITE_JWT_STORAGE_KEY || 'rendermd_token'
    const token = localStorage.getItem(tokenKey)
    if (token) {
      try {
        // Decode JWT token to get user info (basic decode, not verification)
        const payload = JSON.parse(atob(token.split('.')[1]))
        return payload
      } catch (error) {
        console.error('Error decoding token:', error)
        return null
      }
    }
    return null
  }

  const user = getUser()

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">RenderMD</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">
                Welcome, {user?.name || 'User'}!
              </span>
              <Button variant="outline" onClick={handleLogout}>
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Welcome to RenderMD Dashboard
            </h2>
            <p className="text-gray-600 mb-6">
              Convert your Markdown-like text into interactive, real-time visual diagrams.
            </p>
            
            {/* Quick Start Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-blue-50 rounded-lg p-4">
                <h3 className="font-medium text-blue-900 mb-2">📝 Create Diagram</h3>
                <p className="text-blue-700 text-sm mb-3">
                  Start creating your first diagram from markdown text.
                </p>
                <Button size="sm" className="w-full">
                  New Diagram
                </Button>
              </div>
              
              <div className="bg-green-50 rounded-lg p-4">
                <h3 className="font-medium text-green-900 mb-2">📋 Templates</h3>
                <p className="text-green-700 text-sm mb-3">
                  Choose from pre-built diagram templates.
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  Browse Templates
                </Button>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-medium text-purple-900 mb-2">📚 Documentation</h3>
                <p className="text-purple-700 text-sm mb-3">
                  Learn how to create different diagram types.
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  View Docs
                </Button>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="mt-8">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Recent Activity</h3>
              <div className="bg-gray-50 rounded-lg p-4 text-center text-gray-500">
                No recent diagrams. Create your first diagram to get started!
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Dashboard