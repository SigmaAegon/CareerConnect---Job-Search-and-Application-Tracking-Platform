import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { BriefcaseBusiness, TrendingUp, CheckCircle, Search } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-muted/40">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Take Control of Your Career Journey
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Centralize your job search. Discover opportunities, tailored requirements, and track every application in one beautiful dashboard.
              </p>
            </div>
            <div className="space-x-4">
              <Link href="/jobs">
                <Button size="lg">Explore Jobs</Button>
              </Link>
              <Link href="/auth/register">
                <Button variant="outline" size="lg">Create Account</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Search className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-xl font-bold">Smart Job Search</h2>
              <p className="text-muted-foreground">
                Find the perfect role with advanced filters. Save or dismiss opportunities to train your recommendations.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-xl font-bold">Visual Tracker</h2>
              <p className="text-muted-foreground">
                Move applications through a Kanban board. See your entire pipeline at a glance from Draft to Offer.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-xl font-bold">AI Tailored Resumes</h2>
              <p className="text-muted-foreground">
                Generate tailored resume summaries and cover letters optimized for the specific job you're applying to.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
