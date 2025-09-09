import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import bgImage from "@/assets/login-bg.jpg";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    remember: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 1500);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center relative"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/40" />

      <Card className="relative z-10 w-full max-w-md bg-white/10 border border-white/30 backdrop-blur-md shadow-xl rounded-2xl">
        <CardContent className="p-8">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            Login Form
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email */}
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-white/80 w-4 h-4" />
              <Input
                name="email"
                type="email"
                placeholder="Enter your email"
                value={form.email}
                onChange={handleChange}
                className="pl-10 bg-transparent border-white/50 text-white placeholder:text-white/70"
                required
              />
            </div>

            {/* Password */}
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-white/80 w-4 h-4" />
              <Input
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={form.password}
                onChange={handleChange}
                className="pl-10 pr-12 bg-transparent border-white/50 text-white placeholder:text-white/70"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword((s) => !s)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/80"
              >
                {showPassword ? (
                  <EyeOff className="w-4 h-4" />
                ) : (
                  <Eye className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Remember + Forgot */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-white/80">
                <input
                  type="checkbox"
                  name="remember"
                  checked={form.remember}
                  onChange={handleChange}
                  className="w-4 h-4 rounded border-white/50 bg-transparent"
                />
                <span>Remember me</span>
              </label>
              <a
                href="/forgot-password"
                className="text-indigo-300 hover:underline"
              >
                Forgot password?
              </a>
            </div>

            {/* Login Button */}
            <Button
              type="submit"
              className="w-full bg-white text-black font-semibold rounded-md hover:bg-gray-200 transition"
              disabled={loading}
            >
              {loading ? "Signing in..." : "Log In"}
            </Button>

            {/* Register */}
            {/* <p className="text-center text-sm text-white/80 mt-4">
              Don’t have an account?{" "}
              <a href="/signup" className="text-indigo-300 hover:underline">
                Contact
              </a>
            </p> */}
            <p className="text-center text-sm text-white/80 mt-4">
              Need help?{" "}
              <span className="text-indigo-300">
                Reach out to our support team
              </span>
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
