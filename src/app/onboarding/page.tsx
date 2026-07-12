import OnboardingFlow from "@/components/OnboardingFlow";
import { Suspense } from "react";

export default function OnboardingPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#050505] flex items-center justify-center text-white">Loading...</div>}>
      <OnboardingFlow />
    </Suspense>
  );
}
