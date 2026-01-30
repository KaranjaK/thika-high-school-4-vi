import React, { useRef, useState } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "../ui/dialogue";
import { Button } from "../ui/button";

export function InquiryDialog({ children }) {
  const nameRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", grade: "", message: "" });
  const [status, setStatus] = useState({ type: "", message: "" });

  function onOpenChange(val) {
    setOpen(val);
    if (val) {
      // focus the first input when dialog opens
      setTimeout(() => nameRef.current?.focus(), 50);
      setStatus({ type: "", message: "" });
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    // simple client-side validation
    if (!form.name || !form.email) {
      setStatus({ type: "error", message: "Please provide your name and a valid email." });
      return;
    }

    setStatus({ type: "loading", message: "Submitting..." });

    // simulate network request
    setTimeout(() => {
      setStatus({ type: "success", message: "Thanks! We'll be in touch soon." });
      setForm({ name: "", email: "", grade: "", message: "" });

      // close after a short delay
      setTimeout(() => {
        setOpen(false);
      }, 1200);
    }, 800);
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent aria-labelledby="inquiry-title" aria-describedby="inquiry-desc">
        <DialogHeader>
          <DialogTitle id="inquiry-title">Join SA Thika</DialogTitle>
          <DialogDescription id="inquiry-desc">
            Fill the quick inquiry form and our admissions team will reach out.
          </DialogDescription>
        </DialogHeader>

        <form className="mt-4 space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-foreground">
              Full name
            </label>
            <input
              ref={nameRef}
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              type="text"
              required
              className="mt-1 block w-full rounded-md border p-3 bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="e.g. Jane Doe"
              aria-required="true"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground">
              Email address
            </label>
            <input
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              type="email"
              required
              className="mt-1 block w-full rounded-md border p-3 bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="you@example.com"
              aria-required="true"
            />
          </div>

          <div>
            <label htmlFor="grade" className="block text-sm font-medium text-foreground">
              Grade / Program
            </label>
            <select
              id="grade"
              name="grade"
              value={form.grade}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border p-3 bg-background focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="">Select</option>
              <option value="primary">Primary</option>
              <option value="secondary">Secondary</option>
              <option value="vocational">Vocational</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-foreground">
              Message (optional)
            </label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              className="mt-1 block w-full rounded-md border p-3 bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Any details you'd like to share"
            />
          </div>

          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Button type="submit" className="bg-secondary text-white" aria-live="polite">
                Submit
              </Button>
              <DialogClose asChild>
                <button type="button" className="px-4 py-2 text-sm rounded-md">
                  Cancel
                </button>
              </DialogClose>
            </div>

            <div aria-live="polite" role="status" className="text-sm text-muted-foreground">
              {status.type === "loading" && <span>{status.message}</span>}
              {status.type === "error" && <span className="text-red-600">{status.message}</span>}
              {status.type === "success" && <span className="text-green-600">{status.message}</span>}
            </div>
          </div>
        </form>

        <div className="sr-only" aria-hidden="true">
          This dialog traps focus and can be closed with the Escape key.
        </div>

        <DialogFooter />
        <DialogClose className="sr-only" />
      </DialogContent>
    </Dialog>
  );
}

export default InquiryDialog;
