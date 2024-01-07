import * as React from "react"
import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Icons } from "@/components/icons"

export default function Home() {
  return (
    <main>
      <section
        id="hero"
        className="container grid items-center gap-6 py-12 md:py-20"
      >
        <div className="flex max-w-[980px] flex-col items-start gap-2">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tight md:text-4xl">
            Next.js 14 boilerplate <br className="hidden sm:inline" />
            Avoid the sweat and tears.
          </h1>
          <p className="max-w-[700px] text-lg text-muted-foreground">
            Forget the struggle, embrace the snuggle. This boilerplate is
            configured with the most popular Next.js plugins and tools.
          </p>
        </div>
        <div className="flex gap-4">
          <Link
            href="https://www.ideebi.com/templates"
            target="_blank"
            rel="noreferrer"
            className={buttonVariants()}
          >
            Documentation
          </Link>
          <Link
            target="_blank"
            rel="noreferrer"
            href="https://github.com/ideebico/"
            className={buttonVariants({ variant: "outline" })}
          >
            GitHub
          </Link>
        </div>
      </section>
      <div className="mx-auto h-[1px] max-w-[980px] bg-gradient-to-r from-background via-muted to-background" />
      <section
        id="modules"
        className="container grid items-center gap-6 py-12 md:py-20"
      >
        <div className="flex max-w-[980px] flex-col items-start gap-2">
          <h2 className="text-2xl font-extrabold leading-tight tracking-tight md:text-3xl">
            The stuff we used to make it.
          </h2>
          <p className="max-w-[700px] text-lg text-muted-foreground">
            Don&apos;t worry. It won&apos;t blow up your node_modules folder.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Icons.reactLogo className="mr-2 h-6 w-6" />
                React
              </CardTitle>
              <CardDescription>v18</CardDescription>
            </CardHeader>
            <CardContent>
              React is a JavaScript library for building UIs.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Icons.nextLogo className="mr-2 h-6 w-6" />
                Next.js
              </CardTitle>
              <CardDescription>v14</CardDescription>
            </CardHeader>
            <CardContent>
              Next.js simplifies React for SSR and routing.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Icons.tailwindLogo className="mr-2 h-6 w-6" />
                TailwindCSS
              </CardTitle>
              <CardDescription>v3</CardDescription>
            </CardHeader>
            <CardContent>Tailwind CSS streamlines UI development.</CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Icons.typescriptLogo className="mr-2 h-6 w-6" />
                TypeScript
              </CardTitle>
              <CardDescription>v5</CardDescription>
            </CardHeader>
            <CardContent>
              TypeScript adds static typing to JavaScript.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Icons.nextLogo className="mr-2 h-6 w-6" />
                Next Themes
              </CardTitle>
              <CardDescription>v0.2</CardDescription>
            </CardHeader>
            <CardContent>Next Themes adds dark mode support.</CardContent>
          </Card>
        </div>
      </section>
    </main>
  )
}
