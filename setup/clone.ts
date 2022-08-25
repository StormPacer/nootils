import { streams } from "./deps.ts";

export default async function cloneTemplateToCache(path: string, ref: string): Promise<void> {
    try {
        const process = Deno.run({
            "cmd": ["git", "clone", "--depth", "1", `-o`, ref, `https://github.com/Swifter1243/ReMapper-Setup.git`, path],
            stdout: "piped",
            stderr: "piped",
        })


    streams.copy(process.stdout, Deno.stdout);
    streams.copy(process.stderr, Deno.stderr);

    const status = await process.status()
    if (!status.success) {
        console.error("Failed to git clone")
        console.error(`Received code: ${status.code}`)
        Deno.exit(status.code)
        }
    } catch (e) {
        if (e instanceof Deno.errors.NotFound) {

            if (Deno.build.os === "linux") {
                console.error("Download git using your system's package manager")
            } else {
                console.error("Download git at https://git-scm.com/downloads")
            }
            Deno.exit(1)
        }
        throw e;
    }

    console.log(`Cloned the template with revision ${ref} to ${path}`)
}
