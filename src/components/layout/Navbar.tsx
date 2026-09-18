import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { BriefcaseBusiness, LayoutDashboard, User, LogIn, Menu } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function Navbar() {
  const isLoggedIn = true; // Hardcoded for prototype

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <span className="bg-primary text-primary-foreground p-1.5 rounded-md">
              <BriefcaseBusiness size={20} />
            </span>
            <span className="font-bold text-xl hidden sm:inline-block">CareerConnect</span>
          </Link>
          
          {isLoggedIn && (
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium ml-6">
              <Link href="/jobs" className="transition-colors hover:text-foreground/80 text-foreground/60">Jobs</Link>
              <Link href="/applications" className="transition-colors hover:text-foreground/80 text-foreground/60">Tracker</Link>
              <Link href="/profile" className="transition-colors hover:text-foreground/80 text-foreground/60">Profile</Link>
            </nav>
          )}
        </div>

        <div className="flex items-center gap-4">
          {isLoggedIn ? (
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <User className="h-5 w-5" />
                  <span className="sr-only">Toggle user menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <Link href="/profile" className="w-full">My Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/settings" className="w-full">Settings</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link href="/" className="w-full">Log out</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="hidden sm:flex gap-2">
              <Link href="/auth/login">
                <Button variant="ghost">Log in</Button>
              </Link>
              <Link href="/auth/register">
                <Button>Sign up</Button>
              </Link>
            </div>
          )}
          
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
