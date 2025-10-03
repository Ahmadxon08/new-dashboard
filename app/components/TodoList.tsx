"use client";
import { ScrollArea } from "@/components/ui/scroll-area";
import React, { useState } from "react";
import { Card } from "./ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "./ui/button";
import { Calendar1Icon } from "lucide-react";
import { format } from "date-fns";

const TodoList = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-lg font-medium mb-5">Todo list</h1>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button className="w-full">
            <Calendar1Icon />
            {date ? format(date, "PPP") : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0 w-auto">
          <Calendar
            mode="single"
            selected={date}
            onSelect={(date) => {
              setDate(date);
              setOpen(false);
            }}
          />
        </PopoverContent>
      </Popover>{" "}
      <ScrollArea className="h-[400px] w-full overflow-y-auto">
        <div className="flex flex-col gap-5">
          <Card>
            <div className="flex items-center p-1 gap-4">
              <Checkbox id="items1" checked />
              <label htmlFor="items1" className="text-muted-foreground text-sm">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro
                rerum repellat maxime.
              </label>
            </div>
          </Card>{" "}
        </div>
      </ScrollArea>
    </div>
  );
};

export default TodoList;
