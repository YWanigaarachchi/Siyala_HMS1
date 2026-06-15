import React, { useState } from 'react';
import { Bell, Shield, Globe, Moon, Sun, Monitor, Save, ChevronRight, Smartphone, Mail } from 'lucide-react';

const CustomerSettings = () => {
  const [settings, setSettings] = useState({
    emailNotifs: true,
    smsNotifs: false,
    marketingEmails: false,
    language: 'English',
    theme: 'system',
    twoFactorAuth: false,
  });

  const toggleSetting = (key) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="space-y-6 max-w-4xl">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-emerald-950">Account Settings</h2>
        <p className="text-stone-500 text-sm mt-1">Manage your preferences, notifications, and security settings.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Sidebar Nav (mock) */}
        <div className="md:col-span-1 space-y-2">
          {[
            { id: 'notifications', label: 'Notifications', icon: Bell, active: true },
            { id: 'security', label: 'Security', icon: Shield, active: false },
            { id: 'appearance', label: 'Appearance', icon: Moon, active: false },
            { id: 'language', label: 'Language', icon: Globe, active: false },
          ].map(tab => (
            <button
              key={tab.id}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                tab.active
                  ? 'bg-emerald-950 text-amber-500 shadow-lg'
                  : 'bg-white text-stone-600 hover:bg-stone-50 border border-stone-100'
              }`}
            >
              <span className="flex items-center gap-3">
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </span>
              {tab.active && <ChevronRight className="w-4 h-4" />}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="md:col-span-2 space-y-6">
          
          {/* Notifications */}
          <div className="bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden">
            <div className="p-6 border-b border-stone-100">
              <h3 className="text-lg font-bold text-emerald-950 flex items-center gap-2">
                <Bell className="w-5 h-5 text-stone-400" />
                Notification Preferences
              </h3>
            </div>
            <div className="p-6 space-y-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-emerald-950 flex items-center gap-2">
                    <Mail className="w-4 h-4 text-stone-400" />
                    Email Notifications
                  </p>
                  <p className="text-xs text-stone-500 mt-0.5">Receive booking confirmations and receipts via email.</p>
                </div>
                <button
                  onClick={() => toggleSetting('emailNotifs')}
                  className={`w-11 h-6 rounded-full transition-colors relative ${settings.emailNotifs ? 'bg-amber-500' : 'bg-stone-200'}`}
                >
                  <span className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white transition-transform ${settings.emailNotifs ? 'translate-x-5' : 'translate-x-0'}`} />
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-emerald-950 flex items-center gap-2">
                    <Smartphone className="w-4 h-4 text-stone-400" />
                    SMS Notifications
                  </p>
                  <p className="text-xs text-stone-500 mt-0.5">Get instant text alerts for check-in and check-out.</p>
                </div>
                <button
                  onClick={() => toggleSetting('smsNotifs')}
                  className={`w-11 h-6 rounded-full transition-colors relative ${settings.smsNotifs ? 'bg-amber-500' : 'bg-stone-200'}`}
                >
                  <span className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white transition-transform ${settings.smsNotifs ? 'translate-x-5' : 'translate-x-0'}`} />
                </button>
              </div>

              <div className="flex items-center justify-between pt-5 border-t border-stone-100">
                <div>
                  <p className="text-sm font-bold text-emerald-950">Marketing Emails</p>
                  <p className="text-xs text-stone-500 mt-0.5">Receive special offers, promos, and news.</p>
                </div>
                <button
                  onClick={() => toggleSetting('marketingEmails')}
                  className={`w-11 h-6 rounded-full transition-colors relative ${settings.marketingEmails ? 'bg-amber-500' : 'bg-stone-200'}`}
                >
                  <span className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white transition-transform ${settings.marketingEmails ? 'translate-x-5' : 'translate-x-0'}`} />
                </button>
              </div>
            </div>
          </div>

          {/* Appearance & Language */}
          <div className="bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden">
            <div className="p-6 border-b border-stone-100">
              <h3 className="text-lg font-bold text-emerald-950 flex items-center gap-2">
                <Globe className="w-5 h-5 text-stone-400" />
                Localization & Appearance
              </h3>
            </div>
            <div className="p-6 space-y-6">
              <div>
                <label className="text-sm font-bold text-emerald-950 mb-3 block">Display Theme</label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: 'light', label: 'Light', icon: Sun },
                    { id: 'dark', label: 'Dark', icon: Moon },
                    { id: 'system', label: 'System', icon: Monitor },
                  ].map(t => (
                    <button
                      key={t.id}
                      onClick={() => setSettings(prev => ({ ...prev, theme: t.id }))}
                      className={`flex flex-col items-center justify-center p-3 rounded-xl border-2 transition-all ${
                        settings.theme === t.id
                          ? 'border-amber-500 bg-amber-50 text-emerald-950'
                          : 'border-stone-100 bg-white text-stone-500 hover:bg-stone-50'
                      }`}
                    >
                      <t.icon className="w-5 h-5 mb-2" />
                      <span className="text-xs font-semibold">{t.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-sm font-bold text-emerald-950 mb-2 block">Language</label>
                <select
                  value={settings.language}
                  onChange={(e) => setSettings(prev => ({ ...prev, language: e.target.value }))}
                  className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 transition-all appearance-none cursor-pointer bg-white"
                >
                  <option value="English">English</option>
                  <option value="Sinhala">Sinhala (සිංහල)</option>
                  <option value="Tamil">Tamil (தமிழ்)</option>
                </select>
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <button className="flex items-center gap-2 px-6 py-2.5 bg-emerald-950 hover:bg-emerald-900 text-white rounded-xl font-semibold shadow-md transition-colors">
              <Save className="w-4 h-4" />
              Save Preferences
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CustomerSettings;
