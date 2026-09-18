import { dummyJobs } from '@/data/dummy';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Briefcase, DollarSign, Calendar, ChevronLeft, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function JobDetailPage({ params }: { params: { id: string } }) {
  const job = dummyJobs.find(j => j.id === params.id) || dummyJobs[0];
  
  return (
    <div className="container max-w-4xl px-4 py-8 mx-auto space-y-6">
      <Link href="/jobs">
        <Button variant="ghost" className="-ml-4 mb-2 flex items-center gap-2">
          <ChevronLeft size={16} /> Back to jobs
        </Button>
      </Link>
      
      <Card>
        <CardHeader className="space-y-4">
          <div className="flex justify-between items-start flex-wrap gap-4">
            <div>
              <CardTitle className="text-3xl">{job.title}</CardTitle>
              <CardDescription className="text-xl text-primary font-semibold mt-2">
                {job.company}
              </CardDescription>
            </div>
            <div className="flex gap-2">
              <Button variant="outline">Save Job</Button>
              <Button>Start Application</Button>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-3 text-sm text-muted-foreground pt-4">
            <div className="flex items-center gap-1">
              <MapPin size={16} /> <span>{job.location}</span>
            </div>
            <div className="flex items-center gap-1 capitalize">
              <Briefcase size={16} /> <span>{job.type} • {job.workArrangement}</span>
            </div>
            {job.salary && (
              <div className="flex items-center gap-1">
                <DollarSign size={16} /> 
                <span>{job.salary.min.toLocaleString()} - {job.salary.max.toLocaleString()} {job.salary.currency}</span>
              </div>
            )}
            <div className="flex items-center gap-1">
              <Calendar size={16} /> 
              <span>Posted {new Date(job.postedAt).toLocaleDateString()}</span>
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-8 mt-4 border-t pt-6">
          <section className="space-y-3">
            <h3 className="text-lg font-semibold">About the role</h3>
            <p className="leading-relaxed whitespace-pre-wrap">{job.description}</p>
          </section>
          
          <section className="space-y-3">
            <h3 className="text-lg font-semibold">Requirements</h3>
            <ul className="list-disc pl-5 space-y-1">
              {job.requirements.map((req, i) => (
                <li key={i}>{req}</li>
              ))}
            </ul>
          </section>
          
          <section className="space-y-3">
            <h3 className="text-lg font-semibold">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {job.skills.map(skill => (
                <Badge key={skill} variant="secondary">{skill}</Badge>
              ))}
            </div>
          </section>
        </CardContent>
        
        <CardFooter className="bg-muted px-6 py-4 flex justify-between items-center rounded-b-xl border-t mt-6">
          <div className="flex items-center gap-2 text-sm">
            <Sparkles className="text-primary" size={16} />
            <span>Generate tailored resume & cover letter for this role</span>
          </div>
          <Button>Tailor & Apply</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
