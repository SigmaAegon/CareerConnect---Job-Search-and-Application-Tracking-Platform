import { dummyApplications } from '@/data/dummy';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ChevronRight, Calendar, Building2 } from 'lucide-react';
import { ApplicationStatus } from '@/types';
import Link from 'next/link';

export default function ApplicationsPage() {
  const columns: { title: string; statuses: ApplicationStatus[] }[] = [
    { title: 'Preparing', statuses: ['Draft', 'Ready to apply'] },
    { title: 'Applied', statuses: ['Applied'] },
    { title: 'Active', statuses: ['Recruiter screening', 'Interview', 'Assessment'] },
    { title: 'Closed', statuses: ['Offer', 'Rejected', 'Withdrawn'] },
  ];

  return (
    <div className="container px-4 py-8 mx-auto h-[calc(100vh-4rem)] flex flex-col">
      <div className="flex justify-between items-end mb-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Application Tracker</h1>
          <p className="text-muted-foreground mt-1">Track and manage your application pipeline.</p>
        </div>
        <Button>Add Manual Entry</Button>
      </div>

      <div className="flex-1 overflow-x-auto pb-4">
        <div className="flex gap-6 h-full min-w-max">
          {columns.map(column => (
            <div key={column.title} className="w-80 flex flex-col bg-muted/30 rounded-xl">
              <div className="p-4 border-b font-medium flex justify-between items-center">
                <h3>{column.title}</h3>
                <Badge variant="secondary" className="rounded-full">
                  {dummyApplications.filter(app => column.statuses.includes(app.status)).length}
                </Badge>
              </div>
              
              <div className="p-3 flex-1 overflow-y-auto space-y-3">
                {dummyApplications
                  .filter(app => column.statuses.includes(app.status))
                  .map(app => (
                    <Card key={app.id} className="cursor-pointer hover:border-primary/50 transition-colors">
                      <CardHeader className="p-4 pb-2 space-y-1">
                        <div className="flex justify-between">
                          <Badge variant="outline" className="opacity-80 font-normal">
                            {app.status}
                          </Badge>
                        </div>
                        <CardTitle className="text-base line-clamp-1">{app.jobTitle}</CardTitle>
                      </CardHeader>
                      <CardContent className="p-4 pt-2 space-y-3 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Building2 size={14} /> <span>{app.companyName}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar size={14} /> 
                          <span>Updated {new Date(app.updatedAt).toLocaleDateString()}</span>
                        </div>
                      </CardContent>
                      <CardFooter className="p-3 border-t bg-muted/10 flex justify-end">
                        <Link href={`/applications/${app.id}`}>
                          <Button variant="ghost" size="sm" className="h-8 group">
                            Details <ChevronRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </Link>
                      </CardFooter>
                    </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
