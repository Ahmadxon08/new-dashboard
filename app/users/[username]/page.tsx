import CardList from "@/app/components/CardList";
import EditUser from "@/app/components/EditUser";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Progress } from "@/components/ui/progress";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { BadgeCheckIcon, Candy, Citrus, Shield } from "lucide-react";
import React from "react";

const SingleUserPage = () => {
  return (
    <div className="w-full">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/components">Components</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex flex-col md:flex-row w-full border gap-8 mt-4">
        <div className="w-full md:w-1/3 space-y-6">
          <div className="bg-primary-foreground p-4 rounded-lg">
            <h1 className="mb-3 ">User Budges</h1>
            <div className="flex gap-4 mt-4">
              <HoverCard>
                <HoverCardTrigger>
                  <BadgeCheckIcon
                    size={48}
                    className="rounded-full bg-blue-500/30 border-blue-500/50 p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent className="w-fit">
                  <h1 className="font-bold mb-2"> Verified User</h1>
                  <p className="text-sm text-muted-foreground">
                    This user has been verified by the Admin
                  </p>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger>
                  <Candy
                    size={48}
                    className="rounded-full bg-indigo-500/30 border-indigo-500/50 p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent className="w-fit">
                  <h1 className="font-bold mb-2"> Admin</h1>
                  <p className="text-sm text-muted-foreground">
                    Admin users have access all features and can manage users{" "}
                  </p>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger>
                  <Shield
                    size={48}
                    className="rounded-full bg-yellow-500/30 border-yellow-500/50 p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent className="w-fit">
                  <h1 className="font-bold mb-2"> Contributer </h1>
                  <p className="text-sm text-muted-foreground">
                    This user has been awarded for his contributions
                  </p>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger>
                  <Citrus
                    size={48}
                    className="rounded-full bg-green-500/30 border-green-500/50 p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent className="w-fit">
                  <h1 className="font-bold mb-2"> Popular</h1>
                  <p className="text-sm text-muted-foreground">
                    This user has been popular in the community{" "}
                  </p>
                </HoverCardContent>
              </HoverCard>
            </div>
          </div>
          <div className="bg-primary-foreground p-4 rounded-lg">
            <div className="flex justify-between w-full">
              <h1 className="mb-3 font-semibold  text-xl">User Information</h1>
              <Sheet>
                <SheetTrigger asChild>
                  <Button className="text-sm h-7 ">Edit User</Button>
                </SheetTrigger>
                <EditUser />
              </Sheet>
            </div>
            <div className="space-y-4">
              <div className="flex flex-col gap-2 mb-8">
                <p className="text-muted-foreground text-sm">
                  Profile completion
                </p>
                <Progress value={66} />
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">Username:</span>
                <span>john.doe</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">Email:</span>
                <span>johndoe@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">Phone:</span>
                <span>+1 213243455</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">Location:</span>
                <span>New York, NY</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">Role:</span>
                <Badge>Admin</Badge>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Joined on 2025.10.03
              </p>
            </div>
          </div>
          <div className="bg-primary-foreground p-4 rounded-lg">
            <CardList title="Lastest Transactions" />
          </div>
        </div>
        <div className="w-full md:w-2/3 space-y-6">
          <div className="bg-primary-foreground p-4 rounded-lg">user card</div>
          <div className="bg-primary-foreground p-4 rounded-lg">Chart</div>
        </div>
      </div>
    </div>
  );
};

export default SingleUserPage;
