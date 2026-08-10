import { Link } from "react-router-dom";
import { LogIn, Mail, Lock, CheckCircle2 } from "lucide-react";
import AuthLayout from "@/components/AuthLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function CustomerLogin() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <AuthLayout
      icon={LogIn}
      title="Customer Login"
      subtitle="Secure access for client accounts"
      footer={
        <>
          Need help?{" "}
          <Link to="/" className="text-primary font-medium hover:underline">
            Contact support
          </Link>
        </>
      }
    >
      <div className="mb-6 rounded-2xl border border-border/70 bg-muted/70 p-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2 font-medium text-foreground">
          <CheckCircle2 className="h-4 w-4 text-primary" />
          Placeholder portal
        </div>
        <p className="mt-2 leading-relaxed">
          This is a placeholder login page and can later be integrated with Microsoft Entra ID, Microsoft 365, Google Workspace SSO, or another customer portal.
        </p>
      </div>

      <div className="mb-6 flex items-center gap-3 rounded-2xl border border-border/70 bg-background/80 p-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary text-sm font-semibold text-primary-foreground">
          AI
        </div>
        <div>
          <div className="font-heading font-semibold">Company Name</div>
          <div className="text-sm text-muted-foreground">Client access portal placeholder</div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email address</Label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" aria-hidden="true" />
            <Input id="email" type="email" autoComplete="email" placeholder="you@example.com" className="pl-10 h-12" />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" aria-hidden="true" />
            <Input id="password" type="password" autoComplete="current-password" placeholder="••••••••" className="pl-10 h-12" />
          </div>
        </div>
        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2 text-muted-foreground">
            <input type="checkbox" className="rounded border-border" />
            Remember me
          </label>
          <a href="#" className="text-primary hover:underline">Forgot password?</a>
        </div>
        <Button type="submit" className="w-full h-12 font-medium">
          Sign in
        </Button>
      </form>

      <p className="mt-6 text-center">
        <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
          ← Back to home
        </Link>
      </p>
    </AuthLayout>
  );
}
