import { ModeToggle } from './mode-toggle';

export function Header() {
  return (
    <header className="w-full flex items-center p-4 justify-between border-b mb-4">
      <div>
        <a href="/" className=" flex items-center gap-2">
          <img src="/rendermd.png" className="max-h-8" alt="rendermd logo" />
          <h1 className="text-2xl font-bold">RenderMD</h1>
        </a>
      </div>
      <ModeToggle />
    </header>
  );
}
