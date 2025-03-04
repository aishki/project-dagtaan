import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-center text-xs leading-loose text-muted-foreground md:text-left">
          ©2025 Project Dagtaan. All rights reserved. This website and its
          content are created and maintained by Arielle Jimera. Unauthorized
          use, reproduction, or distribution is strictly prohibited.
        </p>
        <div className="flex items-center gap-4">
          <Link
            to="/privacy-policy"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Privacy Policy
          </Link>
          <Link
            to="/terms"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
