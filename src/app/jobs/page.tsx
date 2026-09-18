import { dummyJobs } from '@/data/dummy';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Briefcase, DollarSign, BookmarkPlus, X } from 'lucide-react';
import Link from 'next/link';

export default function JobsPage() {
  return (
    <div className="container px-4 py-8 mx-auto space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Job Search</h1>
          <p className="text-muted-foreground">Discover your next career opportunity.</p>
        </div>
      </div>
      
      {/* Simple Search & Filter Bar could go here */}
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {dummyJobs.map((job) => (
          <Card key={job.id} className="flex flex-col">
            <CardHeader>
              <div className="flex justify-between items-start gap-2">
                <div>
                  <CardTitle className="text-xl line-clamp-1">{job.title}</CardTitle>
                  <CardDescription className="text-base text-primary font-medium mt-1">
                    {job.company}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="flex-1 space-y-4">
              <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-1 bg-muted px-2 py-1 rounded-md">
                  <MapPin size={14} />
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center gap-1 bg-muted px-2 py-1 rounded-md">
                  <Briefcase size={14} />
                  <span className="capitalize">{job.workArrangement}</span>
                </div>
                {job.salary && (
                  <div className="flex items-center gap-1 bg-muted px-2 py-1 rounded-md">
                    <DollarSign size={14} />
                    <span>{job.salary.min / 1000}k - {job.salary.max / 1000}k {job.salary.currency}</span>
                  </div>
                )}
              </div>
              
              <div className="flex flex-wrap gap-1">
                {job.skills.slice(0, 3).map(skill => (
                  <Badge key={skill} variant="secondary">{skill}</Badge>
                ))}
                {job.skills.length > 3 && (
                  <Badge variant="outline">+{job.skills.length - 3} more</Badge>
                )}
              </div>
              
              <p className="text-sm line-clamp-3 mt-4 text-muted-foreground">
                {job.description}
              </p>
            </CardContent>
            <CardFooter className="flex justify-between border-t pt-4">
              <div className="flex gap-2">
                <Button variant="outline" size="icon" title="Dismiss">
                  <X size={18} />
                </Button>
                <Button variant="outline" size="icon" title="Save for later">
                  <BookmarkPlus size={18} />
                </Button>
              </div>
              <Link href={`/jobs/${job.id}`}>
                <Button>Apply</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
