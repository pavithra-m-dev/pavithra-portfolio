export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-6 py-8 text-white">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
        <div>
          <p className="font-semibold">
            Pavithra<span className="text-cyan-400"> M</span>
          </p>

          <p className="mt-1 text-sm text-gray-500">
            Frontend Developer
          </p>
        </div>

        <p className="text-sm text-gray-500">
          © 2026 Pavithra M. All rights reserved.
        </p>

        <div className="flex gap-5 text-sm">
          <a
            href="https://github.com/pavithra-m-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 transition-colors hover:text-cyan-400"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/pavithram57"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 transition-colors hover:text-cyan-400"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
