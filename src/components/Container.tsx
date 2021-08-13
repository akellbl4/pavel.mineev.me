import clsx from 'clsx'
import { Link } from 'components/Link'
import { NowPlaying } from 'components/NowPlaying'
import { ActiveLink } from 'components/ActiveLink'

type Props = React.PropsWithChildren<{
	isHome: boolean
}>

export function Container({ children, isHome }: Props) {
	return (
		<>
			<div
				className={clsx(
					'h-full w-full  m-auto p-6 flex-grow flex flex-col max-w-3xl lg:max-w-4xl',
					isHome && 'max-h-[44rem]'
				)}
			>
				<header>
					<a href="#skip" className="sr-only focus:not-sr-only">
						Skip to content
					</a>
					<nav className="text-sm sm:text-base">
						<ul className="flex w-full space-x-4">
							<li className="nav-link">
								<ActiveLink href="/blog">Blog</ActiveLink>
							</li>
							<li className="nav-link">
								<ActiveLink href="/about">About</ActiveLink>
							</li>
							{!isHome && (
								<li className="nav-link">
									<ActiveLink href="/">Home</ActiveLink>
								</li>
							)}
						</ul>
					</nav>
				</header>
				<main id="skip" className="flex flex-col flex-grow py-12">
					{children}
				</main>
				<footer className="flex mb-4 text-sm sm:text-base flex-col justify-between sm:flex-row sm:items-end">
					<ul className="flex flex-wrap flex-shrink-0 max-w-full mr-6">
						{SOCIAL_LINK.map(([emoji, label, href]) => (
							<li key={label} className="mr-4 mt-2">
								<Link
									href={href}
									data-emoji={emoji}
									className="link-emoji relative inline-block text-gray-500 dark:text-gray-300 transition-colors duration-200 border-b dark:border-gray-700 hover:text-transparent hover:border-transparent"
								>
									{label}
								</Link>
							</li>
						))}
					</ul>
					<section className="max-w-full overflow-hidden p-1 -m-1 mt-4 mr-auto sm:mr-0 sm:mt-0">
						<NowPlaying />
					</section>
				</footer>
			</div>
		</>
	)
}

const SOCIAL_LINK = [
	['👤', 'Facebook', 'https://www.facebook.com/akellbl4'],
	['📷', 'Instagram', 'https://www.instagram.com/akellbl4/'],
	['🐦', 'Twitter', 'https://twitter.com/akellbl4'],
	['🐙', 'GitHub', 'https://github.com/akellbl4'],
	['👨‍💻', 'LinkedIn', 'https://www.linkedin.com/in/akellbl4'],
]