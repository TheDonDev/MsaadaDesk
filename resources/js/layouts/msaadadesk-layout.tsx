import { Link } from '@inertiajs/react';
import { useState, type ReactNode } from 'react';
import {
    Activity,
    Bell,
    BookOpen,
    ChartNoAxesCombined,
    ChevronDown,
    Headset,
    LayoutDashboard,
    Menu,
    MessageSquare,
    Search,
    Settings,
    ShieldCheck,
    Users,
    UsersRound,
    X,
} from 'lucide-react';

type Props = {
    children: ReactNode;
};

const groups = [
    {
        title: 'WORKSPACE',
        items: [
            { label: 'Overview', href: '/dashboard', icon: LayoutDashboard, active: true },
            { label: 'Tickets', href: '#tickets', icon: MessageSquare },
            { label: 'Customers', href: '#customers', icon: Users },
            { label: 'Knowledge base', href: '#knowledge', icon: BookOpen },
        ],
    },
    {
        title: 'MANAGEMENT',
        items: [
            { label: 'Reports', href: '#reports', icon: ChartNoAxesCombined },
            { label: 'Team members', href: '#team', icon: UsersRound },
            { label: 'Activity log', href: '#activity', icon: Activity },
        ],
    },
];

export default function MsaadaDeskLayout({ children }: Props) {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <div className="min-h-screen bg-[#f7f9fc] text-slate-900">
            {mobileOpen && (
                <button
                    type="button"
                    aria-label="Close navigation overlay"
                    onClick={() => setMobileOpen(false)}
                    className="fixed inset-0 z-40 bg-slate-950/40 lg:hidden"
                />
            )}

            <aside
                className={`fixed inset-y-0 left-0 z-50 flex w-[264px] flex-col border-r border-slate-200 bg-white transition-transform duration-200 lg:translate-x-0 ${
                    mobileOpen ? 'translate-x-0' : '-translate-x-full'
                }`}
            >
                <div className="flex h-[76px] items-center justify-between border-b border-slate-100 px-6">
                    <Link href="/dashboard" className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-700 text-white">
                            <Headset size={21} />
                        </div>
                        <div>
                            <p className="text-[17px] font-extrabold tracking-tight">
                                Msaada<span className="text-teal-700">Desk</span>
                            </p>
                            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                                Customer support
                            </p>
                        </div>
                    </Link>

                    <button
                        type="button"
                        aria-label="Close menu"
                        onClick={() => setMobileOpen(false)}
                        className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 lg:hidden"
                    >
                        <X size={19} />
                    </button>
                </div>

                <div className="px-4 pt-6">
                    <div className="mb-5 flex items-center justify-between px-2">
                        <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
                            Workspace
                        </span>
                        <span className="rounded-md bg-teal-50 px-2 py-1 text-[10px] font-semibold text-teal-700">
                            DEMO
                        </span>
                    </div>

                    {groups.map((group) => (
                        <div key={group.title} className="mb-7">
                            <p className="mb-2 px-2 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
                                {group.title}
                            </p>

                            <nav className="space-y-1">
                                {group.items.map((item) => {
                                    const Icon = item.icon;

                                    return (
                                        <a
                                            key={item.label}
                                            href={item.href}
                                            onClick={(event) => {
                                                if (!item.active) event.preventDefault();
                                                setMobileOpen(false);
                                            }}
                                            className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-[13px] font-medium transition ${
                                                item.active
                                                    ? 'bg-teal-50 text-teal-800'
                                                    : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
                                            }`}
                                        >
                                            <Icon size={18} />
                                            <span>{item.label}</span>
                                            {item.active && (
                                                <span className="ml-auto h-1.5 w-1.5 rounded-full bg-teal-600" />
                                            )}
                                        </a>
                                    );
                                })}
                            </nav>
                        </div>
                    ))}
                </div>

                <div className="mt-auto p-4">
                    <div className="rounded-2xl border border-teal-100 bg-teal-50/70 p-4">
                        <ShieldCheck size={20} className="mb-3 text-teal-700" />
                        <p className="text-sm font-bold text-slate-800">
                            Support in your language.
                        </p>
                        <p className="mt-1 text-xs leading-5 text-slate-500">
                            English and Kiswahili support workflows in one workspace.
                        </p>
                        <div className="mt-3 flex gap-2">
                            <span className="rounded-md bg-white px-2 py-1 text-[10px] font-bold text-teal-800">EN</span>
                            <span className="rounded-md bg-white px-2 py-1 text-[10px] font-bold text-teal-800">SW</span>
                        </div>
                    </div>

                    <a
                        href="#settings"
                        onClick={(event) => event.preventDefault()}
                        className="mt-4 flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-slate-500 hover:bg-slate-50"
                    >
                        <Settings size={18} />
                        Settings
                    </a>

                    <div className="mt-3 flex items-center gap-3 border-t border-slate-100 px-2 pt-4">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-xs font-bold text-white">
                            DM
                        </div>
                        <div className="min-w-0 flex-1">
                            <p className="truncate text-xs font-bold text-slate-800">Demo Agent</p>
                            <p className="text-[11px] text-slate-400">Support administrator</p>
                        </div>
                        <ChevronDown size={15} className="text-slate-400" />
                    </div>
                </div>
            </aside>

            <div className="min-h-screen lg:pl-[264px]">
                <header className="sticky top-0 z-30 flex h-[76px] items-center justify-between border-b border-slate-200/80 bg-white/95 px-4 backdrop-blur-md sm:px-7 lg:px-9">
                    <div className="flex min-w-0 items-center gap-3">
                        <button
                            type="button"
                            aria-label="Open navigation"
                            onClick={() => setMobileOpen(true)}
                            className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 lg:hidden"
                        >
                            <Menu size={21} />
                        </button>

                        <div>
                            <p className="text-sm font-bold text-slate-900">Overview</p>
                            <p className="hidden text-xs text-slate-400 sm:block">
                                Your customer support workspace
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-2 sm:gap-4">
                        <div className="hidden h-9 w-56 items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 md:flex">
                            <Search size={15} className="text-slate-400" />
                            <span className="flex-1 text-xs text-slate-400">Search workspace...</span>
                            <kbd className="rounded border border-slate-200 bg-white px-1.5 py-0.5 text-[10px] text-slate-400">/</kbd>
                        </div>

                        <button
                            type="button"
                            aria-label="Notifications"
                            className="relative rounded-xl p-2 text-slate-500 hover:bg-slate-100"
                        >
                            <Bell size={19} />
                            <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full border-2 border-white bg-rose-500" />
                        </button>

                        <div className="hidden h-8 w-px bg-slate-200 sm:block" />

                        <button type="button" className="flex items-center gap-2 rounded-xl p-1.5 hover:bg-slate-50">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-100 text-xs font-bold text-teal-800">
                                DM
                            </div>
                            <div className="hidden text-left sm:block">
                                <p className="text-xs font-bold text-slate-800">Demo Agent</p>
                                <p className="text-[10px] text-slate-400">Administrator</p>
                            </div>
                            <ChevronDown size={14} className="hidden text-slate-400 sm:block" />
                        </button>
                    </div>
                </header>

                <main className="mx-auto w-full max-w-[1600px] px-4 py-7 sm:px-7 lg:px-9 lg:py-9">
                    {children}
                </main>

                <footer className="border-t border-slate-200/70 px-5 py-5 text-center text-[11px] text-slate-400">
                    <span className="font-semibold text-slate-500">MsaadaDesk</span>
                    {' '}· Bilingual customer support workspace · Portfolio demonstration
                </footer>
            </div>
        </div>
    );
}
