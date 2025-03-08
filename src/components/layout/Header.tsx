"use client";

import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ChevronRight } from "lucide-react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <span className="font-bold text-xl">Project Dagtaan</span>
        </Link>
        <nav className="hidden lg:flex gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-[#8E2DE2] to-[#4A00E0]"
                : "text-sm font-medium transition-colors hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-[#8E2DE2] hover:to-[#4A00E0]"
            }
            end
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-[#8E2DE2] to-[#4A00E0]"
                : "text-sm font-medium transition-colors hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-[#8E2DE2] hover:to-[#4A00E0]"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/activities"
            className={({ isActive }) =>
              isActive
                ? "text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-[#8E2DE2] to-[#4A00E0]"
                : "text-sm font-medium transition-colors hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-[#8E2DE2] hover:to-[#4A00E0]"
            }
          >
            Activities
          </NavLink>
          <NavLink
            to="/donors"
            className={({ isActive }) =>
              isActive
                ? "text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-[#8E2DE2] to-[#4A00E0]"
                : "text-sm font-medium transition-colors hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-[#8E2DE2] hover:to-[#4A00E0]"
            }
          >
            Donors
          </NavLink>
          <NavLink
            to="/donation-drive"
            className={({ isActive }) =>
              isActive
                ? "text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-[#8E2DE2] to-[#4A00E0]"
                : "text-sm font-medium transition-colors hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-[#8E2DE2] hover:to-[#4A00E0]"
            }
          >
            Donation Drive
          </NavLink>
          <NavLink
            to="/expenses"
            className={({ isActive }) =>
              isActive
                ? "text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-[#8E2DE2] to-[#4A00E0]"
                : "text-sm font-medium transition-colors hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-[#8E2DE2] hover:to-[#4A00E0]"
            }
          >
            Expenses
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-[#8E2DE2] to-[#4A00E0]"
                : "text-sm font-medium transition-colors hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-[#8E2DE2] hover:to-[#4A00E0]"
            }
          >
            Contact
          </NavLink>
        </nav>
        <Link
          to="/contact"
          className="hidden lg:inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-r from-[#8E2DE2] to-[#4A00E0] text-white-foreground hover:bg-primary/90 h-10 px-4 py-2"
        >
          Get Involved
          <ChevronRight className="ml-1 h-4 w-4" />
        </Link>
        <button
          onClick={toggleMenu}
          className="lg:hidden inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10"
        >
          <span className="sr-only">Toggle menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </button>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 h-screen bg-background border-b lg:hidden">
            <div className="container py-4 flex flex-col gap-4">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-[#8E2DE2] to-[#4A00E0]"
                    : "text-sm font-medium transition-colors hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-[#8E2DE2] hover:to-[#4A00E0]"
                }
                onClick={toggleMenu}
                end
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-[#8E2DE2] to-[#4A00E0]"
                    : "text-sm font-medium transition-colors hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-[#8E2DE2] hover:to-[#4A00E0]"
                }
                onClick={toggleMenu}
              >
                About
              </NavLink>
              <NavLink
                to="/activities"
                className={({ isActive }) =>
                  isActive
                    ? "text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-[#8E2DE2] to-[#4A00E0]"
                    : "text-sm font-medium transition-colors hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-[#8E2DE2] hover:to-[#4A00E0]"
                }
                onClick={toggleMenu}
              >
                Activities
              </NavLink>
              <NavLink
                to="/donors"
                className={({ isActive }) =>
                  isActive
                    ? "text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-[#8E2DE2] to-[#4A00E0]"
                    : "text-sm font-medium transition-colors hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-[#8E2DE2] hover:to-[#4A00E0]"
                }
                onClick={toggleMenu}
              >
                Donors
              </NavLink>
              <NavLink
                to="/donation-drive"
                className={({ isActive }) =>
                  isActive
                    ? "text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-[#8E2DE2] to-[#4A00E0]"
                    : "text-sm font-medium transition-colors hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-[#8E2DE2] hover:to-[#4A00E0]"
                }
                onClick={toggleMenu}
              >
                Donation Drive
              </NavLink>
              <NavLink
                to="/expenses"
                className={({ isActive }) =>
                  isActive
                    ? "text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-[#8E2DE2] to-[#4A00E0]"
                    : "text-sm font-medium transition-colors hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-[#8E2DE2] hover:to-[#4A00E0]"
                }
                onClick={toggleMenu}
              >
                Expenses
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-[#8E2DE2] to-[#4A00E0]"
                    : "text-sm font-medium transition-colors hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-[#8E2DE2] hover:to-[#4A00E0]"
                }
                onClick={toggleMenu}
              >
                Contact
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
