import React, { useState } from 'react';
import { User, Mail, Phone, MapPin, Building2, ShieldCheck, Plus, Check } from 'lucide-react';

const Profile = () => {
  const [showAddManager, setShowAddManager] = useState(false);
  const [added, setAdded] = useState(false);

  const handleAddManager = (e) => {
    e.preventDefault();
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      setShowAddManager(false);
    }, 2000);
  };

  return (
    <div className="space-y-6 max-w-4xl">
      
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-emerald-950">Manager Profile</h1>
          <p className="text-stone-400 text-sm mt-1">View your profile and manage administrative access.</p>
        </div>
        <button 
          onClick={() => setShowAddManager(true)}
          className="flex items-center gap-2 px-5 py-2.5 bg-emerald-950 text-amber-400 font-bold text-sm rounded-xl hover:bg-emerald-800 transition-all shadow-lg"
        >
          <Plus className="w-4 h-4" /> Add New Manager
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Profile Card */}
        <div className="md:col-span-1 space-y-6">
          <div className="bg-white rounded-3xl border border-stone-100 shadow-sm p-8 text-center flex flex-col items-center">
            <div className="w-32 h-32 rounded-full bg-emerald-950 text-amber-500 font-black text-5xl flex items-center justify-center shadow-xl mb-6 relative">
              M
              <button className="absolute bottom-0 right-0 w-10 h-10 bg-amber-500 rounded-full border-4 border-white flex items-center justify-center text-emerald-950 hover:bg-amber-400 transition-colors">
                <User className="w-5 h-5" />
              </button>
            </div>
            <h2 className="text-2xl font-serif font-bold text-emerald-950">Hotel Manager</h2>
            <p className="text-emerald-600 font-semibold text-sm mt-1">Super Admin</p>
            <p className="text-stone-400 text-xs mt-3 px-4">Responsible for overseeing all operations at Kandy Heritage and Hikkaduwa Beach properties.</p>
          </div>
        </div>

        {/* Details & Other Managers */}
        <div className="md:col-span-2 space-y-6">
          <div className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden">
            <div className="flex items-center gap-2 px-6 py-4 border-b border-stone-100 bg-stone-50">
              <User className="w-4 h-4 text-amber-600" />
              <h2 className="font-bold text-emerald-950">Personal Details</h2>
            </div>
            <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { l: 'Full Name', v: 'Saman Kumara', icon: User },
                { l: 'Email Address', v: 'manager@siyala.lk', icon: Mail },
                { l: 'Phone Number', v: '+94 77 123 4567', icon: Phone },
                { l: 'Location', v: 'Kandy HQ', icon: MapPin },
                { l: 'Properties Managed', v: 'Kandy, Hikkaduwa', icon: Building2 },
                { l: 'Access Level', v: 'Full System Access', icon: ShieldCheck },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="p-2 bg-stone-50 rounded-lg text-stone-400 shrink-0"><item.icon className="w-4 h-4" /></div>
                  <div>
                    <p className="text-xs text-stone-400 mb-0.5">{item.l}</p>
                    <p className="font-semibold text-emerald-950">{item.v}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 border-b border-stone-100 bg-stone-50">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-600" />
                <h2 className="font-bold text-emerald-950">System Managers</h2>
              </div>
            </div>
            <div className="divide-y divide-stone-50">
              {[
                { name: 'Saman Kumara', role: 'Super Admin', email: 'manager@siyala.lk', active: true },
                { name: 'Nalin Perera', role: 'Property Manager', email: 'nalin@siyala.lk', active: true },
              ].map((m, i) => (
                <div key={i} className="flex items-center justify-between px-6 py-4 hover:bg-stone-50">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 font-bold flex items-center justify-center text-sm">{m.name.charAt(0)}</div>
                    <div>
                      <p className="font-semibold text-emerald-950 text-sm">{m.name}</p>
                      <p className="text-xs text-stone-400">{m.email}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="inline-block px-2.5 py-1 rounded-full text-[10px] font-bold border bg-amber-50 text-amber-600 border-amber-200 uppercase tracking-widest">{m.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Add Manager Modal */}
      {showAddManager && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-emerald-950/70 backdrop-blur-sm" onClick={() => setShowAddManager(false)} />
          <div className="relative bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl animate-in zoom-in-95">
            <h2 className="text-2xl font-serif font-bold text-emerald-950 mb-1">Add New Manager</h2>
            <p className="text-stone-400 text-sm mb-6">Create a new administrative user account.</p>
            
            <form onSubmit={handleAddManager} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-emerald-950">First Name</label>
                  <input required className="w-full px-4 py-2 text-sm border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400 bg-stone-50" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-emerald-950">Last Name</label>
                  <input required className="w-full px-4 py-2 text-sm border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400 bg-stone-50" />
                </div>
              </div>
              
              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-emerald-950">Email Address</label>
                <input required type="email" className="w-full px-4 py-2 text-sm border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400 bg-stone-50" />
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-emerald-950">Role</label>
                <select className="w-full px-4 py-2 text-sm border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400 bg-stone-50">
                  <option>Property Manager</option>
                  <option>Finance Manager</option>
                  <option>Super Admin</option>
                </select>
              </div>

              <div className="pt-4 flex gap-3">
                <button type="button" onClick={() => setShowAddManager(false)} className="flex-1 py-2.5 rounded-xl font-bold text-sm text-stone-500 hover:bg-stone-100 transition-colors">Cancel</button>
                <button type="submit" className={`flex-1 py-2.5 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 ${added ? 'bg-emerald-500 text-white' : 'bg-amber-500 text-emerald-950 hover:bg-amber-400'}`}>
                  {added ? <><Check className="w-4 h-4" /> Added!</> : 'Create Manager'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};

export default Profile;
