import { Button } from '@/components/ui/button';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useForm } from 'react-hook-form';
import { Checkbox } from '@/components/ui/checkbox';

export default function Login() {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm();

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
          {/* <CardAction>
            <Button variant="link">Sign Up</Button>
          </CardAction> */}
        </CardHeader>
        <form onSubmit={handleSubmit(data => console.log(data))}>
          <CardContent>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  {...register('Email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: 'Invalid email address',
                    },
                  })}
                  required
                  autoComplete="email"
                />
                {errors.Email && (
                  <span className="text-red-500 text-sm">
                    {errors.Email.message}
                  </span>
                )}
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input
                  id="password"
                  type="password"
                  required
                  {...register('Password', {
                    required: 'Password is required',
                    minLength: {
                      value: 8,
                      message: 'Password must be at least 8 characters long',
                    },
                  })}
                />
                {errors.Password && (
                  <span className="text-red-500 text-sm">
                    {errors.Password.message}
                  </span>
                )}
                <div className="flex items-center gap-2 justify-end">
                  <Checkbox title="Remember password?" id="remember" onCheckedChange={checked => setValue('remember', checked)} />
                  <Label htmlFor="remember">Remember password?</Label>
                </div>
                {errors.exampleRequired && <span>This field is required</span>}
              </div>
            </div>
          </CardContent>
          <CardFooter className="py-5 flex-col gap-2">
            <Button type="submit" className="w-full cursor-pointer">
              Login
            </Button>
            {/* <Button variant="outline" className="w-full">
              Login with Google
            </Button> */}
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
