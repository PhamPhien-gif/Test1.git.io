import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { GoogleIcon, MetaIcon, AppleIcon } from "@/components/social-icons"

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#eef2f5]">
      <div className="bg-white w-full max-w-md p-8 rounded-lg shadow-sm">
        <div className="text-center mb-8">
          <h1 className="text-[#292929] text-2xl font-semibold mb-2">Back to your digital life</h1>
          <p className="text-[#545454]">Choose one of the option to go</p>
        </div>

        <div className="space-y-4 mb-6">
          <Input
            type="email"
            placeholder="get@ziontutorial.com"
            defaultValue="get@ziontutorial.com"
            className="w-full px-4 py-3 border border-[#e7e7e7] rounded-lg focus:ring-[#0366ff] focus:border-[#0366ff]"
          />

          <Input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 border border-[#e7e7e7] rounded-lg focus:ring-[#0366ff] focus:border-[#0366ff]"
          />
        </div>

        <div className="text-center mb-4">
          <p className="text-[#4f4f4f]">Or continue with</p>
        </div>

        <div className="flex justify-center gap-4 mb-6">
          <button className="bg-[#f7f7f7] p-3 rounded-md flex items-center justify-center w-16 h-12">
            <GoogleIcon />
          </button>
          <button className="bg-[#f7f7f7] p-3 rounded-md flex items-center justify-center w-16 h-12">
            <MetaIcon />
          </button>
          <button className="bg-[#f7f7f7] p-3 rounded-md flex items-center justify-center w-16 h-12">
            <AppleIcon />
          </button>
        </div>

        <Button className="w-full bg-[#0366ff] hover:bg-[#0366ff]/90 text-white py-3 rounded-lg font-medium">
          Log in
        </Button>
      </div>
    </div>
  )
}

