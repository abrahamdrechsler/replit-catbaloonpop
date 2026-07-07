import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import { Link } from "wouter";

export default function NotFound() {
  // Get base URL from environment variable or default to '/'
  const base = import.meta.env.VITE_BASE_URL || '/';

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-pink-200 to-violet-200">
      <Card className="w-full max-w-md mx-4">
        <CardContent className="pt-6">
          <div className="flex mb-4 gap-2">
            <AlertCircle className="h-8 w-8 text-red-500" />
            <h1 className="text-2xl font-bold text-gray-900">Page Not Found</h1>
          </div>

          <p className="mt-4 text-sm text-gray-600">
            The page you're looking for doesn't exist or has been moved.
          </p>

          <div className="mt-6">
            <Link href={`${base}`} className="text-blue-500 hover:text-blue-700 underline">
              Return to Game
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}