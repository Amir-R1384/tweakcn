import { defaultThemeState } from "../config/theme";
import { ThemeStyles } from "../types/theme";

export const presets: Record<string, ThemeStyles> = {
  "modern-minimal": {
    light: {
      background: "#ffffff",
      foreground: "#333333",
      card: "#ffffff",
      "card-foreground": "#333333",
      popover: "#ffffff",
      "popover-foreground": "#333333",
      primary: "#3b82f6",
      "primary-foreground": "#ffffff",
      secondary: "#f3f4f6",
      "secondary-foreground": "#4b5563",
      muted: "#f9fafb",
      "muted-foreground": "#6b7280",
      accent: "#e0f2fe",
      "accent-foreground": "#1e3a8a",
      destructive: "#ef4444",
      "destructive-foreground": "#ffffff",
      border: "#e5e7eb",
      input: "#e5e7eb",
      ring: "#3b82f6",
      "chart-1": "#3b82f6",
      "chart-2": "#2563eb",
      "chart-3": "#1d4ed8",
      "chart-4": "#1e40af",
      "chart-5": "#1e3a8a",
      radius: "0.375rem",
      sidebar: "#f9fafb",
      "sidebar-foreground": "#333333",
      "sidebar-primary": "#3b82f6",
      "sidebar-primary-foreground": "#ffffff",
      "sidebar-accent": "#e0f2fe",
      "sidebar-accent-foreground": "#1e3a8a",
      "sidebar-border": "#e5e7eb",
      "sidebar-ring": "#3b82f6",
    },
    dark: {
      background: "#171717",
      foreground: "#e5e5e5",
      card: "#262626",
      "card-foreground": "#e5e5e5",
      popover: "#262626",
      "popover-foreground": "#e5e5e5",
      primary: "#3b82f6",
      "primary-foreground": "#ffffff",
      secondary: "#262626",
      "secondary-foreground": "#e5e5e5",
      muted: "#262626",
      "muted-foreground": "#a3a3a3",
      accent: "#1e3a8a",
      "accent-foreground": "#bfdbfe",
      destructive: "#ef4444",
      "destructive-foreground": "#ffffff",
      border: "#404040",
      input: "#404040",
      ring: "#3b82f6",
      "chart-1": "#60a5fa",
      "chart-2": "#3b82f6",
      "chart-3": "#2563eb",
      "chart-4": "#1d4ed8",
      "chart-5": "#1e40af",
      radius: "0.375rem",
      sidebar: "#171717",
      "sidebar-foreground": "#e5e5e5",
      "sidebar-primary": "#3b82f6",
      "sidebar-primary-foreground": "#ffffff",
      "sidebar-accent": "#1e3a8a",
      "sidebar-accent-foreground": "#bfdbfe",
      "sidebar-border": "#404040",
      "sidebar-ring": "#3b82f6",
    },
  },

  nature: {
    light: {
      background: "#f8f5f0",
      foreground: "#3e2723",
      card: "#f8f5f0",
      "card-foreground": "#3e2723",
      popover: "#f8f5f0",
      "popover-foreground": "#3e2723",
      primary: "#2e7d32",
      "primary-foreground": "#ffffff",
      secondary: "#e8f5e9",
      "secondary-foreground": "#1b5e20",
      muted: "#f0e9e0",
      "muted-foreground": "#6d4c41",
      accent: "#c8e6c9",
      "accent-foreground": "#1b5e20",
      destructive: "#c62828",
      "destructive-foreground": "#ffffff",
      border: "#e0d6c9",
      input: "#e0d6c9",
      ring: "#2e7d32",
      "chart-1": "#4caf50",
      "chart-2": "#388e3c",
      "chart-3": "#2e7d32",
      "chart-4": "#1b5e20",
      "chart-5": "#0a1f0c",
      radius: "0.5rem",
      sidebar: "#f0e9e0",
      "sidebar-foreground": "#3e2723",
      "sidebar-primary": "#2e7d32",
      "sidebar-primary-foreground": "#ffffff",
      "sidebar-accent": "#c8e6c9",
      "sidebar-accent-foreground": "#1b5e20",
      "sidebar-border": "#e0d6c9",
      "sidebar-ring": "#2e7d32",
    },
    dark: {
      background: "#1c2a1f",
      foreground: "#f0ebe5",
      card: "#2d3a2e",
      "card-foreground": "#f0ebe5",
      popover: "#2d3a2e",
      "popover-foreground": "#f0ebe5",
      primary: "#4caf50",
      "primary-foreground": "#0a1f0c",
      secondary: "#3e4a3d",
      "secondary-foreground": "#d7e0d6",
      muted: "#2d3a2e",
      "muted-foreground": "#d7cfc4",
      accent: "#388e3c",
      "accent-foreground": "#f0ebe5",
      destructive: "#c62828",
      "destructive-foreground": "#f0ebe5",
      border: "#3e4a3d",
      input: "#3e4a3d",
      ring: "#4caf50",
      "chart-1": "#81c784",
      "chart-2": "#66bb6a",
      "chart-3": "#4caf50",
      "chart-4": "#43a047",
      "chart-5": "#388e3c",
      radius: "0.5rem",
      sidebar: "#1c2a1f",
      "sidebar-foreground": "#f0ebe5",
      "sidebar-primary": "#4caf50",
      "sidebar-primary-foreground": "#0a1f0c",
      "sidebar-accent": "#388e3c",
      "sidebar-accent-foreground": "#f0ebe5",
      "sidebar-border": "#3e4a3d",
      "sidebar-ring": "#4caf50",
    },
  },

  "bold-tech": {
    light: {
      background: "#ffffff",
      foreground: "#312e81",
      card: "#ffffff",
      "card-foreground": "#312e81",
      popover: "#ffffff",
      "popover-foreground": "#312e81",
      primary: "#8b5cf6",
      "primary-foreground": "#ffffff",
      secondary: "#f3f0ff",
      "secondary-foreground": "#4338ca",
      muted: "#f5f3ff",
      "muted-foreground": "#7c3aed",
      accent: "#dbeafe",
      "accent-foreground": "#1e40af",
      destructive: "#ef4444",
      "destructive-foreground": "#ffffff",
      border: "#e0e7ff",
      input: "#e0e7ff",
      ring: "#8b5cf6",
      "chart-1": "#8b5cf6",
      "chart-2": "#7c3aed",
      "chart-3": "#6d28d9",
      "chart-4": "#5b21b6",
      "chart-5": "#4c1d95",
      radius: "0.625rem",
      sidebar: "#f5f3ff",
      "sidebar-foreground": "#312e81",
      "sidebar-primary": "#8b5cf6",
      "sidebar-primary-foreground": "#ffffff",
      "sidebar-accent": "#dbeafe",
      "sidebar-accent-foreground": "#1e40af",
      "sidebar-border": "#e0e7ff",
      "sidebar-ring": "#8b5cf6",
    },
    dark: {
      background: "#0f172a",
      foreground: "#e0e7ff",
      card: "#1e1b4b",
      "card-foreground": "#e0e7ff",
      popover: "#1e1b4b",
      "popover-foreground": "#e0e7ff",
      primary: "#8b5cf6",
      "primary-foreground": "#ffffff",
      secondary: "#1e1b4b",
      "secondary-foreground": "#e0e7ff",
      muted: "#1e1b4b",
      "muted-foreground": "#c4b5fd",
      accent: "#4338ca",
      "accent-foreground": "#e0e7ff",
      destructive: "#ef4444",
      "destructive-foreground": "#ffffff",
      border: "#2e1065",
      input: "#2e1065",
      ring: "#8b5cf6",
      "chart-1": "#a78bfa",
      "chart-2": "#8b5cf6",
      "chart-3": "#7c3aed",
      "chart-4": "#6d28d9",
      "chart-5": "#5b21b6",
      radius: "0.625rem",
      sidebar: "#0f172a",
      "sidebar-foreground": "#e0e7ff",
      "sidebar-primary": "#8b5cf6",
      "sidebar-primary-foreground": "#ffffff",
      "sidebar-accent": "#4338ca",
      "sidebar-accent-foreground": "#e0e7ff",
      "sidebar-border": "#2e1065",
      "sidebar-ring": "#8b5cf6",
    },
  },

  "elegant-luxury": {
    light: {
      background: "#faf7f5",
      foreground: "#1a1a1a",
      card: "#faf7f5",
      "card-foreground": "#1a1a1a",
      popover: "#faf7f5",
      "popover-foreground": "#1a1a1a",
      primary: "#9b2c2c",
      "primary-foreground": "#ffffff",
      secondary: "#fdf2d6",
      "secondary-foreground": "#805500",
      muted: "#f0ebe8",
      "muted-foreground": "#57534e",
      accent: "#fef3c7",
      "accent-foreground": "#7f1d1d",
      destructive: "#991b1b",
      "destructive-foreground": "#ffffff",
      border: "#f5e8d2",
      input: "#f5e8d2",
      ring: "#9b2c2c",
      "chart-1": "#b91c1c",
      "chart-2": "#9b2c2c",
      "chart-3": "#7f1d1d",
      "chart-4": "#b45309",
      "chart-5": "#92400e",
      radius: "0.375rem",
      sidebar: "#f0ebe8",
      "sidebar-foreground": "#1a1a1a",
      "sidebar-primary": "#9b2c2c",
      "sidebar-primary-foreground": "#ffffff",
      "sidebar-accent": "#fef3c7",
      "sidebar-accent-foreground": "#7f1d1d",
      "sidebar-border": "#f5e8d2",
      "sidebar-ring": "#9b2c2c",
    },
    dark: {
      background: "#1c1917",
      foreground: "#f5f5f4",
      card: "#292524",
      "card-foreground": "#f5f5f4",
      popover: "#292524",
      "popover-foreground": "#f5f5f4",
      primary: "#b91c1c",
      "primary-foreground": "#faf7f5",
      secondary: "#92400e",
      "secondary-foreground": "#fef3c7",
      muted: "#292524",
      "muted-foreground": "#d6d3d1",
      accent: "#b45309",
      "accent-foreground": "#fef3c7",
      destructive: "#ef4444",
      "destructive-foreground": "#ffffff",
      border: "#44403c",
      input: "#44403c",
      ring: "#b91c1c",
      "chart-1": "#f87171",
      "chart-2": "#ef4444",
      "chart-3": "#dc2626",
      "chart-4": "#fbbf24",
      "chart-5": "#f59e0b",
      radius: "0.375rem",
      sidebar: "#1c1917",
      "sidebar-foreground": "#f5f5f4",
      "sidebar-primary": "#b91c1c",
      "sidebar-primary-foreground": "#faf7f5",
      "sidebar-accent": "#b45309",
      "sidebar-accent-foreground": "#fef3c7",
      "sidebar-border": "#44403c",
      "sidebar-ring": "#b91c1c",
    },
  },

  "neo-brutalism": {
    light: {
      background: "#ffffff",
      foreground: "#000000",
      card: "#ffffff",
      "card-foreground": "#000000",
      popover: "#ffffff",
      "popover-foreground": "#000000",
      primary: "#ff3333",
      "primary-foreground": "#ffffff",
      secondary: "#ffff00",
      "secondary-foreground": "#000000",
      muted: "#f0f0f0",
      "muted-foreground": "#333333",
      accent: "#0066ff",
      "accent-foreground": "#ffffff",
      destructive: "#000000",
      "destructive-foreground": "#ffffff",
      border: "#000000",
      input: "#000000",
      ring: "#ff3333",
      "chart-1": "#ff3333",
      "chart-2": "#ffff00",
      "chart-3": "#0066ff",
      "chart-4": "#00cc00",
      "chart-5": "#cc00cc",
      radius: "0px",
      sidebar: "#f0f0f0",
      "sidebar-foreground": "#000000",
      "sidebar-primary": "#ff3333",
      "sidebar-primary-foreground": "#ffffff",
      "sidebar-accent": "#0066ff",
      "sidebar-accent-foreground": "#ffffff",
      "sidebar-border": "#000000",
      "sidebar-ring": "#ff3333",
    },
    dark: {
      background: "#000000",
      foreground: "#ffffff",
      card: "#333333",
      "card-foreground": "#ffffff",
      popover: "#333333",
      "popover-foreground": "#ffffff",
      primary: "#ff6666",
      "primary-foreground": "#000000",
      secondary: "#ffff33",
      "secondary-foreground": "#000000",
      muted: "#333333",
      "muted-foreground": "#cccccc",
      accent: "#3399ff",
      "accent-foreground": "#000000",
      destructive: "#ffffff",
      "destructive-foreground": "#000000",
      border: "#ffffff",
      input: "#ffffff",
      ring: "#ff6666",
      "chart-1": "#ff6666",
      "chart-2": "#ffff33",
      "chart-3": "#3399ff",
      "chart-4": "#33cc33",
      "chart-5": "#cc33cc",
      radius: "0px",
      sidebar: "#000000",
      "sidebar-foreground": "#ffffff",
      "sidebar-primary": "#ff6666",
      "sidebar-primary-foreground": "#000000",
      "sidebar-accent": "#3399ff",
      "sidebar-accent-foreground": "#000000",
      "sidebar-border": "#ffffff",
      "sidebar-ring": "#ff6666",
    },
  },

  claymorphism: {
    light: {
      background: "#e7e5e4",
      foreground: "#1e293b",
      card: "#f5f5f4",
      "card-foreground": "#1e293b",
      popover: "#f5f5f4",
      "popover-foreground": "#1e293b",
      primary: "#6366f1",
      "primary-foreground": "#ffffff",
      secondary: "#d6d3d1",
      "secondary-foreground": "#4b5563",
      muted: "#e7e5e4",
      "muted-foreground": "#6b7280",
      accent: "#f3e5f5",
      "accent-foreground": "#374151",
      destructive: "#ef4444",
      "destructive-foreground": "#ffffff",
      border: "#d6d3d1",
      input: "#d6d3d1",
      ring: "#6366f1",
      "chart-1": "#6366f1",
      "chart-2": "#4f46e5",
      "chart-3": "#4338ca",
      "chart-4": "#3730a3",
      "chart-5": "#312e81",
      radius: "1.25rem",
      sidebar: "#d6d3d1",
      "sidebar-foreground": "#1e293b",
      "sidebar-primary": "#6366f1",
      "sidebar-primary-foreground": "#ffffff",
      "sidebar-accent": "#f3e5f5",
      "sidebar-accent-foreground": "#374151",
      "sidebar-border": "#d6d3d1",
      "sidebar-ring": "#6366f1",
    },
    dark: {
      background: "#1e1b18",
      foreground: "#e2e8f0",
      card: "#2c2825",
      "card-foreground": "#e2e8f0",
      popover: "#2c2825",
      "popover-foreground": "#e2e8f0",
      primary: "#818cf8",
      "primary-foreground": "#1e1b18",
      secondary: "#3a3633",
      "secondary-foreground": "#d1d5db",
      muted: "#2c2825",
      "muted-foreground": "#9ca3af",
      accent: "#484441",
      "accent-foreground": "#d1d5db",
      destructive: "#ef4444",
      "destructive-foreground": "#1e1b18",
      border: "#3a3633",
      input: "#3a3633",
      ring: "#818cf8",
      "chart-1": "#818cf8",
      "chart-2": "#6366f1",
      "chart-3": "#4f46e5",
      "chart-4": "#4338ca",
      "chart-5": "#3730a3",
      radius: "1.25rem",
      sidebar: "#3a3633",
      "sidebar-foreground": "#e2e8f0",
      "sidebar-primary": "#818cf8",
      "sidebar-primary-foreground": "#1e1b18",
      "sidebar-accent": "#484441",
      "sidebar-accent-foreground": "#d1d5db",
      "sidebar-border": "#3a3633",
      "sidebar-ring": "#818cf8",
    },
  },

  cyberpunk: {
    light: {
      background: "#f8f9fa",
      foreground: "#0c0c1d",
      card: "#ffffff",
      "card-foreground": "#0c0c1d",
      popover: "#ffffff",
      "popover-foreground": "#0c0c1d",
      primary: "#ff00c8",
      "primary-foreground": "#ffffff",
      secondary: "#f0f0ff",
      "secondary-foreground": "#0c0c1d",
      muted: "#f0f0ff",
      "muted-foreground": "#0c0c1d",
      accent: "#00ffcc",
      "accent-foreground": "#0c0c1d",
      destructive: "#ff3d00",
      "destructive-foreground": "#ffffff",
      border: "#dfe6e9",
      input: "#dfe6e9",
      ring: "#ff00c8",
      "chart-1": "#ff00c8",
      "chart-2": "#9000ff",
      "chart-3": "#00e5ff",
      "chart-4": "#00ffcc",
      "chart-5": "#ffe600",
      radius: "0.5rem",
      sidebar: "#f0f0ff",
      "sidebar-foreground": "#0c0c1d",
      "sidebar-primary": "#ff00c8",
      "sidebar-primary-foreground": "#ffffff",
      "sidebar-accent": "#00ffcc",
      "sidebar-accent-foreground": "#0c0c1d",
      "sidebar-border": "#dfe6e9",
      "sidebar-ring": "#ff00c8",
    },
    dark: {
      background: "#0c0c1d",
      foreground: "#eceff4",
      card: "#1e1e3f",
      "card-foreground": "#eceff4",
      popover: "#1e1e3f",
      "popover-foreground": "#eceff4",
      primary: "#ff00c8",
      "primary-foreground": "#ffffff",
      secondary: "#1e1e3f",
      "secondary-foreground": "#eceff4",
      muted: "#1e1e3f",
      "muted-foreground": "#8085a6",
      accent: "#00ffcc",
      "accent-foreground": "#0c0c1d",
      destructive: "#ff3d00",
      "destructive-foreground": "#ffffff",
      border: "#2e2e5e",
      input: "#2e2e5e",
      ring: "#ff00c8",
      "chart-1": "#ff00c8",
      "chart-2": "#9000ff",
      "chart-3": "#00e5ff",
      "chart-4": "#00ffcc",
      "chart-5": "#ffe600",
      radius: "0.5rem",
      sidebar: "#0c0c1d",
      "sidebar-foreground": "#eceff4",
      "sidebar-primary": "#ff00c8",
      "sidebar-primary-foreground": "#ffffff",
      "sidebar-accent": "#00ffcc",
      "sidebar-accent-foreground": "#0c0c1d",
      "sidebar-border": "#2e2e5e",
      "sidebar-ring": "#ff00c8",
    },
  },

  "pastel-dreams": {
    light: {
      background: "#f7f3f9",
      foreground: "#374151",
      card: "#ffffff",
      "card-foreground": "#374151",
      popover: "#ffffff",
      "popover-foreground": "#374151",
      primary: "#a78bfa",
      "primary-foreground": "#ffffff",
      secondary: "#e9d8fd",
      "secondary-foreground": "#4b5563",
      muted: "#f3e8ff",
      "muted-foreground": "#6b7280",
      accent: "#f3e5f5",
      "accent-foreground": "#374151",
      destructive: "#fca5a5",
      "destructive-foreground": "#ffffff",
      border: "#e9d8fd",
      input: "#e9d8fd",
      ring: "#a78bfa",
      "chart-1": "#a78bfa",
      "chart-2": "#8b5cf6",
      "chart-3": "#7c3aed",
      "chart-4": "#6d28d9",
      "chart-5": "#5b21b6",
      radius: "1.5rem",
      sidebar: "#e9d8fd",
      "sidebar-foreground": "#374151",
      "sidebar-primary": "#a78bfa",
      "sidebar-primary-foreground": "#ffffff",
      "sidebar-accent": "#f3e5f5",
      "sidebar-accent-foreground": "#374151",
      "sidebar-border": "#e9d8fd",
      "sidebar-ring": "#a78bfa",
    },
    dark: {
      background: "#1c1917",
      foreground: "#e0e7ff",
      card: "#2d2535",
      "card-foreground": "#e0e7ff",
      popover: "#2d2535",
      "popover-foreground": "#e0e7ff",
      primary: "#c0aafd",
      "primary-foreground": "#1c1917",
      secondary: "#3f324a",
      "secondary-foreground": "#d1d5db",
      muted: "#2d2535",
      "muted-foreground": "#9ca3af",
      accent: "#4a3d5a",
      "accent-foreground": "#d1d5db",
      destructive: "#fca5a5",
      "destructive-foreground": "#1c1917",
      border: "#3f324a",
      input: "#3f324a",
      ring: "#c0aafd",
      "chart-1": "#c0aafd",
      "chart-2": "#a78bfa",
      "chart-3": "#8b5cf6",
      "chart-4": "#7c3aed",
      "chart-5": "#6d28d9",
      radius: "1.5rem",
      sidebar: "#3f324a",
      "sidebar-foreground": "#e0e7ff",
      "sidebar-primary": "#c0aafd",
      "sidebar-primary-foreground": "#1c1917",
      "sidebar-accent": "#4a3d5a",
      "sidebar-accent-foreground": "#d1d5db",
      "sidebar-border": "#3f324a",
      "sidebar-ring": "#c0aafd",
    },
  },

  "clean-slate": {
    light: {
      background: "#f8fafc",
      foreground: "#1e293b",
      card: "#ffffff",
      "card-foreground": "#1e293b",
      popover: "#ffffff",
      "popover-foreground": "#1e293b",
      primary: "#6366f1",
      "primary-foreground": "#ffffff",
      secondary: "#e5e7eb",
      "secondary-foreground": "#374151",
      muted: "#f3f4f6",
      "muted-foreground": "#6b7280",
      accent: "#e0e7ff",
      "accent-foreground": "#374151",
      destructive: "#ef4444",
      "destructive-foreground": "#ffffff",
      border: "#d1d5db",
      input: "#d1d5db",
      ring: "#6366f1",
      "chart-1": "#6366f1",
      "chart-2": "#4f46e5",
      "chart-3": "#4338ca",
      "chart-4": "#3730a3",
      "chart-5": "#312e81",
      radius: "0.5rem",
      sidebar: "#f3f4f6",
      "sidebar-foreground": "#1e293b",
      "sidebar-primary": "#6366f1",
      "sidebar-primary-foreground": "#ffffff",
      "sidebar-accent": "#e0e7ff",
      "sidebar-accent-foreground": "#374151",
      "sidebar-border": "#d1d5db",
      "sidebar-ring": "#6366f1",
    },
    dark: {
      background: "#0f172a",
      foreground: "#e2e8f0",
      card: "#1e293b",
      "card-foreground": "#e2e8f0",
      popover: "#1e293b",
      "popover-foreground": "#e2e8f0",
      primary: "#818cf8",
      "primary-foreground": "#0f172a",
      secondary: "#2d3748",
      "secondary-foreground": "#d1d5db",
      muted: "#1e293b",
      "muted-foreground": "#9ca3af",
      accent: "#374151",
      "accent-foreground": "#d1d5db",
      destructive: "#ef4444",
      "destructive-foreground": "#0f172a",
      border: "#4b5563",
      input: "#4b5563",
      ring: "#818cf8",
      "chart-1": "#818cf8",
      "chart-2": "#6366f1",
      "chart-3": "#4f46e5",
      "chart-4": "#4338ca",
      "chart-5": "#3730a3",
      radius: "0.5rem",
      sidebar: "#1e293b",
      "sidebar-foreground": "#e2e8f0",
      "sidebar-primary": "#818cf8",
      "sidebar-primary-foreground": "#0f172a",
      "sidebar-accent": "#374151",
      "sidebar-accent-foreground": "#d1d5db",
      "sidebar-border": "#4b5563",
      "sidebar-ring": "#818cf8",
    },
  },

  "midnight-bloom": {
    light: {
      background: "#f9f9f9", // Soft gray background
      foreground: "#333333", // Dark gray text
      card: "#ffffff", // White cards
      "card-foreground": "#333333",
      popover: "#ffffff",
      "popover-foreground": "#333333",
      primary: "#6c5ce7", // Deep purple primary
      "primary-foreground": "#ffffff",
      secondary: "#a1c9f2", // Soft blue secondary
      "secondary-foreground": "#333333",
      muted: "#c9c4b5", // Muted beige for subtle elements
      "muted-foreground": "#6e6e6e",
      accent: "#8b9467", // Earthy green accents
      "accent-foreground": "#ffffff",
      destructive: "#ef4444", // Bright red for destructive actions
      "destructive-foreground": "#ffffff",
      border: "#d4d4d4", // Light gray for borders
      input: "#d4d4d4",
      ring: "#6c5ce7", // Purple ring for focus
      "chart-1": "#6c5ce7", // Purple chart color
      "chart-2": "#8e44ad", // Deep pink chart color
      "chart-3": "#4b0082", // Dark blue chart color
      "chart-4": "#6495ed", // Bright blue chart color
      "chart-5": "#4682b4", // Steel blue chart color
      radius: "0.5rem",
      sidebar: "#f9f9f9",
      "sidebar-foreground": "#333333",
      "sidebar-primary": "#6c5ce7",
      "sidebar-primary-foreground": "#ffffff",
      "sidebar-accent": "#8b9467",
      "sidebar-accent-foreground": "#ffffff",
      "sidebar-border": "#d4d4d4",
      "sidebar-ring": "#6c5ce7",
    },
    dark: {
      background: "#1a1d23", // Deep dark background
      foreground: "#e5e5e5", // Light gray text
      card: "#2f3436", // Dark gray cards
      "card-foreground": "#e5e5e5",
      popover: "#2f3436",
      "popover-foreground": "#e5e5e5",
      primary: "#6c5ce7",
      "primary-foreground": "#ffffff",
      secondary: "#4b0082", // Dark blue secondary
      "secondary-foreground": "#e5e5e5",
      muted: "#444444", // Dark gray for muted elements
      "muted-foreground": "#a3a3a3",
      accent: "#6495ed", // Bright blue accents
      "accent-foreground": "#e5e5e5",
      destructive: "#ef4444",
      "destructive-foreground": "#ffffff",
      border: "#444444",
      input: "#444444",
      ring: "#6c5ce7",
      "chart-1": "#6c5ce7",
      "chart-2": "#8e44ad",
      "chart-3": "#4b0082",
      "chart-4": "#6495ed",
      "chart-5": "#4682b4",
      radius: "0.5rem",
      sidebar: "#1a1d23",
      "sidebar-foreground": "#e5e5e5",
      "sidebar-primary": "#6c5ce7",
      "sidebar-primary-foreground": "#ffffff",
      "sidebar-accent": "#6495ed",
      "sidebar-accent-foreground": "#e5e5e5",
      "sidebar-border": "#444444",
      "sidebar-ring": "#6c5ce7",
    },
  },

  "ocean-breeze": {
    light: {
      background: "#f0f8ff",
      foreground: "#374151",
      card: "#ffffff",
      "card-foreground": "#374151",
      popover: "#ffffff",
      "popover-foreground": "#374151",
      primary: "#22c55e",
      "primary-foreground": "#ffffff",
      secondary: "#e0f2fe",
      "secondary-foreground": "#4b5563",
      muted: "#f3f4f6",
      "muted-foreground": "#6b7280",
      accent: "#d1fae5",
      "accent-foreground": "#374151",
      destructive: "#ef4444",
      "destructive-foreground": "#ffffff",
      border: "#e5e7eb",
      input: "#e5e7eb",
      ring: "#22c55e",
      "chart-1": "#22c55e",
      "chart-2": "#10b981",
      "chart-3": "#059669",
      "chart-4": "#047857",
      "chart-5": "#065f46",
      radius: "0.5rem",
      sidebar: "#e0f2fe",
      "sidebar-foreground": "#374151",
      "sidebar-primary": "#22c55e",
      "sidebar-primary-foreground": "#ffffff",
      "sidebar-accent": "#d1fae5",
      "sidebar-accent-foreground": "#374151",
      "sidebar-border": "#e5e7eb",
      "sidebar-ring": "#22c55e",
    },
    dark: {
      background: "#0f172a",
      foreground: "#d1d5db",
      card: "#1e293b",
      "card-foreground": "#d1d5db",
      popover: "#1e293b",
      "popover-foreground": "#d1d5db",
      primary: "#34d399",
      "primary-foreground": "#0f172a",
      secondary: "#2d3748",
      "secondary-foreground": "#a1a1aa",
      muted: "#1e293b",
      "muted-foreground": "#6b7280",
      accent: "#374151",
      "accent-foreground": "#a1a1aa",
      destructive: "#ef4444",
      "destructive-foreground": "#0f172a",
      border: "#4b5563",
      input: "#4b5563",
      ring: "#34d399",
      "chart-1": "#34d399",
      "chart-2": "#2dd4bf",
      "chart-3": "#22c55e",
      "chart-4": "#10b981",
      "chart-5": "#059669",
      radius: "0.5rem",
      sidebar: "#1e293b",
      "sidebar-foreground": "#d1d5db",
      "sidebar-primary": "#34d399",
      "sidebar-primary-foreground": "#0f172a",
      "sidebar-accent": "#374151",
      "sidebar-accent-foreground": "#a1a1aa",
      "sidebar-border": "#4b5563",
      "sidebar-ring": "#34d399",
    },
  },

  "retro-arcade": {
    light: {
      background: "#fdf6e3", // Soft beige for a retro vibe
      foreground: "#073642", // Deep teal for text
      card: "#eee8d5", // Light beige for cards
      "card-foreground": "#073642",
      popover: "#eee8d5",
      "popover-foreground": "#073642",
      primary: "#d33682", // Vibrant magenta
      "primary-foreground": "#ffffff",
      secondary: "#2aa198", // Bright cyan
      "secondary-foreground": "#ffffff",
      muted: "#93a1a1", // Muted gray for subtle elements
      "muted-foreground": "#073642",
      accent: "#cb4b16", // Burnt orange for accents
      "accent-foreground": "#ffffff",
      destructive: "#dc322f", // Bold red for warnings
      "destructive-foreground": "#ffffff",
      border: "#839496", // Neutral gray for borders
      input: "#839496",
      ring: "#d33682", // Magenta ring for focus elements
      "chart-1": "#268bd2", // Blue chart color
      "chart-2": "#2aa198", // Cyan chart color
      "chart-3": "#d33682", // Magenta chart color
      "chart-4": "#cb4b16", // Orange chart color
      "chart-5": "#dc322f", // Red chart color
      radius: "0.25rem",
      sidebar: "#fdf6e3",
      "sidebar-foreground": "#073642",
      "sidebar-primary": "#d33682",
      "sidebar-primary-foreground": "#ffffff",
      "sidebar-accent": "#2aa198",
      "sidebar-accent-foreground": "#ffffff",
      "sidebar-border": "#839496",
      "sidebar-ring": "#d33682",
    },
    dark: {
      background: "#002b36", // Deep navy blue for background
      foreground: "#93a1a1", // Muted gray for text
      card: "#073642", // Teal for cards
      "card-foreground": "#93a1a1",
      popover: "#073642",
      "popover-foreground": "#93a1a1",
      primary: "#d33682",
      "primary-foreground": "#ffffff",
      secondary: "#2aa198",
      "secondary-foreground": "#ffffff",
      muted: "#586e75", // Dark gray for muted elements
      "muted-foreground": "#93a1a1",
      accent: "#cb4b16",
      "accent-foreground": "#ffffff",
      destructive: "#dc322f",
      "destructive-foreground": "#ffffff",
      border: "#586e75",
      input: "#586e75",
      ring: "#d33682",
      "chart-1": "#268bd2",
      "chart-2": "#2aa198",
      "chart-3": "#d33682",
      "chart-4": "#cb4b16",
      "chart-5": "#dc322f",
      radius: "0.25rem",
      sidebar: "#002b36",
      "sidebar-foreground": "#93a1a1",
      "sidebar-primary": "#d33682",
      "sidebar-primary-foreground": "#ffffff",
      "sidebar-accent": "#2aa198",
      "sidebar-accent-foreground": "#ffffff",
      "sidebar-border": "#586e75",
      "sidebar-ring": "#d33682",
    },
  },

  candyland: {
    light: {
      background: "#f7f9fa", // Soft gray-blue background
      foreground: "#333333", // Dark gray text
      card: "#ffffff", // White cards
      "card-foreground": "#333333",
      popover: "#ffffff",
      "popover-foreground": "#333333",
      primary: "#ffc0cb", // Pastel pink primary
      "primary-foreground": "#000000",
      secondary: "#87ceeb", // Light blue secondary
      "secondary-foreground": "#000000",
      muted: "#ddd9c4", // Muted beige for subtle elements
      "muted-foreground": "#6e6e6e",
      accent: "#ffff00", // Yellow accents
      "accent-foreground": "#000000",
      destructive: "#ef4444", // Bright red for destructive actions
      "destructive-foreground": "#ffffff",
      border: "#d4d4d4", // Light gray for borders
      input: "#d4d4d4",
      ring: "#ffc0cb", // Pink ring for focus
      "chart-1": "#ffc0cb", // Pink chart color
      "chart-2": "#87ceeb", // Light blue chart color
      "chart-3": "#ffff00", // Yellow chart color
      "chart-4": "#ff99cc", // Pastel red chart color
      "chart-5": "#33cc33", // Green chart color
      radius: "0.5rem",
      sidebar: "#f7f9fa",
      "sidebar-foreground": "#333333",
      "sidebar-primary": "#ffc0cb",
      "sidebar-primary-foreground": "#000000",
      "sidebar-accent": "#ffff00",
      "sidebar-accent-foreground": "#000000",
      "sidebar-border": "#d4d4d4",
      "sidebar-ring": "#ffc0cb",
    },
    dark: {
      background: "#1a1d23", // Deep dark background
      foreground: "#e5e5e5", // Light gray text
      card: "#2f3436", // Dark gray cards
      "card-foreground": "#e5e5e5",
      popover: "#2f3436",
      "popover-foreground": "#e5e5e5",
      primary: "#ff99cc", // Pastel red primary
      "primary-foreground": "#000000",
      secondary: "#33cc33", // Green secondary
      "secondary-foreground": "#000000",
      muted: "#444444", // Dark gray for muted elements
      "muted-foreground": "#a3a3a3",
      accent: "#87ceeb", // Light blue accents
      "accent-foreground": "#000000",
      destructive: "#ef4444",
      "destructive-foreground": "#ffffff",
      border: "#444444",
      input: "#444444",
      ring: "#ff99cc",
      "chart-1": "#ff99cc",
      "chart-2": "#33cc33",
      "chart-3": "#87ceeb",
      "chart-4": "#ffff00", // Yellow chart color
      "chart-5": "#ffcc00", // Orange chart color
      radius: "0.5rem",
      sidebar: "#1a1d23",
      "sidebar-foreground": "#e5e5e5",
      "sidebar-primary": "#ff99cc",
      "sidebar-primary-foreground": "#000000",
      "sidebar-accent": "#87ceeb",
      "sidebar-accent-foreground": "#000000",
      "sidebar-border": "#444444",
      "sidebar-ring": "#ff99cc",
    },
  },

  "northern-lights": {
    light: {
      background: "#f9f9fa", // Soft gray background
      foreground: "#333333", // Dark gray text
      card: "#ffffff", // White cards
      "card-foreground": "#333333",
      popover: "#ffffff",
      "popover-foreground": "#333333",
      primary: "#34a85a", // Green primary
      "primary-foreground": "#ffffff",
      secondary: "#6495ed", // Blue secondary
      "secondary-foreground": "#ffffff",
      muted: "#ddd9c4", // Muted beige for subtle elements
      "muted-foreground": "#6e6e6e",
      accent: "#66d9ef", // Cyan accents
      "accent-foreground": "#333333",
      destructive: "#ef4444", // Bright red for destructive actions
      "destructive-foreground": "#ffffff",
      border: "#d4d4d4", // Light gray for borders
      input: "#d4d4d4",
      ring: "#34a85a", // Green ring for focus
      "chart-1": "#34a85a", // Green chart color
      "chart-2": "#6495ed", // Blue chart color
      "chart-3": "#66d9ef", // Cyan chart color
      "chart-4": "#4682b4", // Steel blue chart color
      "chart-5": "#1a9641", // Teal-green chart color
      radius: "0.5rem",
      sidebar: "#f9f9fa",
      "sidebar-foreground": "#333333",
      "sidebar-primary": "#34a85a",
      "sidebar-primary-foreground": "#ffffff",
      "sidebar-accent": "#66d9ef",
      "sidebar-accent-foreground": "#333333",
      "sidebar-border": "#d4d4d4",
      "sidebar-ring": "#34a85a",
    },
    dark: {
      background: "#1a1d23", // Deep dark background
      foreground: "#e5e5e5", // Light gray text
      card: "#2f3436", // Dark gray cards
      "card-foreground": "#e5e5e5",
      popover: "#2f3436",
      "popover-foreground": "#e5e5e5",
      primary: "#34a85a", // Green primary
      "primary-foreground": "#ffffff",
      secondary: "#4682b4", // Steel blue secondary
      "secondary-foreground": "#e5e5e5",
      muted: "#444444", // Dark gray for muted elements
      "muted-foreground": "#a3a3a3",
      accent: "#6495ed", // Blue accents
      "accent-foreground": "#e5e5e5",
      destructive: "#ef4444",
      "destructive-foreground": "#ffffff",
      border: "#444444",
      input: "#444444",
      ring: "#34a85a",
      "chart-1": "#34a85a",
      "chart-2": "#4682b4",
      "chart-3": "#6495ed",
      "chart-4": "#66d9ef", // Cyan chart color
      "chart-5": "#1a9641", // Teal-green chart color
      radius: "0.5rem",
      sidebar: "#1a1d23",
      "sidebar-foreground": "#e5e5e5",
      "sidebar-primary": "#34a85a",
      "sidebar-primary-foreground": "#ffffff",
      "sidebar-accent": "#6495ed",
      "sidebar-accent-foreground": "#e5e5e5",
      "sidebar-border": "#444444",
      "sidebar-ring": "#34a85a",
    },
  },
};

export function getPresetThemeStyles(name: string): ThemeStyles {
  const defaultTheme = defaultThemeState.styles;
  if (name === "default") {
    return defaultTheme;
  }

  const preset = presets[name];
  if (!preset) {
    return defaultTheme;
  }

  return {
    light: {
      ...defaultTheme.light,
      ...(preset.light || {}),
    },
    dark: {
      ...defaultTheme.dark,
      ...(preset.dark || {}),
    },
  };
}
