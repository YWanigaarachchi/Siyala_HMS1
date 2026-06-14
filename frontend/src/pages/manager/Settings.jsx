import React, { useState } from 'react';
import { Settings as SettingsIcon, Bell, Shield, Globe, Palette, Save, Check } from 'lucide-react';

const Toggle = ({ checked, onChange }) => (
  <button
    role="switch"
    aria-checked={checked}
    onClick={() => onChange(!checked)}
    className={`relative w-11 h-6 rounded-full transition-colors duration-200 focus:outline-none ${checked ? 'bg-emerald-600' : 'bg-stone-200'}`}
  >
    <span className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform duration-200 ${checked ? 'translate-x-5' : 'translate-x-0'}`} />
  </button>
);

const Section = ({ title, icon: Icon, children }) => (
  <div className="bg-white rounded-2xl border border-stone-100 shadow-sm overflow-hidden">
    <div className="flex items-center gap-3 px-6 py-4 border-b border-stone-100 bg-stone-50">
      <div className="p-2 bg-amber-50 rounded-xl">
        <Icon className="w-4 h-4 text-amber-600" />
      </div>
      <h2 className="font-bold text-emerald-950">{title}</h2>
    </div>
    <div className="p-6 space-y-5">{children}</div>
  </div>
);

const SettingRow = ({ label, description, control }) => (
  <div className="flex items-start justify-between gap-4 py-2">
    <div>
      <p className="font-semibold text-emerald-950 text-sm">{label}</p>
      {description && <p className="text-xs text-stone-400 mt-0.5">{description}</p>}
    </div>
    <div className="shrink-0">{control}</div>
  </div>
);

const InputRow = ({ label, type = 'text', defaultValue, placeholder }) => (
  <div className="space-y-1.5">
    <label className="text-sm font-semibold text-emerald-950">{label}</label>
    <input
      type={type}
      defaultValue={defaultValue}
      placeholder={placeholder}
      className="w-full px-4 py-2.5 text-sm border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400 bg-stone-50"
    />
  </div>
);

const Settings = () => {
  const [notifs, setNotifs] = useState({
    newBooking: true,
    checkIn: true,
    checkOut: true,
    lowStock: true,
    financeReport: false,
    staffAlerts: true,
  });

  const [security, setSecurity] = useState({
    twoFactor: true,
    sessionTimeout: true,
    loginAlerts: true,
  });

  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="space-y-6 max-w-3xl">

      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-emerald-950">Settings</h1>
          <p className="text-stone-400 text-sm mt-1">Configure system preferences and account settings.</p>
        </div>
        <button
          onClick={handleSave}
          className={`flex items-center gap-2 px-5 py-2.5 font-bold text-sm rounded-xl transition-all shadow-lg ${saved ? 'bg-emerald-500 text-white' : 'bg-emerald-950 text-amber-400 hover:bg-emerald-800'}`}
        >
          {saved ? <><Check className="w-4 h-4" /> Saved!</> : <><Save className="w-4 h-4" /> Save Changes</>}
        </button>
      </div>

      {/* Profile */}
      <Section title="Profile & Account" icon={SettingsIcon}>
        <div className="flex items-center gap-4 mb-4 p-4 bg-stone-50 rounded-xl border border-stone-100">
          <div className="w-16 h-16 rounded-full bg-emerald-950 text-amber-500 font-black text-2xl flex items-center justify-center shrink-0 shadow-lg">M</div>
          <div>
            <p className="font-bold text-emerald-950">Hotel Manager</p>
            <p className="text-sm text-stone-400">manager@siyala.lk</p>
            <button className="text-xs font-bold text-amber-600 hover:text-amber-700 mt-1">Change Avatar</button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <InputRow label="Full Name" defaultValue="Hotel Manager" />
          <InputRow label="Email Address" type="email" defaultValue="manager@siyala.lk" />
          <InputRow label="Phone Number" type="tel" defaultValue="+94 77 123 4567" />
          <InputRow label="Current Password" type="password" placeholder="••••••••" />
          <InputRow label="New Password" type="password" placeholder="••••••••" />
          <InputRow label="Confirm Password" type="password" placeholder="••••••••" />
        </div>
      </Section>

      {/* Notifications */}
      <Section title="Notifications" icon={Bell}>
        {[
          { key: 'newBooking', label: 'New Booking Alerts', desc: 'Get notified when a new reservation is made' },
          { key: 'checkIn', label: 'Check-In Reminders', desc: 'Reminders for upcoming guest check-ins' },
          { key: 'checkOut', label: 'Check-Out Reminders', desc: 'Reminders for guest check-outs' },
          { key: 'lowStock', label: 'Low Inventory Alerts', desc: 'Alerts when stock falls below minimum levels' },
          { key: 'financeReport', label: 'Daily Finance Reports', desc: 'Receive daily financial summaries by email' },
          { key: 'staffAlerts', label: 'Staff Alerts', desc: 'Notifications about employee leave requests' },
        ].map(n => (
          <SettingRow
            key={n.key}
            label={n.label}
            description={n.desc}
            control={<Toggle checked={notifs[n.key]} onChange={v => setNotifs(p => ({ ...p, [n.key]: v }))} />}
          />
        ))}
      </Section>

      {/* Security */}
      <Section title="Security" icon={Shield}>
        {[
          { key: 'twoFactor', label: 'Two-Factor Authentication', desc: 'Add an extra layer of security to your account' },
          { key: 'sessionTimeout', label: 'Auto Session Timeout', desc: 'Automatically log out after 30 minutes of inactivity' },
          { key: 'loginAlerts', label: 'Login Alerts', desc: 'Get notified when your account is accessed from a new device' },
        ].map(s => (
          <SettingRow
            key={s.key}
            label={s.label}
            description={s.desc}
            control={<Toggle checked={security[s.key]} onChange={v => setSecurity(p => ({ ...p, [s.key]: v }))} />}
          />
        ))}
      </Section>

      {/* System Preferences */}
      <Section title="System Preferences" icon={Globe}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-sm font-semibold text-emerald-950">Time Zone</label>
            <select className="w-full px-4 py-2.5 text-sm border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400 bg-stone-50">
              <option>Asia/Colombo (IST +5:30)</option>
              <option>UTC</option>
              <option>America/New_York</option>
              <option>Europe/London</option>
            </select>
          </div>
          <div className="space-y-1.5">
            <label className="text-sm font-semibold text-emerald-950">Currency Display</label>
            <select className="w-full px-4 py-2.5 text-sm border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400 bg-stone-50">
              <option>LKR — Sri Lankan Rupee</option>
              <option>USD — US Dollar</option>
              <option>EUR — Euro</option>
              <option>GBP — British Pound</option>
            </select>
          </div>
          <div className="space-y-1.5">
            <label className="text-sm font-semibold text-emerald-950">Date Format</label>
            <select className="w-full px-4 py-2.5 text-sm border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400 bg-stone-50">
              <option>YYYY-MM-DD</option>
              <option>DD/MM/YYYY</option>
              <option>MM/DD/YYYY</option>
            </select>
          </div>
          <div className="space-y-1.5">
            <label className="text-sm font-semibold text-emerald-950">Language</label>
            <select className="w-full px-4 py-2.5 text-sm border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400 bg-stone-50">
              <option>English</option>
              <option>සිංහල (Sinhala)</option>
              <option>தமிழ் (Tamil)</option>
            </select>
          </div>
        </div>
      </Section>

      {/* Toast Notification */}
      <div className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-emerald-950 text-white px-6 py-4 rounded-2xl shadow-2xl transition-all duration-300 ${saved ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0 pointer-events-none'}`}>
        <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
          <Check className="w-5 h-5" />
        </div>
        <div>
          <p className="font-bold text-sm">Settings Saved</p>
          <p className="text-xs text-emerald-100/60">Your preferences have been updated successfully.</p>
        </div>
      </div>

    </div>
  );
};

export default Settings;
