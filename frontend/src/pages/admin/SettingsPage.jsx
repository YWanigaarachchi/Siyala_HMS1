import React, { useState } from 'react';
import {
  Settings,
  Bell,
  Shield,
  Globe,
  Save,
  Eye,
  EyeOff,
  Download,
} from 'lucide-react';

const tabs = [
  { id: 'general', label: 'General', icon: Settings },
  { id: 'notifications', label: 'Notifications', icon: Bell },
  { id: 'security', label: 'Security', icon: Shield },
  { id: 'system', label: 'System', icon: Globe },
];

const Toggle = ({ enabled, onToggle }) => (
  <button
    onClick={onToggle}
    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${enabled ? 'bg-amber-500' : 'bg-stone-300'}`}
  >
    <span className={`inline-block h-4 w-4 transform rounded-full bg-white shadow-sm transition-transform ${enabled ? 'translate-x-6' : 'translate-x-1'}`} />
  </button>
);

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState('general');
  const [saved, setSaved] = useState(false);

  // General
  const [general, setGeneral] = useState({
    hotelName: 'Siyala Hotels & Resorts',
    contactEmail: 'admin@siyala.lk',
    currency: 'LKR',
    timezone: 'Asia/Colombo',
  });

  // Notifications
  const [notifs, setNotifs] = useState({
    emailAlerts: true,
    smsAlerts: false,
    lowStockAlerts: true,
    bookingConfirmations: true,
    staffLeaveRequests: true,
    dailyReport: false,
  });

  // Security
  const [showPass, setShowPass] = useState(false);
  const [security, setSecurity] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
    twoFactor: false,
    sessionTimeout: '30',
  });

  // System
  const [system, setSystem] = useState({
    language: 'English',
    theme: 'Light',
    dateFormat: 'YYYY-MM-DD',
  });

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-emerald-950">Settings</h2>
          <p className="text-sm text-stone-500 mt-1">Configure system preferences and account settings.</p>
        </div>
        <button
          onClick={handleSave}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm shadow-sm transition-all ${
            saved ? 'bg-emerald-500 text-white' : 'bg-amber-500 hover:bg-amber-600 text-emerald-950'
          }`}
        >
          <Save className="w-4 h-4" />
          {saved ? 'Saved!' : 'Save Changes'}
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Tab Sidebar */}
        <div className="lg:w-56 shrink-0">
          <div className="bg-white rounded-2xl shadow-sm border border-stone-100 p-2 flex flex-row lg:flex-col gap-1">
            {tabs.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all w-full ${
                  activeTab === id
                    ? 'bg-amber-500 text-emerald-950 shadow-sm'
                    : 'text-stone-600 hover:bg-stone-50'
                }`}
              >
                <Icon className="w-4 h-4 shrink-0" />
                <span className="hidden lg:inline">{label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="flex-1 bg-white rounded-2xl shadow-sm border border-stone-100 p-6">
          {/* General */}
          {activeTab === 'general' && (
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-emerald-950 border-b border-stone-100 pb-4">General Settings</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1.5">Hotel / Chain Name</label>
                  <input type="text" value={general.hotelName} onChange={(e) => setGeneral({ ...general, hotelName: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1.5">Contact Email</label>
                  <input type="email" value={general.contactEmail} onChange={(e) => setGeneral({ ...general, contactEmail: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1.5">Default Currency</label>
                  <select value={general.currency} onChange={(e) => setGeneral({ ...general, currency: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 bg-white">
                    <option value="LKR">LKR — Sri Lankan Rupee</option>
                    <option value="USD">USD — US Dollar</option>
                    <option value="EUR">EUR — Euro</option>
                    <option value="GBP">GBP — British Pound</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1.5">Timezone</label>
                  <select value={general.timezone} onChange={(e) => setGeneral({ ...general, timezone: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 bg-white">
                    <option value="Asia/Colombo">Asia/Colombo (UTC+5:30)</option>
                    <option value="UTC">UTC (UTC+0)</option>
                    <option value="Asia/Kolkata">Asia/Kolkata (UTC+5:30)</option>
                    <option value="Europe/London">Europe/London (UTC+0)</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* Notifications */}
          {activeTab === 'notifications' && (
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-emerald-950 border-b border-stone-100 pb-4">Notification Preferences</h3>
              <div className="space-y-5">
                {[
                  { key: 'emailAlerts', label: 'Email Alerts', desc: 'Receive important alerts via email' },
                  { key: 'smsAlerts', label: 'SMS Alerts', desc: 'Get SMS for critical notifications' },
                  { key: 'lowStockAlerts', label: 'Low Stock Alerts', desc: 'Alert when inventory falls below minimum' },
                  { key: 'bookingConfirmations', label: 'Booking Confirmations', desc: 'Notify on new booking confirmations' },
                  { key: 'staffLeaveRequests', label: 'Staff Leave Requests', desc: 'Notify when staff request leave' },
                  { key: 'dailyReport', label: 'Daily Summary Report', desc: 'Receive a daily performance summary' },
                ].map(({ key, label, desc }) => (
                  <div key={key} className="flex items-center justify-between py-2">
                    <div>
                      <p className="text-sm font-semibold text-emerald-950">{label}</p>
                      <p className="text-xs text-stone-500 mt-0.5">{desc}</p>
                    </div>
                    <Toggle enabled={notifs[key]} onToggle={() => setNotifs({ ...notifs, [key]: !notifs[key] })} />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Security */}
          {activeTab === 'security' && (
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-emerald-950 border-b border-stone-100 pb-4">Security Settings</h3>
              <div className="space-y-4 max-w-md">
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1.5">Current Password</label>
                  <div className="relative">
                    <input type={showPass ? 'text' : 'password'} value={security.currentPassword} onChange={(e) => setSecurity({ ...security, currentPassword: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 pr-10" placeholder="Enter current password" />
                    <button onClick={() => setShowPass(!showPass)} className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600">
                      {showPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1.5">New Password</label>
                  <input type="password" value={security.newPassword} onChange={(e) => setSecurity({ ...security, newPassword: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500" placeholder="Enter new password" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1.5">Confirm New Password</label>
                  <input type="password" value={security.confirmPassword} onChange={(e) => setSecurity({ ...security, confirmPassword: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500" placeholder="Confirm new password" />
                </div>
              </div>
              <div className="border-t border-stone-100 pt-5 space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-emerald-950">Two-Factor Authentication</p>
                    <p className="text-xs text-stone-500 mt-0.5">Add an extra layer of security to your account</p>
                  </div>
                  <Toggle enabled={security.twoFactor} onToggle={() => setSecurity({ ...security, twoFactor: !security.twoFactor })} />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-emerald-950">Session Timeout</p>
                    <p className="text-xs text-stone-500 mt-0.5">Auto-logout after inactivity (minutes)</p>
                  </div>
                  <select value={security.sessionTimeout} onChange={(e) => setSecurity({ ...security, sessionTimeout: e.target.value })} className="px-3 py-2 rounded-xl border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 bg-white">
                    <option value="15">15 min</option>
                    <option value="30">30 min</option>
                    <option value="60">1 hour</option>
                    <option value="120">2 hours</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* System */}
          {activeTab === 'system' && (
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-emerald-950 border-b border-stone-100 pb-4">System Preferences</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1.5">Language</label>
                  <select value={system.language} onChange={(e) => setSystem({ ...system, language: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 bg-white">
                    <option>English</option>
                    <option>Sinhala</option>
                    <option>Tamil</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1.5">Theme</label>
                  <select value={system.theme} onChange={(e) => setSystem({ ...system, theme: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 bg-white">
                    <option>Light</option>
                    <option>Dark</option>
                    <option>System Default</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1.5">Date Format</label>
                  <select value={system.dateFormat} onChange={(e) => setSystem({ ...system, dateFormat: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 bg-white">
                    <option value="YYYY-MM-DD">YYYY-MM-DD</option>
                    <option value="DD/MM/YYYY">DD/MM/YYYY</option>
                    <option value="MM/DD/YYYY">MM/DD/YYYY</option>
                  </select>
                </div>
              </div>
              <div className="border-t border-stone-100 pt-5">
                <h4 className="text-sm font-semibold text-emerald-950 mb-3">Data Management</h4>
                <div className="flex flex-wrap gap-3">
                  <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-stone-200 text-sm font-semibold text-stone-600 hover:bg-stone-50 transition-colors">
                    <Download className="w-4 h-4" />
                    Export All Data (CSV)
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-stone-200 text-sm font-semibold text-stone-600 hover:bg-stone-50 transition-colors">
                    <Download className="w-4 h-4" />
                    Export Bookings (PDF)
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
