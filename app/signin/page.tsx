import { SignInForm } from '@/components/SignInForm'

export default function SignInPage() {
  return (
    <div className="bg-[#0c0c0c] text-white min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md px-4">
        {/* <h1 className="text-4xl font-bold text-center mb-8">Sign In to Growtechie</h1> */}
        <SignInForm />
      </div>
    </div>
  )
}