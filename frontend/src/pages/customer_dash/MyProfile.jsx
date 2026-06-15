import React, { useState } from 'react';
import {
  UserCircle, Mail, Phone, MapPin, Calendar, Camera, Lock, Save, Edit3, Shield, Award,
} from 'lucide-react';

const MyProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    firstName: 'Guest',
    lastName: 'User',
    email: 'guest@siyala.lk',
    phone: '+94 77 123 4567',
    address: '123 Temple Road, Kandy, Sri Lanka',
    dob: '1990-05-15',
    nationality: 'Sri Lankan',
    loyaltyTier: 'Gold',
    memberSince: 'January 2024',
    totalStays: 8,
    loyaltyPoints: 2450,
  });

  const [passwords, setPasswords] = useState({
    current: '',
    newPass: '',
    confirm: '',
  });

  const handleChange = (field, value) => {
    setProfile(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="space-y-6 max-w-4xl">
      {/* Profile Header Card */}
      <div className="bg-gradient-to-r from-emerald-900 via-emerald-800 to-emerald-950 rounded-2xl p-6 md:p-8 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-amber-500/10 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl" />
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
          {/* Avatar */}
          <div className="relative group">
            <div className="w-28 h-28 rounded-full bg-amber-500 flex items-center justify-center text-emerald-950 text-4xl font-bold shadow-xl border-4 border-amber-400/30">
              {profile.firstName[0]}{profile.lastName[0]}
            </div>
            <button className="absolute bottom-1 right-1 p-2 rounded-full bg-emerald-950 text-amber-500 border border-amber-500/30 hover:bg-emerald-900 transition-colors shadow-lg">
              <Camera className="w-4 h-4" />
            </button>
          </div>

          {/* Info */}
          <div className="text-center md:text-left flex-1">
            <h2 className="text-2xl font-bold text-white">{profile.firstName} {profile.lastName}</h2>
            <p className="text-emerald-300/60 text-sm mt-1">{profile.email}</p>
            <div className="flex flex-wrap items-center gap-3 mt-4 justify-center md:justify-start">
              <span className="inline-flex items-center gap-1.5 bg-amber-500/20 text-amber-400 px-3 py-1.5 rounded-full text-xs font-bold border border-amber-500/20">
                <Award className="w-3.5 h-3.5" />
                {profile.loyaltyTier} Member
              </span>
              <span className="text-emerald-300/40 text-xs">Member since {profile.memberSince}</span>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="flex gap-6 text-center">
            <div>
              <p className="text-2xl font-bold text-amber-500">{profile.totalStays}</p>
              <p className="text-emerald-300/50 text-xs mt-0.5">Total Stays</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-amber-500">{profile.loyaltyPoints.toLocaleString()}</p>
              <p className="text-emerald-300/50 text-xs mt-0.5">Points</p>
            </div>
          </div>
        </div>
      </div>

      {/* Personal Information */}
      <div className="bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden">
        <div className="p-6 border-b border-stone-100 flex items-center justify-between">
          <h3 className="text-lg font-bold text-emerald-950">Personal Information</h3>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
              isEditing
                ? 'bg-emerald-950 text-white hover:bg-emerald-900'
                : 'bg-stone-100 text-emerald-950 hover:bg-stone-200'
            }`}
          >
            {isEditing ? <><Save className="w-4 h-4" /> Save Changes</> : <><Edit3 className="w-4 h-4" /> Edit Profile</>}
          </button>
        </div>
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-5">
          {[
            { label: 'First Name', field: 'firstName', icon: UserCircle, type: 'text' },
            { label: 'Last Name', field: 'lastName', icon: UserCircle, type: 'text' },
            { label: 'Email Address', field: 'email', icon: Mail, type: 'email' },
            { label: 'Phone Number', field: 'phone', icon: Phone, type: 'tel' },
            { label: 'Address', field: 'address', icon: MapPin, type: 'text' },
            { label: 'Date of Birth', field: 'dob', icon: Calendar, type: 'date' },
            { label: 'Nationality', field: 'nationality', icon: Shield, type: 'text' },
          ].map(({ label, field, icon: Icon, type }) => (
            <div key={field} className={field === 'address' ? 'md:col-span-2' : ''}>
              <label className="flex items-center gap-2 text-sm font-medium text-stone-500 mb-2">
                <Icon className="w-4 h-4" />
                {label}
              </label>
              <input
                type={type}
                value={profile[field]}
                onChange={(e) => handleChange(field, e.target.value)}
                disabled={!isEditing}
                className={`w-full px-4 py-2.5 rounded-xl border text-sm transition-all ${
                  isEditing
                    ? 'border-stone-200 bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500'
                    : 'border-transparent bg-stone-50 text-stone-600 cursor-default'
                }`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Change Password */}
      <div className="bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden">
        <div className="p-6 border-b border-stone-100">
          <h3 className="text-lg font-bold text-emerald-950 flex items-center gap-2">
            <Lock className="w-5 h-5 text-stone-400" />
            Change Password
          </h3>
        </div>
        <div className="p-6 space-y-4 max-w-md">
          {[
            { label: 'Current Password', field: 'current' },
            { label: 'New Password', field: 'newPass' },
            { label: 'Confirm New Password', field: 'confirm' },
          ].map(({ label, field }) => (
            <div key={field}>
              <label className="text-sm font-medium text-stone-500 mb-2 block">{label}</label>
              <input
                type="password"
                value={passwords[field]}
                onChange={(e) => setPasswords(prev => ({ ...prev, [field]: e.target.value }))}
                placeholder={`Enter ${label.toLowerCase()}`}
                className="w-full px-4 py-2.5 rounded-xl border border-stone-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 transition-all"
              />
            </div>
          ))}
          <button className="mt-2 px-5 py-2.5 bg-emerald-950 text-white rounded-xl text-sm font-semibold hover:bg-emerald-900 transition-colors">
            Update Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
