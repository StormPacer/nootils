// From Swifter's Repo

export * as fs from "https://deno.land/std@0.149.0/fs/mod.ts";
export * as path from "https://deno.land/std@0.149.0/path/mod.ts";
export * as io from "https://deno.land/std@0.149.0/io/mod.ts";
export * as streams from "https://deno.land/std@0.149.0/streams/mod.ts";

// adjusted from https://deno.land/x/config_dir@v0.1.1/mod.ts
export function configDir(): string | null {
    switch (Deno.build.os) {
        case "linux": {
            const xdg = Deno.env.get("XDG_CONFIG_HOME");
            if (xdg) return xdg;

            const home = Deno.env.get("HOME");
            if (home) return `${home}/.config`;
            break;
        }

        case "darwin": {
            const home = Deno.env.get("HOME");
            if (home) return `${home}/Library/Preferences`;
            break;
        }

        case "windows":
            return Deno.env.get("APPDATA") ?? null;
    }

    return null;
}