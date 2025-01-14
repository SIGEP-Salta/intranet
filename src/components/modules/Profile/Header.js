export default function Header() {
    return (
      <header className="flex items-center justify-between bg-blue-900 text-white p-4">
        <h1 className="text-xl font-bold">Richard Davis</h1>
        <nav className="flex space-x-4">
          <button className="hover:underline">App</button>
          <button className="hover:underline">Message</button>
          <button className="hover:underline">Settings</button>
        </nav>
      </header>
    );
  }