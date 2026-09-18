import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { BriefcaseBusiness } from 'lucide-react';
import Link from 'next/link';

export default function RegisterPage() {
  return (
    <div className="container flex h-[calc(100vh-4rem)] w-screen flex-col items-center justify-center">
      <Link href="/" className="mb-8 flex items-center space-x-2">
        <span className="bg-primary text-primary-foreground p-1.5 rounded-md">
          <BriefcaseBusiness size={24} />
        </span>
        <span className="font-bold text-2xl">CareerConnect</span>
      </Link>
      
      <Card className="w-full sm:w-[400px]">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-2xl">Create an account</CardTitle>
          <CardDescription>
            Enter your details below to create your account
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="first-name">First name</Label>
              <Input id="first-name" placeholder="Jane" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="last-name">Last name</Label>
              <Input id="last-name" placeholder="Doe" required />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="m@example.com" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" required />
          </div>
          <Link href="/profile" className="w-full">
            <Button className="w-full">Create account</Button>
          </Link>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <p className="text-center text-sm text-muted-foreground">
            Already have an account?{' '}
            <Link href="/auth/login" className="text-primary hover:underline">
              Log in
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
