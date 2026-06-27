import { Card } from "@/components/ui";
import { SettingsPanel } from "@/components/dashboard/SettingsPanel";
import { profile } from "@/components/dashboard/sample";

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      {/* Accessibility */}
      <Card className="p-6">
        <p className="text-kicker">Accessibility</p>
        <h2 className="mt-2 font-display text-[18px] font-semibold tracking-[-0.02em] text-ink">
          Make it comfortable for you.
        </h2>
        <p className="mt-1.5 max-w-prose text-[14px] text-body">
          These preferences apply everywhere and are saved on this device.
        </p>
        <div className="mt-4">
          <SettingsPanel />
        </div>
      </Card>

      {/* Profile (read-only sample) */}
      <Card className="p-6">
        <p className="text-kicker">Profile</p>
        <dl className="mt-4 divide-y divide-[var(--hairline)]">
          <div className="flex items-center justify-between py-3.5">
            <dt className="text-[14px] text-body">Name</dt>
            <dd className="text-[14px] font-medium text-ink">{profile.name}</dd>
          </div>
          <div className="flex items-center justify-between py-3.5">
            <dt className="text-[14px] text-body">Email</dt>
            <dd className="font-mono text-[13px] text-ink">{profile.email}</dd>
          </div>
          <div className="flex items-center justify-between py-3.5">
            <dt className="text-[14px] text-body">Level</dt>
            <dd className="font-mono text-[13px] text-ink">Level {profile.level}</dd>
          </div>
        </dl>
        <p className="mt-4 font-mono text-[11px] text-caption">
          Profile editing is available once your account is connected.
        </p>
      </Card>
    </div>
  );
}
