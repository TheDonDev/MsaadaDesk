import { Head } from '@inertiajs/react';
import {
    ArrowDownRight,
    ArrowRight,
    ArrowUpRight,
    Clock3,
    MessageSquare,
    MoreHorizontal,
    Phone,
    Plus,
    Search,
    TrendingUp,
    Users,
    Mail,
    MessageCircle,
} from 'lucide-react';

const metrics = [
    {
        label: 'Total tickets',
        value: '1,284',
        change: '+12.8%',
        positive: true,
        note: 'vs. previous month',
        icon: MessageSquare,
        color: 'bg-blue-50 text-blue-700',
    },
    {
        label: 'Open tickets',
        value: '186',
        change: '+4.3%',
        positive: false,
        note: 'vs. previous month',
        icon: Clock3,
        color: 'bg-amber-50 text-amber-700',
    },
    {
        label: 'Resolved tickets',
        value: '1,047',
        change: '+18.2%',
        positive: true,
        note: 'vs. previous month',
        icon: TrendingUp,
        color: 'bg-emerald-50 text-emerald-700',
    },
    {
        label: 'Active customers',
        value: '892',
        change: '+8.6%',
        positive: true,
        note: 'vs. previous month',
        icon: Users,
        color: 'bg-violet-50 text-violet-700',
    },
];

const tickets = [
    {
        id: 'MSD-1024',
        customer: 'Grace Wanjiku',
        initials: 'GW',
        subject: 'Unable to complete my order',
        channel: 'WhatsApp',
        channelIcon: MessageCircle,
        status: 'Open',
        priority: 'High',
        time: '8 min ago',
        avatar: 'bg-rose-100 text-rose-700',
    },
    {
        id: 'MSD-1023',
        customer: 'Brian Otieno',
        initials: 'BO',
        subject: 'Payment confirmation not received',
        channel: 'Email',
        channelIcon: Mail,
        status: 'In Progress',
        priority: 'Urgent',
        time: '24 min ago',
        avatar: 'bg-blue-100 text-blue-700',
    },
    {
        id: 'MSD-1022',
        customer: 'Faith Njeri',
        initials: 'FN',
        subject: 'Nahitaji msaada kuhusu akaunti yangu',
        channel: 'Live chat',
        channelIcon: MessageSquare,
        status: 'Pending',
        priority: 'Medium',
        time: '46 min ago',
        avatar: 'bg-violet-100 text-violet-700',
    },
    {
        id: 'MSD-1021',
        customer: 'Kevin Mwangi',
        initials: 'KM',
        subject: 'Request to update delivery address',
        channel: 'Phone',
        channelIcon: Phone,
        status: 'Resolved',
        priority: 'Low',
        time: '1 hour ago',
        avatar: 'bg-amber-100 text-amber-700',
    },
    {
        id: 'MSD-1020',
        customer: 'Mary Atieno',
        initials: 'MA',
        subject: 'Bidhaa yangu haijafika bado',
        channel: 'WhatsApp',
        channelIcon: MessageCircle,
        status: 'Open',
        priority: 'High',
        time: '2 hours ago',
        avatar: 'bg-teal-100 text-teal-700',
    },
];

const activity = [
    { initials: 'AK', name: 'Alex Kamau', action: 'resolved ticket MSD-1019', time: '12 min ago', color: 'bg-blue-100 text-blue-700' },
    { initials: 'SM', name: 'Sarah Mutua', action: 'replied to MSD-1023', time: '28 min ago', color: 'bg-violet-100 text-violet-700' },
    { initials: 'JK', name: 'John Kiptoo', action: 'created a new ticket', time: '41 min ago', color: 'bg-amber-100 text-amber-700' },
];

