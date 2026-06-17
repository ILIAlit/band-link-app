import { Link, usePage } from '@inertiajs/react';
import { DropdownMenu } from '@radix-ui/react-dropdown-menu';
import { LayoutDashboard } from 'lucide-react';
import AppLogoIcon from '@/components/app-logo-icon';
import {
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { dashboard, home, login, logout } from '@/routes';
import type { BreadcrumbItem } from '@/types';
import { Button } from '@/components/ui/button';

export default function AppLayout({
    children,
}: {
    breadcrumbs?: BreadcrumbItem[];
    children: React.ReactNode;
}) {
    const page = usePage();
    const { auth } = page.props;
    const { url } = page;
    const isDashboard = url.startsWith('/dashboard');

    return (
        <>
            <div className="min-h-screen bg-zinc-950 text-zinc-100">
                <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
                    <div className="container mx-auto px-4 py-4">
                        <div className="flex items-center justify-between">
                            <Link
                                className="flex items-center gap-2 transition-opacity hover:opacity-80"
                                href={home()}
                            >
                                <AppLogoIcon />
                                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-xl font-bold text-transparent">
                                    Release Hub
                                </span>
                            </Link>

                            <nav className="flex items-center gap-6">
                                <Link
                                    href={home()}
                                    className={`transition-colors hover:text-purple-400 ${
                                        !isDashboard
                                            ? 'text-purple-400'
                                            : 'text-zinc-400'
                                    }`}
                                >
                                    Releases
                                </Link>

                                {auth.user ? (
                                    <DropdownMenu>
                                        <DropdownMenuTrigger>
                                            <Button className="flex items-center gap-2 rounded-lg bg-purple-600 px-4 py-2 text-white transition-colors">
                                                Menu
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent className="gap-3 bg-zinc-950 p-3">
                                            <Link
                                                href={dashboard()}
                                                className={`flex items-center gap-2 rounded-lg px-4 py-2 transition-colors ${
                                                    isDashboard
                                                        ? 'bg-purple-600 text-white'
                                                        : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700'
                                                }`}
                                            >
                                                <LayoutDashboard className="h-4 w-4" />
                                                Dashboard
                                            </Link>
                                            <Link
                                                href={logout()}
                                                className="flex items-center gap-2 rounded-lg px-4 py-2 text-zinc-300 hover:text-zinc-400"
                                            >
                                                Logout
                                            </Link>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                ) : (
                                    <Link
                                        href={login()}
                                        className={`flex items-center gap-2 rounded-lg px-4 py-2 transition-colors ${
                                            isDashboard
                                                ? 'bg-purple-600 text-white'
                                                : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700'
                                        }`}
                                    >
                                        <LayoutDashboard className="h-4 w-4" />
                                        Go to login
                                    </Link>
                                )}
                            </nav>
                        </div>
                    </div>
                </header>

                <main className="container mx-auto px-4 py-8">{children}</main>

                <footer className="mt-16 border-t border-zinc-800 bg-zinc-900/30">
                    <div className="container mx-auto px-4 py-6 text-center text-sm text-zinc-500">
                        © 2026 Release Hub. All rights reserved.
                    </div>
                </footer>
            </div>
        </>
    );
}
