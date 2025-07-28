// Inserire le icone dopo, probabilmente vanno messi i link anche qui

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-4 mt-auto">
      <div className="container text-center">
        <p className="mb-2">Follow us on</p>
        <div>
          <a href="#" className="text-white me-3">
            Prova
          </a>
          <a href="#" className="text-white me-3">
            Prova
          </a>
          <a href="#" className="text-white me-3">
            Prova
          </a>
          <a href="#" className="text-white me-3">
            Prova
          </a>
        </div>
        <p className="mt-3 mb-0">
          &copy; {new Date().getFullYear()} Dolci calde lacrime. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
