import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = Number(process.env.PORT || 3000);

  // Serve input_file_X.png images from the container root or current directory
  app.get("/input_file_:id.png", (req, res) => {
    const id = req.params.id;
    const projectRoot = process.cwd();
    const systemRoot = "/";
    
    const possiblePaths = [
      path.join(projectRoot, `input_file_${id}.png`),
      path.join(systemRoot, `input_file_${id}.png`),
      path.join(projectRoot, "public", `input_file_${id}.png`),
      path.join(projectRoot, "src", "assets", `input_file_${id}.png`),
    ];

    for (const filePath of possiblePaths) {
      if (fs.existsSync(filePath)) {
        return res.sendFile(filePath);
      }
    }

    res.status(404).send("Image not found");
  });

  // API routes go here
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