const volume = [
    { day: 'Mon', received: 48, resolved: 35 },
    { day: 'Tue', received: 66, resolved: 51 },
    { day: 'Wed', received: 54, resolved: 43 },
    { day: 'Thu', received: 82, resolved: 65 },
    { day: 'Fri', received: 70, resolved: 58 },
    { day: 'Sat', received: 42, resolved: 34 },
    { day: 'Sun', received: 57, resolved: 46 },
];

function StatusBadge({ status }: { status: string }) {
    const styles: Record<string, string> = {
        Open: 'bg-blue-50 text-blue-700',
        'In Progress': 'bg-violet-50 text-violet-700',
        Pending: 'bg-amber-50 text-amber-700',
        Resolved: 'bg-emerald-50 text-emerald-700',
    };

    return (
        <span className={`inline-flex rounded-full px-2.5 py-1 text-[10px] font-semibold ${styles[status] ?? 'bg-slate-100 text-slate-600'}`}>
            {status}
        </span>
    );
}

function PriorityBadge({ priority }: { priority: string }) {
    const styles: Record<string, string> = {
        Urgent: 'text-rose-700',
        High: 'text-orange-700',
        Medium: 'text-amber-700',
        Low: 'text-slate-500',
    };

    return (
        <span className={`text-xs font-semibold ${styles[priority] ?? 'text-slate-500'}`}>
            <span className="mr-1">●</span>{priority}
        </span>
    );
}

