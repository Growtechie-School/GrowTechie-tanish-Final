import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SignInButton } from "@clerk/nextjs"
import { UserIcon, GraduationCapIcon } from 'lucide-react'

export default function SignInOptions() {
  return (
    <div className="bg-[#0c0c0c] text-white min-h-screen flex items-center justify-center">
      <div className="max-w-4xl w-full px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Choose Your Role</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-[#1c1c1c] border-gray-800 hover:border-purple-500 transition-all duration-300">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-semibold">Sign In as Mentor</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center">
              <UserIcon className="w-24 h-24 mb-6 text-purple-500" />
              <p className="text-gray-400 mb-6 text-center">
                Share your expertise and guide the next generation of tech professionals.
              </p>
              <SignInButton mode="modal">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white w-full">
                  Mentor Sign In
                </Button>
              </SignInButton>
            </CardContent>
          </Card>

          <Card className="bg-[#1c1c1c] border-gray-800 hover:border-blue-500 transition-all duration-300">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-semibold">Sign In as Student</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center">
              <GraduationCapIcon className="w-24 h-24 mb-6 text-blue-500" />
              <p className="text-gray-400 mb-6 text-center">
                Embark on your learning journey and acquire cutting-edge tech skills.
              </p>
              <SignInButton mode="modal" >
                <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full">
                  Student Sign In
                </Button>
              </SignInButton>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

// if current user is mentor - show some pages/hide
// if hes student - show some pages/hide.