import React, { useState } from 'react';
import {
  LifeBuoy, Plus, Search, Filter, ChevronDown, MessageCircle, Clock, CheckCircle, AlertCircle, Send, X,
} from 'lucide-react';

const existingTickets = [
  { id: 'TK-1001', subject: 'Room cleanliness issue', description: 'The room at Siyala Kandy was not properly cleaned upon check-in. Found towels from previous guest.', priority: 'High', status: 'In Progress', created: 'Jun 14, 2026', lastUpdate: '2 hours ago', messages: 3 },
  { id: 'TK-0998', subject: 'WiFi not working', description: 'Internet connection was very slow and kept disconnecting at Siyala Ella during my stay on May 10-13.', priority: 'Medium', status: 'Resolved', created: 'May 13, 2026', lastUpdate: '2 days ago', messages: 5 },
  { id: 'TK-0990', subject: 'Extra charges on bill', description: 'I noticed an extra LKR 3,500 charge on my Siyala Hikkaduwa bill that I did not authorize.', priority: 'High', status: 'Resolved', created: 'Mar 20, 2026', lastUpdate: '1 week ago', messages: 7 },
  { id: 'TK-0985', subject: 'Booking modification request', description: 'Need to change my check-in date from Jul 05 to Jul 06 for Siyala Galle Fort reservation.', priority: 'Low', status: 'Open', created: 'Jun 12, 2026', lastUpdate: '1 day ago', messages: 1 },
];

const statusColors = {
  'Open': 'bg-blue-100 text-blue-700',
  'In Progress': 'bg-amber-100 text-amber-700',
  'Resolved': 'bg-emerald-100 text-emerald-700',
  'Closed': 'bg-stone-100 text-stone-600',
};

const priorityColors = {
  'High': 'bg-red-50 text-red-600 border-red-200',
  'Medium': 'bg-amber-50 text-amber-600 border-amber-200',
  'Low': 'bg-blue-50 text-blue-600 border-blue-200',
};