export default function Dashboard() {
    const maxVolume = Math.max(...volume.map((item) => item.received));

    return (
        <>
            <Head title="Overview" />

            <div className="space-y-7">
                <section className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                    <div>
                        <div className="mb-1 flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-emerald-500" />
                            <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-emerald-700">
                                Workspace overview
                            </span>
                        </div>
                        <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-[28px]">
                            Good morning, Demo Agent 👋
                        </h1>
                        <p className="mt-1 text-sm text-slate-500">
                            Here's what's happening with your customer support today.
                        </p>
                    </div>

                    <button
                        type="button"
                        className="inline-flex items-center justify-center gap-2 self-start rounded-xl bg-teal-700 px-4 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:bg-teal-800"
                    >
                        <Plus size={16} />
                        Create ticket
                    </button>
                </section>

                <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
                    {metrics.map((metric) => {
                        const Icon = metric.icon;
                        const ChangeIcon = metric.positive ? ArrowUpRight : ArrowDownRight;

                        return (
                            <div key={metric.label} className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm shadow-slate-200/30">
                                <div className="flex items-start justify-between">
                                    <p className="text-xs font-medium text-slate-500">{metric.label}</p>
                                    <div className={`flex h-9 w-9 items-center justify-center rounded-xl ${metric.color}`}>
                                        <Icon size={18} />
                                    </div>
                                </div>
                                <div className="mt-4 flex items-end justify-between gap-2">
                                    <p className="text-[29px] font-extrabold tracking-tight text-slate-900">{metric.value}</p>
                                    <span className={`mb-1 inline-flex items-center gap-0.5 text-[11px] font-semibold ${metric.positive ? 'text-emerald-600' : 'text-rose-600'}`}>
                                        <ChangeIcon size={13} />
                                        {metric.change}
                                    </span>
                                </div>
                                <p className="mt-1 text-[11px] text-slate-400">{metric.note}</p>
                            </div>
                        );
                    })}
                </section>

                <section className="grid grid-cols-1 gap-5 xl:grid-cols-3">
                    <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm shadow-slate-200/30 xl:col-span-2 sm:p-6">
                        <div className="flex flex-wrap items-start justify-between gap-3">
                            <div>
                                <h2 className="text-sm font-bold text-slate-900">Ticket volume</h2>
                                <p className="mt-1 text-xs text-slate-400">Tickets received and resolved this week</p>
                            </div>
                            <button type="button" className="rounded-lg border border-slate-200 px-3 py-2 text-[11px] font-medium text-slate-600">
                                This week
                            </button>
                        </div>

                        <div className="mt-5 flex items-center gap-4">
                            <span className="flex items-center gap-1.5 text-[11px] text-slate-500">
                                <span className="h-2 w-2 rounded-full bg-teal-600" /> Received
                            </span>
                            <span className="flex items-center gap-1.5 text-[11px] text-slate-500">
                                <span className="h-2 w-2 rounded-full bg-slate-200" /> Resolved
                            </span>
                        </div>

                        <div className="mt-5 grid h-48 grid-cols-7 gap-3 border-b border-slate-100 pb-2">
                            {volume.map((item) => (
                                <div key={item.day} className="flex h-full flex-col items-center justify-end gap-2">
                                    <div className="flex h-full w-full items-end justify-center gap-1">
                                        <div
                                            title={`${item.received} received`}
                                            className="w-[38%] rounded-t-md bg-teal-600 transition-all hover:bg-teal-700"
                                            style={{ height: `${(item.received / maxVolume) * 100}%` }}
                                        />
                                        <div
                                            title={`${item.resolved} resolved`}
                                            className="w-[38%] rounded-t-md bg-slate-200 transition-all hover:bg-slate-300"
                                            style={{ height: `${(item.resolved / maxVolume) * 100}%` }}
                                        />
                                    </div>
                                    <span className="text-[10px] text-slate-400">{item.day}</span>
                                </div>
                            ))}
                        </div>
                        <div className="mt-4 flex items-center gap-2 text-[11px] text-emerald-600">
                            <TrendingUp size={14} />
                            <span className="font-semibold">Healthy resolution activity</span>
                            <span className="text-slate-400">· Demonstration figures</span>
                        </div>
                    </div>

                    <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm shadow-slate-200/30 sm:p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <h2 className="text-sm font-bold text-slate-900">Ticket priorities</h2>
                                <p className="mt-1 text-xs text-slate-400">Current open workload</p>
                            </div>
                            <button type="button" aria-label="More priority options" className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-50">
                                <MoreHorizontal size={19} />
                            </button>
                        </div>

                        <div className="my-6 flex items-center justify-center">
                            <div className="relative flex h-36 w-36 items-center justify-center rounded-full" style={{ background: 'conic-gradient(#e11d48 0% 12%, #f97316 12% 40%, #eab308 40% 72%, #cbd5e1 72% 100%)' }}>
                                <div className="flex h-24 w-24 flex-col items-center justify-center rounded-full bg-white">
                                    <span className="text-2xl font-extrabold text-slate-900">186</span>
                                    <span className="text-[10px] text-slate-400">Open tickets</span>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-3">
                            {[
                                { label: 'Urgent', count: 22, color: 'bg-rose-600', percentage: '12%' },
                                { label: 'High', count: 52, color: 'bg-orange-500', percentage: '28%' },
                                { label: 'Medium', count: 60, color: 'bg-amber-400', percentage: '32%' },
                                { label: 'Low', count: 52, color: 'bg-slate-300', percentage: '28%' },
                            ].map((item) => (
                                <div key={item.label} className="flex items-center justify-between text-xs">
                                    <span className="flex items-center gap-2 text-slate-600">
                                        <span className={`h-2 w-2 rounded-full ${item.color}`} />
                                        {item.label}
                                    </span>
                                    <span className="font-semibold text-slate-800">{item.count} <span className="ml-1 font-normal text-slate-400">{item.percentage}</span></span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="grid grid-cols-1 gap-5 xl:grid-cols-3">
                    <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm shadow-slate-200/30 xl:col-span-2">
                        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 px-5 py-5 sm:px-6">
                            <div>
                                <h2 className="text-sm font-bold text-slate-900">Recent tickets</h2>
                                <p className="mt-1 text-xs text-slate-400">A snapshot of the latest customer requests</p>
                            </div>
                            <a href="#all-tickets" onClick={(event) => event.preventDefault()} className="inline-flex items-center gap-1 text-xs font-semibold text-teal-700 hover:text-teal-900">
                                View all <ArrowRight size={14} />
                            </a>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full min-w-[650px] text-left">
                                <thead className="bg-slate-50/70">
                                    <tr className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                                        <th className="px-5 py-3 sm:px-6">Customer / Ticket</th>
                                        <th className="px-4 py-3">Channel</th>
                                        <th className="px-4 py-3">Priority</th>
                                        <th className="px-4 py-3">Status</th>
                                        <th className="px-5 py-3 sm:px-6">Updated</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {tickets.map((ticket) => {
                                        const ChannelIcon = ticket.channelIcon;

                                        return (
                                            <tr key={ticket.id} className="transition hover:bg-slate-50/70">
                                                <td className="px-5 py-4 sm:px-6">
                                                    <div className="flex items-center gap-3">
                                                        <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[10px] font-bold ${ticket.avatar}`}>
                                                            {ticket.initials}
                                                        </div>
                                                        <div className="min-w-0">
                                                            <p className="truncate text-xs font-semibold text-slate-800">{ticket.customer}</p>
                                                            <p className="mt-1 max-w-[210px] truncate text-[11px] text-slate-400">{ticket.subject}</p>
                                                            <p className="mt-1 text-[10px] font-medium text-slate-400">{ticket.id}</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-4 py-4">
                                                    <span className="flex items-center gap-1.5 text-[11px] text-slate-500">
                                                        <ChannelIcon size={14} /> {ticket.channel}
                                                    </span>
                                                </td>
                                                <td className="px-4 py-4"><PriorityBadge priority={ticket.priority} /></td>
                                                <td className="px-4 py-4"><StatusBadge status={ticket.status} /></td>
                                                <td className="px-5 py-4 text-[11px] text-slate-400 sm:px-6">{ticket.time}</td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>

                        <div className="border-t border-slate-100 px-5 py-3 text-center sm:px-6">
                            <p className="text-[10px] text-slate-400">Sample tickets · Fictional customer data</p>
                        </div>
                    </div>

                    <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm shadow-slate-200/30 sm:p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <h2 className="text-sm font-bold text-slate-900">Team activity</h2>
                                <p className="mt-1 text-xs text-slate-400">Latest agent updates</p>
                            </div>
                            <span className="rounded-full bg-emerald-50 px-2 py-1 text-[10px] font-semibold text-emerald-700">Live demo</span>
                        </div>

                        <div className="mt-6 space-y-6">
                            {activity.map((item, index) => (
                                <div key={`${item.name}-${index}`} className="flex gap-3">
                                    <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[10px] font-bold ${item.color}`}>
                                        {item.initials}
                                    </div>
                                    <div className="min-w-0">
                                        <p className="text-xs leading-5 text-slate-700">
                                            <span className="font-semibold text-slate-900">{item.name}</span> {item.action}
                                        </p>
                                        <p className="mt-1 text-[10px] text-slate-400">{item.time}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-7 rounded-xl bg-slate-50 p-4">
                            <p className="text-xs font-bold text-slate-800">Bilingual support</p>
                            <p className="mt-1 text-[11px] leading-5 text-slate-500">
                                English and Kiswahili customer conversations are represented in this demo workspace.
                            </p>
                            <div className="mt-3 flex gap-2">
                                <span className="rounded-lg border border-slate-200 bg-white px-2.5 py-1 text-[10px] font-semibold text-slate-600">English</span>
                                <span className="rounded-lg border border-slate-200 bg-white px-2.5 py-1 text-[10px] font-semibold text-slate-600">Kiswahili</span>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="flex items-center justify-between rounded-xl border border-teal-100 bg-teal-50/60 px-4 py-3">
                    <p className="text-[11px] text-teal-900">
                        <span className="font-bold">Demo environment:</span> Dashboard values and activity are fictional sample data.
                    </p>
                    <span className="hidden text-[10px] font-semibold text-teal-700 sm:inline">MSAADADESK · v1.0</span>
                </div>
            </div>
        </>
    );
}
