"use client";
import React, { useActionState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { sendEmail } from "@/app/api/email/route";
import { useFormStatus } from "react-dom";
import { LoaderCircle } from "lucide-react";

export default function FormContact() {
  const [state, emailAction] = useActionState(sendEmail, null);
  return (
    <form action={emailAction} className="text-white">
      <div className="mb-3">
        <Label htmlFor="fullname">Full Name</Label>
        <Input
          id="name"
          name="fullname"
          type="text"
          className="bg-black"
          placeholder="ex: John Doe"
        />
        {state?.error.fullname ? (
          <p className="text-red-400">{state.error.fullname}</p>
        ) : (
          ""
        )}
      </div>
      <div className="mb-3">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          name="email"
          className="bg-black"
          placeholder="ex: yourmail@mail.com"
        />
        {state?.error.email ? (
          <p className="text-red-400">{state.error.email}</p>
        ) : (
          ""
        )}
      </div>
      <div className="mb-3">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          className="bg-black resize-none"
          rows={10}
          placeholder="ex: Hello i like...."
        />
        {state?.error.message ? (
          <p className="text-red-400">{state.error.message}</p>
        ) : (
          ""
        )}
      </div>
      <div className="w-full">
        <SubmitButton />
      </div>
    </form>
  );
}

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" className="w-full" variant={"secondary"}>
      {pending ? (
        <div className="flex gap-2">
          <LoaderCircle className="animate-spin" />
          <span>Loading</span>
        </div>
      ) : (
        "Submit"
      )}
    </Button>
  );
};
