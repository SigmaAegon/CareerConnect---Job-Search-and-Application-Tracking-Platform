import { dummyProfile } from '@/data/dummy';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { User, FileText, Upload, Settings } from 'lucide-react';

export default function ProfilePage() {
  return (
    <div className="container max-w-5xl px-4 py-8 mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Profile</h1>
        <p className="text-muted-foreground mt-1">Manage your personal information and base resume.</p>
      </div>

      <Tabs defaultValue="general" className="space-y-6">
        <TabsList>
          <TabsTrigger value="general" className="flex items-center gap-2">
            <User size={16} /> General
          </TabsTrigger>
          <TabsTrigger value="resumes" className="flex items-center gap-2">
            <FileText size={16} /> Resumes
          </TabsTrigger>
          <TabsTrigger value="settings" className="flex items-center gap-2">
            <Settings size={16} /> Preferences
          </TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
              <CardDescription>Update your contact details and headline.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" defaultValue={dummyProfile.firstName} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" defaultValue={dummyProfile.lastName} />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="headline">Headline</Label>
                <Input id="headline" defaultValue={dummyProfile.headline} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input id="location" defaultValue={dummyProfile.location} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="about">About</Label>
                <Textarea id="about" defaultValue={dummyProfile.about} className="h-32" />
              </div>
            </CardContent>
            <CardFooter className="border-t pt-4">
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Skills</CardTitle>
              <CardDescription>Skills extracted from your resume or added manually.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                {dummyProfile.skills.map(skill => (
                  <Badge key={skill} variant="secondary" className="px-3 py-1 text-sm flex gap-2 items-center">
                    {skill} <span className="cursor-pointer text-muted-foreground hover:text-foreground">×</span>
                  </Badge>
                ))}
              </div>
              <div className="flex gap-2">
                <Input placeholder="Add a skill..." className="max-w-sm" />
                <Button variant="outline">Add</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="resumes">
          <Card>
            <CardHeader>
              <CardTitle>Base Resume</CardTitle>
              <CardDescription>Upload your main resume to be used for tailoring specific applications.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="border-2 border-dashed rounded-lg p-10 flex flex-col items-center justify-center text-center space-y-4 hover:bg-muted/50 transition-colors cursor-pointer">
                <div className="p-4 rounded-full bg-primary/10 text-primary">
                  <Upload size={32} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Click or drag file to upload</h3>
                  <p className="text-sm text-muted-foreground mt-1">PDF, DOCX up to 5MB</p>
                </div>
                <Button variant="outline">Select File</Button>
              </div>
              
              <div className="mt-8 space-y-4">
                <h3 className="font-medium border-b pb-2">Uploaded Files</h3>
                <div className="flex items-center justify-between p-4 border rounded-md">
                  <div className="flex items-center gap-3">
                    <FileText className="text-blue-500" />
                    <div>
                      <p className="font-medium text-sm">Jane_Doe_Resume_2024.pdf</p>
                      <p className="text-xs text-muted-foreground flex gap-2">
                        <span>142 KB</span>
                        <span>•</span>
                        <span>Uploaded Sept 15, 2024</span>
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Badge variant="secondary">Base</Badge>
                    <Button variant="ghost" size="sm" className="text-destructive hover:bg-destructive/10">Delete</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
