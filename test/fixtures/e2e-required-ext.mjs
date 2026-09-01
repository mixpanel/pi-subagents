import { writeFileSync } from "node:fs";

export default function (pi) {
  pi.on("session_start", async () => {
    if (process.env.PI_SUBAGENT_REQUIRED_BIND_FAILURE) throw new Error("required handler failed");
    if (process.env.PI_SUBAGENT_REQUIRED_MARKER) {
      writeFileSync(process.env.PI_SUBAGENT_REQUIRED_MARKER, "loaded");
    }
  });
}
