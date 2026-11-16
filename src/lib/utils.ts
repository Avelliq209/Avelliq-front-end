export { cn } from "cn"

export function getInitials(name: string, maxLength = 2) {
  return name
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0])
    .slice(0, maxLength)
    .join("")
    .toUpperCase()
}

export function slugify(value: string) {
  return value.trim().toLowerCase().replace(/\s+/g, "-")
}