const SupportTickets = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [showNewTicket, setShowNewTicket] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [newTicket, setNewTicket] = useState({ subject: '', description: '', priority: 'Medium' });

  const filteredTickets = existingTickets.filter(t => {
    const matchSearch = t.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        t.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchStatus = statusFilter === 'All' || t.status === statusFilter;
    return matchSearch && matchStatus;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <p className="text-stone-500 text-sm">Need help? Submit a ticket and our team will assist you.</p>
        </div>
        <button
          onClick={() => setShowNewTicket(true)}
          className="flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-emerald-950 px-5 py-2.5 rounded-xl font-semibold text-sm shadow-sm transition-all hover:scale-105"
        >
          <Plus className="w-4 h-4" />
          New Ticket
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Total Tickets', value: existingTickets.length, icon: LifeBuoy, color: 'bg-emerald-50 text-emerald-600' },
          { label: 'Open', value: existingTickets.filter(t => t.status === 'Open').length, icon: AlertCircle, color: 'bg-blue-50 text-blue-600' },
          { label: 'In Progress', value: existingTickets.filter(t => t.status === 'In Progress').length, icon: Clock, color: 'bg-amber-50 text-amber-600' },
          { label: 'Resolved', value: existingTickets.filter(t => t.status === 'Resolved').length, icon: CheckCircle, color: 'bg-emerald-50 text-emerald-600' },
        ].map((stat, i) => (
          <div key={i} className="bg-white rounded-2xl p-4 shadow-sm border border-stone-100">
            <div className={`w-8 h-8 rounded-lg ${stat.color} flex items-center justify-center mb-3`}>
              <stat.icon className="w-4 h-4" />
            </div>
            <p className="text-xs text-stone-500 font-medium">{stat.label}</p>
            <p className="text-xl font-bold text-emerald-950 mt-0.5">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Search & Filter */}
      <div className="bg-white rounded-2xl shadow-sm border border-stone-100 p-4">
        <div className="flex flex-col md:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
            <input
              type="text"
              placeholder="Search tickets..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 transition-all"
            />
          </div>
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="pl-10 pr-8 py-2.5 rounded-xl border border-stone-200 text-sm font-medium text-emerald-950 bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/30 appearance-none cursor-pointer"
            >
              <option value="All">All Status</option>
              <option value="Open">Open</option>
              <option value="In Progress">In Progress</option>
              <option value="Resolved">Resolved</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Tickets List */}
      <div className="space-y-4">
        {filteredTickets.map(ticket => (
          <div
            key={ticket.id}
            onClick={() => setSelectedTicket(ticket)}
            className="bg-white rounded-2xl shadow-sm border border-stone-100 p-5 hover:shadow-md transition-all cursor-pointer group"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-bold text-stone-400">{ticket.id}</span>
                  <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${statusColors[ticket.status]}`}>
                    {ticket.status}
                  </span>
                  <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold border ${priorityColors[ticket.priority]}`}>
                    {ticket.priority}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-emerald-950 group-hover:text-amber-600 transition-colors">{ticket.subject}</h4>
                <p className="text-xs text-stone-500 mt-1 line-clamp-1">{ticket.description}</p>
              </div>
              <div className="flex items-center gap-4 text-xs text-stone-400 shrink-0">
                <span className="flex items-center gap-1"><MessageCircle className="w-3.5 h-3.5" />{ticket.messages}</span>
                <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{ticket.lastUpdate}</span>
              </div>
            </div>
          </div>
        ))}

        {filteredTickets.length === 0 && (
          <div className="bg-white rounded-2xl p-12 text-center shadow-sm border border-stone-100">
            <LifeBuoy className="w-12 h-12 text-stone-300 mx-auto mb-3" />
            <p className="text-stone-500 font-medium">No tickets found</p>
            <p className="text-stone-400 text-sm mt-1">Try adjusting your search or filter</p>
          </div>
        )}
      </div>

      {/* New Ticket Modal */}
      {showNewTicket && (
        <>
          <div className="fixed inset-0 z-40 bg-emerald-950/50 backdrop-blur-sm" onClick={() => setShowNewTicket(false)} />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden">
              <div className="p-6 bg-gradient-to-r from-emerald-900 to-emerald-800 flex items-center justify-between">
                <div>
                  <p className="text-emerald-300/60 text-xs font-medium">Create New</p>
                  <h3 className="text-white font-bold text-xl mt-1">Support Ticket</h3>
                </div>
                <button onClick={() => setShowNewTicket(false)} className="p-2 rounded-xl text-white/60 hover:text-white hover:bg-white/10 transition-colors">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <label className="text-sm font-medium text-stone-500 mb-2 block">Subject</label>
                  <input
                    type="text"
                    value={newTicket.subject}
                    onChange={(e) => setNewTicket(prev => ({ ...prev, subject: e.target.value }))}
                    placeholder="Brief description of your issue"
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 transition-all"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-stone-500 mb-2 block">Description</label>
                  <textarea
                    value={newTicket.description}
                    onChange={(e) => setNewTicket(prev => ({ ...prev, description: e.target.value }))}
                    placeholder="Provide detailed information about your issue..."
                    rows={4}
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 transition-all resize-none"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-stone-500 mb-2 block">Priority</label>
                  <div className="flex gap-3">
                    {['Low', 'Medium', 'High'].map(p => (
                      <button
                        key={p}
                        onClick={() => setNewTicket(prev => ({ ...prev, priority: p }))}
                        className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                          newTicket.priority === p
                            ? 'bg-emerald-950 text-amber-500'
                            : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                        }`}
                      >
                        {p}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-4 border-t border-stone-100 flex justify-end gap-3">
                <button onClick={() => setShowNewTicket(false)} className="px-4 py-2 text-sm font-medium text-stone-500 hover:bg-stone-50 rounded-xl transition-colors">
                  Cancel
                </button>
                <button className="flex items-center gap-2 px-5 py-2 bg-amber-500 hover:bg-amber-400 text-emerald-950 rounded-xl text-sm font-semibold transition-colors">
                  <Send className="w-4 h-4" />
                  Submit Ticket
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Ticket Detail Modal */}
      {selectedTicket && (
        <>
          <div className="fixed inset-0 z-40 bg-emerald-950/50 backdrop-blur-sm" onClick={() => setSelectedTicket(null)} />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden max-h-[80vh] flex flex-col">
              <div className="p-6 bg-gradient-to-r from-emerald-900 to-emerald-800 flex items-center justify-between shrink-0">
                <div>
                  <p className="text-emerald-300/60 text-xs font-medium">{selectedTicket.id}</p>
                  <h3 className="text-white font-bold text-lg mt-1">{selectedTicket.subject}</h3>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${statusColors[selectedTicket.status]}`}>
                    {selectedTicket.status}
                  </span>
                  <button onClick={() => setSelectedTicket(null)} className="p-2 rounded-xl text-white/60 hover:text-white hover:bg-white/10 transition-colors">
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <div className="p-6 overflow-y-auto flex-1">
                <div className="mb-4 p-4 bg-stone-50 rounded-xl">
                  <p className="text-sm text-stone-600">{selectedTicket.description}</p>
                  <p className="text-xs text-stone-400 mt-2">Created: {selectedTicket.created}</p>
                </div>
                <p className="text-xs text-stone-400 text-center">— {selectedTicket.messages} messages in this thread —</p>
              </div>
              <div className="p-4 border-t border-stone-100 flex gap-3 shrink-0">
                <input
                  type="text"
                  placeholder="Type a reply..."
                  className="flex-1 px-4 py-2.5 rounded-xl border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 transition-all"
                />
                <button className="p-2.5 bg-amber-500 hover:bg-amber-400 text-emerald-950 rounded-xl transition-colors">
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SupportTickets;
