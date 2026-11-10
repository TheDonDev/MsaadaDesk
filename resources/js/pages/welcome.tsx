import { Head, Link } from '@inertiajs/react';
import {
    ArrowRight,
    ArrowUpRight,
    CheckCircle2,
    Globe2,
    Headset,
    Languages,
    MessageSquare,
    ShieldCheck,
    Users,
    Zap,
} from 'lucide-react';

const features = [
    {
        icon: MessageSquare,
        title: 'Centralised ticket management',
        description:
            'Organise customer enquiries, track their progress and keep support conversations in one workspace.',
    },
    {
        icon: Languages,
        title: 'English and Kiswahili',
        description:
            'Support customers in English and Kiswahili with a workflow designed for bilingual communication.',
    },
    {
        icon: Users,
        title: 'Team collaboration',
        description:
            'Give support teams a shared view of customer requests, priorities and responsibilities.',
    },
    {
        icon: ShieldCheck,
        title: 'Structured support',
        description:
            'Use ticket statuses, priority levels and customer histories to keep support organised.',
    },
];

export default function Welcome() {
    return (
        <>
            <Head title="MsaadaDesk | Bilingual Customer Support" />

            <div className="min-h-screen overflow-hidden bg-white text-slate-900">
                <header className="relative z-10 border-b border-slate-100 bg-white/95">
                    <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8">
                        <Link href="/" className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-700 text-white shadow-lg shadow-teal-900/15">
                                <Headset size={21} />
                            </div>
                            <div>
                                <p className="text-lg font-extrabold tracking-tight">
                                    Msaada<span className="text-teal-700">Desk</span>
                                </p>
                                <p className="text-[9px] font-bold uppercase tracking-[0.19em] text-slate-400">
                                    Customer support workspace
                                </p>
                            </div>
                        </Link>

                        <nav className="hidden items-center gap-8 md:flex">
                            <a href="#features" className="text-sm font-medium text-slate-600 hover:text-teal-700">
                                Features
                            </a>
                            <a href="#about" className="text-sm font-medium text-slate-600 hover:text-teal-700">
                                About
                            </a>
                            <a href="#languages" className="text-sm font-medium text-slate-600 hover:text-teal-700">
                                Languages
                            </a>
                        </nav>

                        <div className="flex items-center gap-2 sm:gap-3">
                            <Link
                                href="/login"
                                className="rounded-xl px-3 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 sm:px-4"
                            >
                                Sign in
                            </Link>
                            <Link
                                href="/register"
                                className="inline-flex items-center gap-2 rounded-xl bg-teal-700 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-teal-900/15 transition hover:bg-teal-800"
                            >
                                Get started
                                <ArrowUpRight size={16} />
                            </Link>
                        </div>
                    </div>
                </header>

                <main>
                    <section className="relative isolate overflow-hidden bg-[#f5faf9]">
                        <div className="pointer-events-none absolute -right-32 -top-40 h-[520px] w-[520px] rounded-full bg-teal-100/70 blur-3xl" />
                        <div className="pointer-events-none absolute -bottom-48 -left-32 h-[420px] w-[420px] rounded-full bg-cyan-100/60 blur-3xl" />

                        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-28">
                            <div>
                                <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-teal-200 bg-white/80 px-3.5 py-2 text-xs font-semibold text-teal-800 shadow-sm">
                                    <span className="h-2 w-2 rounded-full bg-teal-500" />
                                    Customer support, made more organised
                                </div>

                                <h1 className="max-w-2xl text-4xl leading-[1.12] font-extrabold tracking-tight text-slate-950 sm:text-5xl lg:text-[62px]">
                                    Better conversations.
                                    <span className="block text-teal-700">
                                        Better customer care.
                                    </span>
                                </h1>

                                <p className="mt-7 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
                                    Manage customer enquiries, organise support
                                    tickets and collaborate with your team in
                                    one workspace built for English and
                                    Kiswahili customer support.
                                </p>

                                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                                    <Link
                                        href="/register"
                                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-teal-700 px-6 py-3.5 text-sm font-bold text-white shadow-xl shadow-teal-900/15 transition hover:-translate-y-0.5 hover:bg-teal-800"
                                    >
                                        Create your account
                                        <ArrowRight size={17} />
                                    </Link>
                                    <Link
                                        href="/login"
                                        className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-bold text-slate-700 transition hover:border-teal-300 hover:text-teal-800"
                                    >
                                        Sign in to workspace
                                    </Link>
                                </div>

                                <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs font-medium text-slate-500">
                                    <span className="flex items-center gap-2">
                                        <CheckCircle2 size={15} className="text-teal-700" />
                                        Organised support workflows
                                    </span>
                                    <span className="flex items-center gap-2">
                                        <CheckCircle2 size={15} className="text-teal-700" />
                                        English and Kiswahili
                                    </span>
                                </div>
                            </div>

                            <div className="relative mx-auto w-full max-w-[540px]">
                                <div className="absolute -inset-5 rounded-[34px] bg-teal-200/40 blur-2xl" />
                                <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-slate-900/10">
                                    <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
                                        <div className="flex items-center gap-2.5">
                                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal-700 text-white">
                                                <Headset size={16} />
                                            </div>
                                            <div>
                                                <p className="text-xs font-bold text-slate-800">Support workspace</p>
                                                <p className="text-[10px] text-slate-400">Illustrative preview</p>
                                            </div>
                                        </div>
                                        <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-bold text-emerald-700">
                                            DEMO
                                        </span>
                                    </div>

                                    <div className="grid grid-cols-2 gap-3 p-5">
                                        <div className="rounded-xl bg-slate-50 p-4">
                                            <p className="text-[11px] font-medium text-slate-500">Open tickets</p>
                                            <p className="mt-2 text-3xl font-extrabold text-slate-900">24</p>
                                            <p className="mt-1 text-[10px] text-slate-400">Illustrative data</p>
                                        </div>
                                        <div className="rounded-xl bg-teal-50 p-4">
                                            <p className="text-[11px] font-medium text-teal-800">Resolved tickets</p>
                                            <p className="mt-2 text-3xl font-extrabold text-teal-900">86</p>
                                            <p className="mt-1 text-[10px] text-teal-700">Illustrative data</p>
                                        </div>
                                    </div>

                                    <div className="px-5 pb-5">
                                        <div className="mb-3 flex items-center justify-between">
                                            <p className="text-xs font-bold text-slate-800">Recent enquiries</p>
                                            <span className="text-[10px] font-semibold text-teal-700">Preview</span>
                                        </div>

                                        {[
                                            { initials: 'GW', name: 'Grace Wanjiku', subject: 'Order assistance', status: 'Open', color: 'bg-amber-50 text-amber-700' },
                                            { initials: 'BO', name: 'Brian Otieno', subject: 'Payment confirmation', status: 'In progress', color: 'bg-blue-50 text-blue-700' },
                                            { initials: 'FN', name: 'Faith Njeri', subject: 'Msaada wa akaunti', status: 'Pending', color: 'bg-violet-50 text-violet-700' },
                                        ].map((ticket) => (
                                            <div key={ticket.initials} className="flex items-center gap-3 border-t border-slate-100 py-3">
                                                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-100 text-[10px] font-bold text-slate-700">
                                                    {ticket.initials}
                                                </div>
                                                <div className="min-w-0 flex-1">
                                                    <p className="truncate text-xs font-bold text-slate-800">{ticket.name}</p>
                                                    <p className="truncate text-[11px] text-slate-400">{ticket.subject}</p>
                                                </div>
                                                <span className={`rounded-full px-2 py-1 text-[9px] font-bold ${ticket.color}`}>
                                                    {ticket.status}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="absolute -bottom-5 -left-5 hidden items-center gap-3 rounded-xl border border-slate-100 bg-white p-3 shadow-xl sm:flex">
                                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal-50 text-teal-700">
                                        <Globe2 size={18} />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-slate-800">Bilingual support</p>
                                        <p className="text-[10px] text-slate-400">English · Kiswahili</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="features" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
                        <div className="mx-auto max-w-2xl text-center">
                            <p className="text-xs font-bold tracking-[0.2em] text-teal-700 uppercase">
                                One organised workspace
                            </p>
                            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                                Everything starts with better support.
                            </h2>
                            <p className="mt-5 text-sm leading-7 text-slate-500 sm:text-base">
                                A structured environment for handling customer
                                enquiries and keeping support teams aligned.
                            </p>
                        </div>

                        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                            {features.map((feature) => {
                                const Icon = feature.icon;

                                return (
                                    <article key={feature.title} className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-teal-200 hover:shadow-xl hover:shadow-slate-900/5">
                                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-teal-800">
                                            <Icon size={21} />
                                        </div>
                                        <h3 className="mt-5 text-base font-bold text-slate-900">
                                            {feature.title}
                                        </h3>
                                        <p className="mt-3 text-sm leading-6 text-slate-500">
                                            {feature.description}
                                        </p>
                                    </article>
                                );
                            })}
                        </div>
                    </section>

                    <section id="about" className="bg-slate-950 px-5 py-16 text-white sm:px-8 lg:py-20">
                        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
                            <div>
                                <p className="text-xs font-bold tracking-[0.2em] text-teal-400 uppercase">
                                    Designed for clear communication
                                </p>
                                <h2 className="mt-4 max-w-xl text-3xl leading-tight font-extrabold tracking-tight sm:text-4xl">
                                    Bring your customer support work into focus.
                                </h2>
                                <p className="mt-5 max-w-xl text-sm leading-7 text-slate-300">
                                    MsaadaDesk provides a central place to
                                    organise enquiries, understand ticket
                                    priorities and maintain a clearer view of
                                    customer conversations.
                                </p>
                            </div>

                            <div id="languages" className="grid grid-cols-2 gap-4">
                                <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-6">
                                    <Globe2 className="text-teal-400" size={24} />
                                    <p className="mt-5 text-2xl font-extrabold">EN</p>
                                    <p className="mt-1 text-sm font-semibold text-slate-300">English</p>
                                </div>
                                <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-6">
                                    <Languages className="text-teal-400" size={24} />
                                    <p className="mt-5 text-2xl font-extrabold">SW</p>
                                    <p className="mt-1 text-sm font-semibold text-slate-300">Kiswahili</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="px-5 py-20 sm:px-8">
                        <div className="mx-auto flex max-w-5xl flex-col items-center rounded-3xl bg-teal-700 px-6 py-12 text-center text-white shadow-xl shadow-teal-900/15 sm:px-12">
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15">
                                <Zap size={23} />
                            </div>
                            <h2 className="mt-5 text-3xl font-extrabold tracking-tight">
                                Ready to organise your support?
                            </h2>
                            <p className="mt-4 max-w-xl text-sm leading-7 text-teal-50">
                                Create an account to access the MsaadaDesk
                                workspace and explore the support dashboard.
                            </p>
                            <Link
                                href="/register"
                                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-teal-800 transition hover:bg-teal-50"
                            >
                                Get started
                                <ArrowRight size={17} />
                            </Link>
                        </div>
                    </section>
                </main>

                <footer className="border-t border-slate-100 bg-white">
                    <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-7 text-center sm:flex-row sm:px-8 sm:text-left">
                        <p className="text-sm font-extrabold text-slate-800">
                            Msaada<span className="text-teal-700">Desk</span>
                        </p>
                        <p className="text-xs text-slate-400">
                            Bilingual customer support workspace · Portfolio demonstration
                        </p>
                    </div>
                </footer>
            </div>
        </>
    );
}