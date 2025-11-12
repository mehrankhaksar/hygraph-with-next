export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800">
      <div className="container">
        <div className="py-2 text-center">
          <p className="text-sm text-gray-400">
            © {currentYear} GameZone. All rights reserved. Built for gamers, by
            gamers.
          </p>
        </div>
      </div>
    </footer>
  );
}
