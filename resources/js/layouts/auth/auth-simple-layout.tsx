import { Link } from '@inertiajs/react';
import {
    ArrowLeft,
    ArrowRight,
    CheckCircle2,
    Globe2,
    Headset,
    Languages,
    ShieldCheck,
} from 'lucide-react';
import type { AuthLayoutProps } from '@/types';

export default function AuthSimpleLayout({
    children,
    title,
    description,
}: AuthLayoutProps) {
    return (
        <div className="grid min-h-svh bg-white lg:grid-cols-[1fr_0.9fr]">
            <aside className="relative hidden flex-col justify-between overflow-hidden bg-[#073b3b] px-10 py-10 text-white lg:flex xl:px-16">
                <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full border border-white/10" />
                <div className="pointer-events-none absolute -right-20 -top-20 h-[340px] w-[340px] rounded-full border border-white/10" />
                <div className="pointer-events-none absolute -bottom-48 -left-40 h-[480px] w-[480px] rounded-full bg-teal-500/10 blur-3xl" />

                <Link href="/" className="relative flex w-fit items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-500 text-white">
                        <Headset size={23} />
                    </div>
                    <div>
                        <p className="text-xl font-extrabold tracking-tight">
                            Msaada<span className="text-teal-300">Desk</span>
                        </p>
                        <p className="text-[9px] font-bold tracking-[0.2em] text-teal-100/60 uppercase">
                            Customer support workspace
                        </p>
                    </div>
                </Link>

                <div className="relative max-w-xl py-12">
                    <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-teal-300/20 bg-white/5 px-3.5 py-2 text-xs font-semibold text-teal-100">
                        <Globe2 size={15} />
                        Support without language barriers
                    </div>

                    <h2 className="text-4xl leading-[1.15] font-extrabold tracking-tight xl:text-5xl">
                        Every conversation
                        <span className="block text-teal-300">
                            deserves great care.
                        </span>
                    </h2>

                    <p className="mt-7 max-w-md text-sm leading-7 text-teal-50/75">
                        Access an organised workspace for customer enquiries,
                        ticket management and team collaboration in English
                        and Kiswahili.
                    </p>

                    <div className="mt-10 space-y-5">
                        {[
                            'Keep customer enquiries organised',
                            'Track ticket priorities and progress',
                            'Support English and Kiswahili workflows',
                        ].map((item) => (
                            <div key={item} className="flex items-center gap-3">
                                <CheckCircle2 size={18} className="shrink-0 text-teal-300" />
                                <span className="text-sm text-teal-50/90">{item}</span>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 grid max-w-sm grid-cols-2 gap-3">
                        <div className="rounded-xl border border-white/10 bg-white/[0.06] p-4">
                            <Languages size={20} className="text-teal-300" />
                            <p className="mt-3 text-sm font-bold">English</p>
                            <p className="mt-1 text-xs text-teal-100/60">EN support</p>
                        </div>
                        <div className="rounded-xl border border-white/10 bg-white/[0.06] p-4">
                            <Globe2 size={20} className="text-teal-300" />
                            <p className="mt-3 text-sm font-bold">Kiswahili</p>
                            <p className="mt-1 text-xs text-teal-100/60">Huduma kwa Kiswahili</p>
                        </div>
                    </div>
                </div>

                <div className="relative flex items-center justify-between border-t border-white/10 pt-6 text-xs text-teal-100/50">
                    <span>MsaadaDesk · Portfolio demonstration</span>
                    <span>© {new Date().getFullYear()}</span>
                </div>
            </aside>

            <main className="flex min-h-svh flex-col px-5 py-7 sm:px-10 lg:px-12 xl:px-20">
                <div className="flex items-center justify-between lg:justify-end">
                    <Link href="/" className="flex items-center gap-2 lg:hidden">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal-700 text-white">
                            <Headset size={19} />
                        </div>
                        <span className="font-extrabold tracking-tight text-slate-900">
                            Msaada<span className="text-teal-700">Desk</span>
                        </span>
                    </Link>

                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 transition hover:text-teal-700"
                    >
                        <ArrowLeft size={14} />
                        <span className="hidden sm:inline">Back to home</span>
                        <span className="sm:hidden">Home</span>
                    </Link>
                </div>

                <div className="flex flex-1 items-center justify-center py-12">
                    <div className="w-full max-w-[420px]">
                        <div className="mb-8">
                            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-800">
                                <ShieldCheck size={25} />
                            </div>

                            <p className="text-xs font-bold tracking-[0.18em] text-teal-700 uppercase">
                                MsaadaDesk workspace
                            </p>

                            <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950">
                                {title}
                            </h1>

                            <p className="mt-3 text-sm leading-6 text-slate-500">
                                {description}
                            </p>
                        </div>

                        {children}

                        <div className="mt-9 border-t border-slate-100 pt-6">
                            <div className="flex items-center justify-center gap-2 text-xs text-slate-400">
                                <ShieldCheck size={14} className="text-teal-700" />
                                Secure account access
                            </div>
                            <p className="mt-3 text-center text-[11px] text-slate-400">
                                English · Kiswahili · MsaadaDesk
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400">
                    <span>Need a fresh start?</span>
                    <Link href="/" className="inline-flex items-center gap-1 font-semibold text-teal-700 hover:text-teal-800">
                        Visit homepage
                        <ArrowRight size={12} />
                    </Link>
                </div>
            </main>
        </div>
    );
}
